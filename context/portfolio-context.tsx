"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  type ReactNode,
} from "react";
import { SECTION_IDS, type SectionId } from "@/data/translations";
import { getNavOffset } from "@/lib/scroll-to-section";

type ScrollState = {
  activeSection: SectionId | "";
  isScrolled: boolean;
};

type ScrollAction =
  | { type: "SET_ACTIVE"; payload: SectionId | "" }
  | { type: "SET_SCROLLED"; payload: boolean };

const ScrollContext = createContext<ScrollState | null>(null);

const INITIAL_SCROLL: ScrollState = {
  activeSection: "home",
  isScrolled: false,
};

function scrollReducer(state: ScrollState, action: ScrollAction): ScrollState {
  switch (action.type) {
    case "SET_ACTIVE":
      return state.activeSection === action.payload
        ? state
        : { ...state, activeSection: action.payload };
    case "SET_SCROLLED":
      return state.isScrolled === action.payload
        ? state
        : { ...state, isScrolled: action.payload };
    default:
      return state;
  }
}

function ScrollProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(scrollReducer, INITIAL_SCROLL);
  const ratiosRef = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    const onScroll = () => {
      dispatch({ type: "SET_SCROLLED", payload: window.scrollY > 48 });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratiosRef.current.set(entry.target.id, entry.intersectionRatio);
        });

        let bestId: SectionId | "" = "";
        let bestRatio = 0;

        for (const id of SECTION_IDS) {
          const ratio = ratiosRef.current.get(id) ?? 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        }

        if (bestId && bestRatio > 0) {
          dispatch({ type: "SET_ACTIVE", payload: bestId });
        }
      },
      {
        threshold: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9],
        rootMargin: `-${getNavOffset() - 24}px 0px -42% 0px`,
      }
    );

    const observeSections = () => {
      observer.disconnect();
      ratiosRef.current.clear();
      SECTION_IDS.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    };

    observeSections();
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", observeSections, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", observeSections);
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
