"use client";

import { motion, useReducedMotion } from "framer-motion";
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
import { springProject } from "@/lib/motion";
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/95 backdrop-blur-xl"
      onClick={onClose}
    >
      <div className="pointer-events-none absolute inset-4 rounded-2xl border border-zinc-700/50 md:inset-8" />
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 rounded-full border border-zinc-700 bg-zinc-900/90 p-3 text-zinc-300 transition hover:border-lime-400/50 hover:text-lime-400 md:top-8 md:right-8"
        aria-label="Close"
      >
        <X className="w-6 h-6" />
      </button>
      <div className="absolute top-4 left-4 md:top-8 md:left-8 z-50">
        <h3 className="text-lg font-semibold text-zinc-100 md:text-xl">{projectTitle}</h3>
        <p className="text-sm text-muted-foreground font-mono">{currentIndex + 1} / {images.length}</p>
      </div>
      {images.length > 1 && (
        <>
          <button onClick={(e) => { e.stopPropagation(); onPrev(); }} className="absolute left-4 top-1/2 z-50 -translate-y-1/2 rounded-full border border-zinc-700 bg-zinc-900/90 p-4 text-zinc-200 transition hover:border-lime-400/50 hover:text-lime-400 md:left-8" aria-label="Previous">
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); onNext(); }} className="absolute right-4 top-1/2 z-50 -translate-y-1/2 rounded-full border border-zinc-700 bg-zinc-900/90 p-4 text-zinc-200 transition hover:border-lime-400/50 hover:text-lime-400 md:right-8" aria-label="Next">
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
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-xl border border-zinc-800 bg-zinc-900/90 p-2 backdrop-blur-sm md:bottom-8">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                const d = i - currentIndex;
                if (d > 0) for (let j = 0; j < d; j++) onNext();
                else if (d < 0) for (let j = 0; j < Math.abs(d); j++) onPrev();
              }}
              className={`relative h-14 w-14 overflow-hidden rounded-lg border-2 transition-all md:h-16 md:w-16 ${i === currentIndex ? "border-lime-400 shadow-[0_0_12px_rgba(163,230,53,0.35)]" : "border-transparent opacity-50 hover:opacity-100"}`}
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
  const reduce = useReducedMotion();
  const [currentImage, setCurrentImage] = useState(
    "defaultImageIndex" in project && typeof project.defaultImageIndex === "number"
      ? Math.min(project.defaultImageIndex, project.images.length - 1)
      : 0
  );

  const next = () => setCurrentImage((p) => (p + 1) % project.images.length);
  const prev = () => setCurrentImage((p) => (p - 1 + project.images.length) % project.images.length);

  const defaultShot = getDefaultProjectImage(project);

  const imageBlock = (
    <div className="group/image relative min-h-[260px] w-full flex-shrink-0 overflow-hidden rounded-2xl border border-zinc-800/90 bg-zinc-950/50 shadow-[0_0_0_1px_rgba(255,255,255,0.03),inset_0_0_0_1px_rgba(255,255,255,0.02)] sm:min-h-[320px] lg:min-h-[340px] lg:w-[48%]">
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
            <div className="relative hidden h-full min-h-[260px] w-full max-w-md overflow-hidden rounded-xl lg:block">
              <Image
                src={project.images[currentImage] ?? defaultShot}
                alt={project.title}
                fill
                className="object-cover object-top transition duration-[1.1s] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover/image:scale-[1.02]"
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
          <button type="button" onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-xl border border-zinc-600 bg-black/60 p-2.5 text-white/90 transition hover:border-lime-400/50 hover:text-white" aria-label="Previous">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button type="button" onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-xl border border-zinc-600 bg-black/60 p-2.5 text-white/90 transition hover:border-lime-400/50 hover:text-white" aria-label="Next">
            <ChevronRight className="w-5 h-5" />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
            {project.images.map((_, i) => (
              <button key={i} type="button" onClick={(e) => { e.stopPropagation(); setCurrentImage(i); }} className={`h-1.5 rounded-full transition-all ${i === currentImage ? "w-6 bg-lime-400" : "w-1.5 bg-white/40 hover:bg-white/60"}`} aria-label={`Screen ${i + 1}`} />
            ))}
          </div>
        </>
      )}
      <button
        type="button"
        onClick={() => onImageClick(project.id, currentImage)}
        className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 rounded-lg border border-white/10 bg-black/50 px-2.5 py-1.5 font-mono text-xs text-white/70 transition hover:bg-black/70 hover:text-lime-300"
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
          <span className="inline-flex items-center gap-1.5 rounded-full border border-lime-400/30 bg-lime-400/10 px-2.5 py-1 font-mono text-xs text-lime-400">
            <Star className="h-3 w-3 fill-lime-400" /> Featured
          </span>
        )}
        <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{project.role}</span>
        {project.is_mobile_app && (
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            <Smartphone className="w-3.5 h-3.5" /> Mobile
          </span>
        )}
        {!project.is_mobile_app && (
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            <Monitor className="w-3.5 h-3.5" /> Web
          </span>
        )}
      </div>
      <h3 className="mb-3 font-display text-2xl font-semibold text-zinc-100 sm:text-3xl">
        {project.title}
      </h3>
      <p className="mb-5 line-clamp-3 text-base leading-relaxed text-zinc-500">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech_stack.map((tech) => (
          <span key={tech} className="rounded-md border border-zinc-800 bg-zinc-900/80 px-2.5 py-1 font-mono text-xs text-zinc-400">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 rounded-full border border-lime-400/50 bg-lime-400/10 px-5 py-3 text-sm font-semibold text-lime-400 transition hover:bg-lime-400/20"
        >
          View case study
          <ArrowRight className="w-4 h-4" />
        </Link>
        <a href={project.project_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-4 py-3 text-sm text-zinc-400 transition hover:border-zinc-500 hover:text-zinc-200" aria-label="View code">
          <Github className="h-4 w-4" />
          Code
        </a>
        <a href={project.project_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-4 py-3 text-sm text-zinc-400 transition hover:border-zinc-500 hover:text-zinc-200" aria-label="Live demo">
          <ExternalLink className="w-4 h-4" />
          Demo
        </a>
      </div>
    </div>
  );

  return (
    <motion.article
      className="group/project grid scroll-mt-24 grid-cols-1 items-stretch gap-0 overflow-hidden rounded-3xl border border-zinc-800/90 bg-zinc-950/40 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_32px_80px_rgba(0,0,0,0.25)] transition-colors duration-500 hover:border-lime-400/20 lg:grid-cols-[1fr_1fr] lg:gap-12"
      whileHover={
        reduce
          ? undefined
          : {
              y: -3,
              boxShadow: "0 0 0 1px rgba(163, 230, 53, 0.12), 0 48px 100px rgba(0,0,0,0.35)",
              transition: springProject,
            }
      }
    >
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
    </motion.article>
  );
});

const GRID_STYLE = {
  backgroundImage:
    "linear-gradient(#27272a 1px, transparent 1px), linear-gradient(90deg, #27272a 1px, transparent 1px)",
  backgroundSize: "48px 48px",
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
      <section
        id="projects"
        className="section-ribbon relative border-b border-zinc-800/80 bg-zinc-950/40 py-20 sm:py-24 md:py-32"
      >
        <div
          className="absolute inset-0 opacity-[0.12] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_30%,#000,transparent_75%)]"
          style={GRID_STYLE}
        />

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
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700/90 bg-zinc-950/40 px-6 py-3 font-medium text-zinc-300 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] transition hover:border-lime-400/25 hover:bg-zinc-900/60"
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
