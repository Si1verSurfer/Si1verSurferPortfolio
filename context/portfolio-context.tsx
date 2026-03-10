"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useReducer,
  useState,
  type ReactNode,
} from "react";

const SCROLL_THROTTLE_MS = 80;
const SECTION_IDS = ["skills", "projects", "contact"] as const;
type SectionId = (typeof SECTION_IDS)[number];

// ---- Scroll state (single listener, memoized value to reduce re-renders) ----
type ScrollState = {
  scrollProgress: number;
  activeSection: string;
  isScrolled: boolean;
};

const ScrollContext = createContext<ScrollState | null>(null);

const INITIAL_SCROLL: ScrollState = {
  scrollProgress: 0,
  activeSection: "",
  isScrolled: false,
};

function ScrollProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useReducer(
    (prev: ScrollState, next: ScrollState) =>
      prev.scrollProgress === next.scrollProgress &&
      prev.activeSection === next.activeSection &&
      prev.isScrolled === next.isScrolled
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
          const y = window.scrollY;
          const docHeight =
            document.documentElement.scrollHeight - window.innerHeight;
          const scrollProgress =
            docHeight > 0 ? Math.min((y / docHeight) * 100, 100) : 0;
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
          setState({
            scrollProgress,
            activeSection,
            isScrolled: y > 50,
          });
        });
        return;
      }
      lastRun.current = now;
      const y = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress =
        docHeight > 0 ? Math.min((y / docHeight) * 100, 100) : 0;
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
      setState({
        scrollProgress,
        activeSection,
        isScrolled: y > 50,
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const value = useMemo(() => state, [state.scrollProgress, state.activeSection, state.isScrolled]);
  return (
    <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
  );
}

export function useScrollState(): ScrollState {
  const ctx = useContext(ScrollContext);
  if (!ctx) throw new Error("useScrollState must be used within PortfolioProvider");
  return ctx;
}

// ---- Section visibility: single reducer (one re-render per observer tick) ----
type SectionVisibility = Record<SectionId, boolean>;
type SectionRatio = Record<SectionId, number>;

type SectionState = {
  visible: SectionVisibility;
  ratio: SectionRatio;
};

const defaultVisibility: SectionVisibility = {
  skills: false,
  projects: false,
  contact: false,
};

const defaultRatio: SectionRatio = {
  skills: 0,
  projects: 0,
  contact: 0,
};

const INITIAL_SECTION: SectionState = {
  visible: defaultVisibility,
  ratio: defaultRatio,
};

type SectionAction =
  | { type: "UPDATE"; payload: { id: SectionId; isIntersecting: boolean; ratio: number }[] };

function sectionReducer(state: SectionState, action: SectionAction): SectionState {
  if (action.type !== "UPDATE") return state;
  let visibleChanged = false;
  let ratioChanged = false;
  const nextVisible = { ...state.visible };
  const nextRatio = { ...state.ratio };
  for (const { id, isIntersecting, ratio } of action.payload) {
    if (!SECTION_IDS.includes(id)) continue;
    if (nextVisible[id] !== isIntersecting) {
      nextVisible[id] = isIntersecting;
      visibleChanged = true;
    }
    if (nextRatio[id] !== ratio) {
      nextRatio[id] = ratio;
      ratioChanged = true;
    }
  }
  if (!visibleChanged && !ratioChanged) return state;
  return { visible: nextVisible, ratio: nextRatio };
}

const SectionVisibilityContext = createContext<SectionVisibility | null>(null);
const SectionRatioContext = createContext<SectionRatio | null>(null);

function SectionVisibilityProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(sectionReducer, INITIAL_SECTION);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const observedRef = useRef<Map<string, Element>>(new Map());

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const payload = entries.map((e) => ({
          id: e.target.id as SectionId,
          isIntersecting: e.isIntersecting,
          ratio: e.intersectionRatio,
        }));
        dispatch({ type: "UPDATE", payload });
      },
      { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], rootMargin: "0px 0px -5% 0px" }
    );
    const observer = observerRef.current;

    const t = setInterval(() => {
      SECTION_IDS.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const current = observedRef.current.get(id);
        if (current === el) return;
        observedRef.current.set(id, el);
        observer.observe(el);
      });
    }, 150);

    return () => {
      clearInterval(t);
      observer.disconnect();
      observerRef.current = null;
      observedRef.current.clear();
    };
  }, []);

  const visibleValue = useMemo(() => state.visible, [state.visible]);
  const ratioValue = useMemo(() => state.ratio, [state.ratio]);

  return (
    <SectionVisibilityContext.Provider value={visibleValue}>
      <SectionRatioContext.Provider value={ratioValue}>
        {children}
      </SectionRatioContext.Provider>
    </SectionVisibilityContext.Provider>
  );
}

export function useSectionVisibility(id: SectionId): boolean {
  const ctx = useContext(SectionVisibilityContext);
  if (!ctx) return false;
  return ctx[id] ?? false;
}

export function useSectionVisibilityRatio(id: SectionId): number {
  const ctx = useContext(SectionRatioContext);
  if (!ctx) return 0;
  return ctx[id] ?? 0;
}

export function useAllSectionVisibility(): SectionVisibility {
  const ctx = useContext(SectionVisibilityContext);
  if (!ctx) return defaultVisibility;
  return ctx;
}

// ---- Mobile menu (stable setOpen reference) ----
type MobileMenuState = {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
};

const MobileMenuContext = createContext<MobileMenuState | null>(null);

function MobileMenuProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const value = useMemo(
    () => ({ isOpen, setOpen }),
    [isOpen]
  );
  return (
    <MobileMenuContext.Provider value={value}>
      {children}
    </MobileMenuContext.Provider>
  );
}

export function useMobileMenu(): MobileMenuState {
  const ctx = useContext(MobileMenuContext);
  if (!ctx) throw new Error("useMobileMenu must be used within PortfolioProvider");
  return ctx;
}

// ---- Combined provider ----
export function PortfolioProvider({ children }: { children: ReactNode }) {
  return (
    <ScrollProvider>
      <SectionVisibilityProvider>
        <MobileMenuProvider>{children}</MobileMenuProvider>
      </SectionVisibilityProvider>
    </ScrollProvider>
  );
}
