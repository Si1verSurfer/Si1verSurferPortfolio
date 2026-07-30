"use client";

import { PortfolioProvider } from "@/context/portfolio-context";

export function PortfolioProviders({ children }: { children: React.ReactNode }) {
  return <PortfolioProvider>{children}</PortfolioProvider>;
}
