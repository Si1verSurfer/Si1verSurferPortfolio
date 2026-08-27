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
  const displayName = locale === "ar" ? portfolioProfile.nameAr : portfolioProfile.name;

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

                <div className="section-kicker mb-4 justify-center">
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
                    {portfolioProfile.alias}
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

                <div className="grid gap-4 sm:grid-cols-2">
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
                </div>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                  placeholder={t.contact.formMessage}
                  className="input-field resize-none"
                />
                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary w-full disabled:opacity-60"
                >
                  <Send className="h-4 w-4" />
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
            {portfolioProfile.alias}
            <ArrowUpRight className={`h-3.5 w-3.5 ${isRtl ? "-scale-x-100 rotate-[-90deg]" : "rotate-[-90deg]"}`} />
          </button>
        </div>
      </div>
    </footer>
  );
}
