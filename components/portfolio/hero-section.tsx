"use client";

import Image from "next/image";
import { ArrowUpRight, Download } from "lucide-react";
import { portfolioProfile } from "@/data/profile";

export function HeroSection() {
  return (
    <section id="about" className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="site-container grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="relative z-10">
          <p className="eyebrow mb-6">Digital experiences that inspire</p>
          <h1 className="display-title mb-4 text-[var(--cream)]">{portfolioProfile.title}</h1>
          <p className="mb-6 font-display text-sm font-semibold uppercase tracking-[0.22em] text-[var(--cream-dim)]">
            {portfolioProfile.alias}
          </p>
          <p className="max-w-xl text-base leading-relaxed text-[var(--cream-muted)] md:text-lg">
            {portfolioProfile.summary}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#work" className="btn-primary">
              View my work
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/Si1verSurfer"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <Download className="h-4 w-4" />
              GitHub profile
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-2 top-8 hidden max-w-[11rem] rounded-2xl border border-[var(--border)] bg-[var(--navy-light)]/90 p-4 text-right backdrop-blur md:block">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[var(--cream-dim)]">
              Available for
            </p>
            <p className="mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--cream)]">
              New projects
            </p>
            <a href="#work" className="mt-3 inline-flex items-center gap-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[var(--cream-muted)] hover:text-[var(--cream)]">
              View projects
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[2rem] border border-[var(--border-strong)] bg-[var(--navy-light)] shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
            <Image
              src={portfolioProfile.avatarSrc}
              alt={portfolioProfile.name}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 420px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
