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
import { useSectionVisibility, useSectionVisibilityRatio } from "@/context/portfolio-context";
import { usePersistedVisible } from "@/hooks/use-persisted-visible";
import { SectionHeader } from "@/components/portfolio/section-header";
import { PROJECTS } from "@/data/projects";
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-deep-space/95 backdrop-blur-xl"
      onClick={onClose}
    >
      <div className="absolute inset-4 md:inset-8 border border-cosmic-blue/30 rounded-2xl pointer-events-none" />
      <button
        onClick={onClose}
        className="absolute top-4 right-4 md:top-8 md:right-8 z-50 p-3 rounded-full bg-deep-space/80 border border-border hover:border-cosmic-blue/50 text-silver hover:text-cosmic-blue transition-all duration-300"
        aria-label="Close"
      >
        <X className="w-6 h-6" />
      </button>
      <div className="absolute top-4 left-4 md:top-8 md:left-8 z-50">
        <h3 className="text-lg md:text-xl font-bold text-silver-bright">{projectTitle}</h3>
        <p className="text-sm text-muted-foreground font-mono">{currentIndex + 1} / {images.length}</p>
      </div>
      {images.length > 1 && (
        <>
          <button onClick={(e) => { e.stopPropagation(); onPrev(); }} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-deep-space/80 border border-border hover:border-cosmic-blue/50 text-silver hover:text-cosmic-blue transition-all" aria-label="Previous">
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); onNext(); }} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-deep-space/80 border border-border hover:border-cosmic-blue/50 text-silver hover:text-cosmic-blue transition-all" aria-label="Next">
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
        <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 p-2 rounded-xl bg-deep-space/80 backdrop-blur-sm border border-border">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                const d = i - currentIndex;
                if (d > 0) for (let j = 0; j < d; j++) onNext();
                else if (d < 0) for (let j = 0; j < Math.abs(d); j++) onPrev();
              }}
              className={`relative w-14 h-14 md:w-16 md:h-16 rounded-lg overflow-hidden border-2 transition-all ${i === currentIndex ? "border-cosmic-blue shadow-[0_0_12px_rgba(74,159,255,0.4)]" : "border-transparent opacity-50 hover:opacity-100"}`}
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
  revealed,
  onImageClick,
  imageOnLeft,
}: {
  project: Project;
  index: number;
  revealed: boolean;
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

  const imageBlock = (
    <div className="relative flex-shrink-0 w-full lg:w-[48%] min-h-[260px] sm:min-h-[320px] lg:min-h-[340px] rounded-2xl overflow-hidden bg-[#0a0a12] border border-border/80 group/image">
      <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
        {project.is_mobile_app ? (
          <MobilePhoneMockup
            src={project.images[currentImage]}
            alt={`${project.title} screen ${currentImage + 1}`}
            showBadge
            badgeLabel="Flutter · iOS & Android"
            priority={index === 0}
            sizes="(max-width: 1024px) 90vw, 400px"
          />
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
          <button type="button" onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-xl bg-black/60 border border-white/10 text-white/90 hover:text-white hover:border-cosmic-blue/40 transition-all" aria-label="Previous">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button type="button" onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-xl bg-black/60 border border-white/10 text-white/90 hover:text-white hover:border-cosmic-blue/40 transition-all" aria-label="Next">
            <ChevronRight className="w-5 h-5" />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
            {project.images.map((_, i) => (
              <button key={i} type="button" onClick={(e) => { e.stopPropagation(); setCurrentImage(i); }} className={`h-1.5 rounded-full transition-all ${i === currentImage ? "w-6 bg-cosmic-cyan" : "w-1.5 bg-white/40 hover:bg-white/60"}`} aria-label={`Screen ${i + 1}`} />
            ))}
          </div>
        </>
      )}
      <button
        type="button"
        onClick={() => onImageClick(project.id, currentImage)}
        className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 rounded-lg bg-black/50 px-2.5 py-1.5 text-xs font-mono text-white/70 hover:text-cosmic-cyan hover:bg-black/70 transition-all border border-white/10"
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
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cosmic-blue/15 border border-cosmic-blue/30 text-cosmic-blue text-xs font-mono">
            <Star className="w-3 h-3 fill-cosmic-blue" /> Featured
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
      <h3 className="text-2xl sm:text-3xl font-bold text-silver-bright mb-3">
        {project.title}
      </h3>
      <p className="text-muted-foreground text-base leading-relaxed mb-5 line-clamp-3">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech_stack.map((tech) => (
          <span key={tech} className="px-2.5 py-1 text-xs font-mono rounded-md bg-secondary/80 text-silver/90 border border-border">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cosmic-blue/20 border border-cosmic-blue/40 text-cosmic-cyan font-semibold text-sm hover:bg-cosmic-blue/30 hover:border-cosmic-blue/60 hover:shadow-[0_0_24px_rgba(74,159,255,0.2)] transition-all duration-300"
        >
          View case study
          <ArrowRight className="w-4 h-4" />
        </Link>
        <a href={project.project_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-border text-silver/80 text-sm hover:bg-white/5 hover:border-silver/40 transition-all" aria-label="View code">
          <Github className="w-4 h-4" />
          Code
        </a>
        <a href={project.project_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-border text-silver/80 text-sm hover:bg-white/5 hover:border-silver/40 transition-all" aria-label="Live demo">
          <ExternalLink className="w-4 h-4" />
          Demo
        </a>
      </div>
    </div>
  );

  return (
    <article
      className={`grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-0 lg:gap-12 items-stretch rounded-2xl border border-border bg-card/40 overflow-hidden transition-all duration-700 [transition-property:opacity,transform,box-shadow,background-color] ${
        revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } hover:border-cosmic-blue/30 hover:bg-card/50`}
      style={{ transitionDelay: revealed ? `${index * 100}ms` : "0ms" }}
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
    </article>
  );
});

const GRID_STYLE = {
  backgroundImage: "linear-gradient(#4a9fff 1px, transparent 1px), linear-gradient(90deg, #4a9fff 1px, transparent 1px)",
  backgroundSize: "50px 50px",
} as const;

export const ProjectsSection = memo(function ProjectsSection() {
  const isVisible = useSectionVisibility("projects");
  const revealed = usePersistedVisible(isVisible);
  const scrollRatio = useSectionVisibilityRatio("projects");
  const progress = Math.min(1, scrollRatio * 1.5);
  const layerOpacity = 0.6 + progress * 0.4;
  const layerY = 12 * (1 - progress);
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
        className="section-ribbon relative py-20 sm:py-24 md:py-28 lg:py-32 bg-deep-space overflow-hidden floating-orbs"
      >
        <div className="absolute inset-0 opacity-[0.03]" style={GRID_STYLE} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-[10%] w-32 h-32 rounded-full bg-cosmic-blue/5 blur-3xl animate-float-gentle" />
          <div className="absolute top-40 right-[15%] w-40 h-40 rounded-full bg-cosmic-cyan/5 blur-3xl animate-float-gentle" style={{ animationDelay: "2s" }} />
          <div className="absolute bottom-32 left-[30%] w-24 h-24 rounded-full bg-silver/5 blur-3xl animate-float-gentle" style={{ animationDelay: "4s" }} />
        </div>

        <div
          className="relative max-w-6xl mx-auto px-5 sm:px-6 section-transition will-change-transform"
          style={{ opacity: layerOpacity, transform: `translate3d(0, ${layerY}px, 0)` }}
        >
          <SectionHeader
            step="02"
            eyebrow="PORTFOLIO"
            title="Featured Projects"
            description="Selected work across mobile, AI, and full‑stack platforms — each with a deeper case study."
            revealed={revealed}
          />

          <div className="space-y-8 md:space-y-10">
            {PROJECTS.map((project, index) => (
              <ProjectRow
                key={project.id}
                project={project}
                index={index}
                revealed={revealed}
                onImageClick={openLightbox}
                imageOnLeft={index % 2 === 0}
              />
            ))}
          </div>

          <div
            className={`mt-14 flex justify-center transition-all duration-700 ${
              revealed ? "delay-300 opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <a
              href="https://github.com/Si1verSurfer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-silver font-medium hover:bg-white/5 hover:border-silver/50 transition-all"
            >
              <Github className="w-5 h-5" />
              View all on GitHub
              <ExternalLink className="w-4 h-4 opacity-70" />
            </a>
          </div>
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
