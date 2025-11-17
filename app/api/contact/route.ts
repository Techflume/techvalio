import nodemailer from "nodemailer";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, services, phone, message } = await req.json();

    if (!name || !email || !services || !phone || !message) {
      return new Response(JSON.stringify({ success: false, error: "Missing required fields" }), { status: 400 });
    }

    // Gmail SMTP transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.CONTACT_GMAIL_USER,
        pass: process.env.CONTACT_GMAIL_PASS 
      },
    });

    const serviceList = Array.isArray(services)
      ? services.map((s: { label?: string; value?: string }) => s.label || s.value || s).join(", ")
      : services;

    const mailOptions = {
      from: '"Website Contact" <techvalio333@gmail.com>',
      to: "techvalio333@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <h2>Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Services:</strong> ${serviceList}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err: any) {
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
}
