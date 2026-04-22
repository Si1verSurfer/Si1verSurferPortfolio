"use client";

import { memo } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type MobilePhoneMockupProps = {
  src: string;
  alt: string;
  className?: string;
  showBadge?: boolean;
  badgeLabel?: string;
  priority?: boolean;
  sizes?: string;
  /** Soft 3D float + sheen; use on hero. Project grids stay static by default. */
  animated?: boolean;
};

/**
 * iPhone-style device frame with screen preview. Used to showcase app screens
 * and signal "mobile app developer" to clients.
 */
export const MobilePhoneMockup = memo(function MobilePhoneMockup({
  src,
  alt,
  className = "",
  showBadge = true,
  badgeLabel = "Mobile App",
  priority = false,
  sizes = "280px",
  animated = false,
}: MobilePhoneMockupProps) {
  return (
    <div
      className={cn("group relative flex flex-col items-center justify-center", className)}
      style={{ perspective: "1200px" }}
    >
      {/* Phone frame - iPhone 14 style with Dynamic Island */}
      <div
        className={cn(
          "relative rounded-[2.5rem] border-[10px] border-[#1a1a1a] bg-[#000] shadow-[0_0_0_2px_#333,0_25px_60px_-15px_rgba(0,0,0,0.7),inset_0_0_0_1px_rgba(255,255,255,0.05)]",
          !animated && "transition-transform duration-500 group-hover:scale-[1.02] group-hover:-translate-y-1",
          animated && "animate-phone-mobile transform-gpu will-change-transform"
        )}
        style={{
          width: "min(280px, 85vw)",
          aspectRatio: "9 / 19.5",
          transformStyle: "preserve-3d",
          ...(!animated && { transform: "rotateY(-4deg) rotateX(2deg)" }),
        }}
      >
        {/* Dynamic Island / notch */}
        <div className="absolute left-1/2 top-3 -z-10 h-7 w-24 -translate-x-1/2 rounded-full bg-black" />

        {/* Screen bezel (inner rounded) */}
        <div className="absolute inset-[6px] overflow-hidden rounded-[2rem] bg-[#0a0a0a]">
          {/* Screen content */}
          <div className="relative h-full w-full overflow-hidden rounded-[1.5rem]">
            <Image
              src={src}
              alt={alt}
              fill
              sizes={sizes}
              className="object-cover object-top"
              priority={priority}
            />
            {animated && (
              <div
                className="pointer-events-none absolute inset-0 rounded-[1.5rem] animate-phone-screen-sheen"
                style={{
                  background:
                    "linear-gradient(125deg, rgba(255,255,255,0.2) 0%, transparent 42%, rgba(255,255,255,0.05) 100%)",
                }}
                aria-hidden
              />
            )}
          </div>
        </div>

        {/* Subtle screen reflection */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[2.25rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%)",
          }}
        />
      </div>

      {/* "Mobile App" badge below phone */}
      {showBadge && (
        <div className="mt-3 flex items-center gap-1.5 rounded-full border border-lime-400/40 bg-lime-400/10 px-3 py-1.5 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400" />
          </span>
          <span className="text-xs font-mono font-medium tracking-wider text-teal-400">
            {badgeLabel}
          </span>
        </div>
      )}
    </div>
  );
});
