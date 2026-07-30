import { STATS } from "@/data/capabilities";
import { Briefcase, Globe, Layers, Timer } from "lucide-react";

const ICONS = [Timer, Briefcase, Layers, Globe];

export function StatsBar() {
  return (
    <section className="border-y border-[var(--border)] bg-[var(--navy-light)]/35">
      <div className="site-container grid grid-cols-2 divide-x divide-y divide-[var(--border)] md:grid-cols-4 md:divide-y-0">
        {STATS.map((stat, index) => {
          const Icon = ICONS[index] ?? Timer;
          return (
            <div key={stat.label} className="hover-stat flex flex-col items-center px-4 py-8 text-center md:px-6 md:py-10">
              <Icon className="mb-4 h-5 w-5 text-[var(--cream-dim)]" strokeWidth={1.5} />
              <span className="font-display text-3xl font-semibold text-[var(--cream)] md:text-4xl">
                {stat.value}
              </span>
              <span className="mt-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--cream-muted)]">
                {stat.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
