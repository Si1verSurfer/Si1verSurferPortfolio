"use client";

import { useEffect, useState } from "react";
import { useScrollState } from "@/context/portfolio-context";

/**
 * Bottom readout: scroll progress, subtle copy, and a gradient line.
 */
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
        className="mx-auto flex max-w-6xl items-end justify-between gap-4 rounded-t-2xl border border-b-0 border-zinc-800/60 bg-zinc-950/50 px-4 pb-3 pt-3 backdrop-blur-xl sm:px-6 sm:pb-4 sm:pt-3.5"
        style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      >
        <div
          className={`max-w-[min(100%,14rem)] font-mono text-[10px] uppercase leading-tight tracking-[0.4em] text-zinc-500 transition-opacity duration-500 ${
            atEnd || reduced ? "opacity-40" : "opacity-100"
          }`}
        >
          {atEnd ? (
            "Thanks for visiting"
          ) : (
            <>
              progress
              <span className="mt-0.5 block text-[0.65rem] font-normal normal-case tracking-normal text-zinc-600">
                explore the work
              </span>
            </>
          )}
        </div>
        <div className="shrink-0 text-right">
          <span
            className="font-mono text-[0.7rem] tabular-nums text-lime-300/90 sm:text-xs"
            style={reduced ? undefined : { transition: "opacity 0.2s" }}
          >
            {pct}
            <span className="text-zinc-600">%</span>
          </span>
        </div>
      </div>
      <div className="h-px w-full bg-zinc-800/90">
        <div
          className="h-full origin-left bg-gradient-to-r from-violet-500/70 via-lime-400/80 to-cyan-500/50"
          style={{
            width: `${pct}%`,
            transition: reduced
              ? "none"
              : "width 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />
      </div>
    </div>
  );
}
