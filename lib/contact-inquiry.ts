import { isValidPhoneNumber } from "libphonenumber-js";
import { z } from "zod";

export const contactInquirySchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  phone: z
    .string()
    .trim()
    .min(8)
    .max(24)
    .refine((value) => isValidPhoneNumber(value), { message: "Invalid phone number" }),
  projectType: z.string().trim().min(1).max(120),
  budget: z.string().trim().min(1).max(120),
  timeline: z.string().trim().min(1).max(120),
  message: z.string().trim().min(10).max(5000),
  locale: z.enum(["en", "ar"]),
  /** Honeypot — must stay empty */
  company: z.string().max(0).optional(),
});

export type ContactInquiryPayload = z.infer<typeof contactInquirySchema>;

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function buildInquiryEmailHtml(payload: ContactInquiryPayload): string {
  const isAr = payload.locale === "ar";
  const labels = isAr
    ? {
        title: "استفسار جديد من الموقع",
        name: "الاسم",
        email: "البريد",
        phone: "الهاتف",
        projectType: "نوع المشروع",
        budget: "الميزانية",
        timeline: "الجدول",
        message: "الرسالة",
      }
    : {
        title: "New portfolio inquiry",
        name: "Name",
        email: "Email",
        phone: "Phone",
        projectType: "Project type",
        budget: "Budget",
        timeline: "Timeline",
        message: "Message",
      };

  const row = (label: string, value: string) =>
    `<tr><td style="padding:8px 12px;font-weight:600;color:#1a2034;vertical-align:top;width:140px">${escapeHtml(label)}</td><td style="padding:8px 12px;color:#333">${escapeHtml(value)}</td></tr>`;

  return `
<!DOCTYPE html>
<html>
<body style="font-family:system-ui,-apple-system,sans-serif;background:#f6f4ef;padding:24px">
  <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:16px;border:1px solid #e8e4dc;padding:24px">
    <h1 style="margin:0 0 16px;font-size:18px;color:#111">${escapeHtml(labels.title)}</h1>
    <table style="width:100%;border-collapse:collapse;font-size:14px;line-height:1.5">
      ${row(labels.name, payload.name)}
      ${row(labels.email, payload.email)}
      ${row(labels.phone, payload.phone)}
      ${row(labels.projectType, payload.projectType)}
      ${row(labels.budget, payload.budget)}
      ${row(labels.timeline, payload.timeline)}
    </table>
    <p style="margin:20px 0 8px;font-size:13px;font-weight:600;color:#1a2034">${escapeHtml(labels.message)}</p>
    <p style="margin:0;font-size:14px;line-height:1.6;color:#333;white-space:pre-wrap">${escapeHtml(payload.message)}</p>
  </div>
</body>
</html>`;
}

export function buildInquiryEmailSubject(payload: ContactInquiryPayload): string {
  return payload.locale === "ar"
    ? `استفسار مشروع — ${payload.name}`
    : `Project inquiry — ${payload.name}`;
}
