import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
    service: "gmail",
      auth: {
        user: 'anasnizamani54@gmail.com',
        pass: 'mdsw rxaj essq zijz',
      },
    });

    const adminMailOptions = {
      from: {
        name: 'Schoolynx Contact',
        address: 'anasnizamani54@gmail.com', 
      },
      to: 'anasnizamani54@gmail.com', 
      replyTo: data.email, 
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Full Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone Number:</strong> ${data.phoneNumber}</p>
        <p><strong>WhatsApp:</strong> ${data.whatsapp}</p>
      `,
    };
    

    const userMailOptions = {
      from: {
        name: 'Schoolynx Team',
        address: 'anasnizamani54@gmail.com',
      },
      to: data.email,
      subject: 'Thank you for contacting Schoolynx',
      html: `
        <h2>Thank you for contacting Schoolynx!</h2>
        <p>Dear ${data.fullName || 'User'},</p>
        <p>We have received your inquiry and will get back to you soon.</p>
        <h3>Your Submission:</h3>
        <ul>
          <li><strong>Full Name:</strong> ${data.fullName}</li>
          <li><strong>Email:</strong> ${data.email}</li>
          <li><strong>Phone Number:</strong> ${data.phoneNumber}</li>
          <li><strong>WhatsApp:</strong> ${data.whatsapp}</li>
        </ul>
        <p>Thank you,<br/>Schoolynx Team</p>
      `,
    };

    await transporter.sendMail(adminMailOptions);

    if (data.email) {
      await transporter.sendMail(userMailOptions);
    }

    return NextResponse.json({
      success: true,
      message: 'Form submitted and emails sent successfully',
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Form submission failed:', errorMessage);
    return NextResponse.json(
      { success: false, message: 'Form submission failed', error: errorMessage },
      { status: 500 }
    );
  }
}
