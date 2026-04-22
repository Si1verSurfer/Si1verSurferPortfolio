"use client";

import { type RefObject, useLayoutEffect, useState } from "react";

/**
 * Intersection-based visibility for any element.
 * @param once if true, visibility stays true after first entry (default).
 */
export function useInView<T extends Element>(
  ref: RefObject<T | null>,
  options: { rootMargin?: string; once?: boolean } = {}
): boolean {
  const { rootMargin = "0px 0px -5% 0px", once = true } = options;
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            if (once) obs.disconnect();
          } else if (!once) {
            setVisible(false);
          }
        }
      },
      { rootMargin, threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, rootMargin, once]);

  return visible;
}
