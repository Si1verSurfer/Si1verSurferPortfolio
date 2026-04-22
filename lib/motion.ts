/**
 * Shared motion tokens — editorial “fast finish” curves and tuned springs.
 * Use these so scroll, hover, and hero motion feel consistent, not generic.
 */

/** Primary ease: strong deceleration, no bounce (common in premium product UIs) */
export const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Slightly softer exit for large blocks */
export const easeOutSoft: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const duration = {
  /** Section content entering the viewport */
  reveal: 0.88,
  /** Opacity-only (faster than motion) */
  fade: 0.45,
} as const;

/** Nav pill / small UI — weighted, no wobble */
export const springNav = { type: "spring" as const, stiffness: 380, damping: 34, mass: 0.55 };

/** Cards lift on hover — tight, controlled */
export const springCard = { type: "spring" as const, stiffness: 420, damping: 36, mass: 0.45 };

/** Project rows — subtle press / lift */
export const springProject = { type: "spring" as const, stiffness: 300, damping: 32, mass: 0.55 };
