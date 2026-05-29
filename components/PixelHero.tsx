"use client";

import { portfolioProfile } from "@/data/profile";

const HERO_VIDEO_SRC =
  "https://raw.githubusercontent.com/Si1verSurfer/my_port_images_db/main/projects/heroVi/heroVideo.mov";

export default function PixelHero() {
  const aliasParts = portfolioProfile.alias.split(" ");

  return (
    <section
      id="home"
      className="relative h-screen min-h-[100dvh] w-full scroll-mt-24 overflow-hidden border-b-[3px] border-[var(--border)]"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        style={{ zIndex: 0, filter: "brightness(0.35) saturate(0.8)" }}
        aria-hidden
      >
        <source src={HERO_VIDEO_SRC} type="video/mp4" />
      </video>

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.95) 100%)",
          zIndex: 1,
        }}
        aria-hidden
      />

      <div
        className="relative flex h-full max-w-5xl flex-col justify-center px-8 pb-16 pt-28 md:px-20 animate-pixel-in"
        style={{ zIndex: 3 }}
      >
        <div className="hero-status-badge mb-6">
          <span style={{ color: "var(--yellow)" }}>▶</span>
          OPEN TO NEW ROLES
        </div>

        <h1 className="hero-title mb-2">
          {aliasParts[0]}
          <br />
          {aliasParts.slice(1).join(" ") || ""}
        </h1>

        <p className="hero-subtitle mb-6">{portfolioProfile.title.toUpperCase()}</p>

        <p
          className="font-pixel-body mb-10 max-w-[600px] text-[1.4rem] leading-[1.6]"
          style={{ color: "var(--text-muted)" }}
        >
          {portfolioProfile.summary}
        </p>

        <div className="flex flex-wrap gap-4">
          <a href="#projects" className="pixel-btn">
            ▶ SELECTED WORK
          </a>
          <a href="#contact" className="pixel-btn-outline">
            START A PROJECT
          </a>
        </div>

        <div className="mt-10 flex gap-6">
          <a
            href="https://github.com/Si1verSurfer"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-link"
          >
            [GH]
          </a>
          <a
            href="https://www.linkedin.com/in/bashar-rizq/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-link"
          >
            [LI]
          </a>
          <a href="mailto:bashar772004@gmail.com" className="hero-social-link">
            [MAIL]
          </a>
        </div>
      </div>

      <div
        className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ zIndex: 3 }}
      >
        ▼ SCROLL
      </div>
    </section>
  );
}
