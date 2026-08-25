import { SiteNav } from "@/components/portfolio/site-nav";
import { SiteBackdrop } from "@/components/portfolio/site-backdrop";
import { HeroSection } from "@/components/portfolio/hero-section";
import { AboutSection } from "@/components/portfolio/about-section";
import { StatsBar } from "@/components/portfolio/stats-bar";
import { WorkSection } from "@/components/portfolio/work-section";
import { CapabilitiesSection } from "@/components/portfolio/capabilities-section";
import { ProcessSection } from "@/components/portfolio/process-section";
import { ContactFooter } from "@/components/portfolio/contact-footer";

export function PortfolioHome() {
  return (
    <>
      <SiteBackdrop />
      <SiteNav />
      <main className="overflow-x-hidden">
        <HeroSection />
        <StatsBar />
        <AboutSection />
        <WorkSection />
        <CapabilitiesSection />
        <ProcessSection />
        <ContactFooter />
      </main>
    </>
  );
}
