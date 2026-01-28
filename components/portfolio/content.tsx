import React from "react"

import { useEffect, useRef, useState } from "react";
import { Send, Github, Linkedin, Mail, MapPin, Zap } from "lucide-react";

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    // Add other form fields if necessary
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setFormState({ name: "", email: "", message: "" });
    alert("Message sent successfully!");
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 md:py-32 bg-deep-space overflow-hidden floating-orbs"
    >
      {/* Animated background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cosmic-blue/5 rounded-full blur-[100px] animate-float-gentle" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cosmic-cyan/5 rounded-full blur-[100px] animate-float-gentle" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-silver/3 rounded-full blur-[80px] animate-pulse-soft" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(#4a9fff 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-cosmic-blue/30 bg-cosmic-blue/5 text-cosmic-blue text-sm font-mono tracking-wider mb-4 animate-glow-pulse">
            CONTACT
          </span>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-silver mb-4 ${isVisible ? "animate-text-reveal" : ""}`}>
            Let{"'"}s Connect
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed ${isVisible ? "animate-fade-in" : ""}`} style={{ animationDelay: "0.5s" }}>
            Ready to build something extraordinary? Let{"'"}s discuss your next project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact info */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="space-y-8">
              {/* Quick info cards */}
              <div className="space-y-4">
                <a 
                  href="mailto:bashar772004@gmail.com"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border hover:border-cosmic-blue/50 hover-lift hover-glow energy-border transition-all duration-500"
                >
                  <div className="p-3 rounded-lg bg-cosmic-blue/10 border border-cosmic-blue/20 group-hover:bg-cosmic-blue/20 group-hover:animate-glow-pulse transition-all duration-300">
                    <Mail className="w-5 h-5 text-cosmic-blue group-hover:animate-danger-glow" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-mono">EMAIL</p>
                    <p className="text-silver-bright group-hover:text-cosmic-shadow transition-all duration-300">bashar772004@gmail.com</p>
                  </div>
                </a>

                <div className="group flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border hover:border-cosmic-blue/50 hover-lift hover-glow energy-border transition-all duration-500">
                  <div className="p-3 rounded-lg bg-cosmic-blue/10 border border-cosmic-blue/20 group-hover:bg-cosmic-blue/20 group-hover:animate-glow-pulse transition-all duration-300">
                    <MapPin className="w-5 h-5 text-cosmic-blue group-hover:animate-danger-glow" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-mono">LOCATION</p>
                    <p className="text-silver-bright group-hover:text-cosmic-shadow transition-all duration-300">Available Worldwide (Remote)</p>
                  </div>
                </div>

                <div className="group flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border hover:border-cosmic-blue/50 hover-lift hover-glow energy-border transition-all duration-500">
                  <div className="p-3 rounded-lg bg-cosmic-blue/10 border border-cosmic-blue/20 group-hover:bg-cosmic-blue/20 group-hover:animate-glow-pulse transition-all duration-300">
                    <Zap className="w-5 h-5 text-cosmic-blue group-hover:animate-danger-glow" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-mono">RESPONSE TIME</p>
                    <p className="text-silver-bright group-hover:text-cosmic-shadow transition-all duration-300">Within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div>
                <h3 className="text-sm font-mono text-muted-foreground mb-4 tracking-wider">
                  FIND ME ON
                </h3>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/Si1verSurfer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 rounded-xl bg-card/50 border border-border hover:border-cosmic-blue/50 hover:bg-cosmic-blue/10 hover-scale hover:shadow-[0_0_25px_rgba(74,159,255,0.3)] transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <Github className="w-6 h-6 text-muted-foreground group-hover:text-cosmic-blue group-hover:animate-spin transition-all duration-500" style={{ animationDuration: "1s", animationIterationCount: "1" }} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/bashar-rizq/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 rounded-xl bg-card/50 border border-border hover:border-cosmic-blue/50 hover:bg-cosmic-blue/10 hover-scale hover:shadow-[0_0_25px_rgba(74,159,255,0.3)] transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-cosmic-blue group-hover:animate-bounce transition-all duration-300" />
                  </a>
                </div>
              </div>

              {/* Decorative element */}
              <div className="hidden lg:block relative mt-8">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-cosmic-blue via-cosmic-cyan to-transparent rounded-full" />
                <blockquote className="pl-6 text-lg text-muted-foreground italic">
                  {"\""}The only way to do great work is to love what you do.{"\""}
                  <footer className="mt-2 text-sm text-silver font-mono">
                    — Steve Jobs
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="relative p-8 rounded-2xl bg-card/50 border border-border backdrop-blur-sm hover-glow energy-border transition-all duration-500"
            >
              {/* Animated form glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cosmic-blue/5 via-transparent to-cosmic-cyan/5 opacity-50 animate-pulse-soft" />

              <div className="relative space-y-6">
                {/* Name field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-mono text-muted-foreground mb-2 tracking-wider"
                  >
                    NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState((prev) => ({ ...prev, name: e.target.value }))
                    }
                    required
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-silver-bright placeholder:text-muted-foreground/50 focus:border-cosmic-blue/50 focus:ring-2 focus:ring-cosmic-blue/20 focus:shadow-[0_0_20px_rgba(74,159,255,0.15)] outline-none transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                {/* Email field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-mono text-muted-foreground mb-2 tracking-wider"
                  >
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState((prev) => ({ ...prev, email: e.target.value }))
                    }
                    required
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-silver-bright placeholder:text-muted-foreground/50 focus:border-cosmic-blue/50 focus:ring-2 focus:ring-cosmic-blue/20 focus:shadow-[0_0_20px_rgba(74,159,255,0.15)] outline-none transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Message field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-mono text-muted-foreground mb-2 tracking-wider"
                  >
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    value={formState.message}
                    onChange={(e) =>
                      setFormState((prev) => ({ ...prev, message: e.target.value }))
                    }
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-silver-bright placeholder:text-muted-foreground/50 focus:border-cosmic-blue/50 focus:ring-2 focus:ring-cosmic-blue/20 focus:shadow-[0_0_20px_rgba(74,159,255,0.15)] outline-none transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full py-4 rounded-lg bg-cosmic-blue/20 border border-cosmic-blue/50 text-silver-bright font-semibold overflow-hidden transition-all duration-300 hover:bg-cosmic-blue/30 hover:border-cosmic-blue hover:shadow-[0_0_30px_rgba(74,159,255,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-silver-bright/30 border-t-silver-bright rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 animate-shimmer" />
                </button>
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-cosmic-blue/30 rounded-tl-2xl" />
              <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-cosmic-blue/30 rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-cosmic-blue/30 rounded-bl-2xl" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-cosmic-blue/30 rounded-br-2xl" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
