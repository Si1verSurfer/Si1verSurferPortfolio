"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Smartphone,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { MobilePhoneMockup } from "../mobile-phone-mockup";

export function MobileProjectDetail({ project }: { project: Project }) {
  const [currentImage, setCurrentImage] = useState(
    "defaultImageIndex" in project && typeof project.defaultImageIndex === "number"
      ? Math.min(project.defaultImageIndex, project.images.length - 1)
      : 0
  );

  const next = () =>
    setCurrentImage((i) => (i + 1) % project.images.length);
  const prev = () =>
    setCurrentImage((i) => (i - 1 + project.images.length) % project.images.length);

  return (
    <div className="min-h-screen bg-zinc-950 pb-20 sm:pb-24">
      {/* App-style header */}
      <header className="sticky top-0 z-50 border-b border-border/80 bg-card/90 backdrop-blur-xl">
        <div className="flex items-center justify-between h-14 px-4 sm:px-6">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-silver hover:text-lime-400 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="text-sm font-medium hidden sm:inline">Back to portfolio</span>
          </Link>
          <div className="flex items-center gap-2">
            <Smartphone className="h-5 w-5 text-teal-400" />
            <span className="text-sm font-mono text-muted-foreground">Mobile App</span>
          </div>
        </div>
      </header>

      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16">
        {/* Hero: device + title */}
        <section className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-16 md:mb-24">
          <div className="flex-1 order-2 lg:order-1 text-center lg:text-left">
            {project.is_featured && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-lime-400/40 bg-lime-400/10 text-lime-400 text-xs font-mono tracking-wider mb-4 animate-glow-pulse">
                <Star className="h-3 w-3 fill-lime-400" />
                FEATURED
              </span>
            )}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gradient-silver mb-3">
              {project.title}
            </h1>
            <p className="text-muted-foreground font-mono text-sm md:text-base mb-6">
              {project.role} · Native cross-platform
            </p>
            <p className="text-silver-bright/90 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              {project.description}
            </p>
          </div>

          {/* Phone mockup - main hero */}
          <div className="flex-shrink-0 order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-lime-400/20 via-transparent to-teal-400/20 rounded-full blur-3xl animate-pulse-soft" />
              <MobilePhoneMockup
                src={project.images[currentImage]}
                alt={`${project.title} screen ${currentImage + 1}`}
                showBadge={true}
                badgeLabel="Flutter · iOS & Android"
                priority
                sizes="(max-width: 768px) 260px, 320px"
              />
            </div>
          </div>
        </section>

        {/* Screens gallery - horizontal scroll / carousel */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-sm font-mono text-lime-400 tracking-wider mb-6">
            APP SCREENS
          </h2>
          <div className="relative">
            {project.images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-card/90 border border-border hover:border-lime-400/50 text-silver hover:text-lime-400 transition-all -translate-x-2 md:translate-x-0"
                  aria-label="Previous screen"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-card/90 border border-border hover:border-lime-400/50 text-silver hover:text-lime-400 transition-all translate-x-2 md:translate-x-0"
                  aria-label="Next screen"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
            <div className="flex gap-6 overflow-x-auto pb-4 px-2 md:px-12 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-border">
            {project.images.map((src, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentImage(i)}
                className={`flex-shrink-0 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                  currentImage === i
                    ? "border-lime-400 shadow-[0_0_30px_rgba(163,230,53,0.3)] scale-[1.02]"
                    : "border-border/50 hover:border-lime-400/40 opacity-80 hover:opacity-100"
                }`}
              >
                <div className="w-[180px] sm:w-[220px] aspect-[9/19.5] relative bg-muted/30">
                  <Image
                    src={src}
                    alt={`Screen ${i + 1}`}
                    fill
                    sizes="220px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="py-2 text-center">
                  <span className="text-xs font-mono text-muted-foreground">
                    Screen {i + 1}
                  </span>
                </div>
              </button>
            ))}
            </div>
            <div className="flex justify-center gap-1.5 mt-4">
              {project.images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrentImage(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentImage ? "w-8 bg-teal-400" : "w-2 bg-silver/40 hover:bg-silver/60"
                  }`}
                  aria-label={`Go to screen ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Tech + CTA */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-border bg-card/40 p-6 md:p-8 backdrop-blur-sm">
            <h2 className="text-sm font-mono text-lime-400 tracking-wider mb-4">
              TECH STACK
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tech_stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm rounded-lg bg-lime-400/10 text-lime-400 border border-lime-400/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card/40 p-6 md:p-8 backdrop-blur-sm flex flex-col justify-center gap-3">
            <a
              href={project.project_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-lime-400/20 border border-lime-400/40 text-lime-400 font-medium hover:bg-lime-400/30 hover:border-lime-400/60 transition-all"
            >
              <Github className="h-5 w-5" />
              View Code
            </a>
            <a
              href={project.project_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-border text-silver font-medium hover:bg-secondary/50 hover:border-silver/40 transition-all"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
            <Link
              href="/#projects"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-border/60 text-muted-foreground hover:text-silver hover:border-silver/40 transition-all"
            >
              <ArrowLeft className="h-4 w-4" />
              All Projects
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
