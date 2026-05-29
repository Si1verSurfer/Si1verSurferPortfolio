"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { portfolioProfile } from "@/data/profile";
import { ScrollSlide } from "@/components/portfolio/scroll-slide";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t-[3px] border-[var(--border)] bg-[var(--bg-2)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-10 sm:flex-row sm:items-start">
          <ScrollSlide from="left" className="text-center sm:text-left">
            <p className="font-pixel text-[0.65rem] leading-relaxed text-[var(--text-primary)]">
              {portfolioProfile.name}
            </p>
            <p className="font-pixel-body mt-2 text-lg text-[var(--text-muted)]">
              Software engineer · AI & mobile
            </p>
            <p className="font-pixel-body mt-3 max-w-xs text-lg leading-relaxed text-[var(--text-muted)]">
              Building fast, maintainable software — from product UI to model deployment.
            </p>
          </ScrollSlide>
          <ScrollSlide from="right" delay={60} className="flex w-full flex-col items-center gap-8 sm:w-auto sm:items-end">
            <div className="flex flex-wrap items-center justify-center gap-6 sm:justify-end">
              <a href="#skills" className="pixel-nav-link">
                Skills
              </a>
              <a href="#projects" className="pixel-nav-link">
                Projects
              </a>
              <a href="#contact" className="pixel-nav-link">
                Contact
              </a>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Si1verSurfer"
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-icon-box hover:shadow-[3px_3px_0_var(--color-accent)]"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/bashar-rizq/"
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-icon-box hover:shadow-[3px_3px_0_var(--color-accent)]"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:bashar772004@gmail.com"
                className="pixel-icon-box hover:shadow-[3px_3px_0_var(--color-accent)]"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </ScrollSlide>
        </div>
        <ScrollSlide from="left" delay={100} className="mt-10">
          <hr className="pixel-divider !my-8" />
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="font-pixel-body text-center text-base text-[var(--text-muted)] sm:text-left">
              © {new Date().getFullYear()} {portfolioProfile.name}. All rights reserved.
            </p>
            <button
              type="button"
              onClick={scrollToTop}
              className="pixel-btn-outline !text-[0.5rem]"
              aria-label="Back to top"
            >
              <ArrowUp className="h-3.5 w-3.5" />
              Top
            </button>
          </div>
        </ScrollSlide>
      </div>
    </footer>
  );
}
