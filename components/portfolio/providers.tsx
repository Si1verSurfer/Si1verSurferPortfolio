"use client";

import { PortfolioProvider } from "@/context/portfolio-context";
import { LanguageProvider } from "@/context/language-context";
import { LocaleSync } from "@/components/portfolio/locale-sync";

export function PortfolioProviders({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <PortfolioProvider>
        <LocaleSync />
        {children}
      </PortfolioProvider>
    </LanguageProvider>
  );
}
