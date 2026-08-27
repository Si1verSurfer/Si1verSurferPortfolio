import { SiteNav } from "@/components/portfolio/site-nav";
import { SiteBackdrop } from "@/components/portfolio/site-backdrop";
import { SectionDots } from "@/components/portfolio/section-dots";
import { HeroSection } from "@/components/portfolio/hero-section";
import { AboutSection } from "@/components/portfolio/about-section";
import { StatsBar } from "@/components/portfolio/stats-bar";
import { WorkSection } from "@/components/portfolio/work-section";
import { ProofSection } from "@/components/portfolio/proof-section";
import { CapabilitiesSection } from "@/components/portfolio/capabilities-section";
import { ProcessSection } from "@/components/portfolio/process-section";
import { ContactFooter } from "@/components/portfolio/contact-footer";

/** Business funnel: hook → offers → proof → trust → method → depth → close */
export function PortfolioHome() {
  return (
    <>
      <SiteBackdrop />
      <SiteNav />
      <SectionDots />
      <div className="page-frame">
        <main className="page-shell overflow-x-hidden">
          <HeroSection />
          <StatsBar />
          <AboutSection />
          <WorkSection />
          <ProofSection />
          <ProcessSection />
          <CapabilitiesSection />
          <ContactFooter />
        </main>
      </div>
    </>
  );
}
