"use client";

import { useEffect } from "react";
import { useLanguage } from "@/context/language-context";

export function LocaleSync() {
  const { locale, isRtl } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
  }, [locale, isRtl]);

  return null;
}
