import { NextResponse } from "next/server";
import { Resend } from "resend";
import { portfolioProfile } from "@/data/profile";
import {
  buildInquiryEmailHtml,
  buildInquiryEmailSubject,
  contactInquirySchema,
} from "@/lib/contact-inquiry";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "Contact email is not configured. Set RESEND_API_KEY on the server.",
      },
      { status: 503 }
    );
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = contactInquirySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const payload = parsed.data;
  if (payload.company) {
    return NextResponse.json({ ok: true });
  }

  const to = process.env.CONTACT_TO_EMAIL?.trim() || portfolioProfile.email;
  const from =
    process.env.CONTACT_FROM_EMAIL?.trim() ||
    "Portfolio Contact <onboarding@resend.dev>";

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: payload.email,
    subject: buildInquiryEmailSubject(payload),
    html: buildInquiryEmailHtml(payload),
  });

  if (error) {
    console.error("[contact]", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
