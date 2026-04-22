"use client";

import { ArrowLeft, ExternalLink, Github, Monitor, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { WebBrowserMockup } from "../web-browser-mockup";

export function WebProjectDetail({ project }: { project: Project }) {
  return (
    <div className="min-h-screen bg-zinc-950 pb-20 sm:pb-24">
      {/* Top nav bar - browser chrome style */}
      <header className="sticky top-0 z-50 border-b border-border/80 bg-card/80 backdrop-blur-xl">
        <div className="flex min-h-[48px] items-center gap-3 px-4 py-2 sm:px-6">
          <div className="flex shrink-0 gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="min-w-0 flex-1 rounded-lg border border-border/60 bg-deep-space/80 px-3 py-2">
            <span className="truncate text-xs font-mono text-muted-foreground">
              portfolio / projects / {project.slug}
            </span>
          </div>
          <Link
            href="/#projects"
            className="flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm text-silver hover:border-lime-400/50 hover:bg-lime-400/10 hover:text-lime-400 transition-all"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Back</span>
          </Link>
        </div>
      </header>

      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16">
        {/* Hero - large browser mockup */}
        <section className="mb-16 md:mb-24">
          <div className="flex flex-col items-center text-center mb-10">
            {project.is_featured && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-lime-400/40 bg-lime-400/10 text-lime-400 text-xs font-mono tracking-wider mb-4 animate-glow-pulse">
                <Star className="h-3 w-3 fill-lime-400" />
                FEATURED PROJECT
              </span>
            )}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gradient-silver mb-3">
              {project.title}
            </h1>
            <p className="text-muted-foreground font-mono text-sm md:text-base flex items-center gap-2">
              <Monitor className="h-4 w-4 text-lime-400" />
              Web Dashboard · {project.role}
            </p>
          </div>

          <div className="relative w-full max-w-5xl mx-auto">
            <div className="rounded-xl border border-border/80 bg-card/50 shadow-[0_0_0_1px_rgba(163,230,53,0.08),0_25px_80px_-20px_rgba(0,0,0,0.5)] overflow-hidden energy-border">
              <div className="flex min-h-[40px] items-center gap-2 border-b border-border/80 bg-muted/50 px-4 py-2.5">
                <div className="flex shrink-0 gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>
                <div className="min-w-0 flex-1 rounded-md border border-border/60 bg-deep-space/90 px-4 py-2">
                  <span className="text-xs font-mono text-muted-foreground">
                    https://{project.slug}.example.com/dashboard
                  </span>
                </div>
              </div>
              <div className="relative aspect-video w-full overflow-hidden bg-muted/30">
                <Image
                  src={project.images[0]}
                  alt={`${project.title} dashboard`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-space/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* Content grid: description + meta */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          <div className="lg:col-span-2 space-y-8">
            <div className="rounded-2xl border border-border bg-card/40 p-6 md:p-8 backdrop-blur-sm">
              <h2 className="text-sm font-mono text-lime-400 tracking-wider mb-4">
                OVERVIEW
              </h2>
              <p className="text-silver-bright leading-relaxed text-base md:text-lg">
                {project.description}
              </p>
            </div>

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
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card/40 p-6 backdrop-blur-sm sticky top-24">
              <h2 className="text-sm font-mono text-lime-400 tracking-wider mb-4">
                DETAILS
              </h2>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-muted-foreground font-mono">Role</dt>
                  <dd className="text-silver-bright font-medium">{project.role}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground font-mono">Type</dt>
                  <dd className="text-silver-bright font-medium">Web Application</dd>
                </div>
              </dl>
              <div className="mt-6 flex flex-col gap-3">
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
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
