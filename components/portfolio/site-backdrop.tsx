/** Soft gray stage behind the floating page shell */
export function SiteBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[var(--outer)]" />
      <div className="absolute inset-0 site-atmosphere" />
      <div className="absolute -top-32 start-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.55),transparent_68%)] blur-3xl" />
      <div className="absolute bottom-[-10%] end-[-5%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.35),transparent_70%)] blur-3xl" />
    </div>
  );
}
