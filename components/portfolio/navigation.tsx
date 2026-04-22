"use client";

import Image from "next/image";
import { LayoutGroup, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { portfolioProfile } from "@/data/profile";
import { useScrollState, useMobileMenu } from "@/context/portfolio-context";
import { ScrollSlide } from "@/components/portfolio/scroll-slide";
import { easeOutExpo, springNav } from "@/lib/motion";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export function Navigation() {
  const { scrollProgress, activeSection, isScrolled } = useScrollState();
  const { isOpen: isMobileMenuOpen, setOpen: setMobileMenuOpen } = useMobileMenu();

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-0.5 origin-left overflow-hidden"
        initial={false}
        animate={{ scaleX: Math.max(0, Math.min(1, scrollProgress / 100)) }}
        transition={{ duration: 0.4, ease: easeOutExpo }}
        aria-hidden
      >
        <div className="h-full w-full bg-gradient-to-r from-violet-400 via-lime-300 to-cyan-400" />
      </motion.div>

      <nav
        className={`fixed top-0.5 left-0 right-0 z-50 overflow-x-hidden border-b transition-[padding,background,backdrop-filter,border-color] duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? "border-zinc-800/80 bg-zinc-950/75 py-2.5 backdrop-blur-2xl supports-[backdrop-filter]:bg-zinc-950/55"
            : "border-transparent bg-transparent py-5"
        }`}
      >
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 transition-all duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${
            isScrolled
              ? "md:max-w-5xl md:rounded-2xl md:border md:border-zinc-800/70 md:bg-zinc-950/40 md:px-5 md:py-2"
              : ""
          }`}
        >
          <ScrollSlide from="left" className="min-w-0 shrink-0">
            <a
              href="#"
              className="group flex items-center gap-3 font-display text-lg font-semibold tracking-tight text-zinc-100"
            >
              <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-zinc-700/90 bg-zinc-900 shadow-[0_0_0_1px_rgba(255,255,255,0.05)] ring-2 ring-lime-400/10 transition duration-500 group-hover:border-lime-400/40 group-hover:shadow-[0_0_20px_rgba(163,230,53,0.15)]">
                <Image
                  src={portfolioProfile.avatarSrc}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="36px"
                  priority
                />
              </span>
              <span className="hidden sm:inline">{portfolioProfile.name}</span>
            </a>
          </ScrollSlide>

          <ScrollSlide
            from="right"
            delay={100}
            className="flex shrink-0 items-center gap-1 md:gap-2"
          >
            <LayoutGroup>
              <div className="hidden items-center gap-0.5 rounded-full border border-zinc-800/80 bg-zinc-950/40 p-1 md:flex">
                {NAV_LINKS.map((link) => {
                  const isActive =
                    (link.href === "#" && activeSection === "") ||
                    link.href === `#${activeSection}`;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      className="relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors"
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-full bg-zinc-800/90 shadow-[0_0_0_1px_rgba(163,230,53,0.12)]"
                          transition={springNav}
                        />
                      )}
                      <span
                        className={`relative z-10 ${isActive ? "text-lime-300" : "text-zinc-500 hover:text-zinc-200"}`}
                      >
                        {link.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </LayoutGroup>

            <a
              href="#contact"
              className="group relative hidden items-center overflow-hidden rounded-full border border-lime-400/35 bg-gradient-to-r from-lime-400/15 to-cyan-500/10 px-4 py-2 text-sm font-semibold text-lime-200 transition hover:border-lime-400/55 md:inline-flex"
            >
              <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-lime-400/25 to-cyan-400/20 transition duration-500 group-hover:translate-x-0" />
              <span className="relative">Let&apos;s talk</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-xl border border-zinc-800/90 bg-zinc-950/50 p-2.5 text-zinc-200 backdrop-blur-sm transition hover:border-lime-400/30 hover:bg-zinc-900/80 md:hidden"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </ScrollSlide>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div
          className="absolute inset-0 bg-zinc-950/92 backdrop-blur-2xl"
          onClick={() => setMobileMenuOpen(false)}
          onKeyDown={(e) => e.key === "Escape" && setMobileMenuOpen(false)}
        />
        <div className="relative flex h-full flex-col items-center justify-center gap-5 px-6">
          {NAV_LINKS.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-display text-2xl font-semibold text-zinc-100"
              style={{
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? "none" : "translateY(0.5rem)",
                transition: `all 0.3s ease ${index * 45}ms`,
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-3 rounded-full border border-lime-400/40 bg-lime-400/10 px-10 py-3.5 text-sm font-semibold text-lime-200"
            style={{
              opacity: isMobileMenuOpen ? 1 : 0,
              transform: isMobileMenuOpen ? "none" : "translateY(0.5rem)",
              transition: "all 0.3s ease 200ms",
            }}
          >
            Let&apos;s talk
          </a>
        </div>
      </div>
    </>
  );
}
