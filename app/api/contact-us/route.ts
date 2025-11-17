import nodemailer from "nodemailer";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    // Validate required fields
    if (!name || !email || !phone || !subject || !message) {
      return new Response(JSON.stringify({ success: false, error: "Missing required fields" }), { status: 400 });
    }

    // Use whatever SMTP config you need (Gmail or Zoho)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.CONTACT_GMAIL_USER, // e.g. "techvalio333@gmail.com"
        pass: process.env.CONTACT_GMAIL_PASS, // APP password!
      },
    });

    const mailOptions = {
      from: `"Website Contact" <${process.env.CONTACT_GMAIL_USER}>`,
      to: process.env.CONTACT_GMAIL_USER, // Email recipient
      subject: `[Contact Us] ${subject}`,
      html: `
        <h2>Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err: any) {
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
}
