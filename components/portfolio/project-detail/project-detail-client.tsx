"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  Github,
  Smartphone,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/projects";
import { getRelatedProjects, projectThumbClass } from "@/data/projects";
import { SiteNav } from "@/components/portfolio/site-nav";
import { SiteBackdrop } from "@/components/portfolio/site-backdrop";
import { ContactFooter } from "@/components/portfolio/contact-footer";
import { useLanguage } from "@/context/language-context";
import { duration, easeOutExpo } from "@/lib/motion";

export function ProjectDetailClient({ project }: { project: Project }) {
  const { t, isRtl } = useLanguage();
  const reduced = useReducedMotion();
  const localized = t.work.projects[project.slug];
  const related = getRelatedProjects(project.slug, 3);

  const description = localized?.description ?? project.description;
  const role = localized?.role ?? project.role;
  const categoriesLabel =
    localized?.categories ?? project.categories.join(" · ");

  return (
    <>
      <SiteBackdrop />
      <SiteNav />
      <div className="page-frame pt-24">
        <main className="page-shell overflow-x-hidden pb-4">
          <div className="site-container section-pad !pb-8">
            <motion.article
              className="pd-board"
              initial={reduced ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: duration.reveal, ease: easeOutExpo }}
            >
              <Link
                href="/#work"
                className="pd-back link-arrow inline-flex items-center gap-2 text-sm font-semibold"
              >
                <ArrowLeft className={`h-4 w-4 ${isRtl ? "rotate-180" : ""}`} />
                {t.projectDetail.back}
              </Link>

              <div className="pd-hero">
                <div className="pd-copy">
                  <div className="pd-kicker">
                    <span className="section-kicker-line !bg-[var(--navy)]/25" aria-hidden />
                    <p className="eyebrow !mb-0 !text-[var(--navy)]/45">
                      {t.projectDetail.overview}
                    </p>
                  </div>

                  <h1 className="pd-title">{project.title}</h1>
                  <p className="pd-desc">{description}</p>

                  <div className="pd-meta-grid">
                    <div className="pd-meta-cell">
                      <span className="pd-meta-label">{t.projectDetail.role}</span>
                      <span className="pd-meta-value">{role}</span>
                    </div>
                    <div className="pd-meta-cell">
                      <span className="pd-meta-label">{t.projectDetail.categories}</span>
                      <span className="pd-meta-value">{categoriesLabel}</span>
                    </div>
                  </div>

                  <div className="pd-actions">
                    {project.app_store_url ? (
                      <a
                        href={project.app_store_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        <Smartphone className="h-4 w-4" />
                        {t.projectDetail.appStore}
                      </a>
                    ) : (
                      <a
                        href={project.project_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        <Github className="h-4 w-4" />
                        {t.projectDetail.github}
                      </a>
                    )}
                    <Link href="/#contact" className="btn-outline">
                      {t.projectDetail.contact}
                      <ArrowUpRight className={`h-4 w-4 ${isRtl ? "-scale-x-100" : ""}`} />
                    </Link>
                  </div>

                  <div className="pd-stack">
                    <h2 className="pd-stack-label">{t.projectDetail.techStack}</h2>
                    <div className="pd-stack-chips">
                      {project.tech_stack.map((tech) => (
                        <span key={tech} className="wk-tech">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pd-showcase">
                  <div className="pd-showcase-frame">
                    <div className="pd-showcase-glow" aria-hidden />
                    <div
                      className={`pd-showcase-media ${project.imageFit === "contain" ? "pd-showcase-media-wide" : ""}`}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className={
                          project.imageFit === "contain"
                            ? "pd-showcase-img pd-showcase-img-contain"
                            : "pd-showcase-img"
                        }
                        sizes="(max-width: 1024px) 100vw, 480px"
                        quality={90}
                        priority
                      />
                    </div>
                    {project.app_store_url ? (
                      <a
                        href={project.app_store_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pd-store-badge"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        {t.work.liveOnStore}
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="pd-more">
                <div className="pd-more-head">
                  <h2 className="pd-more-title">{t.projectDetail.moreTitle}</h2>
                  <span className="wk-list-line" aria-hidden />
                </div>
                <div className="pd-more-grid">
                  {related.map((item) => {
                    const itemLocalized = t.work.projects[item.slug];
                    return (
                      <Link
                        key={item.slug}
                        href={`/projects/${item.slug}`}
                        className="pd-more-card group"
                      >
                        <div
                          className={`pd-more-media ${item.imageFit === "contain" ? "wk-tile-media--contain" : ""}`}
                        >
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className={projectThumbClass(item)}
                            sizes="(max-width: 640px) 100vw, 280px"
                            quality={80}
                          />
                          <div className="wk-tile-shade" />
                          <span className="wk-tile-go">
                            <ArrowUpRight
                              className={`h-3.5 w-3.5 ${isRtl ? "-scale-x-100" : ""}`}
                            />
                          </span>
                        </div>
                        <div className="pd-more-body">
                          <h3 className="pd-more-name">{item.title}</h3>
                          <p className="pd-more-cat">
                            {itemLocalized?.categories ??
                              item.categories.join(" · ")}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.article>
          </div>
          <ContactFooter />
        </main>
      </div>
    </>
  );
}
