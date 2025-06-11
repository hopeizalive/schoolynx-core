import { NextRequest, NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';
const nodemailer = require('nodemailer');

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    // Log all frontend values
    console.log('Contact form data:', data);

    // Email configuration
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465,
      secure: true,
      auth: {
        user: 'info@learnovateconsultants.com',
        pass: 'Upf$m7ya'
      }
    });

    // Admin email content
    const adminMailOptions = {
      from: {
        name: 'Schoolynx Contact',
        address: 'info@learnovateconsultants.com'
      },
      to: 'info@learnovateconsultants.com',
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Contact Number:</strong> ${data.contact}</p>
        <p><strong>Location:</strong> ${data.location}</p>
        <p><strong>Interest:</strong> ${data.interest}</p>
        <p><strong>Message:</strong> ${data.message}</p>
        <p><strong>Captcha:</strong> ${data.captcha}</p>
      `,
    };

    // User thank you email content
    const userMailOptions = {
      from: {
        name: 'Schoolynx Team',
        address: 'info@learnovateconsultants.com'
      },
      to: data.email,
      subject: 'Thank you for contacting Schoolynx',
      html: `
        <h2>Thank you for contacting Schoolynx!</h2>
        <p>Dear ${data.name || 'User'},</p>
        <p>We have received your inquiry and will get back to you soon.</p>
        <h3>Your Submission:</h3>
        <ul>
          <li><strong>Name:</strong> ${data.name}</li>
          <li><strong>Email:</strong> ${data.email}</li>
          <li><strong>Contact Number:</strong> ${data.contact}</li>
          <li><strong>Location:</strong> ${data.location}</li>
          <li><strong>Interest:</strong> ${data.interest}</li>
          <li><strong>Message:</strong> ${data.message}</li>
        </ul>
        <p>Thank you,<br/>Schoolynx Team</p>
      `,
    };

    // Send admin email
    await transporter.sendMail(adminMailOptions);
    // Send user email if email is provided
    if (data.email) {
      await transporter.sendMail(userMailOptions);
    }

    return NextResponse.json({ success: true, message: 'Form submitted and emails sent successfully' });
  } catch (error: any) {
    console.error('Form submission failed:', error?.message);
    return NextResponse.json({ success: false, message: 'Form submission failed', error: error?.message }, { status: 500 });
  }
}