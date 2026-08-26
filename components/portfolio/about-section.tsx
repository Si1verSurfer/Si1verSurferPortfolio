"use client";

import { useRef } from "react";
import {
  ArrowUpRight,
  Building2,
  Check,
  Clock3,
  Layers,
  Monitor,
  Palette,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { SERVICE_PLANS } from "@/data/services";
import { useLanguage } from "@/context/language-context";
import { scrollToSection } from "@/lib/scroll-to-section";
import { duration, easeOutExpo } from "@/lib/motion";

const ICON_MAP: Record<string, LucideIcon> = {
  smartphone: Smartphone,
  monitor: Monitor,
  layers: Layers,
  sparkles: Sparkles,
  server: Server,
  palette: Palette,
  workflow: Workflow,
  building: Building2,
};

export function AboutSection() {
  const { t, isRtl } = useLanguage();
  const reduced = useReducedMotion();
  const gridRef = useRef<HTMLDivElement>(null);
  const inView = useInView(gridRef, { once: true, amount: 0.08 });

  const featuredPlan = SERVICE_PLANS.find((p) => p.featured) ?? null;
  const regularPlans = SERVICE_PLANS.filter((p) => !p.featured);

  return (
    <section
      id="about"
      className="section-pad relative scroll-mt-28 overflow-hidden border-t border-[var(--border)]"
    >
      <div className="section-glow pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="services-orbit pointer-events-none absolute -top-24 start-1/2 h-72 w-72 -translate-x-1/2 rounded-full"
        aria-hidden
      />

      <div className="site-container relative">
        <motion.header
          className="services-header mb-8 sm:mb-10 md:mb-12 lg:mb-14"
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: duration.reveal, ease: easeOutExpo }}
        >
          <div className="min-w-0 max-w-2xl">
            <div className="section-kicker mb-4">
              <span className="section-kicker-line" aria-hidden />
              <p className="eyebrow !mb-0">{t.services.eyebrow}</p>
            </div>
            <h2 className="section-title mb-4">{t.services.title}</h2>
            <p className="section-intro">{t.services.subtitle}</p>
          </div>

          <div className="services-header-actions">
            <div className="work-count-pill">
              <span className="text-2xl font-extrabold text-[var(--cream)]">
                {SERVICE_PLANS.length}
              </span>
              <span className="text-sm font-semibold text-[var(--cream-dim)]">
                {t.services.countLabel}
              </span>
            </div>
            <button
              type="button"
              className="btn-primary !px-5 !py-2.5"
              onClick={() => scrollToSection("contact")}
            >
              {t.services.cta}
              <ArrowUpRight className={`h-4 w-4 ${isRtl ? "-scale-x-100" : ""}`} />
            </button>
          </div>
        </motion.header>

        <motion.div
          className="services-trust mb-6 sm:mb-8"
          initial={reduced ? false : { opacity: 0, y: 18 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.08, duration: duration.reveal, ease: easeOutExpo }}
        >
          {[
            { icon: ShieldCheck, text: t.services.trust[0] },
            { icon: Clock3, text: t.services.trust[1] },
            { icon: Sparkles, text: t.services.trust[2] },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="service-trust-item">
              <Icon className="h-4 w-4 shrink-0 text-[var(--cream)]" strokeWidth={1.7} />
              <span>{text}</span>
            </div>
          ))}
        </motion.div>

        <div ref={gridRef} className="services-layout">
          {featuredPlan && (() => {
            const copy = t.services.plans[featuredPlan.id];
            const Icon = ICON_MAP[featuredPlan.icon] ?? Layers;
            return (
              <motion.article
                className="service-card service-card-featured group"
                initial={reduced ? false : { opacity: 0, y: 28, scale: 0.98 }}
                animate={
                  inView || reduced
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 28, scale: 0.98 }
                }
                transition={{ duration: 0.55, ease: easeOutExpo }}
                whileHover={reduced ? undefined : { y: -4 }}
              >
                <div className="service-card-shine pointer-events-none absolute inset-0" aria-hidden />

                <div className="service-featured-layout">
                  <div className="service-featured-main">
                    <div className="flex items-start justify-between gap-4">
                      <div className="service-icon-wrap">
                        <Icon className="h-5 w-5 text-[var(--cream)]" strokeWidth={1.6} />
                      </div>
                      <span className="service-badge service-badge-pulse">
                        {t.services.featuredLabel}
                      </span>
                    </div>

                    <div className="mt-5 sm:mt-6">
                      <p className="text-sm font-semibold text-[var(--cream-dim)]">{copy.for}</p>
                      <h3 className="mt-2 text-2xl font-extrabold leading-tight text-[var(--cream)] sm:text-3xl lg:text-[2.15rem]">
                        {copy.name}
                      </h3>
                      <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--cream-muted)] sm:text-base">
                        {copy.description}
                      </p>
                    </div>

                    <div className="service-card-footer service-featured-footer">
                      <div>
                        <p className="text-xs font-bold text-[var(--cream-dim)]">
                          {t.services.timelineLabel}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-[var(--cream)]">
                          {copy.timeline}
                        </p>
                      </div>
                      <button
                        type="button"
                        className="btn-primary service-cta-btn !px-5 !py-2.5"
                        onClick={() => scrollToSection("contact")}
                      >
                        {t.services.planCta}
                        <ArrowUpRight className={`h-4 w-4 ${isRtl ? "-scale-x-100" : ""}`} />
                      </button>
                    </div>
                  </div>

                  <ul className="service-featured-includes">
                    {copy.includes.map((item) => (
                      <li key={item} className="service-feature">
                        <span className="service-check">
                          <Check className="h-3.5 w-3.5" strokeWidth={2.4} />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })()}

          <div className="services-grid">
            {regularPlans.map((plan, index) => {
              const copy = t.services.plans[plan.id];
              const Icon = ICON_MAP[plan.icon] ?? Layers;

              return (
                <motion.article
                  key={plan.id}
                  className="service-card group"
                  initial={reduced ? false : { opacity: 0, y: 32, scale: 0.97 }}
                  animate={
                    inView || reduced
                      ? { opacity: 1, y: 0, scale: 1 }
                      : { opacity: 0, y: 32, scale: 0.97 }
                  }
                  transition={{
                    delay: reduced ? 0 : 0.05 + index * 0.05,
                    duration: 0.5,
                    ease: easeOutExpo,
                  }}
                  whileHover={reduced ? undefined : { y: -5 }}
                >
                  <div className="service-card-shine pointer-events-none absolute inset-0" aria-hidden />

                  <div className="relative flex items-start justify-between gap-3">
                    <div className="service-icon-wrap">
                      <Icon className="h-5 w-5 text-[var(--cream)]" strokeWidth={1.6} />
                    </div>
                    <span className="text-xs font-bold text-[var(--cream-dim)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="relative mt-4 min-w-0 sm:mt-5">
                    <p className="line-clamp-1 text-xs font-semibold text-[var(--cream-dim)] sm:text-sm">
                      {copy.for}
                    </p>
                    <h3 className="mt-1.5 text-xl font-extrabold leading-tight text-[var(--cream)] sm:mt-2 sm:text-2xl">
                      {copy.name}
                    </h3>
                    <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-[var(--cream-muted)]">
                      {copy.description}
                    </p>
                  </div>

                  <ul className="relative mt-5 grid flex-1 gap-2 sm:mt-6 sm:gap-2.5">
                    {copy.includes.map((item) => (
                      <li key={item} className="service-feature">
                        <span className="service-check">
                          <Check className="h-3.5 w-3.5" strokeWidth={2.4} />
                        </span>
                        <span className="line-clamp-2">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="service-card-footer">
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-[var(--cream-dim)]">
                        {t.services.timelineLabel}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-[var(--cream)]">
                        {copy.timeline}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="btn-outline service-cta-btn !px-4 !py-2.5 sm:!px-5"
                      onClick={() => scrollToSection("contact")}
                    >
                      {t.services.planCta}
                      <ArrowUpRight className={`h-4 w-4 ${isRtl ? "-scale-x-100" : ""}`} />
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <motion.div
          className="service-note mt-5 sm:mt-6 lg:mt-8"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: duration.reveal, ease: easeOutExpo }}
        >
          <div className="min-w-0">
            <p className="service-note-title">{t.services.noteTitle}</p>
            <p className="service-note-text">{t.services.noteText}</p>
          </div>
          <button
            type="button"
            className="btn-primary w-full shrink-0 sm:w-auto"
            onClick={() => scrollToSection("contact")}
          >
            {t.services.noteCta}
            <ArrowUpRight className={`h-4 w-4 ${isRtl ? "-scale-x-100" : ""}`} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
