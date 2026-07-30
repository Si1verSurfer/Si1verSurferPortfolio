"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useReducer,
  type ReactNode,
} from "react";

const SCROLL_THROTTLE_MS = 100;
const SECTION_IDS = ["about", "work", "capabilities", "contact"] as const;

type ScrollState = {
  activeSection: string;
  isScrolled: boolean;
};

const ScrollContext = createContext<ScrollState | null>(null);

const INITIAL_SCROLL: ScrollState = {
  activeSection: "",
  isScrolled: false,
};

function computeScrollState(): ScrollState {
  const y = window.scrollY;
  let activeSection = "";
  for (const id of SECTION_IDS) {
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= 120 && rect.bottom >= 120) {
        activeSection = id;
        break;
      }
    }
  }
  return {
    activeSection,
    isScrolled: y > 50,
  };
}

function ScrollProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useReducer(
    (prev: ScrollState, next: ScrollState) =>
      prev.activeSection === next.activeSection && prev.isScrolled === next.isScrolled
        ? prev
        : next,
    INITIAL_SCROLL
  );
  const rafRef = useRef<number | null>(null);
  const lastRun = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const now = Date.now();
      if (rafRef.current !== null) return;
      if (now - lastRun.current < SCROLL_THROTTLE_MS) {
        rafRef.current = requestAnimationFrame(() => {
          rafRef.current = null;
          lastRun.current = Date.now();
          setState(computeScrollState());
        });
        return;
      }
      lastRun.current = now;
      setState(computeScrollState());
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const value = useMemo(() => state, [state.activeSection, state.isScrolled]);
  return <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>;
}

export function useScrollState(): ScrollState {
  const ctx = useContext(ScrollContext);
  if (!ctx) throw new Error("useScrollState must be used within PortfolioProvider");
  return ctx;
}

export function PortfolioProvider({ children }: { children: ReactNode }) {
  return <ScrollProvider>{children}</ScrollProvider>;
}
