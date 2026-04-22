"use client";

import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Code2, Smartphone, Server, Brain, Wrench } from "lucide-react";
import { SectionHeader } from "@/components/portfolio/section-header";
import { ScrollSlide } from "@/components/portfolio/scroll-slide";
import { springCard } from "@/lib/motion";

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
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800/90 bg-zinc-950/40 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-sm transition-colors duration-500 hover:border-lime-400/25 hover:bg-zinc-900/50"
      whileHover={
        reduce
          ? undefined
          : {
              y: -4,
              transition: springCard,
            }
      }
    >
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-lime-400/10 via-violet-500/5 to-transparent opacity-0 blur-2xl transition duration-500 group-hover:opacity-100"
        aria-hidden
      />
      <div className="relative mb-5 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800/90 bg-zinc-950/80 text-lime-300 shadow-[0_0_24px_rgba(163,230,53,0.08)] transition duration-500 group-hover:border-lime-400/35 group-hover:text-lime-200">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="font-display text-lg font-semibold text-zinc-100">{category.title}</h3>
      </div>
      <div className="relative flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-lg border border-zinc-800/90 bg-zinc-950/80 px-2.5 py-1.5 text-xs text-zinc-400 transition group-hover:border-zinc-700/80 group-hover:text-zinc-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
});

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="section-ribbon relative border-b border-zinc-800/80 bg-zinc-950/30 py-20 sm:py-24 md:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-25 [background-image:radial-gradient(#3f3f46_0.5px,transparent_0.5px)] [background-size:30px_30px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000,transparent_75%)]"
        aria-hidden
      />

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

        <div className="mt-14 grid grid-cols-2 gap-3 md:mt-20 md:grid-cols-4 md:gap-4">
          {[
            { label: "Years coding", value: "8+" },
            { label: "Projects shipped", value: "8+" },
            { label: "Technologies", value: "15+" },
            { label: "Happy clients", value: "10+" },
          ].map((stat, index) => (
            <ScrollSlide
              key={stat.label}
              from="up"
              delay={index * 60}
            >
              <div className="overflow-hidden rounded-2xl border border-zinc-800/90 bg-gradient-to-b from-zinc-950/80 to-zinc-950/30 px-4 py-6 text-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] transition hover:border-lime-400/20">
                <p className="font-display text-3xl font-bold tabular-nums text-transparent [background-clip:text] [background-image:linear-gradient(135deg,#d9f99d_0%,#4ade80_40%,#22d3ee_100%)] md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1.5 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
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
