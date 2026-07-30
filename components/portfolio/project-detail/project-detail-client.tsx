"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/data/projects";
import { SiteNav } from "@/components/portfolio/site-nav";
import { SiteBackdrop } from "@/components/portfolio/site-backdrop";

export function ProjectDetailClient({ project }: { project: Project }) {
  return (
    <>
      <SiteBackdrop />
      <SiteNav />
      <main className="min-h-screen pt-28 pb-20">
        <div className="site-container">
          <Link
            href="/#work"
            className="mb-8 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[var(--cream-muted)] hover:text-[var(--cream)]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to work
          </Link>

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="eyebrow mb-3">{project.role}</p>
              <h1 className="section-title mb-4">{project.title}</h1>
              <p className="text-base leading-relaxed text-[var(--cream-muted)]">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.categories.map((cat) => (
                  <span
                    key={cat}
                    className="rounded-full border border-[var(--border)] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[var(--cream-muted)]"
                  >
                    {cat}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={project.project_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <Github className="h-4 w-4" />
                  View on GitHub
                </a>
                <Link href="/#contact" className="btn-outline">
                  Start a project
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-10">
                <h2 className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[var(--cream-dim)]">
                  Tech stack
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.tech_stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--cream-muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="surface-card overflow-hidden">
              <div className="relative aspect-[16/11] w-full bg-[var(--navy-soft)]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
