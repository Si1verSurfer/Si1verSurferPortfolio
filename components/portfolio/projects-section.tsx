"use client";

import { memo, useCallback, useEffect, useState } from "react";
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Monitor,
  Star,
  X,
  ZoomIn,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/portfolio/section-header";
import { ScrollSlide } from "@/components/portfolio/scroll-slide";
import { PROJECTS, getDefaultProjectImage } from "@/data/projects";
import type { Project } from "@/data/projects";
import { MobilePhoneMockup } from "./mobile-phone-mockup";
import { WebBrowserMockup } from "./web-browser-mockup";

const ImageLightbox = memo(function ImageLightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
  projectTitle,
  showInPhone = false,
}: {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  projectTitle: string;
  showInPhone?: boolean;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--bg)]/95"
      onClick={onClose}
    >
      <div className="pointer-events-none absolute inset-4 border-[3px] border-[var(--border)] md:inset-8" />
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 border-[3px] border-[var(--border)] bg-[var(--bg-card)] p-3 text-[var(--text)] shadow-[3px_3px_0_var(--accent)] transition hover:border-[var(--accent)] md:top-8 md:right-8"
        aria-label="Close"
      >
        <X className="w-6 h-6" />
      </button>
      <div className="absolute top-4 left-4 md:top-8 md:left-8 z-50">
        <h3 className="font-pixel text-[0.55rem] text-[var(--text)] md:text-[0.65rem]">{projectTitle}</h3>
        <p className="font-pixel-body text-lg text-[var(--text-muted)]">{currentIndex + 1} / {images.length}</p>
      </div>
      {images.length > 1 && (
        <>
          <button onClick={(e) => { e.stopPropagation(); onPrev(); }} className="absolute left-4 top-1/2 z-50 -translate-y-1/2 border-[3px] border-[var(--border)] bg-[var(--bg-card)] p-4 text-[var(--text)] shadow-[3px_3px_0_var(--accent)] transition hover:border-[var(--accent)] md:left-8" aria-label="Previous">
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); onNext(); }} className="absolute right-4 top-1/2 z-50 -translate-y-1/2 border-[3px] border-[var(--border)] bg-[var(--bg-card)] p-4 text-[var(--text)] shadow-[3px_3px_0_var(--accent)] transition hover:border-[var(--accent)] md:right-8" aria-label="Next">
            <ChevronRight className="w-8 h-8" />
          </button>
        </>
      )}
      <div className="relative w-full h-full max-w-6xl max-h-[80vh] mx-4 md:mx-16 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
        {showInPhone ? (
          <div className="scale-90 md:scale-100">
            <MobilePhoneMockup src={images[currentIndex]} alt={`${projectTitle} ${currentIndex + 1}`} showBadge badgeLabel="App screen" priority sizes="(max-width: 1024px) 90vw, 400px" />
          </div>
        ) : (
          <div className="relative w-full h-full">
            <Image src={images[currentIndex]} alt={`${projectTitle} ${currentIndex + 1}`} fill sizes="(max-width: 1024px) 100vw, 1152px" className="object-contain" priority />
          </div>
        )}
      </div>
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 border-[3px] border-[var(--border)] bg-[var(--bg-card)] p-2 shadow-[3px_3px_0_var(--accent)] md:bottom-8">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                const d = i - currentIndex;
                if (d > 0) for (let j = 0; j < d; j++) onNext();
                else if (d < 0) for (let j = 0; j < Math.abs(d); j++) onPrev();
              }}
              className={`relative h-14 w-14 overflow-hidden border-[2px] transition-all md:h-16 md:w-16 ${i === currentIndex ? "border-[var(--accent)] shadow-[2px_2px_0_var(--accent)]" : "border-[var(--border)] opacity-50 hover:opacity-100"}`}
            >
              <Image src={img} alt="" fill sizes="64px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
});

const ProjectRow = memo(function ProjectRow({
  project,
  index,
  onImageClick,
  imageOnLeft,
}: {
  project: Project;
  index: number;
  onImageClick: (projectId: number, imageIndex: number) => void;
  imageOnLeft: boolean;
}) {
  const [currentImage, setCurrentImage] = useState(
    "defaultImageIndex" in project && typeof project.defaultImageIndex === "number"
      ? Math.min(project.defaultImageIndex, project.images.length - 1)
      : 0
  );

  const next = () => setCurrentImage((p) => (p + 1) % project.images.length);
  const prev = () => setCurrentImage((p) => (p - 1 + project.images.length) % project.images.length);

  const defaultShot = getDefaultProjectImage(project);

  const imageBlock = (
    <div className="group/image relative min-h-[260px] w-full flex-shrink-0 overflow-hidden border-b-[3px] border-[var(--border)] bg-[var(--bg-2)] sm:min-h-[320px] lg:min-h-[340px] lg:w-[48%] lg:border-b-0 lg:border-r-[3px]">
      <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
        {project.is_mobile_app ? (
          <>
            <div className="flex w-full items-center justify-center lg:hidden">
              <MobilePhoneMockup
                src={project.images[currentImage]}
                alt={`${project.title} screen ${currentImage + 1}`}
                showBadge
                badgeLabel="Flutter · iOS & Android"
                priority={index === 0}
                sizes="(max-width: 1024px) 90vw, 400px"
              />
            </div>
            <div className="relative hidden h-full min-h-[260px] w-full max-w-md overflow-hidden lg:block">
              <Image
                src={project.images[currentImage] ?? defaultShot}
                alt={project.title}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1280px) 45vw, 520px"
                priority={index === 0}
              />
            </div>
          </>
        ) : (
          <WebBrowserMockup
            src={project.images[currentImage]}
            alt={`${project.title}`}
            showBadge
            badgeLabel="Web"
            priority={index === 0}
            sizes="(max-width: 1024px) 100vw, 520px"
            aspectRatio="16/10"
          />
        )}
      </div>
      {project.images.length > 1 && (
        <>
          <button type="button" onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-2 top-1/2 z-10 -translate-y-1/2 border-[3px] border-[var(--color-dark)] bg-[var(--bg-primary)] p-2 shadow-[2px_2px_0_var(--color-dark)]" aria-label="Previous">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button type="button" onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-2 top-1/2 z-10 -translate-y-1/2 border-[3px] border-[var(--color-dark)] bg-[var(--bg-primary)] p-2 shadow-[2px_2px_0_var(--color-dark)]" aria-label="Next">
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
            {project.images.map((_, i) => (
              <button key={i} type="button" onClick={(e) => { e.stopPropagation(); setCurrentImage(i); }} className={`h-2 border-[2px] border-[var(--color-dark)] transition-all ${i === currentImage ? "w-6 bg-[var(--color-accent)]" : "w-2 bg-[var(--bg-primary)]"}`} aria-label={`Screen ${i + 1}`} />
            ))}
          </div>
        </>
      )}
      <button
        type="button"
        onClick={() => onImageClick(project.id, currentImage)}
        className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 border-[2px] border-[var(--color-dark)] bg-[var(--bg-primary)] px-2.5 py-1.5 font-pixel text-[0.4rem] uppercase tracking-wider shadow-[2px_2px_0_var(--color-dark)]"
      >
        <ZoomIn className="w-3.5 h-3.5" />
        Expand
      </button>
    </div>
  );

  const contentBlock = (
    <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
      <div className="flex items-center gap-3 flex-wrap mb-3">
        {project.is_featured && (
          <span className="skill-chip inline-flex items-center gap-1.5 text-[var(--color-accent)]">
            <Star className="h-3 w-3 fill-[var(--color-accent)]" /> Featured
          </span>
        )}
        <span className="font-pixel text-[0.45rem] uppercase tracking-wider text-[var(--text-muted)]">
          {project.role}
        </span>
        {project.is_mobile_app && (
          <span className="skill-chip inline-flex items-center gap-1">
            <Smartphone className="h-3 w-3" /> Mobile
          </span>
        )}
        {!project.is_mobile_app && (
          <span className="skill-chip inline-flex items-center gap-1">
            <Monitor className="h-3 w-3" /> Web
          </span>
        )}
      </div>
      <h3 className="font-pixel mb-3 text-[0.65rem] leading-relaxed text-[var(--text-primary)] sm:text-[0.75rem]">
        {project.title}
      </h3>
      <p className="font-pixel-body mb-5 line-clamp-3 text-lg leading-relaxed text-[var(--text-muted)]">
        {project.description}
      </p>
      <div className="mb-6 flex flex-wrap gap-2">
        {project.tech_stack.map((tech) => (
          <span key={tech} className="skill-chip">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Link href={`/projects/${project.slug}`} className="pixel-btn">
          View case study
          <ArrowRight className="h-4 w-4" />
        </Link>
        <a
          href={project.project_url}
          target="_blank"
          rel="noopener noreferrer"
          className="pixel-btn-outline"
          aria-label="View code"
        >
          <Github className="h-4 w-4" />
          Code
        </a>
        <a
          href={project.project_url}
          target="_blank"
          rel="noopener noreferrer"
          className="pixel-btn-outline"
          aria-label="Live demo"
        >
          <ExternalLink className="h-4 w-4" />
          Demo
        </a>
      </div>
    </div>
  );

  return (
    <article className="pixel-card-project group/project grid scroll-mt-24 grid-cols-1 items-stretch gap-0 overflow-hidden lg:grid-cols-[1fr_1fr]">
      {imageOnLeft ? (
        <>
          {imageBlock}
          {contentBlock}
        </>
      ) : (
        <>
          <div className="order-2 lg:order-1">{contentBlock}</div>
          <div className="order-1 lg:order-2">{imageBlock}</div>
        </>
      )}
    </article>
  );
});

const GRID_STYLE = {
  backgroundImage:
    "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.025) 3px, rgba(255,255,255,0.025) 4px), repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(255,255,255,0.025) 3px, rgba(255,255,255,0.025) 4px)",
  backgroundSize: "4px 4px",
} as const;

export const ProjectsSection = memo(function ProjectsSection() {
  const [lightbox, setLightbox] = useState<{ isOpen: boolean; projectId: number | null; imageIndex: number }>({
    isOpen: false,
    projectId: null,
    imageIndex: 0,
  });

  const currentProject = PROJECTS.find((p) => p.id === lightbox.projectId);
  const openLightbox = useCallback((projectId: number, imageIndex: number) => {
    setLightbox({ isOpen: true, projectId, imageIndex });
  }, []);
  const closeLightbox = useCallback(() => setLightbox((s) => ({ ...s, isOpen: false, projectId: null, imageIndex: 0 })), []);
  const nextImage = useCallback(() => {
    setLightbox((prev) => {
      const p = PROJECTS.find((x) => x.id === prev.projectId);
      if (!p) return prev;
      return { ...prev, imageIndex: (prev.imageIndex + 1) % p.images.length };
    });
  }, []);
  const prevImage = useCallback(() => {
    setLightbox((prev) => {
      const p = PROJECTS.find((x) => x.id === prev.projectId);
      if (!p) return prev;
      return { ...prev, imageIndex: (prev.imageIndex - 1 + p.images.length) % p.images.length };
    });
  }, []);

  return (
    <>
      <section id="projects" className="section-ribbon pixel-section relative py-20 sm:py-24 md:py-32">
        <div className="absolute inset-0 opacity-40" style={GRID_STYLE} />

        <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
          <SectionHeader
            eyebrow="Work"
            title="Selected projects"
            description="From mobile and AI to full-stack platforms — each case study goes deeper on architecture and delivery."
          />

          <div className="space-y-8 md:space-y-10">
            {PROJECTS.map((project, index) => (
              <ScrollSlide
                key={project.id}
                from={index % 2 === 0 ? "left" : "right"}
                delay={index * 55}
              >
                <ProjectRow
                  project={project}
                  index={index}
                  onImageClick={openLightbox}
                  imageOnLeft={index % 2 === 0}
                />
              </ScrollSlide>
            ))}
          </div>

          <ScrollSlide from="right" delay={200} className="mt-14 flex justify-center">
            <a
              href="https://github.com/Si1verSurfer"
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-btn-outline"
            >
              <Github className="w-5 h-5" />
              View all on GitHub
              <ExternalLink className="w-4 h-4 opacity-70" />
            </a>
          </ScrollSlide>
        </div>
      </section>

      {lightbox.isOpen && currentProject && (
        <ImageLightbox
          images={currentProject.images}
          currentIndex={lightbox.imageIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
          projectTitle={currentProject.title}
          showInPhone={currentProject.is_mobile_app}
        />
      )}
    </>
  );
});
