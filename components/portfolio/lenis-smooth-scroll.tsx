"use client";

import { type ReactNode, useEffect, useRef } from "react";
import Lenis from "lenis";

import "lenis/dist/lenis.css";

type LenisSmoothScrollProps = { children: ReactNode };

/**
 * Inertial smooth scrolling. Lenis syncs to rAF; respects reduced motion via
 * `prefers-reduced-motion: reduce` (duration ~0) so content stays immediately reachable.
 */
export function LenisSmoothScroll({ children }: LenisSmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const lenis = new Lenis({
      duration: prefersReduced ? 0 : 1.12,
      ...(!prefersReduced
        ? {
            easing: (t: number) => 1 - Math.pow(1 - t, 2.75),
          }
        : {}),
      smoothWheel: !prefersReduced,
      touchMultiplier: 1.05,
      wheelMultiplier: 0.92,
    });
    lenisRef.current = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
