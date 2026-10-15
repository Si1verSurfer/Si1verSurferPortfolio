"use client";

import { Toaster } from "sonner";
import { PortfolioProvider } from "@/context/portfolio-context";
import { LanguageProvider } from "@/context/language-context";
import { LocaleSync } from "@/components/portfolio/locale-sync";

export function PortfolioProviders({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <PortfolioProvider>
        <LocaleSync />
        {children}
        <Toaster richColors closeButton position="top-center" theme="light" />
      </PortfolioProvider>
    </LanguageProvider>
  );
}
