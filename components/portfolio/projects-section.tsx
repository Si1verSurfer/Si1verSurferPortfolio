"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight, Star, X, ZoomIn } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "C2 Server Platform",
    slug: "c2-server-platform",
    description:
      "A full stack Command & Control (C2) server built for managing secure client communications. The system includes a React.js dashboard for monitoring and control, and a high-performance Golang backend responsible for handling concurrent connections, authentication, and command execution workflows.",
    tech_stack: ["React.js", "Golang", "REST API"],
    role: "Full Stack Developer",
    project_url: "https://github.com/Si1verSurfer",
    is_featured: true,
    images: [
      "https://raw.githubusercontent.com/Si1verSurfer/my_port_images_db/main/projects/C2_server_images/C2Server.png",
    ],
  },
  {
    id: 2,
    title: "Haykl Real Estate Platform",
    slug: "haykl-real-estate-platform",
    description:
      "A comprehensive real estate ecosystem consisting of three Flutter mobile applications (User, Seller, Admin) and a React.js web platform. The system enables property listings, map-based searching, real-time updates, and role-based access.",
    tech_stack: ["Flutter", "React.js", "Firebase", "Google Maps API", "GetX"],
    role: "Full Stack Developer",
    project_url: "https://github.com/Si1verSurfer",
    is_featured: true,
    images: [
      "https://raw.githubusercontent.com/Si1verSurfer/my_port_images_db/main/projects/hayklApp_images/Screenshot%202026-01-28%20at%2012.27.56%E2%80%AFAM.png",
      "https://raw.githubusercontent.com/Si1verSurfer/my_port_images_db/main/projects/hayklApp_images/%D8%A7%D9%84%D9%85%D9%81%D8%B6%D9%84%D8%A9%20copy.png",
      "https://raw.githubusercontent.com/Si1verSurfer/my_port_images_db/main/projects/hayklApp_images/%D8%A8%D8%AF%D8%A7%D9%8A%D8%A9.png",
    ],
  },
  {
    id: 3,
    title: "IEL Logistics & Shipping System",
    slug: "iel-logistics-shipping-system",
    description:
      "A cross-platform logistics and shipping solution built for the Saudi market. The application integrates directly with Odoo ERP using odooRPC and a custom Flask backend to manage shipments, tracking, and customer operations.",
    tech_stack: ["Flutter", "Python Flask", "Odoo ERP", "SQLite", "REST API"],
    role: "Full Stack Developer",
    project_url: "https://github.com/Si1verSurfer",
    is_featured: true,
    images: [
      "https://raw.githubusercontent.com/Si1verSurfer/my_port_images_db/main/projects/IEL_images/Create%20Trip.png",
      "https://raw.githubusercontent.com/Si1verSurfer/my_port_images_db/main/projects/IEL_images/Home.png",
      "https://raw.githubusercontent.com/Si1verSurfer/my_port_images_db/main/projects/IEL_images/Shipment%20Details.png",
    ],
  },
  {
    id: 4,
    title: "Surah Islamic Life Application",
    slug: "surah-islamic-life-app",
    description:
      "An Islamic lifestyle mobile application focused on Quran reading and daily worship utilities. The app features a custom-built SQLite database optimized for over 6,000 Quranic verses, offline access, prayer times, Qibla direction, and Azkar.",
    tech_stack: ["Flutter", "SQLite", "Device Sensors", "GPS"],
    role: "Flutter Developer",
    project_url: "https://github.com/Si1verSurfer",
    is_featured: true,
    images: [
      "https://raw.githubusercontent.com/Si1verSurfer/my_port_images_db/main/projects/quranApp_images/screen.png",
      "https://raw.githubusercontent.com/Si1verSurfer/my_port_images_db/main/projects/quranApp_images/screen%202.png",
      "https://raw.githubusercontent.com/Si1verSurfer/my_port_images_db/main/projects/quranApp_images/screen%203.png",
    ],
  },
  {
    id: 5,
    title: "Talabaty Delivery App",
    slug: "talabaty-delivery-app",
    description:
      "A Flutter-based food and delivery application designed with a clean UI and scalable architecture. The app focuses on smooth navigation, store browsing, and an optimized ordering experience.",
    tech_stack: ["Flutter", "REST-ready Architecture"],
    role: "Flutter Developer",
    project_url: "https://github.com/Si1verSurfer",
    is_featured: false,
    images: [
      "https://raw.githubusercontent.com/Si1verSurfer/my_port_images_db/main/projects/talabaty_images/Splash.png",
      "https://raw.githubusercontent.com/Si1verSurfer/my_port_images_db/main/projects/talabaty_images/Main%20Screen.png",
      "https://raw.githubusercontent.com/Si1verSurfer/my_port_images_db/main/projects/talabaty_images/Store.png",
    ],
  },
];

// Lightbox Component
function ImageLightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
  projectTitle,
}: {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  projectTitle: string;
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
      {/* Electric border effect */}
      <div className="absolute inset-4 md:inset-8 border border-cosmic-blue/30 rounded-2xl pointer-events-none">
        <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-cosmic-blue to-transparent" />
        <div className="absolute -bottom-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-cosmic-cyan to-transparent" />
      </div>

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 md:top-8 md:right-8 z-50 p-3 rounded-full bg-deep-space/80 border border-border hover:border-cosmic-blue/50 text-silver hover:text-cosmic-blue transition-all duration-300 backdrop-blur-sm"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Project title */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 z-50">
        <h3 className="text-lg md:text-xl font-bold text-silver-bright">{projectTitle}</h3>
        <p className="text-sm text-muted-foreground font-mono">
          {currentIndex + 1} / {images.length}
        </p>
      </div>

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-deep-space/80 border border-border hover:border-cosmic-blue/50 text-silver hover:text-cosmic-blue transition-all duration-300 backdrop-blur-sm hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-deep-space/80 border border-border hover:border-cosmic-blue/50 text-silver hover:text-cosmic-blue transition-all duration-300 backdrop-blur-sm hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </>
      )}

      {/* Main image */}
      <div
        className="relative w-full h-full max-w-6xl max-h-[80vh] mx-4 md:mx-16 flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full">
          <Image
            src={images[currentIndex] || "/placeholder.svg"}
            alt={`${projectTitle} screenshot ${currentIndex + 1}`}
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Thumbnail navigation */}
      {images.length > 1 && (
        <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 p-2 rounded-xl bg-deep-space/80 backdrop-blur-sm border border-border">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                const diff = i - currentIndex;
                if (diff > 0) {
                  for (let j = 0; j < diff; j++) onNext();
                } else if (diff < 0) {
                  for (let j = 0; j < Math.abs(diff); j++) onPrev();
                }
              }}
              className={`relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                i === currentIndex
                  ? "border-cosmic-blue shadow-[0_0_15px_rgba(74,159,255,0.4)]"
                  : "border-transparent opacity-50 hover:opacity-100"
              }`}
            >
              <Image
                src={img || "/placeholder.svg"}
                alt={`Thumbnail ${i + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectCard({
  project,
  index,
  isVisible,
  onImageClick,
}: {
  project: (typeof projects)[0];
  index: number;
  isVisible: boolean;
  onImageClick: (projectId: number, imageIndex: number) => void;
}) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div
      className={`group relative rounded-2xl bg-card/50 border border-border overflow-hidden backdrop-blur-sm hover-lift hover-glow energy-border ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
      style={{ 
        transitionDelay: `${index * 200}ms`,
        transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Featured badge */}
      {project.is_featured && (
        <div className="absolute top-4 right-4 z-20 flex items-center gap-1 px-3 py-1.5 rounded-full bg-cosmic-blue/20 border border-cosmic-blue/40 backdrop-blur-sm animate-glow-pulse">
          <Star className="w-3 h-3 text-cosmic-blue fill-cosmic-blue animate-pulse" />
          <span className="text-xs font-mono text-cosmic-blue">FEATURED</span>
        </div>
      )}

      {/* Image carousel */}
      <div className="relative h-64 md:h-72 overflow-hidden bg-nebula">
        <div
          className="flex transition-transform duration-500 ease-out h-full"
          style={{ transform: `translateX(-${currentImage * 100}%)` }}
        >
          {project.images.map((image, i) => (
            <button
              key={i}
              className="relative w-full h-full flex-shrink-0 cursor-pointer"
              onClick={() => onImageClick(project.id, i)}
              aria-label={`View ${project.title} screenshot ${i + 1} fullscreen`}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${project.title} screenshot ${i + 1}`}
                fill
                className="object-cover object-top"
              />
              {/* Zoom indicator on hover */}
              <div className="absolute inset-0 flex items-center justify-center bg-deep-space/0 group-hover:bg-deep-space/40 transition-all duration-300">
                <div className="opacity-0 group-hover:opacity-100 p-3 rounded-full bg-cosmic-blue/20 border border-cosmic-blue/50 backdrop-blur-sm transition-all duration-300 transform scale-75 group-hover:scale-100">
                  <ZoomIn className="w-6 h-6 text-cosmic-blue" />
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent pointer-events-none" />

        {/* Navigation arrows */}
        {project.images.length > 1 && isHovered && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-deep-space/80 border border-border hover:border-cosmic-blue/50 text-silver hover:text-cosmic-blue transition-all duration-300 backdrop-blur-sm z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-deep-space/80 border border-border hover:border-cosmic-blue/50 text-silver hover:text-cosmic-blue transition-all duration-300 backdrop-blur-sm z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* Image indicators */}
        {project.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {project.images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImage(i);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentImage
                    ? "bg-cosmic-blue w-6"
                    : "bg-silver/30 hover:bg-silver/50"
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Role badge */}
        <div className="inline-block px-3 py-1 rounded-full bg-secondary/50 text-xs font-mono text-muted-foreground mb-3">
          {project.role}
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-silver-bright mb-3 group-hover:text-gradient-silver transition-all duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech_stack.map((tech, i) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs rounded-md bg-cosmic-blue/10 text-cosmic-blue border border-cosmic-blue/20 hover:bg-cosmic-blue/20 hover:border-cosmic-blue/40 hover-scale transition-all duration-300"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          <a
            href={project.project_url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn relative flex items-center gap-2 px-4 py-2 rounded-lg bg-cosmic-blue/10 border border-cosmic-blue/30 text-cosmic-blue text-sm font-medium hover:bg-cosmic-blue/20 hover:border-cosmic-blue/50 hover:shadow-[0_0_20px_rgba(74,159,255,0.3)] transition-all duration-300 overflow-hidden"
          >
            <Github className="w-4 h-4 group-hover/btn:animate-spin" style={{ animationDuration: "1s", animationIterationCount: "1" }} />
            <span>View Code</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cosmic-blue/10 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
          </a>
          <a
            href={project.project_url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn relative flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-silver text-sm font-medium hover:bg-secondary/50 hover:border-silver/50 transition-all duration-300 overflow-hidden"
          >
            <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
            <span>Live Demo</span>
          </a>
        </div>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-cosmic-blue/5 via-transparent to-cosmic-cyan/5" />
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    projectId: number | null;
    imageIndex: number;
  }>({ isOpen: false, projectId: null, imageIndex: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const currentProject = projects.find((p) => p.id === lightbox.projectId);

  const openLightbox = (projectId: number, imageIndex: number) => {
    setLightbox({ isOpen: true, projectId, imageIndex });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, projectId: null, imageIndex: 0 });
  };

  const nextImage = useCallback(() => {
    if (!currentProject) return;
    setLightbox((prev) => ({
      ...prev,
      imageIndex: (prev.imageIndex + 1) % currentProject.images.length,
    }));
  }, [currentProject]);

  const prevImage = useCallback(() => {
    if (!currentProject) return;
    setLightbox((prev) => ({
      ...prev,
      imageIndex: (prev.imageIndex - 1 + currentProject.images.length) % currentProject.images.length,
    }));
  }, [currentProject]);

  return (
    <>
      <section
        ref={sectionRef}
        id="projects"
        className="relative py-24 md:py-32 bg-cosmic-gradient overflow-hidden"
      >
        {/* Animated background lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cosmic-blue/20 to-transparent animate-shimmer" />
          <div className="absolute top-2/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-silver/10 to-transparent animate-shimmer" style={{ animationDelay: "1s" }} />
          <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cosmic-cyan/20 to-transparent animate-shimmer" style={{ animationDelay: "2s" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Section header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-cosmic-blue/30 bg-cosmic-blue/5 text-cosmic-blue text-sm font-mono tracking-wider mb-4 animate-glow-pulse">
              PORTFOLIO
            </span>
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-silver mb-4 ${isVisible ? "animate-text-reveal" : ""}`}>
              Featured Projects
            </h2>
            <p className={`text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed ${isVisible ? "animate-fade-in" : ""}`} style={{ animationDelay: "0.5s" }}>
              A collection of applications I{"'"}ve built, from mobile apps to full-stack platforms
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isVisible={isVisible}
                onImageClick={openLightbox}
              />
            ))}
          </div>

          {/* View more button */}
          <div
            className={`flex justify-center mt-12 transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <a
              href="https://github.com/Si1verSurfer"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 rounded-lg border border-silver/30 text-silver font-medium hover:bg-silver/10 hover:border-silver/50 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              <span>View All on GitHub</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox.isOpen && currentProject && (
        <ImageLightbox
          images={currentProject.images}
          currentIndex={lightbox.imageIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
          projectTitle={currentProject.title}
        />
      )}
    </>
  );
}
