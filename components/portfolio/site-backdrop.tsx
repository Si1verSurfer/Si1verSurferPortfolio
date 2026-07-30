/** Lightweight static backdrop — no blur filters or animation loops. */
export function SiteBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% -10%, rgba(240, 231, 213, 0.07), transparent 55%), var(--navy)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(240,231,213,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(240,231,213,0.05)_1px,transparent_1px)] [background-size:80px_80px] [mask-image:radial-gradient(ellipse_100%_70%_at_50%_0%,#000_15%,transparent_75%)]"
        aria-hidden
      />
    </div>
  );
}
