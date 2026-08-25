"use client";

import { Code2, PenLine, Rocket, Search, Target, type LucideIcon } from "lucide-react";
import { PROCESS_STEPS } from "@/data/capabilities";
import { useLanguage } from "@/context/language-context";

const ICON_MAP: Record<string, LucideIcon> = {
  search: Search,
  target: Target,
  pen: PenLine,
  code: Code2,
  rocket: Rocket,
};

export function ProcessSection() {
  const { t, isRtl } = useLanguage();

  return (
    <section
      id="process"
      className="section-pad relative scroll-mt-28 overflow-hidden border-t border-[var(--border)]"
    >
      <div className="section-glow section-glow-alt pointer-events-none absolute inset-0" aria-hidden />

      <div className="site-container relative">
        <div className="mb-12 grid gap-8 md:mb-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="section-kicker mb-4">
              <span className="section-kicker-line" aria-hidden />
              <p className="eyebrow !mb-0">{t.process.eyebrow}</p>
            </div>
            <h2 className="section-title mb-4">{t.process.title}</h2>
            <p className="section-intro">{t.process.subtitle}</p>
          </div>

          <div className="process-summary hidden items-center justify-end gap-3 lg:flex">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.step} className="flex items-center gap-3">
                <span className="process-summary-dot">{step.step}</span>
                {index < PROCESS_STEPS.length - 1 && (
                  <span className="process-summary-line" aria-hidden />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="process-journey">
          {PROCESS_STEPS.map((step, index) => {
            const Icon = ICON_MAP[step.icon] ?? Search;
            const localized = t.process.steps[index];
            const isLast = index === PROCESS_STEPS.length - 1;

            return (
              <article key={step.step} className="process-row group">
                <div className="process-rail" aria-hidden>
                  <div className="process-rail-node">
                    <Icon className="h-4 w-4 text-[var(--cream)]" strokeWidth={1.7} />
                  </div>
                  {!isLast && <div className="process-rail-line" />}
                </div>

                <div className="process-row-card">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <div className="mb-3 flex flex-wrap items-center gap-3">
                        <span className="process-index">{step.step}</span>
                        <h3 className="text-xl font-extrabold text-[var(--cream)] md:text-2xl">
                          {localized?.title ?? step.title}
                        </h3>
                      </div>
                      <p className="max-w-2xl text-sm leading-relaxed text-[var(--cream-muted)] md:text-base">
                        {localized?.description ?? step.description}
                      </p>
                    </div>

                    <div className="process-row-meta">
                      <span className="text-xs font-bold text-[var(--cream-dim)]">
                        {isRtl ? `الخطوة ${index + 1}` : `Step ${index + 1}`}
                      </span>
                      <span className="process-row-icon">
                        <Icon className="h-5 w-5 text-[var(--cream)]" strokeWidth={1.6} />
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
