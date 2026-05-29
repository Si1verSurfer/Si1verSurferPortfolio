"use client";

import { cn } from "@/lib/utils";
import { ScrollSlide } from "@/components/portfolio/scroll-slide";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
};

export function SectionHeader({ eyebrow, title, description, className }: SectionHeaderProps) {
  return (
    <header className={cn("relative mb-14 max-w-6xl md:mb-20", className)}>
      <ScrollSlide from="up" delay={0}>
        <div className="space-y-4 text-center md:text-left">
          <p className="section-eyebrow">{eyebrow}</p>
          <h2 className="section-title">{title}</h2>
          <p className="max-w-2xl text-pretty text-[1.3rem] leading-relaxed text-[var(--text-muted)] md:max-w-none">
            {description}
          </p>
        </div>
      </ScrollSlide>
      <div className="pixel-divider" role="separator" />
    </header>
  );
}
