"use client";

import { memo } from "react";
import { Code2, Smartphone, Server, Brain, Wrench } from "lucide-react";
import { SectionHeader } from "@/components/portfolio/section-header";
import { ScrollSlide } from "@/components/portfolio/scroll-slide";

const SKILL_CATEGORIES = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Dart", "Python", "Node.js", "Go (GOLang)", "ReactJS", "Java"],
  },
  {
    title: "Mobile & Frontend",
    icon: Smartphone,
    skills: ["Flutter (GetX, BLOC, Cubit)", "Native Android (Java)", "ReactJS"],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    skills: ["Flask", "Node.js", "Go", "RESTful APIs", "Firebase", "Next.js"],
  },
  {
    title: "AI & ML",
    icon: Brain,
    skills: ["PyTorch", "AI Model Deployment (Colon Cancer Classification)"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Docker", "Git", "Postman", "Firebase", "Real-time Systems", "Flame Games Engine"],
  },
];

const SkillCard = memo(function SkillCard({
  category,
}: {
  category: (typeof SKILL_CATEGORIES)[0];
}) {
  const Icon = category.icon;

  return (
    <div className="pixel-card group flex h-full flex-col p-6">
      <div className="mb-5 flex items-center gap-3">
        <span className="pixel-icon-box">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="font-pixel text-[0.55rem] leading-relaxed text-[var(--text-primary)]">
          {category.title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span key={skill} className="skill-chip">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
});

export function SkillsSection() {
  return (
    <section id="skills" className="section-ribbon pixel-section relative py-20 sm:py-24 md:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Capabilities"
          title="What I build with"
          description="Production-focused stack for mobile, web, APIs, and applied ML — the same tools I use to ship and maintain real products."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((category, index) => (
            <ScrollSlide
              key={category.title}
              from={index % 2 === 0 ? "left" : "right"}
              delay={index * 55}
            >
              <SkillCard category={category} />
            </ScrollSlide>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:mt-20 md:grid-cols-4">
          {[
            { label: "Years coding", value: "8+" },
            { label: "Projects shipped", value: "8+" },
            { label: "Technologies", value: "15+" },
            { label: "Happy clients", value: "10+" },
          ].map((stat, index) => (
            <ScrollSlide key={stat.label} from="up" delay={index * 60}>
              <div className="stat-box">
                <span className="stat-number">{stat.value}</span>
                <p className="font-pixel-body text-[1.2rem] uppercase tracking-wider text-[var(--text-muted)]">
                  {stat.label}
                </p>
              </div>
            </ScrollSlide>
          ))}
        </div>
      </div>
    </section>
  );
}
