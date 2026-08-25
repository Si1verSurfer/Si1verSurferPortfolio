"use client";

import type { SectionId } from "@/data/translations";
import { scrollToSection } from "@/lib/scroll-to-section";

type SectionLinkProps = {
  id: SectionId;
  href: string;
  label: string;
  active: boolean;
  className?: string;
  onNavigate?: () => void;
};

export function SectionLink({
  id,
  href,
  label,
  active,
  className = "",
  onNavigate,
}: SectionLinkProps) {
  return (
    <a
      href={href}
      className={`nav-pill ${active ? "nav-pill-active" : ""} ${className}`}
      aria-current={active ? "true" : undefined}
      onClick={(e) => {
        e.preventDefault();
        scrollToSection(id);
        onNavigate?.();
      }}
    >
      {label}
    </a>
  );
}
