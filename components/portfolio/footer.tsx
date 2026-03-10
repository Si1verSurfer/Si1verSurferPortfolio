"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-card/30 border-t border-border">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-cosmic-blue/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="group flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-cosmic-blue/10 border border-cosmic-blue/30 flex items-center justify-center group-hover:animate-glow-pulse transition-all duration-300">
                <span className="text-cosmic-blue font-mono font-bold group-hover:animate-pulse">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gradient-silver">Bashar Rizk</span>
                <span className="text-xs text-cosmic-cyan font-mono">Si1ver Surfer</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Building the future, one line at a time.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex items-center gap-6">
            <a
              href="#skills"
              className="text-sm text-muted-foreground hover:text-cosmic-blue hover:translate-x-0.5 transition-all duration-300"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-sm text-muted-foreground hover:text-cosmic-blue hover:translate-x-0.5 transition-all duration-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-cosmic-blue hover:translate-x-0.5 transition-all duration-300"
            >
              Contact
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Si1verSurfer"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2 rounded-lg border border-border text-muted-foreground hover:text-cosmic-blue hover:border-cosmic-blue/50 hover:bg-cosmic-blue/10 hover:shadow-[0_0_15px_rgba(74,159,255,0.2)] transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 group-hover:animate-spin" style={{ animationDuration: "1s", animationIterationCount: "1" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/bashar-rizq/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2 rounded-lg border border-border text-muted-foreground hover:text-cosmic-blue hover:border-cosmic-blue/50 hover:bg-cosmic-blue/10 hover:shadow-[0_0_15px_rgba(74,159,255,0.2)] transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="mailto:bashar772004@gmail.com"
              className="group p-2 rounded-lg border border-border text-muted-foreground hover:text-cosmic-blue hover:border-cosmic-blue/50 hover:bg-cosmic-blue/10 hover:shadow-[0_0_15px_rgba(74,159,255,0.2)] transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Bashar Rizk. Crafted with passion in the cosmos.
          </p>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-cosmic-blue transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cosmic-blue rounded"
            aria-label="Back to top"
          >
            <span className="group-hover:-translate-y-0.5 transition-transform duration-300">Back to top</span>
            <div className="p-1.5 rounded border border-border group-hover:border-cosmic-blue/50 group-hover:bg-cosmic-blue/10 group-hover:shadow-[0_0_15px_rgba(74,159,255,0.2)] transition-all duration-300">
              <ArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform duration-300" />
            </div>
          </button>
        </div>
      </div>

      {/* Decorative corner lines */}
      <div className="absolute bottom-0 left-0 w-24 h-24 border-l border-b border-cosmic-blue/10" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-r border-b border-cosmic-blue/10" />
    </footer>
  );
}
