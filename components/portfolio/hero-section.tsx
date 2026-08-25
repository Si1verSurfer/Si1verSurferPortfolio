"use client";

import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { portfolioProfile } from "@/data/profile";
import { useLanguage } from "@/context/language-context";
import { scrollToSection } from "@/lib/scroll-to-section";

export function HeroSection() {
  const { t, isRtl, locale } = useLanguage();

  return (
    <section
      id="home"
      className="hero-section relative overflow-hidden pb-10 pt-28 scroll-mt-28 md:pb-16 md:pt-32"
    >
      <div className="hero-section-glow pointer-events-none absolute inset-0" aria-hidden />

      <div className="site-container relative">
        <div className="grid items-end gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 xl:gap-12">
          <div className="relative z-10 pb-6 lg:pb-16">
            <div className="hero-intro mb-7 inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--navy-light)]/55 px-4 py-2.5 backdrop-blur-sm">
              <span className="status-dot" aria-hidden />
              <span className="text-sm font-semibold text-[var(--cream-muted)]">
                {t.hero.available}
              </span>
            </div>

            <p className="eyebrow mb-4">{t.hero.eyebrow}</p>

            <h1 className="hero-headline mb-5 text-[var(--cream)]">
              <span className="block">{t.hero.titleLine1}</span>
              <span className="hero-headline-accent block">{t.hero.titleLine2}</span>
            </h1>

            <p className="mb-4 text-base font-semibold text-[var(--cream)] md:text-lg">
              {locale === "ar" ? portfolioProfile.nameAr : portfolioProfile.name}
              <span className="mx-2 text-[var(--cream-dim)]">·</span>
              <span className="font-medium text-[var(--cream-dim)]">{portfolioProfile.alias}</span>
            </p>

            <p className="hero-tagline max-w-xl text-[var(--cream-muted)]">{t.hero.tagline}</p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {t.hero.highlights.map((tag) => (
                <span key={tag} className="hero-tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-3.5">
              <a
                href="#work"
                className="btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("work");
                }}
              >
                {t.hero.viewWork}
                <ArrowUpRight className={`h-4 w-4 ${isRtl ? "-scale-x-100" : ""}`} />
              </a>
              <a
                href={portfolioProfile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <Github className="h-4 w-4" />
                {t.hero.github}
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[460px] lg:max-w-none">
            <div className="hero-orbit pointer-events-none absolute inset-[6%] rounded-full" aria-hidden />
            <div className="hero-portrait-glow pointer-events-none absolute inset-0 scale-105" aria-hidden />

            <div className="hero-float relative mx-auto aspect-[3/4] w-full max-w-[440px]">
              <div
                className="pointer-events-none absolute inset-x-[12%] bottom-[2%] h-[14%] rounded-[50%] bg-black/40 blur-3xl"
                aria-hidden
              />

              <div className="hero-cutout absolute inset-0">
                <Image
                  src={portfolioProfile.avatarSrc}
                  alt={portfolioProfile.name}
                  fill
                  className="object-contain object-bottom"
                  sizes="(max-width: 768px) 90vw, 440px"
                  quality={90}
                  priority
                />
              </div>

              <div className="hero-badge-float absolute start-0 top-[18%] z-20 hidden sm:block">
                <div className="rounded-2xl border border-[var(--border-strong)] bg-[var(--navy)]/80 px-4 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur-md">
                  <p className="text-xs font-semibold text-[var(--cream-dim)]">{t.hero.focusLabel}</p>
                  <p className="mt-1 text-sm font-bold text-[var(--cream)]">{t.hero.focusValue}</p>
                </div>
              </div>

              <div className="hero-badge-float absolute end-0 bottom-[22%] z-20 hidden sm:block">
                <div className="rounded-2xl border border-[var(--border-strong)] bg-[var(--navy)]/80 px-4 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur-md">
                  <p className="text-2xl font-extrabold text-[var(--cream)]">{t.hero.appsValue}</p>
                  <p className="mt-0.5 text-xs font-semibold text-[var(--cream-dim)]">{t.hero.appsLabel}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
