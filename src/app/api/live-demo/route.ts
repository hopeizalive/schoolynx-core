import { NextRequest, NextResponse } from 'next/server';
const nodemailer = require('nodemailer');

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    console.log('Live Demo form data:', data);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: 'anasnizamani54@gmail.com',
        pass: 'mdsw rxaj essq zijz',
      },
    });

    // Admin email content
    const adminMailOptions = {
      from: {
        name: 'Schoolynx Demo Request',
        address: 'anasnizamani54@gmail.com',
      },
      to: 'anasnizamani54@gmail.com',
      replyTo: data.email,
      subject: 'New Live Demo Request',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #dc2626; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">New Live Demo Request</h2>
          
          <h3 style="color: #374151; margin-top: 20px;">👤 Contact Person Details</h3>
          <p><strong>Full Name:</strong> ${data.fullName}</p>
          <p><strong>Role:</strong> ${data.role}</p>
          <p><strong>Phone Number:</strong> ${data.phoneNumber}</p>
          <p><strong>WhatsApp:</strong> ${data.whatsapp || 'Not provided'}</p>
          <p><strong>Email:</strong> ${data.email}</p>

          <h3 style="color: #374151; margin-top: 20px;">🏫 School Information</h3>
          <p><strong>School Name:</strong> ${data.schoolName}</p>
          <p><strong>City/Location:</strong> ${data.location}</p>
          <p><strong>Total Students:</strong> ${data.totalStudents}</p>
          <p><strong>Total Staff:</strong> ${data.totalStaff}</p>

          <h3 style="color: #374151; margin-top: 20px;">✅ Interested In</h3>
          <ul style="list-style-type: none; padding-left: 0;">
            ${data.interests.map((interest: string) => `<li>✓ ${interest}</li>`).join('')}
            ${data.otherInterest ? `<li>✓ Other: ${data.otherInterest}</li>` : ''}
          </ul>

          <h3 style="color: #374151; margin-top: 20px;">📅 Preferred Contact Time</h3>
          <p><strong>Date:</strong> ${data.preferredDate}</p>
          <p><strong>Time:</strong> ${data.preferredTime}</p>

          ${data.additionalNotes ? `
            <h3 style="color: #374151; margin-top: 20px;">💬 Additional Notes</h3>
            <p>${data.additionalNotes}</p>
          ` : ''}

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
            <p>This email was sent from the Schoolynx Live Demo Request Form</p>
          </div>
        </div>
      `,
    };

    // User thank you email content
    const userMailOptions = {
      from: {
        name: 'Schoolynx Team',
        address: 'anasnizamani54@gmail.com',
      },
      to: data.email,
      subject: 'Thank you for requesting a Schoolynx Demo',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #dc2626; font-size: 24px; margin-bottom: 10px;">✅ Thank You!</h1>
            <p style="color: #374151; font-size: 16px; line-height: 1.6;">
              Your inquiry has been successfully submitted.<br>
              Our team at Schoolynx will contact you shortly to understand your school's needs and provide a customized demo and pricing plan.
            </p>
          </div>

          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0;">
              We look forward to helping you digitize and simplify your school management.
            </p>
          </div>

          <div style="margin-top: 30px; padding: 20px; background-color: #f3f4f6; border-radius: 8px;">
            <p style="color: #374151; margin: 0 0 10px 0;">
              <strong>📞 For urgent queries, feel free to contact us at:</strong><br>
              +92-XXX-XXXXXXX
            </p>
            <p style="color: #374151; margin: 0;">
              <strong>🌐 Visit us at:</strong><br>
              <a href="https://www.schoolynx.com" style="color: #dc2626; text-decoration: none;">www.schoolynx.com</a>
            </p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666; text-align: center;">
            <p>This is an automated message, please do not reply to this email.</p>
          </div>
        </div>
      `,
    };

    // Send admin email
    await transporter.sendMail(adminMailOptions);
    // Send user email if email is provided
    if (data.email) {
      await transporter.sendMail(userMailOptions);
    }

    return NextResponse.json({
      success: true,
      message: 'Demo request submitted successfully',
    });
  } catch (error: any) {
    console.error('Demo request submission failed:', error?.message);
    return NextResponse.json(
      { success: false, message: 'Demo request submission failed', error: error?.message },
      { status: 500 }
    );
  }
}
