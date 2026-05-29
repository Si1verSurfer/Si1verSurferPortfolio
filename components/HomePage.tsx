"use client";

import { useState } from "react";
import PixelHero from "@/components/PixelHero";
import { IntroVideo } from "@/components/IntroVideo";
import { Navigation } from "@/components/portfolio/navigation";
import { SkillsSection } from "@/components/portfolio/skills-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { Footer } from "@/components/portfolio/footer";

export function HomePage() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {!introDone && <IntroVideo onComplete={() => setIntroDone(true)} />}
      {introDone && <Navigation />}
      <main
        className={`min-h-screen overflow-x-hidden bg-background pb-20 transition-opacity duration-500 sm:pb-24 ${
          introDone ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!introDone}
      >
        <PixelHero />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
