"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { easeOutExpo, duration } from "@/lib/motion";

type ScrollSlideProps = {
  from: "left" | "right" | "up" | "down";
  children: ReactNode;
  className?: string;
  /** Stagger in milliseconds */
  delay?: number;
};

/** Slightly smaller travel reads more intentional than large slides */
const OFFSET = 28;

export function ScrollSlide({ from, children, className, delay = 0 }: ScrollSlideProps) {
  const reduced = useReducedMotion();

  const initial = reduced
    ? false
    : from === "left"
      ? { opacity: 0, x: -OFFSET, filter: "blur(4px)" }
      : from === "right"
        ? { opacity: 0, x: OFFSET, filter: "blur(4px)" }
        : from === "up"
          ? { opacity: 0, y: -OFFSET, filter: "blur(4px)" }
          : { opacity: 0, y: OFFSET, filter: "blur(4px)" };

  return (
    <div className={cn(className)}>
      <motion.div
        className="w-full will-change-transform"
        initial={initial}
        whileInView={
          reduced
            ? undefined
            : { opacity: 1, x: 0, y: 0, filter: "blur(0px)" }
        }
        viewport={{ once: true, amount: 0.12, margin: "0% 0% -6% 0%" }}
        transition={{
          delay: delay / 1000,
          // Opacity clears before translation finishes — reads more “designed”
          opacity: { duration: duration.fade, ease: easeOutExpo },
          filter: { duration: 0.55, ease: easeOutExpo },
          x: { duration: duration.reveal, ease: easeOutExpo },
          y: { duration: duration.reveal, ease: easeOutExpo },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
