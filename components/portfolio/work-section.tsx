"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { PROJECTS } from "@/data/projects";
import {
  type ProjectFilterId,
  PROJECT_TAG_IDS,
  projectMatchesFilter,
} from "@/data/project-tags";
import { useLanguage } from "@/context/language-context";
import { portfolioProfile } from "@/data/profile";
import { duration, easeOutExpo, springNav } from "@/lib/motion";

function getFilterLabel(
  id: ProjectFilterId,
  work: (typeof import("@/data/translations"))["translations"]["en"]["work"]
): string {
  switch (id) {
    case "all":
      return work.filterAll;
    case "mobile":
      return work.filterMobile;
    case "web":
      return work.filterWeb;
    case "islamic":
      return work.filterIslamic;
    case "ecommerce":
      return work.filterEcommerce;
    case "live-store":
      return work.filterLiveStore;
    default:
      return work.filterAll;
  }
}

export function WorkSection() {
  const { t, isRtl } = useLanguage();
  const reduced = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState<ProjectFilterId>("all");

  const filteredProjects = useMemo(
    () => PROJECTS.filter((p) => projectMatchesFilter(p, activeFilter)),
    [activeFilter]
  );

  const featured = filteredProjects.filter((p) => p.is_featured).slice(0, 2);
  const rest = filteredProjects.filter((p) => !featured.some((f) => f.slug === p.slug));

  const filterOptions: ProjectFilterId[] = ["all", ...PROJECT_TAG_IDS];

  const stageTransition = reduced
    ? { duration: 0 }
    : { duration: duration.fade, ease: easeOutExpo };

  const gridContainerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: reduced ? 0 : 0.045,
        delayChildren: reduced ? 0 : 0.06,
      },
    },
  };

  const gridItemVariants = {
    initial: reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.42, ease: easeOutExpo },
    },
  };

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

          <div className="wk-filters" role="toolbar" aria-label={t.work.filterAll}>
            {filterOptions.map((id) => {
              const isActive = activeFilter === id;
              return (
                <button
                  key={id}
                  type="button"
                  className={`wk-filter-btn ${isActive ? "wk-filter-btn-active" : ""}`}
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(id)}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="work-filter-pill"
                      className="wk-filter-pill"
                      transition={springNav}
                      aria-hidden
                    />
                  ) : null}
                  <span className="relative z-[1]">{getFilterLabel(id, t.work)}</span>
                </button>
              );
            })}
            <span className="wk-filter-count">
              {t.work.showingCount}{" "}
              <motion.strong
                key={`${activeFilter}-${filteredProjects.length}`}
                initial={reduced ? false : { opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={stageTransition}
              >
                {filteredProjects.length}
              </motion.strong>{" "}
              / {PROJECTS.length}
            </span>
          </div>

          <div className="wk-projects-stage">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={activeFilter}
                initial={reduced ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? undefined : { opacity: 0, y: -10 }}
                transition={stageTransition}
              >
                {filteredProjects.length === 0 ? (
                  <motion.p
                    className="wk-filter-empty"
                    initial={reduced ? false : { opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={stageTransition}
                  >
                    {t.work.filterEmpty}
                  </motion.p>
                ) : null}

                {/* Featured showcase */}
                {featured.length > 0 ? (
                  <motion.div
                    className="wk-featured"
                    variants={gridContainerVariants}
                    initial="initial"
                    animate="animate"
                  >
                    {featured.map((project, index) => {
                      const localized = t.work.projects[project.slug];
                      const primary = index === 0;

                      return (
                        <motion.div key={project.slug} variants={gridItemVariants}>
                          <Link
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
                      {project.app_store_url ? (
                        <span className="wk-badge">{t.work.liveOnStore}</span>
                      ) : null}
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
                        </motion.div>
                      );
                    })}
                  </motion.div>
                ) : null}

                {/* Compact modern grid */}
                {rest.length > 0 ? (
                  <>
                    <div className="wk-list-head">
                      <p className="wk-list-label">{t.work.countLabel}</p>
                      <span className="wk-list-line" aria-hidden />
                    </div>

                    <motion.div
                      className="wk-mosaic"
                      variants={gridContainerVariants}
                      initial="initial"
                      animate="animate"
                    >
                      {rest.map((project) => {
                        const localized = t.work.projects[project.slug];
                        const catalogIndex = PROJECTS.findIndex((p) => p.slug === project.slug);

                        return (
                          <motion.div key={project.slug} variants={gridItemVariants}>
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
                      <span className="wk-tile-index">
                        {String(catalogIndex + 1).padStart(2, "0")}
                      </span>
                      {project.app_store_url ? (
                        <span className="wk-live-badge">{t.work.liveOnStore}</span>
                      ) : null}
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
                    </motion.div>
                  </>
                ) : null}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
