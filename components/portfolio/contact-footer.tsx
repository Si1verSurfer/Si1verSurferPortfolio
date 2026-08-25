"use client";

import { type FormEvent, useState } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { portfolioProfile } from "@/data/profile";
import { useLanguage } from "@/context/language-context";
import { scrollToSection } from "@/lib/scroll-to-section";

export function ContactFooter() {
  const { t, isRtl, locale } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setForm({ name: "", email: "", message: "" });
    alert(t.contact.formSuccess);
  };

  return (
    <footer id="contact" className="relative scroll-mt-28 overflow-hidden border-t border-[var(--border)]">
      <div className="section-glow section-glow-alt pointer-events-none absolute inset-0" aria-hidden />

      <section className="section-pad relative">
        <div className="site-container mb-10 max-w-3xl md:mb-12">
          <div className="section-kicker mb-4">
            <span className="section-kicker-line" aria-hidden />
            <p className="eyebrow !mb-0">{t.contact.eyebrow}</p>
          </div>
          <h2 className="section-title mb-4">{t.contact.title}</h2>
          <p className="section-intro">{t.contact.subtitle}</p>
        </div>

        <div className="site-container grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6">
          <div className="contact-hero-card hover-card surface-card relative flex min-h-[340px] flex-col justify-between overflow-hidden p-8 md:p-10">
            <div className="contact-hero-orb pointer-events-none absolute -end-16 -top-16 h-56 w-56 rounded-full" aria-hidden />
            <div className="relative">
              <p className="mb-4 text-sm font-semibold text-[var(--cream-dim)]">
                {locale === "ar" ? portfolioProfile.nameAr : portfolioProfile.name}
                <span className="mx-2 text-[var(--cream-dim)]/50">·</span>
                {portfolioProfile.alias}
              </p>
              <h3 className="max-w-lg text-3xl font-extrabold leading-[1.35] text-[var(--cream)] md:text-4xl">
                {t.contact.headline}
              </h3>
            </div>

            <div className="relative mt-10 space-y-5">
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

              <div className="flex flex-col gap-3 text-sm text-[var(--cream-muted)] sm:flex-row sm:gap-6">
                <a
                  href={`mailto:${portfolioProfile.email}`}
                  className="link-arrow inline-flex items-center gap-2 hover:text-[var(--cream)]"
                >
                  <Mail className="h-4 w-4 text-[var(--cream-dim)]" />
                  {portfolioProfile.email}
                </a>
                <p className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[var(--cream-dim)]" />
                  {t.contact.location}
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="contact-form-card hover-card surface-card space-y-4 p-6 md:p-8">
            <div>
              <h3 className="text-lg font-bold text-[var(--cream)]">{t.contact.title}</h3>
              <p className="mt-1 text-sm text-[var(--cream-dim)]">{t.contact.subtitle}</p>
            </div>

            <input
              required
              value={form.name}
              onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
              placeholder={t.contact.formName}
              className="input-field"
            />
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
              placeholder={t.contact.formEmail}
              className="input-field"
            />
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
              placeholder={t.contact.formMessage}
              className="input-field resize-none"
            />
            <button type="submit" disabled={sending} className="btn-primary w-full disabled:opacity-60">
              <Send className="h-4 w-4" />
              {sending ? t.contact.formSending : t.contact.formSubmit}
            </button>
          </form>
        </div>
      </section>

      <div className="relative border-t border-[var(--border)] py-6">
        <div className="site-container flex flex-col gap-3 text-sm text-[var(--cream-dim)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {portfolioProfile.name}. {t.contact.rights}
          </p>
          <button
            type="button"
            className="link-arrow w-fit font-semibold hover:text-[var(--cream)]"
            onClick={() => scrollToSection("home")}
          >
            {portfolioProfile.alias}
          </button>
        </div>
      </div>
    </footer>
  );
}
