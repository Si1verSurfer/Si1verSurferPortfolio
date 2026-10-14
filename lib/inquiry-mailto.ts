export type InquiryPayload = {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
  locale: "en" | "ar";
};

export function buildInquiryMailto(to: string, payload: InquiryPayload): string {
  const subject =
    payload.locale === "ar"
      ? `استفسار مشروع — ${payload.name}`
      : `Project inquiry — ${payload.name}`;

  const lines =
    payload.locale === "ar"
      ? [
          `الاسم: ${payload.name}`,
          `البريد: ${payload.email}`,
          `نوع المشروع: ${payload.projectType}`,
          `الميزانية: ${payload.budget}`,
          `الجدول الزمني: ${payload.timeline}`,
          "",
          "الرسالة:",
          payload.message,
        ]
      : [
          `Name: ${payload.name}`,
          `Email: ${payload.email}`,
          `Project type: ${payload.projectType}`,
          `Budget: ${payload.budget}`,
          `Timeline: ${payload.timeline}`,
          "",
          "Message:",
          payload.message,
        ];

  const params = new URLSearchParams({
    subject,
    body: lines.join("\n"),
  });

  return `mailto:${to}?${params.toString()}`;
}
