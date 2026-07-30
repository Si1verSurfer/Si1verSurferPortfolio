"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { useScrollState } from "@/context/portfolio-context";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export function SiteNav() {
  const { isScrolled, activeSection } = useScrollState();
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        isScrolled ? "border-b border-[var(--border)] bg-[var(--navy)]" : "bg-transparent"
      }`}
    >
      <div className="site-container flex h-20 items-center justify-between gap-6">
        <Link href="/" className="logo-mark font-display text-lg font-semibold tracking-[0.18em] text-[var(--cream)]">
          SS
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {LINKS.map((link) => {
            const id = link.href.replace("#", "");
            const active = activeSection === id || (id === "about" && activeSection === "");
            return (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link ${active ? "nav-link-active" : ""}`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <a href="#contact" className="btn-primary hidden !py-2.5 !text-[0.68rem] md:inline-flex">
          Let&apos;s talk
          <ArrowUpRight className="h-4 w-4" />
        </a>

        <button
          type="button"
          className="menu-toggle inline-flex rounded-full border border-[var(--border-strong)] p-2 text-[var(--cream)] md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--border)] bg-[var(--navy)] px-5 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <a key={link.href} href={link.href} className="nav-link" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary mt-2 w-fit" onClick={() => setOpen(false)}>
              Let&apos;s talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
