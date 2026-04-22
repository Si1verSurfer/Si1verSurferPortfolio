"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioProfile } from "@/data/profile";
import { ScrollSlide } from "@/components/portfolio/scroll-slide";
import { easeOutExpo } from "@/lib/motion";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950/60 [background:linear-gradient(180deg,rgba(3,3,5,0.2)_0%,#030305_100%)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-10 sm:flex-row sm:items-start">
          <ScrollSlide from="left" className="text-center sm:text-left">
            <p className="font-display text-xl font-semibold tracking-tight text-zinc-100">{portfolioProfile.name}</p>
            <p className="mt-1 font-mono text-xs text-zinc-500">Software engineer · AI & mobile</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-zinc-600">
              Building fast, maintainable software — from product UI to model deployment.
            </p>
          </ScrollSlide>
          <ScrollSlide from="right" delay={60} className="flex w-full flex-col items-center gap-8 sm:w-auto sm:items-end">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-500 sm:justify-end">
              <a href="#skills" className="transition hover:text-lime-300">
                Skills
              </a>
              <a href="#projects" className="transition hover:text-lime-300">
                Projects
              </a>
              <a href="#contact" className="transition hover:text-lime-300">
                Contact
              </a>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Si1verSurfer"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-zinc-800/90 p-2.5 text-zinc-500 transition hover:border-lime-400/35 hover:text-lime-300"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/bashar-rizq/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-zinc-800/90 p-2.5 text-zinc-500 transition hover:border-lime-400/35 hover:text-lime-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:bashar772004@gmail.com"
                className="rounded-xl border border-zinc-800/90 p-2.5 text-zinc-500 transition hover:border-lime-400/35 hover:text-lime-300"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </ScrollSlide>
        </div>
        <ScrollSlide from="left" delay={100} className="mt-10">
          <div className="flex flex-col items-center justify-between gap-4 border-t border-zinc-800/80 pt-8 sm:flex-row">
            <p className="text-center text-xs text-zinc-600 sm:text-left">
              © {new Date().getFullYear()} {portfolioProfile.name}. All rights reserved.
            </p>
            <motion.button
              type="button"
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-xs text-zinc-500 transition hover:text-lime-300"
              aria-label="Back to top"
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.22, ease: easeOutExpo }}
            >
              <span>Back to top</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800/90 transition group-hover:border-lime-400/30">
                <ArrowUp className="h-3.5 w-3.5" />
              </span>
            </motion.button>
          </div>
        </ScrollSlide>
      </div>
    </footer>
  );
}
