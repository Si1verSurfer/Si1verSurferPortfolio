"use client";

import { type FormEvent, useState } from "react";
import { Send, Github, Linkedin, Mail, MapPin, Zap } from "lucide-react";
import { SectionHeader } from "@/components/portfolio/section-header";
import { ScrollSlide } from "@/components/portfolio/scroll-slide";

const inputClass =
  "w-full rounded-xl border border-zinc-800/90 bg-zinc-950/60 px-4 py-3 text-sm text-zinc-100 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] placeholder:text-zinc-600 outline-none transition focus:border-lime-400/40 focus:ring-2 focus:ring-lime-400/15";

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
    <section
      id="contact"
      className="section-ribbon relative border-b border-zinc-800/80 bg-zinc-950/35 py-20 sm:py-24 md:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_15%_10%,rgba(139,92,246,0.1),transparent),radial-gradient(ellipse_55%_40%_at_85%_20%,rgba(45,212,191,0.1),transparent)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Contact"
          title="Let's work together"
          description="Share a few details about your product or team — I usually reply within 24 hours."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollSlide from="left" delay={50}>
            <div className="space-y-6">
              <a
                href="mailto:bashar772004@gmail.com"
                className="group flex items-center gap-4 rounded-2xl border border-zinc-800/90 bg-zinc-950/40 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] transition duration-500 hover:-translate-y-0.5 hover:border-lime-400/25"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800/90 bg-zinc-950 text-lime-300">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-mono text-xs text-zinc-500">Email</p>
                  <p className="text-zinc-200">bashar772004@gmail.com</p>
                </div>
              </a>
              <div className="flex items-center gap-4 rounded-2xl border border-zinc-800/90 bg-zinc-950/40 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800/90 bg-zinc-950 text-lime-300">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-mono text-xs text-zinc-500">Location</p>
                  <p className="text-zinc-200">Worldwide (remote)</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-2xl border border-zinc-800/90 bg-zinc-950/40 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800/90 bg-zinc-950 text-lime-300">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-mono text-xs text-zinc-500">Response</p>
                  <p className="text-zinc-200">Within 24 hours</p>
                </div>
              </div>
              <div>
                <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-zinc-500">
                  Social
                </h3>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/Si1verSurfer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-800 text-zinc-500 transition hover:border-lime-400/50 hover:text-lime-400"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/bashar-rizq/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-800 text-zinc-500 transition hover:border-lime-400/50 hover:text-lime-400"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollSlide>

          <ScrollSlide from="right" delay={100}>
            <form
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-2xl border border-zinc-800/90 bg-zinc-950/40 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_32px_80px_rgba(0,0,0,0.2)] backdrop-blur-md sm:p-8"
            >
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br from-lime-400/15 via-violet-500/10 to-transparent blur-3xl"
                aria-hidden
              />
              <div className="relative space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-mono text-zinc-500">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState((p) => ({ ...p, name: e.target.value }))}
                    required
                    className={inputClass}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-mono text-zinc-500">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => setFormState((p) => ({ ...p, email: e.target.value }))}
                    required
                    className={inputClass}
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-xs font-mono text-zinc-500"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formState.message}
                    onChange={(e) => setFormState((p) => ({ ...p, message: e.target.value }))}
                    required
                    rows={5}
                    className={`${inputClass} resize-none`}
                    placeholder="Project scope, timeline, or stack…"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-lime-400/45 bg-gradient-to-r from-lime-400/20 to-cyan-500/10 py-3.5 text-sm font-semibold text-lime-200 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-lime-400/30 border-t-lime-400" />
                      Sending…
                    </>
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
