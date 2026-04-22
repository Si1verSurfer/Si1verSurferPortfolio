"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { portfolioProfile } from "@/data/profile";
import { easeOutExpo } from "@/lib/motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.055,
      delayChildren: 0.2,
      when: "beforeChildren" as const,
    },
  },
};

const item = (reduce: boolean) => ({
  hidden: reduce
    ? { opacity: 1, y: 0, filter: "blur(0px)" }
    : { opacity: 0, y: 18, filter: "blur(5px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: easeOutExpo,
      // Blur lifts slightly before position settles
      opacity: { duration: 0.5, ease: easeOutExpo },
      filter: { duration: 0.6, ease: easeOutExpo },
    },
  },
});

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [heroT, setHeroT] = useState(0);
  const [reducedScroll, setReducedScroll] = useState(false);
  const reduce = useReducedMotion() ?? false;

  useLayoutEffect(() => {
    setReducedScroll(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reducedScroll) return;

    const update = () => {
      const el = sectionRef.current;
      if (!el) return;
      const vh = window.innerHeight;
      const range = vh * 0.45;
      const top = el.getBoundingClientRect().top;
      const t = Math.min(Math.max(-top / range, 0), 1);
      setHeroT(t);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [reducedScroll]);

  const t = reducedScroll ? 0 : heroT;
  const style = { "--hero-t": String(t) } as CSSProperties;

  return (
    <section
      ref={sectionRef}
      id="home"
      style={style}
      className="vionaro-hero-wrap relative flex min-h-[100dvh] flex-col justify-center overflow-hidden border-b border-zinc-800/60 bg-zinc-950/40 pt-24 pb-20 sm:pt-28 sm:pb-28"
    >
      <div
        className="vionaro-hero-bloom pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_-20%,rgba(139,92,246,0.18),transparent_55%)]"
        aria-hidden
      />
      <div
        className="vionaro-hero-bloom-2 pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(45,212,191,0.12)_0.5px,transparent_0.5px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_12%,transparent_75%)]"
        aria-hidden
      />
      <div
        className="vionaro-hero-fade-mask pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-950/0 via-zinc-950/0 to-zinc-950"
        aria-hidden
      />
      <div
        className="vionaro-hero-vignette pointer-events-none absolute inset-0 z-[1] [box-shadow:inset_0_0_120px_40px_rgba(3,3,5,0.5)]"
        aria-hidden
      />
      <div
        className="vionaro-hero-mint-line vionaro-hero-mint-line-top pointer-events-none absolute top-[calc(3.5rem+env(safe-area-inset-top,0))] right-4 left-4 z-[1] h-px origin-left bg-gradient-to-r from-transparent via-lime-400/80 to-transparent shadow-[0_0_24px_rgba(163,230,53,0.35)] sm:top-28 sm:left-8 sm:right-8"
        aria-hidden
      />
      <div
        className="vionaro-hero-mint-line pointer-events-none absolute right-4 bottom-0 left-4 z-[1] h-px origin-center bg-gradient-to-r from-violet-500/30 via-lime-400/90 to-cyan-400/40 shadow-[0_0_28px_rgba(163,230,53,0.25)] sm:left-8 sm:right-8"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="vionaro-hero-perspective">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
            <div className="vionaro-hero-clip w-full">
              <motion.div
                className="vionaro-hero-depth flex w-full flex-col items-center text-center lg:items-start lg:text-left"
                variants={container}
                initial="hidden"
                animate="show"
              >
                <motion.div
                  variants={item(reduce)}
                  className="vionaro-stag mb-4 inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/5 px-3 py-1 font-mono text-[10px] tracking-[0.2em] text-lime-300/95 sm:text-xs"
                >
                  <Sparkles className="h-3.5 w-3.5 text-lime-400" aria-hidden />
                  Open to new roles
                </motion.div>
                <motion.h1
                  variants={item(reduce)}
                  className="vionaro-stag font-display text-[clamp(2.5rem,6.5vw,4.25rem)] font-semibold leading-[1.04] tracking-tight"
                >
                  <span className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:justify-start">
                    <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-zinc-700/80 bg-zinc-900 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] ring-2 ring-lime-400/15">
                      <Image
                        src={portfolioProfile.avatarSrc}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="44px"
                        priority
                      />
                    </span>
                    <span className="bg-gradient-to-br from-zinc-50 via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
                      {portfolioProfile.name}
                    </span>
                  </span>
                </motion.h1>
                <motion.p
                  variants={item(reduce)}
                  className="vionaro-stag mt-2 font-mono text-sm text-violet-300/90 sm:text-base"
                >
                  {portfolioProfile.alias}
                </motion.p>
                <motion.p
                  variants={item(reduce)}
                  className="vionaro-stag mt-1 text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500"
                >
                  {portfolioProfile.title}
                </motion.p>
                <motion.p
                  variants={item(reduce)}
                  className="vionaro-stag mt-7 max-w-xl text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg"
                >
                  {portfolioProfile.summary}
                </motion.p>
                <motion.div
                  variants={item(reduce)}
                  className="vionaro-stag mt-10 flex w-full flex-wrap items-center justify-center gap-3 sm:gap-4 lg:justify-start"
                >
                  <a
                    href="#projects"
                    className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-lime-400 to-emerald-400 px-6 py-3.5 text-sm font-semibold text-zinc-950 shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_16px_40px_rgba(163,230,53,0.2)] transition hover:brightness-105 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_20px_50px_rgba(74,222,128,0.25)]"
                  >
                    Selected work
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full border border-zinc-700/90 bg-zinc-950/50 px-6 py-3.5 text-sm font-medium text-zinc-200 backdrop-blur-sm transition hover:border-lime-400/35 hover:bg-zinc-900/80"
                  >
                    Start a project
                    <ArrowDownRight className="h-4 w-4" />
                  </a>
                </motion.div>
                <motion.div
                  variants={item(reduce)}
                  className="vionaro-stag mt-10 flex w-full items-center justify-center gap-2 border-t border-zinc-800/80 pt-8 lg:justify-start lg:gap-3"
                >
                  {[
                    { href: "https://github.com/Si1verSurfer", label: "GitHub", icon: Github },
                    { href: "https://www.linkedin.com/in/bashar-rizq/", label: "LinkedIn", icon: Linkedin },
                    { href: "mailto:bashar772004@gmail.com", label: "Email", icon: Mail },
                  ].map(({ href, label, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-800/90 bg-zinc-950/40 text-zinc-500 transition hover:border-lime-400/40 hover:text-lime-300"
                      aria-label={label}
                    >
                      <Icon className="h-4 w-4 transition group-hover:scale-110" />
                    </a>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            <div className="pointer-events-none relative hidden min-h-[320px] items-center justify-center lg:flex" aria-hidden>
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="h-72 w-72 rounded-full border border-lime-400/20 opacity-50 animate-rotate-slow"
                  style={{ animationDuration: "28s" }}
                />
                <div
                  className="absolute h-56 w-56 rounded-full border border-violet-500/20 opacity-50 animate-rotate-slow"
                  style={{ animationDuration: "22s", animationDirection: "reverse" }}
                />
                <div className="absolute h-40 w-40 rounded-full bg-gradient-to-tr from-lime-400/25 via-violet-500/20 to-cyan-400/20 blur-2xl" />
              </div>
              <div className="relative z-[1] flex h-64 w-64 items-center justify-center rounded-3xl border border-zinc-800/80 bg-zinc-950/50 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_32px_80px_rgba(0,0,0,0.45)] backdrop-blur-md">
                <div className="text-center">
                  <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-zinc-500">Focus</p>
                  <p className="mt-2 font-display text-2xl font-semibold text-zinc-100">Ship quality</p>
                  <p className="mt-1 text-sm text-zinc-500">Mobile · Web · AI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
