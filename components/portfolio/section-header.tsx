"use client";

import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  step: string;
  eyebrow: string;
  title: string;
  description: string;
  revealed: boolean;
  className?: string;
};

export function SectionHeader({
  step,
  eyebrow,
  title,
  description,
  revealed,
  className,
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        "relative mb-12 md:mb-16 max-w-6xl mx-auto",
        className
      )}
    >
      <div
        className={cn(
          "flex flex-col md:flex-row md:items-stretch items-center md:items-stretch gap-6 md:gap-10 transition-all duration-1000 ease-out [transition-property:opacity,transform,filter]",
          revealed
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 [filter:blur(3px)]"
        )}
      >
        <div
          className="shrink-0 flex flex-col items-center md:items-start gap-1 md:gap-2 md:min-w-[4.5rem] md:pt-1"
          aria-hidden
        >
          <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-cosmic-blue/[0.15] font-mono tabular-nums leading-none tracking-tight">
            {step}
          </span>
          <div className="hidden md:block w-px h-10 bg-gradient-to-b from-cosmic-blue/40 to-transparent" />
        </div>

        <div className="flex-1 min-w-0 text-center md:text-left space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full border border-cosmic-blue/30 bg-cosmic-blue/5 text-cosmic-blue text-sm font-mono tracking-widest">
            {eyebrow}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-silver text-balance">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl md:max-w-none leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </header>
  );
}
