"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

const profile = {
  name: "Bashar Rizk",
  alias: "Si1ver Surfer",
  title: "SOFTWARE ENGINEER",
  summary:
    "Software Engineer and AI Specialist with a strong foundation in Flutter, Node.js, and Go. Programming since age 15, I have delivered 8+ cross-platform mobile applications and a specialized AI system for medical diagnostics. Expert in building scalable, user-centric architectures using Clean Architecture, GetX, and BLOC.",
  images: {
    profile_picture: "https://raw.githubusercontent.com/Si1verSurfer/my_port_images_db/main/projects/my_images/IMG_9374%202.JPG",
    animation_image: "https://raw.githubusercontent.com/Si1verSurfer/my_port_images_db/main/projects/my_images/IMG_9960.JPG",
  },
};

function CosmicParticle({ delay, duration, size, left, top }: { delay: number; duration: number; size: number; left: string; top: string }) {
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
}

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

function ElectricFlash() {
  return (
    <div className="absolute inset-0 pointer-events-none z-20">
      <div className="absolute inset-0 bg-cosmic-blue/30 animate-[flash_0.15s_ease-out]" />
      <div className="absolute inset-0">
        {/* Lightning bolts */}
        <svg className="absolute w-full h-full" viewBox="0 0 200 200">
          <path
            d="M100,0 L95,60 L110,55 L90,100 L105,95 L85,140 L100,135 L80,200"
            fill="none"
            stroke="url(#lightning-gradient)"
            strokeWidth="3"
            className="animate-[lightning_0.15s_ease-out]"
          />
          <path
            d="M120,0 L115,50 L130,45 L110,90 L125,85 L105,130"
            fill="none"
            stroke="url(#lightning-gradient)"
            strokeWidth="2"
            className="animate-[lightning_0.1s_0.05s_ease-out]"
          />
          <defs>
            <linearGradient id="lightning-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4a9fff" />
              <stop offset="50%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentImage, setCurrentImage] = useState(0);
  const [isFlashing, setIsFlashing] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const profileImages = [profile.images.profile_picture, profile.images.animation_image];

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 50,
          y: (e.clientY - rect.top - rect.height / 2) / 50,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Electric image transition effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlashing(true);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % profileImages.length);
        setTimeout(() => {
          setIsFlashing(false);
        }, 150);
      }, 100);
    }, 4000);

    return () => clearInterval(interval);
  }, [profileImages.length]);

  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    delay: Math.random() * 5,
    duration: 2 + Math.random() * 3,
    size: 1 + Math.random() * 3,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
  }));

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cosmic-gradient pt-20"
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
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        {/* Glowing orb behind name */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cosmic-blue/5 blur-[100px] animate-pulse-glow" />

        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Profile Image with Electric Transition */}
          <div className="relative w-40 h-40 md:w-52 md:h-52 mx-auto mb-8">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cosmic-blue via-cosmic-cyan to-cosmic-blue opacity-50 blur-xl animate-pulse" />
            
            {/* Electric border */}
            <div className="absolute inset-0 rounded-full border-2 border-cosmic-blue/50 animate-pulse-glow" />
            
            {/* Image container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-cosmic-blue/30">
              {profileImages.map((img, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-100 ${
                    currentImage === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`Profile ${index + 1}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              ))}
              
              {/* Electric flash overlay */}
              {isFlashing && <ElectricFlash />}
            </div>
            
            {/* Floating particles around image */}
            <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-cosmic-cyan/50 animate-bounce" style={{ animationDelay: "0s" }} />
            <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-cosmic-blue/50 animate-bounce" style={{ animationDelay: "0.5s" }} />
            <div className="absolute top-1/2 -right-4 w-2 h-2 rounded-full bg-silver/50 animate-bounce" style={{ animationDelay: "1s" }} />
          </div>

          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cosmic-blue/30 bg-cosmic-blue/5 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-cosmic-cyan animate-pulse" />
            <span className="text-sm text-silver font-mono tracking-wider">
              AVAILABLE FOR HIRE
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-2 tracking-tighter animate-text-reveal">
            <span className="text-gradient-silver inline-block hover:scale-105 transition-transform duration-500">{profile.name}</span>
          </h1>
          
          {/* Alias */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-cosmic-blue/50" />
            <span className="text-sm md:text-base font-mono text-cosmic-cyan tracking-widest animate-pulse-soft">
              {profile.alias}
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-cosmic-blue/50" />
          </div>

          {/* Title with glitch effect on hover */}
          <div className="group inline-block">
            <h2 className="text-lg md:text-xl lg:text-2xl font-mono tracking-[0.3em] text-cosmic-blue mb-8 group-hover:animate-[glitch_0.3s_ease-in-out] animate-tracking-in">
              {profile.title}
            </h2>
          </div>

          {/* Summary */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
            {profile.summary}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href="#projects"
              className="group relative px-8 py-4 rounded-lg bg-cosmic-blue/10 border border-cosmic-blue/50 text-silver-bright font-semibold overflow-hidden transition-all duration-300 hover:bg-cosmic-blue/20 hover:border-cosmic-blue hover:shadow-[0_0_30px_rgba(74,159,255,0.3)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 animate-shimmer" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-lg border border-silver/30 text-silver font-semibold transition-all duration-300 hover:bg-silver/10 hover:border-silver/50"
            >
              Get In Touch
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/Si1verSurfer"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border bg-card/50 text-muted-foreground hover:text-cosmic-blue hover:border-cosmic-blue/50 hover:bg-cosmic-blue/10 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/bashar-rizq/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border bg-card/50 text-muted-foreground hover:text-cosmic-blue hover:border-cosmic-blue/50 hover:bg-cosmic-blue/10 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:bashar772004@gmail.com"
              className="p-3 rounded-full border border-border bg-card/50 text-muted-foreground hover:text-cosmic-blue hover:border-cosmic-blue/50 hover:bg-cosmic-blue/10 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground font-mono tracking-wider">
          SCROLL
        </span>
        <ChevronDown className="w-5 h-5 text-cosmic-blue" />
      </div>

      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-cosmic-blue/20" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-cosmic-blue/20" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-cosmic-blue/20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-cosmic-blue/20" />
    </section>
  );
}
