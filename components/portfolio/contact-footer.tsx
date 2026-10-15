"use client";

import { type FormEvent, useState } from "react";
import { ArrowUpRight, Github, Linkedin, Loader2, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { portfolioProfile } from "@/data/profile";
import { useLanguage } from "@/context/language-context";
import { scrollToSection } from "@/lib/scroll-to-section";
import { ContactPhoneInput, type PhoneValue } from "@/components/portfolio/contact-phone-input";
import { isValidPhoneNumber } from "libphonenumber-js";

export function ContactFooter() {
  const { t, isRtl, locale } = useLanguage();
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState<{
    name: string;
    email: string;
    phone: PhoneValue | undefined;
    projectType: string;
    budget: string;
    timeline: string;
    message: string;
    company: string;
  }>({
    name: "",
    email: "",
    phone: undefined,
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
    company: "",
  });
  const displayName = locale === "ar" ? portfolioProfile.nameAr : portfolioProfile.name;

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (form.company) return;

    const phone = form.phone?.trim() ?? "";
    if (!phone || !isValidPhoneNumber(phone)) {
      toast.error(t.contact.formError);
      return;
    }

    const projectType =
      form.projectType || t.contact.projectTypes[0] || "Mobile app";
    const budget = form.budget || t.contact.budgetRanges[0] || "Not sure yet";
    const timeline = form.timeline || t.contact.timelineOptions[0] || "Flexible";

    setSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone,
          projectType,
          budget,
          timeline,
          message: form.message,
          locale,
          company: form.company,
        }),
      });

      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (res.status === 503) {
        toast.error(t.contact.formErrorConfig);
        return;
      }

      if (!res.ok) {
        toast.error(data.error || t.contact.formError);
        return;
      }

      toast.success(t.contact.formSuccess);
      setForm({
        name: "",
        email: "",
        phone: undefined,
        projectType: "",
        budget: "",
        timeline: "",
        message: "",
        company: "",
      });
    } catch {
      toast.error(t.contact.formError);
    } finally {
      setSending(false);
    }
  };

  return (
    <footer id="contact" className="relative scroll-mt-28 overflow-hidden border-t border-[var(--border)]">
      <div className="contact-finale-glow pointer-events-none absolute inset-0" aria-hidden />

      <section className="section-pad relative">
        <div className="site-container">
          <div className="contact-finale overflow-hidden">
            <div className="contact-finale-top px-7 py-10 md:px-10 md:py-14 lg:px-14">
              <div className="mx-auto max-w-3xl text-center">
                <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-white/70 px-4 py-2 backdrop-blur-md">
                  <span className="status-dot" aria-hidden />
                  <span className="text-sm font-semibold text-[var(--cream-muted)]">
                    {t.hero.available}
                  </span>
                </div>

                <p className="contact-availability-hint">{t.hero.availabilityHint}</p>
                <p className="contact-reply-hint">{t.hero.replyHint}</p>

                <div className="section-kicker mb-4 mt-6 justify-center">
                  <span className="section-kicker-line" aria-hidden />
                  <p className="eyebrow !mb-0">{t.contact.eyebrow}</p>
                  <span className="section-kicker-line" aria-hidden />
                </div>

                <h2 className="contact-finale-title mb-5">{t.contact.title}</h2>
                <p className="mx-auto max-w-2xl text-base leading-relaxed text-[var(--cream-muted)] md:text-lg">
                  {t.contact.headline}
                </p>
                <p className="mx-auto mt-3 max-w-xl text-sm text-[var(--cream-dim)]">
                  {t.contact.subtitle}
                </p>
              </div>
            </div>

            <div className="grid border-t border-[var(--border)] lg:grid-cols-[0.95fr_1.05fr]">
              <div className="contact-finale-info space-y-8 p-7 md:p-10">
                <div>
                  <p className="text-sm font-semibold text-[var(--cream-dim)]">{displayName}</p>
                  <p className="mt-1 text-xl font-extrabold text-[var(--cream)]">
                    {displayName}
                  </p>
                  <p className="mt-2 text-sm text-[var(--cream-muted)]">
                    {locale === "ar" ? portfolioProfile.titleAr : portfolioProfile.title}
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href={`mailto:${portfolioProfile.email}`}
                    className="contact-info-row group"
                  >
                    <span className="contact-info-icon">
                      <Mail className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-xs font-bold text-[var(--cream-dim)]">
                        {locale === "ar" ? "البريد" : "Email"}
                      </span>
                      <span className="text-sm font-semibold text-[var(--cream)] group-hover:underline">
                        {portfolioProfile.email}
                      </span>
                    </span>
                  </a>

                  <div className="contact-info-row">
                    <span className="contact-info-icon">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-xs font-bold text-[var(--cream-dim)]">
                        {locale === "ar" ? "الموقع" : "Location"}
                      </span>
                      <span className="text-sm font-semibold text-[var(--cream)]">
                        {t.contact.location}
                      </span>
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a href={`mailto:${portfolioProfile.email}`} className="btn-primary">
                    {t.contact.cta}
                    <ArrowUpRight className={`h-4 w-4 ${isRtl ? "-scale-x-100" : ""}`} />
                  </a>
                  <a
                    href={portfolioProfile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline !px-4"
                    aria-label="GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={portfolioProfile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline !px-4"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <form onSubmit={onSubmit} className="contact-finale-form space-y-4 border-t border-[var(--border)] p-7 md:p-10 lg:border-t-0 lg:border-s">
                <div className="mb-2">
                  <h3 className="text-lg font-bold text-[var(--cream)]">{t.contact.formIntroTitle}</h3>
                  <p className="mt-1 text-sm text-[var(--cream-dim)]">{t.contact.formIntro}</p>
                </div>

                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
                  className="contact-honeypot"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    placeholder={t.contact.formName}
                    className="input-field"
                    autoComplete="name"
                  />
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    placeholder={t.contact.formEmail}
                    className="input-field"
                    autoComplete="email"
                  />
                </div>

                <label className="sr-only" htmlFor="contact-phone">
                  {t.contact.formPhone}
                </label>
                <ContactPhoneInput
                  id="contact-phone"
                  locale={locale}
                  value={form.phone}
                  onChange={(phone) => setForm((p) => ({ ...p, phone }))}
                  placeholder={t.contact.formPhone}
                  required
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="sr-only" htmlFor="contact-project-type">
                    {t.contact.formProjectType}
                  </label>
                  <select
                    id="contact-project-type"
                    value={form.projectType}
                    onChange={(e) => setForm((p) => ({ ...p, projectType: e.target.value }))}
                    className="input-field"
                  >
                    <option value="">{t.contact.formProjectType}</option>
                    {t.contact.projectTypes.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>

                  <label className="sr-only" htmlFor="contact-budget">
                    {t.contact.formBudget}
                  </label>
                  <select
                    id="contact-budget"
                    value={form.budget}
                    onChange={(e) => setForm((p) => ({ ...p, budget: e.target.value }))}
                    className="input-field"
                  >
                    <option value="">{t.contact.formBudget}</option>
                    {t.contact.budgetRanges.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <label className="sr-only" htmlFor="contact-timeline">
                  {t.contact.formTimeline}
                </label>
                <select
                  id="contact-timeline"
                  value={form.timeline}
                  onChange={(e) => setForm((p) => ({ ...p, timeline: e.target.value }))}
                  className="input-field"
                >
                  <option value="">{t.contact.formTimeline}</option>
                  {t.contact.timelineOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                  placeholder={t.contact.formMessage}
                  className="input-field resize-none"
                />
                <button type="submit" className="btn-primary w-full" disabled={sending}>
                  {sending ? (
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                  {sending ? t.contact.formSending : t.contact.formSubmit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="relative border-t border-[var(--border)] py-7">
        <div className="site-container flex flex-col items-center justify-between gap-4 text-sm text-[var(--cream-dim)] sm:flex-row">
          <p>
            © {new Date().getFullYear()} {portfolioProfile.name}. {t.contact.rights}
          </p>
          <button
            type="button"
            className="link-arrow font-semibold hover:text-[var(--cream)]"
            onClick={() => scrollToSection("home")}
          >
            {displayName}
            <ArrowUpRight className={`h-3.5 w-3.5 ${isRtl ? "-scale-x-100 rotate-[-90deg]" : "rotate-[-90deg]"}`} />
          </button>
        </div>
      </div>
    </footer>
  );
}
