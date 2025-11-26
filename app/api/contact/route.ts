export const runtime = "nodejs";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
    }

    const toAddress = process.env.CONTACT_EMAIL ?? "magnusheier777@gmail.com";
    if (!toAddress) {
      return new Response(JSON.stringify({ error: "CONTACT_EMAIL not configured" }), { status: 500 });
    }

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return new Response(
        JSON.stringify({ error: "SMTP configuration missing (host/user/pass)" }),
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER || `no-reply@${new URL("https://" + (process.env.SMTP_HOST || "localhost")).host}`,
      replyTo: `${name} <${email}>`,
      to: toAddress,
      subject: "New Contact Form Submission",
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("/api/contact error", error);
    const message = error instanceof Error ? error.message : "Failed to send";
    return new Response(JSON.stringify({ error: message }), { status: 500 });
  }
}


