"use client";

import { useLanguage } from "@/context/language-context";
import { portfolioProfile } from "@/data/profile";

export function AboutSection() {
  const { t, locale } = useLanguage();

  return (
    <section id="about" className="section-pad scroll-mt-28 border-t border-[var(--border)]">
      <div className="site-container">
        <div className="mb-12 max-w-3xl md:mb-14">
          <p className="eyebrow mb-4">{t.about.eyebrow}</p>
          <h2 className="section-title mb-5">{t.about.title}</h2>
          <p className="section-intro">{t.about.intro}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-5">
            {t.about.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 28)}
                className="border-s-2 border-[var(--border-strong)] ps-5 text-base leading-relaxed text-[var(--cream-muted)] md:text-[1.05rem]"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="about-quote h-fit">
            <p className="ps-4 text-lg font-semibold leading-relaxed text-[var(--cream)] md:text-xl">
              {locale === "ar" ? portfolioProfile.summaryAr : portfolioProfile.summary}
            </p>
            <p className="mt-6 ps-4 text-sm font-bold text-[var(--cream-dim)]">
              — {locale === "ar" ? portfolioProfile.nameAr : portfolioProfile.name}
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {t.about.pillars.map((pillar, index) => (
            <article key={pillar.title} className="hover-card surface-card p-6 md:p-7">
              <span className="mb-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-sm font-bold text-[var(--cream-dim)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-bold text-[var(--cream)]">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--cream-muted)] md:text-[0.95rem]">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>

        <div className="hover-card surface-card mt-8 p-7 md:p-9">
          <h3 className="text-base font-bold text-[var(--cream)]">{t.about.educationTitle}</h3>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {t.about.education.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-relaxed text-[var(--cream-muted)] md:text-[0.95rem]"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--cream)]" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
