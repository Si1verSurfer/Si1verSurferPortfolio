"use client";

import {
  Boxes,
  Brain,
  Layers,
  Monitor,
  Server,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { CAPABILITIES, TOOLS } from "@/data/capabilities";
import { useLanguage } from "@/context/language-context";

const ICON_MAP: Record<string, LucideIcon> = {
  smartphone: Smartphone,
  monitor: Monitor,
  server: Server,
  brain: Brain,
  layers: Layers,
  boxes: Boxes,
};

export function CapabilitiesSection() {
  const { t } = useLanguage();

  return (
    <section
      id="capabilities"
      className="section-pad relative scroll-mt-28 overflow-hidden border-t border-[var(--border)]"
    >
      <div className="section-glow section-glow-alt pointer-events-none absolute inset-0" aria-hidden />

      <div className="site-container relative">
        <div className="mb-12 max-w-2xl md:mb-16">
          <div className="section-kicker mb-4">
            <span className="section-kicker-line" aria-hidden />
            <p className="eyebrow !mb-0">{t.capabilities.eyebrow}</p>
          </div>
          <h2 className="section-title mb-4">{t.capabilities.title}</h2>
          <p className="section-intro">{t.capabilities.subtitle}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:gap-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {CAPABILITIES.map((item, index) => {
              const Icon = ICON_MAP[item.icon] ?? Layers;
              const localized = t.capabilities.items[index];
              return (
                <article key={item.title} className="capability-card hover-card surface-card p-6 md:p-7">
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <div className="capability-icon-wrap">
                      <Icon className="capability-icon h-5 w-5 text-[var(--cream)]" strokeWidth={1.6} />
                    </div>
                    <span className="text-xs font-bold text-[var(--cream-dim)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[var(--cream)] md:text-lg">
                    {localized?.title ?? item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--cream-muted)]">
                    {localized?.description ?? item.description}
                  </p>
                </article>
              );
            })}
          </div>

          <aside className="space-y-5">
            <div className="side-panel hover-card surface-card p-6 md:p-7">
              <h3 className="text-base font-bold text-[var(--cream)]">{t.capabilities.toolsTitle}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {TOOLS.map((tool) => (
                  <span key={tool} className="tool-chip">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="side-panel side-panel-accent hover-card surface-card p-6 md:p-7">
              <h3 className="text-base font-bold text-[var(--cream)]">{t.capabilities.focusTitle}</h3>
              <ul className="mt-5 space-y-4">
                {t.capabilities.focusItems.map((item, i) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-[var(--cream-muted)]">
                    <span className="focus-index">{i + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
