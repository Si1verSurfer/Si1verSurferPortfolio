"use client";

import { type FormEvent, useState } from "react";
import { Send, Github, Linkedin, Mail, MapPin, Zap } from "lucide-react";
import { SectionHeader } from "@/components/portfolio/section-header";
import { ScrollSlide } from "@/components/portfolio/scroll-slide";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setFormState({ name: "", email: "", message: "" });
    alert("Message sent successfully!");
  };

  return (
    <section id="contact" className="section-ribbon pixel-section relative py-20 sm:py-24 md:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Contact"
          title="Let's work together"
          description="Share a few details about your product or team — I usually reply within 24 hours."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollSlide from="left" delay={50}>
            <div className="space-y-4">
              <a
                href="mailto:bashar772004@gmail.com"
                className="pixel-card group flex items-center gap-4 p-4"
              >
                <span className="pixel-icon-box">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-pixel text-[0.45rem] text-[var(--text-muted)]">Email</p>
                  <p className="font-pixel-body text-lg text-[var(--text-primary)]">
                    bashar772004@gmail.com
                  </p>
                </div>
              </a>
              <div className="pixel-card flex items-center gap-4 p-4">
                <span className="pixel-icon-box">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-pixel text-[0.45rem] text-[var(--text-muted)]">Location</p>
                  <p className="font-pixel-body text-lg text-[var(--text-primary)]">
                    Worldwide (remote)
                  </p>
                </div>
              </div>
              <div className="pixel-card flex items-center gap-4 p-4">
                <span className="pixel-icon-box">
                  <Zap className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-pixel text-[0.45rem] text-[var(--text-muted)]">Response</p>
                  <p className="font-pixel-body text-lg text-[var(--text-primary)]">
                    Within 24 hours
                  </p>
                </div>
              </div>
              <div>
                <h3 className="font-pixel mb-3 text-[0.45rem] uppercase tracking-wider text-[var(--text-muted)]">
                  Social
                </h3>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/Si1verSurfer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pixel-icon-box transition hover:shadow-[3px_3px_0_var(--color-accent)]"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/bashar-rizq/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pixel-icon-box transition hover:shadow-[3px_3px_0_var(--color-accent)]"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollSlide>

          <ScrollSlide from="right" delay={100}>
            <form onSubmit={handleSubmit} className="pixel-card p-6 sm:p-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="font-pixel mb-2 block text-[0.45rem] text-[var(--text-muted)]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState((p) => ({ ...p, name: e.target.value }))}
                    required
                    className="w-full"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="font-pixel mb-2 block text-[0.45rem] text-[var(--text-muted)]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => setFormState((p) => ({ ...p, email: e.target.value }))}
                    required
                    className="w-full"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="font-pixel mb-2 block text-[0.45rem] text-[var(--text-muted)]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formState.message}
                    onChange={(e) => setFormState((p) => ({ ...p, message: e.target.value }))}
                    required
                    rows={5}
                    className="w-full resize-none"
                    placeholder="Project scope, timeline, or stack…"
                  />
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? (
                    <>Sending…</>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send message
                    </>
                  )}
                </button>
              </div>
            </form>
          </ScrollSlide>
        </div>
      </div>
    </section>
  );
}
