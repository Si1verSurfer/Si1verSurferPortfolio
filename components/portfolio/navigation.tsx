"use client";

import { Menu, X } from "lucide-react";
import { useScrollState, useMobileMenu } from "@/context/portfolio-context";

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
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 right-0 h-0.5 z-[60] overflow-hidden origin-left transition-transform duration-150 ease-out will-change-transform"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
        aria-hidden
      >
        <div className="h-full w-full bg-gradient-to-r from-cosmic-blue to-cosmic-cyan" />
      </div>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-deep-space/90 backdrop-blur-xl border-b border-border/50 py-4 shadow-lg shadow-cosmic-blue/5"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a
            href="#"
            className="group flex items-center gap-2 text-xl font-bold text-silver-bright focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cosmic-blue rounded"
          >
            <div className="relative w-10 h-10 rounded-xl bg-cosmic-blue/10 border border-cosmic-blue/30 flex items-center justify-center overflow-hidden group-hover:border-cosmic-blue/60 group-hover:shadow-[0_0_20px_rgba(74,159,255,0.3)] transition-all duration-300">
              <span className="text-cosmic-blue font-mono font-bold text-lg group-hover:animate-pulse">S</span>
              <div className="absolute inset-0 bg-gradient-to-br from-cosmic-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="hidden sm:inline text-gradient-silver group-hover:tracking-wider transition-all duration-300">Si1ver</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive =
                (link.href === "#" && activeSection === "") ||
                link.href === `#${activeSection}`;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-cosmic-blue/5 ${
                    isActive
                      ? "text-cosmic-blue"
                      : "text-muted-foreground hover:text-silver-bright"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cosmic-blue animate-pulse shadow-[0_0_10px_rgba(74,159,255,0.5)]" />
                  )}
                </a>
              );
            })}
          </div>

          <a
            href="#contact"
            className="group hidden md:inline-flex relative px-5 py-2.5 rounded-xl bg-cosmic-blue/10 border border-cosmic-blue/30 text-cosmic-blue text-sm font-medium hover:bg-cosmic-blue/20 hover:border-cosmic-blue/50 hover:shadow-[0_0_20px_rgba(74,159,255,0.3)] transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Hire Me</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cosmic-blue/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl border border-border text-silver-bright hover:bg-secondary/50 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cosmic-blue"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div
          className="absolute inset-0 bg-deep-space/95 backdrop-blur-xl"
          onClick={() => setMobileMenuOpen(false)}
          onKeyDown={(e) => e.key === "Escape" && setMobileMenuOpen(false)}
        />
        <div className="relative h-full flex flex-col items-center justify-center gap-8">
          {NAV_LINKS.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-bold text-silver-bright hover:text-cosmic-blue transition-all duration-300"
              style={{
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? "translateY(0)" : "translateY(1rem)",
                transitionDelay: `${index * 80}ms`,
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 px-8 py-3 rounded-xl bg-cosmic-blue/20 border border-cosmic-blue/50 text-cosmic-blue font-semibold transition-all duration-300"
            style={{
              opacity: isMobileMenuOpen ? 1 : 0,
              transform: isMobileMenuOpen ? "translateY(0)" : "translateY(1rem)",
              transitionDelay: "320ms",
            }}
          >
            Hire Me
          </a>
        </div>
      </div>
    </>
  );
}
