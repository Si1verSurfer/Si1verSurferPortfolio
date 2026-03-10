"use client";

import { memo } from "react";
import Image from "next/image";
import { Monitor } from "lucide-react";

type WebBrowserMockupProps = {
  src: string;
  alt: string;
  className?: string;
  showBadge?: boolean;
  badgeLabel?: string;
  priority?: boolean;
  sizes?: string;
  /** Viewport aspect: "16/9" | "16/10" | "4/3". Grows with card width. */
  aspectRatio?: "16/9" | "16/10" | "4/3";
};

const ASPECT_CLASS = {
  "16/9": "aspect-video",
  "16/10": "aspect-[16/10]",
  "4/3": "aspect-[4/3]",
} as const;

/**
 * Browser window frame for web/dashboard projects. Width scales with card/screen;
 * viewport uses aspect ratio so the whole mockup grows with width.
 */
export const WebBrowserMockup = memo(function WebBrowserMockup({
  src,
  alt,
  className = "",
  showBadge = true,
  badgeLabel = "Web App",
  priority = false,
  sizes = "100%",
  aspectRatio = "16/10",
}: WebBrowserMockupProps) {
  return (
    <div
      className={`relative flex w-full max-w-full flex-col items-center justify-center ${className}`}
      style={{ perspective: "1200px" }}
    >
      {/* Browser frame: full width of card, scales with screen */}
      <div
        className="relative w-full overflow-hidden rounded-lg border border-border/80 bg-card shadow-[0_0_0_1px_rgba(74,159,255,0.08),0_20px_50px_-15px_rgba(0,0,0,0.45)] transition-transform duration-500 group-hover:scale-[1.02] group-hover:-translate-y-0.5 sm:rounded-xl"
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateY(2deg) rotateX(-1deg)",
        }}
      >
        {/* Browser chrome */}
        <div className="flex min-h-[36px] items-center gap-2 border-b border-border/80 bg-muted/50 px-2.5 py-2 sm:px-3 sm:py-2.5">
          <div className="flex shrink-0 gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#ff5f57] sm:h-2.5 sm:w-2.5" />
            <span className="h-2 w-2 rounded-full bg-[#febc2e] sm:h-2.5 sm:w-2.5" />
            <span className="h-2 w-2 rounded-full bg-[#28c840] sm:h-2.5 sm:w-2.5" />
          </div>
          <div className="min-w-0 flex-1 rounded border border-border/60 bg-deep-space/80 px-2 py-1 sm:rounded-md sm:px-3 sm:py-1.5">
            <span className="truncate text-[9px] font-mono text-muted-foreground sm:text-[10px]">
              https://dashboard.example.com
            </span>
          </div>
        </div>

        {/* Viewport: aspect ratio so height grows with width (bigger on larger screens) */}
        <div
          className={`relative w-full overflow-hidden bg-muted/30 ${ASPECT_CLASS[aspectRatio]}`}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            className="object-cover object-top"
            priority={priority}
          />
        </div>
      </div>

      {showBadge && (
        <div className="mt-2.5 flex items-center gap-1.5 rounded-full border border-cosmic-blue/40 bg-cosmic-blue/10 px-2.5 py-1.5 backdrop-blur-sm sm:mt-3 sm:px-3">
          <Monitor className="h-3 w-3 text-cosmic-blue sm:h-3.5 sm:w-3.5" />
          <span className="text-[10px] font-mono font-medium tracking-wider text-cosmic-blue sm:text-xs">
            {badgeLabel}
          </span>
        </div>
      )}
    </div>
  );
});
