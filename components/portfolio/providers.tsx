"use client";

import { PortfolioProvider } from "@/context/portfolio-context";
import { LenisSmoothScroll } from "@/components/portfolio/lenis-smooth-scroll";

export function PortfolioProviders({ children }: { children: React.ReactNode }) {
  return (
    <LenisSmoothScroll>
      <PortfolioProvider>{children}</PortfolioProvider>
    </LenisSmoothScroll>
  );
}
