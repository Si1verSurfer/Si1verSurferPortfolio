/** Soft atmospheric backdrop for the cream/navy portfolio. */
export function SiteBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[var(--navy)]" />
      <div className="absolute inset-0 site-atmosphere" />
      <div className="absolute -top-40 start-[55%] h-[48rem] w-[48rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(240,231,213,0.13),transparent_68%)] blur-3xl" />
      <div className="absolute top-[35%] -start-24 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(240,231,213,0.05),transparent_70%)] blur-3xl" />
      <div className="absolute bottom-[-15%] end-[-8%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(240,231,213,0.06),transparent_70%)] blur-3xl" />
      <div className="absolute inset-0 opacity-[0.16] site-grid" />
      <div className="absolute inset-0 opacity-[0.03] site-noise" />
    </div>
  );
}
