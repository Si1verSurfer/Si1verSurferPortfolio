"use client";

import { useScrollState } from "@/context/portfolio-context";
import { type SectionId } from "@/data/translations";
import { scrollToSection } from "@/lib/scroll-to-section";

const DOT_SECTIONS: SectionId[] = [
  "home",
  "about",
  "work",
  "proof",
  "process",
  "capabilities",
  "contact",
];

export function SectionDots() {
  const { activeSection } = useScrollState();
  const first = DOT_SECTIONS[0];

  return (
    <nav className="section-dots" aria-label="Sections">
      <span className="section-dots-edge">01</span>
      <div className="section-dots-track">
        {DOT_SECTIONS.map((id) => {
          const active = activeSection === id || (!activeSection && id === first);
          return (
            <button
              key={id}
              type="button"
              className={`section-dot ${active ? "section-dot-active" : ""}`}
              aria-label={id}
              aria-current={active ? "true" : undefined}
              onClick={() => scrollToSection(id)}
            >
              <span className="section-dot-core" />
            </button>
          );
        })}
      </div>
      <span className="section-dots-edge">
        {String(DOT_SECTIONS.length).padStart(2, "0")}
      </span>
    </nav>
  );
}
