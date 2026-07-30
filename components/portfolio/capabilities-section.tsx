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

const ICON_MAP: Record<string, LucideIcon> = {
  smartphone: Smartphone,
  monitor: Monitor,
  server: Server,
  brain: Brain,
  layers: Layers,
  boxes: Boxes,
};

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="section-pad scroll-mt-24 border-t border-[var(--border)]">
      <div className="site-container">
        <div className="mb-12 md:mb-16">
          <p className="eyebrow mb-3">Expertise</p>
          <h2 className="section-title">Capabilities & Tools</h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {CAPABILITIES.map((item) => {
              const Icon = ICON_MAP[item.icon] ?? Layers;
              return (
                <article key={item.title} className="surface-card p-6">
                  <Icon className="mb-4 h-5 w-5 text-[var(--cream-dim)]" strokeWidth={1.5} />
                  <h3 className="font-display text-base font-semibold uppercase tracking-wide text-[var(--cream)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--cream-muted)]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="space-y-6">
            <div className="surface-card p-6">
              <h3 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-[var(--cream)]">
                Tools & Technologies
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {TOOLS.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-[var(--border)] px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[var(--cream-muted)]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="surface-card p-6">
              <h3 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-[var(--cream)]">
                Focus Areas
              </h3>
              <ul className="mt-5 space-y-4 text-sm leading-relaxed text-[var(--cream-muted)]">
                <li>Cross-platform mobile apps with Flutter</li>
                <li>Full-stack web platforms with React & Next.js</li>
                <li>Applied AI systems and production deployment</li>
                <li>Clean architecture and scalable product delivery</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
