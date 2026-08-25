"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { useLanguage } from "@/context/language-context";
import { portfolioProfile } from "@/data/profile";

export function WorkSection() {
  const { t, isRtl } = useLanguage();
  const featured = PROJECTS.filter((p) => p.is_featured).slice(0, 2);
  const rest = PROJECTS.filter((p) => !featured.some((f) => f.slug === p.slug));

  return (
    <section
      id="work"
      className="section-pad relative scroll-mt-28 overflow-hidden border-t border-[var(--border)]"
    >
      <div className="section-glow pointer-events-none absolute inset-0" aria-hidden />

      <div className="site-container relative">
        <header className="mb-12 grid gap-8 md:mb-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <div className="section-kicker mb-4">
              <span className="section-kicker-line" aria-hidden />
              <p className="eyebrow !mb-0">{t.work.eyebrow}</p>
            </div>
            <h2 className="section-title mb-4">{t.work.title}</h2>
            <p className="section-intro max-w-xl">{t.work.subtitle}</p>
          </div>

          <div className="flex flex-wrap items-center gap-4 lg:justify-end">
            <div className="work-count-pill">
              <span className="text-2xl font-extrabold text-[var(--cream)]">{PROJECTS.length}</span>
              <span className="text-sm font-semibold text-[var(--cream-dim)]">
                {t.work.countLabel}
              </span>
            </div>
            <a
              href={portfolioProfile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline !px-5 !py-2.5"
            >
              {t.work.explore}
              <ArrowUpRight className={`h-4 w-4 ${isRtl ? "-scale-x-100" : ""}`} />
            </a>
          </div>
        </header>

        {/* Two featured projects */}
        <div className="mb-6 grid gap-5 md:mb-8 lg:grid-cols-2">
          {featured.map((project, index) => {
            const localized = t.work.projects[project.slug];
            return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="work-featured group overflow-hidden"
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-[var(--navy-soft)]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="project-thumb object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={90}
                    priority={index === 0}
                  />
                  <div className="work-featured-overlay absolute inset-0" />
                  <div className="absolute start-4 top-4 flex items-center gap-2">
                    <span className="rounded-full border border-[var(--border-strong)] bg-[var(--navy)]/75 px-3 py-1 text-xs font-bold text-[var(--cream)] backdrop-blur-md">
                      {t.work.featuredLabel}
                    </span>
                    <span className="rounded-full border border-[var(--border)] bg-[var(--navy)]/55 px-2.5 py-1 text-xs font-bold text-[var(--cream-dim)] backdrop-blur-md">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                <div className="work-featured-panel flex flex-col gap-5 p-6 md:p-7">
                  <div>
                    <p className="mb-2 text-sm font-semibold text-[var(--cream-dim)]">
                      {localized?.categories ?? project.categories.join(" · ")}
                    </p>
                    <h3 className="text-2xl font-extrabold leading-tight text-[var(--cream)] md:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--cream-muted)] md:text-base">
                      {localized?.description ?? project.description}
                    </p>
                  </div>

                  <div>
                    <p className="mb-2.5 text-xs font-bold text-[var(--cream-dim)]">{t.work.techLabel}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech_stack.map((tech) => (
                        <span key={tech} className="tech-chip">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4 border-t border-[var(--border)] pt-4">
                    <span className="text-sm font-semibold text-[var(--cream-muted)]">
                      {localized?.role ?? project.role}
                    </span>
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-[var(--cream)]">
                      {t.work.viewProject}
                      <span className="arrow-circle flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-strong)]">
                        <ArrowUpRight className={`h-4 w-4 ${isRtl ? "-scale-x-100" : ""}`} />
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Remaining projects */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {rest.map((project, index) => {
            const localized = t.work.projects[project.slug];
            return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="work-item group"
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-[var(--navy-soft)]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="project-thumb object-cover object-top"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    quality={85}
                    loading="lazy"
                  />
                  <div className="work-item-overlay absolute inset-0" />
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-4">
                    <span className="rounded-full border border-[var(--border-strong)] bg-[var(--navy)]/65 px-3 py-1 text-xs font-semibold text-[var(--cream-muted)] backdrop-blur-md">
                      {localized?.role ?? project.role}
                    </span>
                    <span className="arrow-circle flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--navy)]/55 text-[var(--cream)] backdrop-blur-md">
                      <ArrowUpRight className={`h-3.5 w-3.5 ${isRtl ? "-scale-x-100" : ""}`} />
                    </span>
                  </div>
                </div>

                <div className="work-item-body">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="text-lg font-bold text-[var(--cream)] md:text-xl">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-[var(--cream-dim)]">
                        {localized?.categories ?? project.categories.join(" · ")}
                      </p>
                    </div>
                    <span className="mt-1 shrink-0 text-xs font-bold text-[var(--cream-dim)]">
                      {String(index + 3).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-[var(--cream-muted)]">
                    {localized?.description ?? project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech_stack.slice(0, 3).map((tech) => (
                      <span key={tech} className="tech-chip !px-2.5 !py-1 !text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
