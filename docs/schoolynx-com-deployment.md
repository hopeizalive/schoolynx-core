# schoolynx.com — Deployment Handoff

Started: 2026-10-14. **Live on 2026-10-14**: certificate issued (expires 2027-01-12, certbot auto renews), HTTPS vhost added, `https://schoolynx.com/` and `www` return 200.

**Resolution of the "blocker" below:** there was no cPanel conflict. Our vhost was answering all along. The 301 to `/404.shtml` was cPanel's error page for a missing test file in the ACME webroot. A real file in `/var/www/letsencrypt/.well-known/acme-challenge/` returned 200, so certbot worked as written (issued with `--register-unsafely-without-email`; add a contact with `certbot update_account -m <email>` if wanted). Backup of the config before the change: `post_virtualhost_global.conf.bak-schoolynx`. The sections below are kept as history.

## What is deployed

| Component | Status |
|---|---|
| DNS A record `schoolynx.com → 159.198.36.155` | ✅ Live (TTL 1800) |
| `schoolynx` OS user on server | ✅ Created (`uid=973`, home `/srv/schoolynx/`) |
| Source checkout | ✅ `/srv/schoolynx/source/` — cloned from `https://github.com/hopeizalive/schoolynx-core`, branch `main` |
| Next.js build | ✅ Built with `npm install && npm run build` |
| PM2 process `schoolynx-web` | ✅ Online, port 3002, loopback responds `200 OK` |
| Apache HTTP vhost for `schoolynx.com` | ✅ Config written, loaded |
| Apache HTTPS vhost | ⏳ Config written but **commented out** — needs the cert first |
| Let's Encrypt SSL cert | ❌ **Not yet issued** — one blocker (see below) |

## PM2 details

Process name follows the `schoolynx-*` series convention.

```
name:    schoolynx-web
user:    schoolynx
port:    3002
config:  /srv/schoolynx/app/ecosystem.config.js   (mode 600)
logs:    /srv/schoolynx/app/logs/
source:  /srv/schoolynx/source/
```

### Important: starting PM2 for this user

The `schoolynx` user's PM2 daemon must be started from its own home directory, not from root's CWD (`/root`). Always use:

```bash
sudo -u schoolynx bash -c "cd /srv/schoolynx && /usr/local/bin/pm2 <cmd>"
```

Running `sudo -u schoolynx /usr/local/bin/pm2 <cmd>` directly **from a root shell** (CWD = `/root`) will fail with `spawn EACCES` because the PM2 daemon forks into `/root` which the schoolynx user cannot `chdir` into. This was the root cause found during this session.

## The one remaining blocker: ACME challenge not reaching our vhost

`certbot` fails because HTTP validation requests for `schoolynx.com` are being intercepted before our vhost handles them. Symptoms:

```
curl -I http://schoolynx.com/.well-known/acme-challenge/test
→  301 https://schoolynx.com/404.shtml
```

Our HTTP vhost IS registered (`apachectl -S` confirms it at `post_virtualhost_global.conf:112`), but something else on the server is matching the request first. The redirect to `404.shtml` (cPanel's error page) points to a cPanel-managed vhost or catch-all, not ours.

### Things to check

1. **Is `schoolynx.com` registered as a cPanel addon/parked domain?**
   Check WHM → Account Functions → List Domains, or:
   ```bash
   cat /etc/userdatadomains | grep schoolynx
   ```
   If it appears, cPanel has generated a vhost for it that takes precedence over ours.

2. **If it's a cPanel domain**, remove it from cPanel (or change the cPanel vhost to proxy to 3002), and add it as a custom Include the same way `admin.learnovateconsultants.com` is managed.

3. **If there's no cPanel domain entry**, Apache's `post_virtualhost_global.conf` ordering may not be loading before the catch-all. Check:
   ```bash
   apachectl -S 2>&1 | grep -A 30 "159.198.36.155:80"
   ```
   Our vhost should appear **before** any generic cPanel catch-all, or at a minimum should be the only entry for `schoolynx.com`.

4. **Direct IP test** to confirm which vhost is responding:
   ```bash
   curl -sI http://159.198.36.155/.well-known/acme-challenge/test -H "Host: schoolynx.com"
   ```
   Should return `404` (file not found in `/var/www/letsencrypt/`) — NOT a 301.

## Resuming: steps to finish

Once the vhost conflict is resolved, run certbot the same way the other domains were issued:

```bash
certbot certonly --webroot \
  -w /var/www/letsencrypt \
  -d schoolynx.com -d www.schoolynx.com \
  --non-interactive --agree-tos \
  -m <your-email>
```

Then append the HTTPS vhost block to `post_virtualhost_global.conf` and reload:

```apache
<VirtualHost 159.198.36.155:443>
    ServerName schoolynx.com
    ServerAlias www.schoolynx.com

    SSLEngine on
    SSLCertificateFile    /etc/letsencrypt/live/schoolynx.com/fullchain.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/schoolynx.com/privkey.pem

    ProxyPreserveHost On
    RequestHeader set X-Forwarded-Proto "https"
    ProxyPass        / http://127.0.0.1:3002/
    ProxyPassReverse / http://127.0.0.1:3002/

    LimitRequestBody 26214400

    ErrorLog  logs/schoolynx-ssl-error.log
    CustomLog logs/schoolynx-ssl-access.log combined
</VirtualHost>
```

Then reload:

```bash
apachectl configtest && httpd -k graceful
```

Smoke test:

```bash
curl -I https://schoolynx.com/
# expect: 200 OK, x-powered-by: Next.js
```

## Deploy script for future updates

The `deploy.sh` in the repo root uses `yarn dev` — **do not use it on the server**. For updates:

```bash
ssh root@159.198.36.155 'sudo -u schoolynx bash -c "
  cd /srv/schoolynx/source
  git pull
  npm install --legacy-peer-deps
  npm run build
  cd /srv/schoolynx && /usr/local/bin/pm2 restart schoolynx-web
"'
```

## Email (SMTP) env vars

Contact form uses `SMTP_USER`, `SMTP_PASS`, `SMTP_SERVICE` (see `.env.example`). Set them in `/srv/schoolynx/app/ecosystem.config.js` before the contact form goes live:

```bash
# Edit as root (file is mode 600, owned by schoolynx)
nano /srv/schoolynx/app/ecosystem.config.js
# update SMTP_USER and SMTP_PASS in the env block, then:
sudo -u schoolynx bash -c "cd /srv/schoolynx && /usr/local/bin/pm2 restart schoolynx-web --update-env"
```

## Server map (all apps on 159.198.36.155)

| Port | Process | Domain |
|---|---|---|
| 3000 | `mvp-core-app` (mvpcore) | `admin.learnovateconsultants.com` |
| 3001 | learnovate Next.js | `learnovateconsultants.com` |
| **3002** | `schoolynx-web` (schoolynx) | **`schoolynx.com`** |
| 8081 | `edutech-api` (edutech) | `learnovateconsultants.com/schoolynx/` |
| 8082 | `edutech-decision` (edutech) | loopback only |
| 8083 | `edutech-demo` (edutech) | loopback only |

## App and API subdomains (added 2026-10-14)

| Domain | Serves | How |
|---|---|---|
| `https://app.schoolynx.com` | React app (static build) | Apache docroot `/srv/schoolynx/app-web`, `FallbackResource /index.html` for routes |
| `https://api.schoolynx.com` | Spring Boot (`edutech-api`, 8081) | Proxy `/` to `127.0.0.1:8081/`, so URLs keep the `/edutech/` prefix; websocket at `/edutech/ws`; upload limit 300MB |

Certificates: one per host under `/etc/letsencrypt/live/`, auto renewed. Config backups: `post_virtualhost_global.conf.bak-subdomains` and `.bak-subdomains-ssl`. The old path `learnovateconsultants.com/schoolynx/` is unchanged. CORS already allowed `https://app.schoolynx.com` in `application.properties`.

Publish a new app version (from `admin-frontend`, no server build needed):

```bash
VITE_CORE_API=https://api.schoolynx.com/edutech/ npx vite build --outDir /tmp/app-dist
tar czf /tmp/app-dist.tgz -C /tmp/app-dist .
scp /tmp/app-dist.tgz root@159.198.36.155:/tmp/
ssh root@159.198.36.155 'rm -rf /srv/schoolynx/app-web/* && tar xzf /tmp/app-dist.tgz -C /srv/schoolynx/app-web && chown -R schoolynx:schoolynx /srv/schoolynx/app-web && chmod -R a+rX /srv/schoolynx/app-web'
```

Not done yet: login was not tested end to end in a browser; `config.js` still defaults to the old API path when `VITE_CORE_API` is not set; Vercel (`appschoolynx.vercel.app`) is untouched.
