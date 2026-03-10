"use client";

import { useCallback, useRef, useState } from "react";

/**
 * State that updates on requestAnimationFrame to avoid layout thrashing
 * and reduce re-renders during scroll/mouse move.
 */
export function useRafState<T>(initial: T): [T, (value: T | ((prev: T) => T)) => void] {
  const [state, setState] = useState<T>(initial);
  const rafRef = useRef<number | null>(null);
  const pendingRef = useRef<T | ((prev: T) => T) | null>(null);

  const setRafState = useCallback((value: T | ((prev: T) => T)) => {
    pendingRef.current = value;
    if (rafRef.current !== null) return;

    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const pending = pendingRef.current;
      if (pending !== null) {
        pendingRef.current = null;
        setState((prev) =>
          typeof pending === "function" ? (pending as (prev: T) => T)(prev) : pending
        );
      }
    });
  }, []);

  return [state, setRafState];
}
