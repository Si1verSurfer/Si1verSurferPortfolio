"use client";

import { useEffect, useRef, useState } from "react";
import { Code2, Smartphone, Server, Brain, Wrench } from "lucide-react";

const skillCategories = [
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

function SkillCard({
  category,
  index,
  isVisible,
}: {
  category: (typeof skillCategories)[0];
  index: number;
  isVisible: boolean;
}) {
  const Icon = category.icon;

  return (
    <div
      className={`group relative p-6 rounded-xl bg-card/50 border border-border backdrop-blur-sm hover-lift hover-glow energy-border ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ 
        transitionDelay: `${index * 150}ms`,
        transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)"
      }}
    >
      {/* Animated glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cosmic-blue/10 via-transparent to-cosmic-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Orbiting particle */}
      <div className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-cosmic-cyan/50 opacity-0 group-hover:opacity-100 group-hover:animate-orbit" />

      {/* Icon with danger glow */}
      <div className="relative flex items-center gap-3 mb-4">
        <div className="p-2.5 rounded-lg bg-cosmic-blue/10 border border-cosmic-blue/20 group-hover:bg-cosmic-blue/20 group-hover:border-cosmic-blue/50 group-hover:animate-glow-pulse transition-all duration-500">
          <Icon className="w-5 h-5 text-cosmic-blue group-hover:animate-danger-glow" />
        </div>
        <h3 className="text-lg font-semibold text-silver-bright group-hover:text-cosmic-shadow transition-all duration-300">{category.title}</h3>
      </div>

      {/* Skills with staggered hover */}
      <div className="relative flex flex-wrap gap-2">
        {category.skills.map((skill, i) => (
          <span
            key={skill}
            className={`px-3 py-1.5 text-sm rounded-full bg-secondary/50 text-muted-foreground border border-border hover:border-cosmic-blue/50 hover:text-silver-bright hover:bg-cosmic-blue/15 hover-scale transition-all duration-300 cursor-default ${
              isVisible ? "animate-fade-in" : ""
            }`}
            style={{ animationDelay: `${index * 150 + i * 75}ms` }}
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Corner accent with animation */}
      <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-xl">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-cosmic-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-2 right-2 w-1 h-1 rounded-full bg-cosmic-cyan opacity-0 group-hover:opacity-100 group-hover:animate-pulse" />
      </div>
      
      {/* Bottom energy line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cosmic-blue/0 to-transparent group-hover:via-cosmic-blue/50 transition-all duration-700" />
    </div>
  );
}

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-24 md:py-32 bg-deep-space overflow-hidden floating-orbs"
    >
      {/* Animated background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#4a9fff 1px, transparent 1px), linear-gradient(90deg, #4a9fff 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />
      
      {/* Floating cosmic particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[10%] w-32 h-32 rounded-full bg-cosmic-blue/5 blur-3xl animate-float-gentle" />
        <div className="absolute top-40 right-[15%] w-40 h-40 rounded-full bg-cosmic-cyan/5 blur-3xl animate-float-gentle" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-32 left-[30%] w-24 h-24 rounded-full bg-silver/5 blur-3xl animate-float-gentle" style={{ animationDelay: "4s" }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-cosmic-blue/30 bg-cosmic-blue/5 text-cosmic-blue text-sm font-mono tracking-wider mb-4 animate-glow-pulse">
            CAPABILITIES
          </span>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-silver mb-4 ${isVisible ? "animate-text-reveal" : ""}`}>
            Technical Arsenal
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed ${isVisible ? "animate-fade-in" : ""}`} style={{ animationDelay: "0.5s" }}>
            Mastering the technologies that power modern applications across all platforms
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.title}
              category={category}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Stats row */}
        <div
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {[
            { label: "Years Coding", value: "8+" },
            { label: "Projects Delivered", value: "8+" },
            { label: "Technologies", value: "15+" },
            { label: "Happy Clients", value: "10+" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="group text-center p-6 rounded-xl bg-card/30 border border-border/50 hover-lift hover-glow cursor-default"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient-cosmic mb-2 group-hover:animate-scale-pulse">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-mono tracking-wider group-hover:text-silver transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
