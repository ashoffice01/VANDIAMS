import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"VANDIAMS Custom Design" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_RECEIVER_EMAIL,
    subject: "New AI Custom Design Request",
    html: `
      <p><strong>Name:</strong> ${formData.get("name")}</p>
      <p><strong>Email:</strong> ${formData.get("email")}</p>
      <p><strong>Jewelry Type:</strong> ${formData.get("jewelryType")}</p>
      <p><strong>Occasion:</strong> ${formData.get("occasion")}</p>
      <p><strong>Metal:</strong> ${formData.get("metal")}</p>
      <p><strong>Budget:</strong> ${formData.get("budget")}</p>
      <p><strong>Notes:</strong><br/>${formData.get("notes")}</p>
    `,
  });

  return NextResponse.json({ success: true });
}
