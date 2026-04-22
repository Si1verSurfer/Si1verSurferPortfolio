"use client";

import { memo, useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { useRafState } from "@/hooks/use-raf-state";

const PROFILE = {
  name: "Bashar Rizk",
  alias: "Si1ver Surfer",
  title: "SOFTWARE ENGINEER",
  summary:
    "Software Engineer and AI Specialist with a strong foundation in Flutter, Node.js, and Go. Programming since age 15, I have delivered 8+ cross-platform mobile applications and a specialized AI system for medical diagnostics. Expert in building scalable, user-centric architectures using Clean Architecture, GetX, and BLOC.",
  image:
    "https://raw.githubusercontent.com/Si1verSurfer/my_port_images_db/main/projects/my_images/IMG_0769%20copy.jpg",
} as const;

const PARTICLE_COUNT = 50;

/** Deterministic "random" from index so server and client render identical particles (fixes hydration). */
function seeded(index: number, seed: number): number {
  const x = Math.sin(index * 12.9898 + seed * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

/** Pre-computed particle configs - same on server and client to avoid hydration mismatch. */
const PARTICLES = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
  id: i,
  delay: seeded(i, 1) * 5,
  duration: 2 + seeded(i, 2) * 3,
  size: 1 + seeded(i, 3) * 3,
  left: `${seeded(i, 4) * 100}%`,
  top: `${seeded(i, 5) * 100}%`,
}));

const CosmicParticle = memo(function CosmicParticle({
  delay,
  duration,
  size,
  left,
  top,
}: {
  delay: number;
  duration: number;
  size: number;
  left: string;
  top: string;
}) {
  return (
    <div
      className="absolute rounded-full bg-cosmic-blue/30"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left,
        top,
        animation: `star-twinkle ${duration}s ${delay}s infinite ease-in-out`,
      }}
    />
  );
});

function EnergyTrail() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute h-[2px] w-[200px] bg-gradient-to-r from-transparent via-cosmic-blue to-transparent opacity-50"
        style={{
          top: "30%",
          left: "10%",
          animation: "cosmic-trail 4s infinite ease-in-out",
        }}
      />
      <div
        className="absolute h-[2px] w-[150px] bg-gradient-to-r from-transparent via-cosmic-cyan to-transparent opacity-40"
        style={{
          top: "60%",
          right: "15%",
          animation: "cosmic-trail 5s 1s infinite ease-in-out",
        }}
      />
      <div
        className="absolute h-[2px] w-[180px] bg-gradient-to-r from-transparent via-silver to-transparent opacity-30"
        style={{
          top: "80%",
          left: "30%",
          animation: "cosmic-trail 6s 2s infinite ease-in-out",
        }}
      />
    </div>
  );
}

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useRafState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left - rect.width / 2) / 50,
        y: (e.clientY - rect.top - rect.height / 2) / 50,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [setMousePosition]);

  const particles = useMemo(() => PARTICLES, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-[120vh] flex items-center justify-center overflow-hidden bg-cosmic-gradient pt-24 pb-20"
    >
      {/* Cosmic background particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <CosmicParticle key={particle.id} {...particle} />
        ))}
      </div>

      {/* Energy trails */}
      <EnergyTrail />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050510_70%)]" />

      {/* Main content */}
      <div
        className="relative z-10 text-center px-6 max-w-6xl mx-auto section-transition py-8"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: "transform 0.3s ease-out, opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Glowing orb behind name */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] md:w-[900px] md:h-[900px] rounded-full bg-cosmic-blue/5 blur-[120px] animate-pulse-glow" />

        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Profile Image with Electric Transition */}
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 mx-auto mb-10">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cosmic-blue via-cosmic-cyan to-cosmic-blue opacity-50 blur-xl animate-pulse" />
            
            {/* Electric border */}
            <div className="absolute inset-0 rounded-full border-2 border-cosmic-blue/50 animate-pulse-glow" />
            
            {/* Image container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-cosmic-blue/30">
              <Image
                src={PROFILE.image}
                alt="Bashar Rizk"
                fill
                sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 256px, 288px"
                className="object-cover"
                priority
              />
            </div>
            
            {/* Floating particles around image */}
            <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-cosmic-cyan/50 animate-bounce" style={{ animationDelay: "0s" }} />
            <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-cosmic-blue/50 animate-bounce" style={{ animationDelay: "0.5s" }} />
            <div className="absolute top-1/2 -right-4 w-2 h-2 rounded-full bg-silver/50 animate-bounce" style={{ animationDelay: "1s" }} />
          </div>

          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-cosmic-blue/30 bg-cosmic-blue/5 mb-8 backdrop-blur-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-cosmic-cyan animate-pulse" />
            <span className="text-sm md:text-base text-silver font-mono tracking-wider">
              AVAILABLE FOR HIRE
            </span>
          </div>

          {/* Name */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-3 tracking-tighter animate-text-reveal">
            <span className="text-gradient-silver inline-block hover:scale-105 transition-transform duration-500">
              {PROFILE.name}
            </span>
          </h1>

          {/* Alias */}
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-cosmic-blue/50" />
            <span className="text-base md:text-lg font-mono text-cosmic-cyan tracking-widest animate-pulse-soft">
              {PROFILE.alias}
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-cosmic-blue/50" />
          </div>

          {/* Title with glitch effect on hover */}
          <div className="group inline-block">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-mono tracking-[0.3em] text-cosmic-blue mb-10 group-hover:animate-[glitch_0.3s_ease-in-out] animate-tracking-in">
              {PROFILE.title}
            </h2>
          </div>

          {/* Summary */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-14">
            {PROFILE.summary}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-5 mb-14">
            <a
              href="#projects"
              className="group relative px-10 py-5 rounded-xl bg-cosmic-blue/10 border border-cosmic-blue/50 text-silver-bright text-lg font-semibold overflow-hidden transition-all duration-300 hover:bg-cosmic-blue/20 hover:border-cosmic-blue hover:shadow-[0_0_30px_rgba(74,159,255,0.3)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 animate-shimmer" />
            </a>
            <a
              href="#contact"
              className="px-10 py-5 rounded-xl border border-silver/30 text-silver text-lg font-semibold transition-all duration-300 hover:bg-silver/10 hover:border-silver/50"
            >
              Get In Touch
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-8">
            <a
              href="https://github.com/Si1verSurfer"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full border border-border bg-card/50 text-muted-foreground hover:text-cosmic-blue hover:border-cosmic-blue/50 hover:bg-cosmic-blue/10 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/bashar-rizq/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full border border-border bg-card/50 text-muted-foreground hover:text-cosmic-blue hover:border-cosmic-blue/50 hover:bg-cosmic-blue/10 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:bashar772004@gmail.com"
              className="p-4 rounded-full border border-border bg-card/50 text-muted-foreground hover:text-cosmic-blue hover:border-cosmic-blue/50 hover:bg-cosmic-blue/10 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce">
        <span className="text-sm text-muted-foreground font-mono tracking-wider">
          SCROLL
        </span>
        <ChevronDown className="w-6 h-6 text-cosmic-blue" />
      </div>

      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-cosmic-blue/20" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-cosmic-blue/20" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-cosmic-blue/20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-cosmic-blue/20" />
    </section>
  );
}
