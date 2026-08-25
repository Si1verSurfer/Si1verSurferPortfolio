"use client";

import { Briefcase, Globe, Layers, Timer } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const ICONS = [Timer, Briefcase, Layers, Globe];

export function StatsBar() {
  const { t } = useLanguage();

  return (
    <section className="relative z-10 -mt-2 pb-2 md:-mt-4 md:pb-4">
      <div className="site-container">
        <div className="stats-panel grid grid-cols-2 overflow-hidden md:grid-cols-4">
          {t.stats.map((stat, index) => {
            const Icon = ICONS[index] ?? Timer;
            return (
              <div
                key={stat.label}
                className="hover-stat flex flex-col items-center border-[var(--border)] px-4 py-8 text-center md:px-6 md:py-10 [&:nth-child(odd)]:border-e md:[&:not(:last-child)]:border-e"
              >
                <Icon className="mb-3 h-5 w-5 text-[var(--cream-dim)]" strokeWidth={1.5} />
                <span className="text-3xl font-extrabold text-[var(--cream)] md:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-2 text-sm font-semibold text-[var(--cream-muted)]">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
