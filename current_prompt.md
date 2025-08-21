[root@server1 mnt]# cd prod.schoolynx.com/
[root@server1 prod.schoolynx.com]# ls
next.config.ts  node_modules  package-lock.json  package.json  pnpm-lock.yaml  postcss.config.mjs  public  schoolnyx-app.tar.gz  tsconfig.json  yarn.lock
[root@server1 prod.schoolynx.com]# cd public/
[root@server1 public]# ls
assets  file.svg  globe.svg  next.svg  vercel.svg  window.svg
[root@server1 public]# cd ..
[root@server1 prod.schoolynx.com]# tar -tzf schoolnyx-app.tar.gz | grep "google730650837031eef0.html"
[root@server1 prod.schoolynx.com]#


## these are server logs which we collect from production they do not have google file so it means full-deployment-script-schoolynx.sh does not copy it properly check config files of project first 