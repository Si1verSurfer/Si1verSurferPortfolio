import { SiteBackdrop } from "@/components/portfolio/site-backdrop";
import { Navigation } from "@/components/portfolio/navigation";
import { HeroSection } from "@/components/portfolio/hero-section";
import { SkillsSection } from "@/components/portfolio/skills-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { Footer } from "@/components/portfolio/footer";
export default function Portfolio() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background pb-20 sm:pb-24">
      <SiteBackdrop />
      <Navigation />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
