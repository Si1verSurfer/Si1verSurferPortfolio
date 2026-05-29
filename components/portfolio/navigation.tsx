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
  const { scrollProgress, activeSection } = useScrollState();
  const { isOpen: isMobileMenuOpen, setOpen: setMobileMenuOpen } = useMobileMenu();
  const pct = Math.min(100, Math.max(0, scrollProgress));

  return (
    <>
      <div
        className="fixed top-0 left-0 z-[60] h-1 origin-left bg-[var(--accent)]"
        style={{ width: `${pct}%` }}
        aria-hidden
      />

      <nav className="pixel-nav-bar fixed top-0 left-0 right-0 z-50 py-3">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <a
            href="#"
            className="font-pixel shrink-0 text-[0.45rem] uppercase tracking-[0.12em] text-[var(--text)] sm:text-[0.5rem]"
          >
            SI1VER_SURFER.EXE
          </a>

          <div className="flex shrink-0 items-center gap-3 md:gap-6">
            <div className="hidden items-center gap-4 md:flex">
              {NAV_LINKS.map((link) => {
                const isActive =
                  (link.href === "#" && activeSection === "") ||
                  link.href === `#${activeSection}`;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`pixel-nav-link ${isActive ? "is-active" : ""}`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            <a href="#contact" className="pixel-btn hidden !py-3 !text-[0.45rem] md:inline-flex">
              Let&apos;s talk
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="border-[3px] border-[var(--border)] bg-[var(--bg-card)] p-2 text-[var(--text)] shadow-[2px_2px_0_var(--border)] md:hidden"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 transition-opacity duration-200 md:hidden ${
          isMobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div
          className="absolute inset-0 bg-[var(--bg)]"
          onClick={() => setMobileMenuOpen(false)}
          onKeyDown={(e) => e.key === "Escape" && setMobileMenuOpen(false)}
        />
        <div className="relative flex h-full flex-col items-center justify-center gap-6 px-6 pt-16">
          {NAV_LINKS.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-pixel text-[0.65rem] uppercase tracking-[0.1em] text-[var(--text)]"
              style={{
                opacity: isMobileMenuOpen ? 1 : 0,
                transition: `opacity 0.2s ease ${index * 45}ms`,
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="pixel-btn mt-2"
          >
            Let&apos;s talk
          </a>
        </div>
      </div>
    </>
  );
}
