"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { useScrollState } from "@/context/portfolio-context";
import { useLanguage } from "@/context/language-context";
import { getNavLinks } from "@/data/translations";
import { portfolioProfile } from "@/data/profile";
import { SectionLink } from "@/components/portfolio/section-link";
import { scrollToSection } from "@/lib/scroll-to-section";

export function SiteNav() {
  const { isScrolled, activeSection } = useScrollState();
  const { locale, setLocale, t, isRtl } = useLanguage();
  const [open, setOpen] = useState(false);
  const links = getNavLinks(locale);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5">
      <div
        className={`floating-nav pointer-events-auto mx-auto max-w-6xl ${
          isScrolled ? "floating-nav-scrolled" : "floating-nav-idle"
        }`}
      >
        <div className="flex items-center justify-between gap-3 px-2 py-1 sm:gap-4 sm:px-3">
          <Link
            href="/"
            className="logo-mark flex min-w-0 items-center gap-3 text-[var(--cream)]"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
              setOpen(false);
            }}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--navy-soft)]/60 text-xs font-extrabold tracking-wide">
              SS
            </span>
            <span className="hidden truncate text-sm font-bold lg:inline">
              {portfolioProfile.alias}
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
            {links.map((link) => (
              <SectionLink
                key={link.id}
                id={link.id}
                href={link.href}
                label={link.label}
                active={activeSection === link.id}
              />
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <div className="lang-switch" role="group" aria-label="Language">
              <button
                type="button"
                className={`lang-switch-btn ${locale === "en" ? "lang-switch-btn-active" : ""}`}
                onClick={() => setLocale("en")}
              >
                {t.language.en}
              </button>
              <button
                type="button"
                className={`lang-switch-btn ${locale === "ar" ? "lang-switch-btn-active" : ""}`}
                onClick={() => setLocale("ar")}
              >
                {t.language.ar}
              </button>
            </div>

            <a
              href="#contact"
              className="btn-primary !px-5 !py-2.5 !text-xs"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
            >
              {t.nav.letsTalk}
              <ArrowUpRight className={`h-3.5 w-3.5 ${isRtl ? "-scale-x-100" : ""}`} />
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <div className="lang-switch" role="group" aria-label="Language">
              <button
                type="button"
                className={`lang-switch-btn ${locale === "en" ? "lang-switch-btn-active" : ""}`}
                onClick={() => setLocale("en")}
              >
                {t.language.en}
              </button>
              <button
                type="button"
                className={`lang-switch-btn ${locale === "ar" ? "lang-switch-btn-active" : ""}`}
                onClick={() => setLocale("ar")}
              >
                {t.language.ar}
              </button>
            </div>

            <button
              type="button"
              className="menu-toggle inline-flex rounded-full border border-[var(--border-strong)] p-2.5 text-[var(--cream)]"
              aria-label={t.nav.menu}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="floating-nav-menu pointer-events-auto mx-auto mt-3 max-w-6xl px-1 lg:hidden">
          <div className="flex flex-col gap-1 p-3">
            {links.map((link) => (
              <SectionLink
                key={link.id}
                id={link.id}
                href={link.href}
                label={link.label}
                active={activeSection === link.id}
                className="nav-pill-mobile"
                onNavigate={() => setOpen(false)}
              />
            ))}
            <a
              href="#contact"
              className="btn-primary mt-2 w-full justify-center"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
                setOpen(false);
              }}
            >
              {t.nav.letsTalk}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
