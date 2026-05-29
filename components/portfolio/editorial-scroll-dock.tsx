"use client";

import { useEffect, useState } from "react";
import { useScrollState } from "@/context/portfolio-context";

export function EditorialScrollDock() {
  const { scrollProgress } = useScrollState();
  const [reduced, setReduced] = useState(false);
  const pct = Math.min(100, Math.max(0, Math.round(scrollProgress)));
  const atEnd = pct >= 99;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const h = () => setReduced(mq.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);

  return (
    <div
      className="pointer-events-none fixed bottom-0 left-0 right-0 z-30 select-none"
      aria-hidden
    >
      <div
        className="mx-auto flex max-w-6xl items-end justify-between gap-4 border-[3px] border-b-0 border-[var(--color-dark)] bg-[var(--bg-secondary)] px-4 pb-3 pt-3 sm:px-6 sm:pb-4"
        style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      >
        <div
          className={`font-pixel max-w-[min(100%,14rem)] text-[0.45rem] uppercase leading-relaxed tracking-[0.12em] text-[var(--text-muted)] ${
            atEnd || reduced ? "opacity-50" : "opacity-100"
          }`}
        >
          {atEnd ? "Thanks for visiting" : "Scroll · explore the work"}
        </div>
        <div className="font-pixel shrink-0 text-[0.55rem] tabular-nums text-[var(--color-accent)]">
          {pct}%
        </div>
      </div>
      <div className="h-1 w-full bg-[var(--color-dark)]">
        <div
          className="h-full origin-left bg-[var(--color-accent)]"
          style={{
            width: `${pct}%`,
            transition: reduced ? "none" : "width 0.2s ease-out",
          }}
        />
      </div>
    </div>
  );
}
