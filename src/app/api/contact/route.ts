import { NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing RESEND_API_KEY environment variable." },
        { status: 500 },
      );
    }

    const body = (await request.json()) as ContactPayload;
    const name = body.name?.trim();
    const email = body.email?.trim();
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    const resend = new Resend(apiKey);
    const fromAddress =
      process.env.RESEND_FROM_EMAIL ||
      "Portfolio Contact <onboarding@resend.dev>";
    const toAddress = process.env.RESEND_TO_EMAIL || "huyenduc0601@gmail.com";

    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: [toAddress],
      replyTo: email,
      subject: `[Portfolio] Liên hệ mới từ ${name} (${email})`,
      html: `
        <div style="font-family: Segoe UI, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #121E28; color: #F8FAFC; border-radius: 12px; border: 1px solid rgba(255,113,91,0.35);">
          <h2 style="margin: 0 0 16px; color: #FF715B;">Liên hệ mới từ Portfolio (aboutmedev.online)</h2>
          <p style="margin: 8px 0;"><strong>Họ và tên:</strong> ${name}</p>
          <p style="margin: 8px 0;"><strong>Email người gửi:</strong> <a href="mailto:${email}" style="color: #FF715B;">${email}</a></p>
          <div style="margin-top: 16px; padding: 16px; background: #172430; border-radius: 8px; border-left: 4px solid #FF715B;">
            <p style="margin: 0 0 8px; color: #94A3B8; font-size: 12px; text-transform: uppercase;">Lời nhắn:</p>
            <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to send email";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
