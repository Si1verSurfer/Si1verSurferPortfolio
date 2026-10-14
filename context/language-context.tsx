"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { type Locale, translations } from "@/data/translations";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (typeof translations)["en"];
  isRtl: boolean;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "portfolio-locale";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ar");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fromQuery = params.get("lang");
    const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
    const initial =
      fromQuery === "en" || fromQuery === "ar"
        ? fromQuery
        : saved === "en" || saved === "ar"
          ? saved
          : null;
    if (initial) setLocaleState(initial);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(STORAGE_KEY, next);
    const url = new URL(window.location.href);
    url.searchParams.set("lang", next);
    window.history.replaceState({}, "", url.toString());
  }, []);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: translations[locale],
      isRtl: locale === "ar",
    }),
    [locale, setLocale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
