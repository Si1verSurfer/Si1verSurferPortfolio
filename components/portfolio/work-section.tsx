"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { PROJECTS } from "@/data/projects";
import { useLanguage } from "@/context/language-context";
import { portfolioProfile } from "@/data/profile";
import { duration, easeOutExpo } from "@/lib/motion";

export function WorkSection() {
  const { t, isRtl } = useLanguage();
  const reduced = useReducedMotion();
  const featured = PROJECTS.filter((p) => p.is_featured).slice(0, 2);
  const rest = PROJECTS.filter((p) => !featured.some((f) => f.slug === p.slug));

  return (
    <section
      id="work"
      className="section-pad relative scroll-mt-28 overflow-x-hidden border-t border-[var(--border)]"
    >
      <div className="section-glow pointer-events-none absolute inset-0" aria-hidden />

      <div className="site-container relative">
        <motion.div
          className="wk-board"
          initial={false}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: duration.reveal, ease: easeOutExpo }}
        >
          <header className="wk-head">
            <div className="min-w-0">
              <div className="section-kicker mb-3">
                <span className="section-kicker-line !bg-[var(--navy)]/25" aria-hidden />
                <p className="eyebrow !mb-0 !text-[var(--navy)]/45">{t.work.eyebrow}</p>
              </div>
              <h2 className="wk-title">{t.work.title}</h2>
              <p className="wk-subtitle">{t.work.subtitle}</p>
            </div>

            <div className="wk-actions">
              <div className="wk-count">
                <span className="wk-count-num">{PROJECTS.length}</span>
                <span className="wk-count-label">{t.work.countLabel}</span>
              </div>
              <a
                href={portfolioProfile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="wk-ghost-btn"
              >
                {t.work.explore}
                <ArrowUpRight className={`h-3.5 w-3.5 ${isRtl ? "-scale-x-100" : ""}`} />
              </a>
            </div>
          </header>

          {/* Featured showcase */}
          <div className="wk-featured">
            {featured.map((project, index) => {
              const localized = t.work.projects[project.slug];
              const primary = index === 0;

              return (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className={`wk-hero group ${primary ? "wk-hero-primary" : "wk-hero-secondary"}`}
                >
                  <div className="wk-hero-media">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="project-thumb object-cover object-top"
                      sizes={
                        primary
                          ? "(max-width: 1024px) 100vw, 66vw"
                          : "(max-width: 1024px) 100vw, 34vw"
                      }
                      quality={90}
                      priority={primary}
                    />
                    <div className="wk-hero-shade" />
                    <div className="wk-hero-badges">
                      <span className="wk-badge wk-badge-accent">{t.work.featuredLabel}</span>
                      <span className="wk-badge">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                  </div>

                  <div className="wk-hero-body">
                    <p className="wk-cat">
                      {localized?.categories ?? project.categories.join(" · ")}
                    </p>
                    <div className="wk-hero-row">
                      <div className="min-w-0 flex-1">
                        <h3 className="wk-hero-title">{project.title}</h3>
                        <p className="wk-hero-desc">
                          {localized?.description ?? project.description}
                        </p>
                      </div>
                      <span className="wk-go" aria-hidden>
                        <ArrowUpRight className={`h-4 w-4 ${isRtl ? "-scale-x-100" : ""}`} />
                      </span>
                    </div>

                    <div className="wk-meta">
                      <span className="wk-role">{localized?.role ?? project.role}</span>
                      <div className="wk-techs">
                        {project.tech_stack.slice(0, primary ? 4 : 3).map((tech) => (
                          <span key={tech} className="wk-tech">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Compact modern grid */}
          <div className="wk-list-head">
            <p className="wk-list-label">{t.work.countLabel}</p>
            <span className="wk-list-line" aria-hidden />
          </div>

          <div className="wk-mosaic">
            {rest.map((project, index) => {
              const localized = t.work.projects[project.slug];

              return (
                <motion.div
                  key={project.slug}
                  initial={false}
                  whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    delay: reduced ? 0 : index * 0.04,
                    duration: 0.45,
                    ease: easeOutExpo,
                  }}
                >
                  <Link href={`/projects/${project.slug}`} className="wk-tile group">
                    <div className="wk-tile-media">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="project-thumb object-cover object-top"
                        sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
                        quality={85}
                        loading="lazy"
                      />
                      <div className="wk-tile-shade" />
                      <span className="wk-tile-index">{String(index + 3).padStart(2, "0")}</span>
                      <span className="wk-tile-go">
                        <ArrowUpRight className={`h-3.5 w-3.5 ${isRtl ? "-scale-x-100" : ""}`} />
                      </span>
                    </div>

                    <div className="wk-tile-body">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="wk-tile-title">{project.title}</h3>
                      </div>
                      <p className="wk-tile-cat">
                        {localized?.categories ?? project.categories.join(" · ")}
                      </p>
                      <p className="wk-tile-desc">
                        {localized?.description ?? project.description}
                      </p>
                      <div className="wk-tile-foot">
                        <span className="wk-role">{localized?.role ?? project.role}</span>
                        <div className="wk-techs">
                          {project.tech_stack.slice(0, 2).map((tech) => (
                            <span key={tech} className="wk-tech">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
