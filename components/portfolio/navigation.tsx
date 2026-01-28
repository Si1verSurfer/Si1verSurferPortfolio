"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = ["contact", "projects", "skills"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            return;
          }
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-deep-space/80 backdrop-blur-xl border-b border-border/50 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="group flex items-center gap-2 text-xl font-bold text-silver-bright"
          >
            <div className="relative w-10 h-10 rounded-lg bg-cosmic-blue/10 border border-cosmic-blue/30 flex items-center justify-center overflow-hidden group-hover:border-cosmic-blue/60 group-hover:shadow-[0_0_20px_rgba(74,159,255,0.3)] transition-all duration-300">
              <span className="text-cosmic-blue font-mono font-bold text-lg group-hover:animate-pulse">S</span>
              <div className="absolute inset-0 bg-gradient-to-br from-cosmic-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="hidden sm:inline text-gradient-silver group-hover:tracking-wider transition-all duration-300">Si1ver</span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => {
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
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cosmic-blue animate-pulse shadow-[0_0_10px_rgba(74,159,255,0.5)]" />
                  )}
                  <span className="absolute inset-0 rounded-lg bg-cosmic-blue/0 hover:bg-cosmic-blue/5 transition-colors duration-300" />
                </a>
              );
            })}
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="group hidden md:inline-flex relative px-5 py-2 rounded-lg bg-cosmic-blue/10 border border-cosmic-blue/30 text-cosmic-blue text-sm font-medium hover:bg-cosmic-blue/20 hover:border-cosmic-blue/50 hover:shadow-[0_0_20px_rgba(74,159,255,0.3)] transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Hire Me</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cosmic-blue/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-border text-silver-bright hover:bg-secondary/50 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-deep-space/95 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu content */}
        <div className="relative h-full flex flex-col items-center justify-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-3xl font-bold text-silver-bright hover:text-cosmic-blue transition-all duration-300 ${
                isMobileMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`mt-4 px-8 py-3 rounded-lg bg-cosmic-blue/20 border border-cosmic-blue/50 text-cosmic-blue font-semibold transition-all duration-300 ${
              isMobileMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            Hire Me
          </a>
        </div>
      </div>
    </>
  );
}
