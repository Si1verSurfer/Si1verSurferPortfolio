"use client";

import { useCallback, useRef } from "react";

/**
 * Returns a throttled callback. Uses requestAnimationFrame for smooth updates
 * when suitable (e.g. scroll/mouse), or a time-based throttle.
 */
export function useThrottle<T extends (...args: unknown[]) => void>(
  callback: T,
  delayMs: number
): T {
  const lastRun = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  return useCallback(
    ((...args: Parameters<T>) => {
      const now = Date.now();
      const remaining = delayMs - (now - lastRun.current);

      if (remaining <= 0) {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
        lastRun.current = now;
        callback(...args);
      } else if (!timeoutRef.current) {
        timeoutRef.current = setTimeout(() => {
          lastRun.current = Date.now();
          timeoutRef.current = null;
          callback(...args);
        }, remaining);
      }
    }) as T,
    [callback, delayMs]
  );
}
