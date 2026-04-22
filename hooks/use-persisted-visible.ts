"use client";

import { useEffect, useState } from "react";

/** Once `isVisible` is true, stays true — use for scroll-in animations that should not vanish when the section leaves the viewport. */
export function usePersistedVisible(isVisible: boolean): boolean {
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (isVisible) setSeen(true);
  }, [isVisible]);
  return seen;
}
