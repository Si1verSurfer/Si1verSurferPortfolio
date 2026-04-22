"use client";

import { PortfolioProvider } from "@/context/portfolio-context";
import { LenisSmoothScroll } from "@/components/portfolio/lenis-smooth-scroll";
import { EditorialScrollDock } from "@/components/portfolio/editorial-scroll-dock";

export function PortfolioProviders({ children }: { children: React.ReactNode }) {
  return (
    <LenisSmoothScroll>
      <PortfolioProvider>
        {children}
        <EditorialScrollDock />
      </PortfolioProvider>
    </LenisSmoothScroll>
  );
}
