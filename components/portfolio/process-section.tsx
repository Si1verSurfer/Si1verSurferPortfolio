"use client";

import {
  ArrowUpRight,
  Code2,
  PenLine,
  Rocket,
  Search,
  Target,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { PROCESS_STEPS } from "@/data/capabilities";
import { useLanguage } from "@/context/language-context";
import { scrollToSection } from "@/lib/scroll-to-section";
import { duration, easeOutExpo } from "@/lib/motion";

const ICON_MAP: Record<string, LucideIcon> = {
  search: Search,
  target: Target,
  pen: PenLine,
  code: Code2,
  rocket: Rocket,
};

export function ProcessSection() {
  const { t, isRtl } = useLanguage();
  const reduced = useReducedMotion();

  return (
    <section
      id="process"
      className="section-pad relative scroll-mt-28 overflow-x-hidden border-t border-[var(--border)]"
    >
      <div className="section-glow section-glow-alt pointer-events-none absolute inset-0" aria-hidden />

      <div className="site-container relative">
        <motion.div
          className="px-board"
          initial={false}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: duration.reveal, ease: easeOutExpo }}
        >
          <header className="px-head">
            <div className="min-w-0">
              <div className="section-kicker mb-3">
                <span className="section-kicker-line !bg-[var(--navy)]/25" aria-hidden />
                <p className="eyebrow !mb-0 !text-[var(--navy)]/45">{t.process.eyebrow}</p>
              </div>
              <h2 className="px-title">{t.process.title}</h2>
              <p className="px-subtitle">{t.process.subtitle}</p>
            </div>

            <div className="px-progress" aria-hidden>
              {PROCESS_STEPS.map((step, index) => (
                <div key={step.step} className="px-progress-item">
                  <span className="px-progress-dot">{step.step}</span>
                  {index < PROCESS_STEPS.length - 1 && (
                    <span className="px-progress-line" />
                  )}
                </div>
              ))}
            </div>
          </header>

          {/* Desktop / tablet: horizontal step track */}
          <div className="px-track">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = ICON_MAP[step.icon] ?? Search;
              const localized = t.process.steps[index];

              return (
                <motion.article
                  key={step.step}
                  className="px-step"
                  initial={false}
                  whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    delay: reduced ? 0 : index * 0.06,
                    duration: 0.45,
                    ease: easeOutExpo,
                  }}
                >
                  <div className="px-step-top">
                    <span className="px-step-icon">
                      <Icon className="h-4 w-4" strokeWidth={1.7} />
                    </span>
                    <span className="px-step-num">{step.step}</span>
                  </div>
                  <h3 className="px-step-title">{localized?.title ?? step.title}</h3>
                  <p className="px-step-desc">{localized?.description ?? step.description}</p>
                  {index < PROCESS_STEPS.length - 1 && (
                    <span className="px-step-connector" aria-hidden>
                      {isRtl ? "←" : "→"}
                    </span>
                  )}
                </motion.article>
              );
            })}
          </div>

          {/* Mobile: compact vertical list */}
          <div className="px-list">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = ICON_MAP[step.icon] ?? Search;
              const localized = t.process.steps[index];
              const isLast = index === PROCESS_STEPS.length - 1;

              return (
                <article key={step.step} className="px-row">
                  <div className="px-row-rail" aria-hidden>
                    <span className="px-row-node">
                      <Icon className="h-3.5 w-3.5" strokeWidth={1.8} />
                    </span>
                    {!isLast && <span className="px-row-line" />}
                  </div>
                  <div className="px-row-card">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-row-num">{step.step}</span>
                      <span className="px-row-label">
                        {isRtl ? `الخطوة ${index + 1}` : `Step ${index + 1}`}
                      </span>
                    </div>
                    <h3 className="px-row-title">{localized?.title ?? step.title}</h3>
                    <p className="px-row-desc">{localized?.description ?? step.description}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="px-cta">
            <div className="min-w-0">
              <p className="px-cta-title">
                {isRtl ? "جاهز نبدأ الخطوة الأولى؟" : "Ready for step one?"}
              </p>
              <p className="px-cta-text">
                {isRtl
                  ? "احكِ لي فكرتك باختصار — أردّ بمسار واضح ووقت متوقع."
                  : "Tell me your idea briefly — I’ll reply with a clear path and timeline."}
              </p>
            </div>
            <button
              type="button"
              className="px-cta-btn"
              onClick={() => scrollToSection("contact")}
            >
              {isRtl ? "ابدأ الحديث" : "Start a conversation"}
              <ArrowUpRight className={`h-3.5 w-3.5 ${isRtl ? "-scale-x-100" : ""}`} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
