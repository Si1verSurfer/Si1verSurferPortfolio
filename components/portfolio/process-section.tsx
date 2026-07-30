import { Code2, PenLine, Rocket, Search, Target, type LucideIcon } from "lucide-react";
import { PROCESS_STEPS } from "@/data/capabilities";

const ICON_MAP: Record<string, LucideIcon> = {
  search: Search,
  target: Target,
  pen: PenLine,
  code: Code2,
  rocket: Rocket,
};

export function ProcessSection() {
  return (
    <section className="section-pad border-t border-[var(--border)]">
      <div className="site-container">
        <div className="mb-12 md:mb-16">
          <p className="eyebrow mb-3">Workflow</p>
          <h2 className="section-title">My Process</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {PROCESS_STEPS.map((step) => {
            const Icon = ICON_MAP[step.icon] ?? Search;
            return (
              <article key={step.step} className="surface-card p-6">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--cream-dim)]">
                    {step.step}
                  </span>
                  <Icon className="h-4 w-4 text-[var(--cream-dim)]" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-[var(--cream)]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--cream-muted)]">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
