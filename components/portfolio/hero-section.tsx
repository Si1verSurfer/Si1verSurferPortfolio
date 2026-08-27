"use client";

import Image from "next/image";
import { ArrowUpRight, Github, Mouse } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { portfolioProfile } from "@/data/profile";
import { useLanguage } from "@/context/language-context";
import { scrollToSection } from "@/lib/scroll-to-section";
import { easeOutExpo } from "@/lib/motion";

export function HeroSection() {
  const { t, isRtl, locale } = useLanguage();
  const reduced = useReducedMotion();
  const displayName = locale === "ar" ? portfolioProfile.nameAr : portfolioProfile.name;

  const ease = easeOutExpo;
  const fadeUp = (delay = 0) =>
    reduced
      ? { initial: false as const, animate: undefined }
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.72, ease, delay },
        };

  return (
    <section
      id="home"
      className="hero-section relative overflow-hidden scroll-mt-28"
    >
      <div className="site-container relative">
        <div className="hero-layout">
          <div className="hero-copy">
            <motion.div className="hero-intro" {...fadeUp(0.05)}>
              <span className="status-dot" aria-hidden />
              <span>{t.hero.available}</span>
            </motion.div>

            <motion.p className="hero-kicker" {...fadeUp(0.12)}>
              {t.hero.eyebrow}
            </motion.p>

            <motion.h1 className="hero-headline" {...fadeUp(0.18)}>
              <span className="block">{displayName}</span>
            </motion.h1>

            <motion.p className="hero-byline" {...fadeUp(0.26)}>
              <span className="hero-role">
                {t.hero.titleLine1} {t.hero.titleLine2}
              </span>
              <span className="hero-byline-sep">·</span>
              {portfolioProfile.alias}
            </motion.p>

            <motion.p className="hero-tagline" {...fadeUp(0.34)}>
              {t.hero.tagline}
            </motion.p>

            <motion.div className="hero-actions" {...fadeUp(0.42)}>
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
            </motion.div>
          </div>

          <motion.div
            className="hero-stage"
            initial={reduced ? false : { opacity: 0, y: 28, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={
              reduced
                ? { duration: 0 }
                : { duration: 0.95, ease, delay: 0.15 }
            }
          >
            <div className="hero-stage-glow" aria-hidden />

            <div className="hero-behind-title" aria-hidden>
              <span>{t.hero.titleLine1}</span>
              <span>{t.hero.titleLine2}</span>
            </div>

            <div className="hero-portrait">
              <div className="hero-portrait-frame">
                <Image
                  src={portfolioProfile.avatarSrc}
                  alt={portfolioProfile.name}
                  fill
                  className="object-contain object-bottom hero-portrait-img"
                  sizes="(max-width: 768px) 90vw, 480px"
                  quality={90}
                  priority
                />
              </div>
              {/* Soft linear dissolve — hides the hard shirt edge */}
              <div className="hero-portrait-fade" aria-hidden />
            </div>

            <div className="hero-pill hero-pill-a">
              <span className="hero-pill-dot" aria-hidden />
              <span>{t.hero.focusValue}</span>
            </div>

            <div className="hero-pill hero-pill-b">
              <span className="hero-pill-dot" aria-hidden />
              <span>
                {t.hero.appsValue} {t.hero.appsLabel}
              </span>
            </div>

            <div className="hero-pill hero-pill-c">
              <span className="hero-pill-dot" aria-hidden />
              <span>{t.hero.highlights[0]}</span>
            </div>
          </motion.div>
        </div>

        <motion.div className="hero-scroll" {...fadeUp(0.7)}>
          <Mouse className="h-4 w-4" strokeWidth={1.6} />
          <span>{isRtl ? "مرّر للأسفل" : "Scroll"}</span>
        </motion.div>
      </div>
    </section>
  );
}
