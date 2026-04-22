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
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-lime-400/90">
            {eyebrow}
          </p>
          <h2 className="font-display text-3xl font-semibold leading-[1.08] tracking-tight text-zinc-50 sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="max-w-2xl text-pretty text-base leading-relaxed text-zinc-500 md:max-w-none">
            {description}
          </p>
        </div>
      </ScrollSlide>
    </header>
  );
}
