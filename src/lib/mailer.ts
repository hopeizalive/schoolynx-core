import nodemailer from 'nodemailer';

// Mail settings come from the environment (.env.local here, project
// Environment Variables on Vercel). See .env.example for the names.
export function mailConfig() {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!user || !pass) {
    throw new Error('Mail is not configured: set SMTP_USER and SMTP_PASS');
  }
  return {
    user,
    transporter: nodemailer.createTransport({
      service: process.env.SMTP_SERVICE || 'gmail',
      auth: { user, pass },
    }),
  };
}
