"use client";

import { type FormEvent, useState } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { portfolioProfile } from "@/data/profile";

export function ContactFooter() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setForm({ name: "", email: "", message: "" });
    alert("Message sent successfully!");
  };

  return (
    <footer id="contact" className="scroll-mt-24 border-t border-[var(--border)]">
      <section className="section-pad">
        <div className="site-container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="surface-card flex min-h-[320px] flex-col justify-between border-[var(--border-strong)] p-8 cta-shimmer md:p-10">
            <div>
              <p className="eyebrow mb-4">Contact</p>
              <h2 className="font-display text-3xl font-semibold uppercase leading-tight tracking-tight text-[var(--cream)] md:text-4xl">
                Let&apos;s create something extraordinary
              </h2>
            </div>
            <a href="mailto:bashar772004@gmail.com" className="btn-primary mt-8 w-fit">
              Let&apos;s work together
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="space-y-6">
            <div className="surface-card p-6">
              <div className="space-y-4 text-sm text-[var(--cream-muted)]">
                <p className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-[var(--cream-dim)]" />
                  bashar772004@gmail.com
                </p>
                <p className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-[var(--cream-dim)]" />
                  Worldwide (remote)
                </p>
              </div>
              <div className="mt-6 flex gap-3">
                <a
                  href="https://github.com/Si1verSurfer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline !px-4 !py-2"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/bashar-rizq/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline !px-4 !py-2"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>

            <form onSubmit={onSubmit} className="surface-card space-y-4 p-6">
              <input
                required
                value={form.name}
                onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                placeholder="Your name"
                className="w-full rounded-xl border border-[var(--border-strong)] bg-transparent px-4 py-3 text-sm text-[var(--cream)] outline-none placeholder:text-[var(--cream-dim)] focus:border-[var(--cream)]"
              />
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                placeholder="Your email"
                className="w-full rounded-xl border border-[var(--border-strong)] bg-transparent px-4 py-3 text-sm text-[var(--cream)] outline-none placeholder:text-[var(--cream-dim)] focus:border-[var(--cream)]"
              />
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                placeholder="Tell me about your project"
                className="w-full resize-none rounded-xl border border-[var(--border-strong)] bg-transparent px-4 py-3 text-sm text-[var(--cream)] outline-none placeholder:text-[var(--cream-dim)] focus:border-[var(--cream)]"
              />
              <button type="submit" disabled={sending} className="btn-primary w-full disabled:opacity-60">
                {sending ? "Sending..." : "Send message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <div className="border-t border-[var(--border)] py-6">
        <div className="site-container flex flex-col gap-3 text-sm text-[var(--cream-dim)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {portfolioProfile.name}. All rights reserved.
          </p>
          <p className="uppercase tracking-[0.14em]">{portfolioProfile.alias}</p>
        </div>
      </div>
    </footer>
  );
}
