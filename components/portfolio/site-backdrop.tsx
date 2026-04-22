"use client";

/**
 * Full-viewport atmosphere: slow aurora, subtle grid, and light grain.
 * Marked aria-hidden; pointer-events none so it never blocks UI.
 */
export function SiteBackdrop() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div className="aurora-mesh absolute inset-0" />
      <div
        className="absolute inset-0 opacity-[0.35] mix-blend-soft-light [background-image:radial-gradient(rgba(99,102,241,0.12)_0.5px,transparent_0.5px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_100%_80%_at_50%_20%,#000_20%,transparent_70%)]"
        aria-hidden
      />
      <div className="site-noise pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="absolute -left-1/4 top-0 h-[60vh] w-[60vw] rounded-full bg-violet-500/10 blur-[120px] animate-aurora-orb-1"
        aria-hidden
      />
      <div
        className="absolute -right-1/4 bottom-0 h-[50vh] w-[55vw] rounded-full bg-cyan-500/8 blur-[100px] animate-aurora-orb-2"
        aria-hidden
      />
    </div>
  );
}
