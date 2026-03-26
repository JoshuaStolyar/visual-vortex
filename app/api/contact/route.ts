import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, channel, message } = await req.json();

  if (!name || !email || !channel) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    const { error } = await resend.emails.send({
      from: "Visual Vortex Applications <onboarding@resend.dev>",
      to: "visualvortexcreators@gmail.com",
      replyTo: email,
      subject: `New Application: ${name} — ${channel}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0a0014; color: #ffffff; border-radius: 12px;">
          <h2 style="color: #a855f7; margin-bottom: 24px;">New Application Received</h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #ffffff10; color: #ffffff60; width: 40%;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #ffffff10;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #ffffff10; color: #ffffff60;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #ffffff10;"><a href="mailto:${email}" style="color: #a855f7;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #ffffff10; color: #ffffff60;">Social Link</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #ffffff10;">${channel}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #ffffff60; vertical-align: top;">Message</td>
              <td style="padding: 10px 0;">${message || "—"}</td>
            </tr>
          </table>

          <div style="margin-top: 24px; padding: 16px; background: #ffffff08; border-radius: 8px; border-left: 3px solid #a855f7;">
            <p style="margin: 0; color: #ffffff60; font-size: 13px;">Reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
