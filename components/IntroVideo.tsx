"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { portfolioProfile } from "@/data/profile";
import { mountPixelScene } from "@/lib/pixel-scene";

const INTRO_MS = 4800;
const SESSION_KEY = "portfolio-intro-seen";

type IntroVideoProps = {
  onComplete: () => void;
};

export function IntroVideo({ onComplete }: IntroVideoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<"playing" | "exiting" | "done">("playing");
  const [progress, setProgress] = useState(0);
  const finishedRef = useRef(false);

  const finish = useCallback((immediate = false) => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    if (immediate) {
      setPhase("done");
      onComplete();
      return;
    }
    setPhase("exiting");
    window.setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 700);
  }, [onComplete]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || sessionStorage.getItem(SESSION_KEY) === "1") {
      finish(true);
      return;
    }

    sessionStorage.setItem(SESSION_KEY, "1");
    document.body.style.overflow = "hidden";

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const scene = mountPixelScene(canvas, container, { scale: 4, animate: true });

    const start = performance.now();
    let raf = 0;
    const tickProgress = (now: number) => {
      const p = Math.min(1, (now - start) / INTRO_MS);
      setProgress(p);
      if (p >= 1) {
        finish();
        return;
      }
      raf = requestAnimationFrame(tickProgress);
    };
    raf = requestAnimationFrame(tickProgress);

    return () => {
      cancelAnimationFrame(raf);
      scene.destroy();
      document.body.style.overflow = "";
    };
  }, [finish]);

  useEffect(() => {
    if (phase === "exiting" || phase === "done") {
      document.body.style.overflow = "";
    }
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      className={`intro-video fixed inset-0 z-[200] flex flex-col bg-[var(--bg-primary)] transition-opacity duration-700 ${
        phase === "exiting" ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      role="dialog"
      aria-label="Portfolio intro"
    >
      <div ref={containerRef} className="absolute inset-0">
        <canvas
          ref={canvasRef}
          className="h-full w-full"
          style={{ imageRendering: "pixelated" }}
          aria-hidden
        />
      </div>

      <div className="intro-scanlines pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
        <p className="font-pixel mb-3 text-[0.5rem] uppercase tracking-[0.3em] text-[var(--color-accent)]">
          ▶ Boot sequence
        </p>
        <h1 className="font-pixel text-[clamp(0.75rem,3.5vw,1.25rem)] leading-[2] text-[var(--text-primary)]">
          {portfolioProfile.name}
        </h1>
        <p className="font-pixel-body mt-2 text-2xl text-[var(--color-accent-2)]">
          {portfolioProfile.alias}
        </p>
        <p className="font-pixel-body mt-1 text-xl text-[var(--text-muted)]">
          {portfolioProfile.title}
        </p>
      </div>

      <div className="relative z-10 px-6 pb-10 sm:px-10">
        <div className="mx-auto max-w-md border-[3px] border-[var(--color-dark)] bg-[var(--bg-secondary)] p-1 shadow-[4px_4px_0_var(--color-accent)]">
          <div
            className="h-3 bg-[var(--color-accent)] transition-[width] duration-100"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
        <p className="font-pixel mt-3 text-center text-[0.45rem] text-[var(--text-muted)]">
          LOADING PORTFOLIO… {Math.round(progress * 100)}%
        </p>
      </div>

      <button
        type="button"
        onClick={() => finish()}
        className="pixel-btn-outline absolute right-4 top-4 z-20 !text-[0.45rem] sm:right-6 sm:top-6"
      >
        Skip ▶
      </button>
    </div>
  );
}
