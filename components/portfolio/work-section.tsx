"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";

export function WorkSection() {
  return (
    <section id="work" className="section-pad scroll-mt-24">
      <div className="site-container">
        <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-3">Portfolio</p>
            <h2 className="section-title">Featured Work</h2>
          </div>
          <a
            href="https://github.com/Si1verSurfer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[var(--cream-muted)] hover:text-[var(--cream)]"
          >
            Explore all projects
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PROJECTS.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group surface-card overflow-hidden transition hover:-translate-y-1 hover:border-[var(--border-strong)]"
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-[var(--navy-soft)]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
              </div>
              <div className="flex items-end justify-between gap-4 p-5">
                <div>
                  <h3 className="font-display text-lg font-semibold uppercase tracking-tight text-[var(--cream)]">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[var(--cream-dim)]">
                    {project.categories.join(" · ")}
                  </p>
                </div>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--border-strong)] text-[var(--cream)] transition group-hover:bg-[var(--cream)] group-hover:text-[var(--navy)]">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
