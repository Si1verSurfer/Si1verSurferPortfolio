"use client";

/**
 * Full-viewport atmosphere: soft cream glow on navy, subtle grid, light grain.
 */
export function SiteBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% -10%, rgba(240, 231, 213, 0.08), transparent 55%), radial-gradient(ellipse 50% 40% at 100% 50%, rgba(240, 231, 213, 0.04), transparent 50%), var(--navy)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.22] [background-image:linear-gradient(rgba(240,231,213,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(240,231,213,0.06)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_100%_70%_at_50%_0%,#000_15%,transparent_75%)]"
        aria-hidden
      />
      <div className="site-noise pointer-events-none absolute inset-0 opacity-[0.35]" aria-hidden />
      <div
        className="absolute -left-1/4 top-0 h-[55vh] w-[55vw] rounded-full bg-[rgba(240,231,213,0.06)] blur-[120px]"
        aria-hidden
      />
      <div
        className="absolute -right-1/4 bottom-0 h-[45vh] w-[50vw] rounded-full bg-[rgba(240,231,213,0.04)] blur-[100px]"
        aria-hidden
      />
    </div>
  );
}
