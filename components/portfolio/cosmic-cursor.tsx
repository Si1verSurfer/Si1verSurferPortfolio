"use client";

import { useEffect, useState, useRef } from "react";

export function CosmicCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [trails, setTrails] = useState<{ x: number; y: number; id: number }[]>([]);
  const trailId = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Add trail particle
      trailId.current += 1;
      setTrails((prev) => [
        ...prev.slice(-12),
        { x: e.clientX, y: e.clientY, id: trailId.current },
      ]);

      // Check if hovering over clickable element
      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        window.getComputedStyle(target).cursor === "pointer";
      setIsPointer(isClickable);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // Clean up old trails
  useEffect(() => {
    const interval = setInterval(() => {
      setTrails((prev) => prev.slice(-8));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hide default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
        
        @media (max-width: 768px) {
          * {
            cursor: auto !important;
          }
        }
      `}</style>

      {/* Trail particles */}
      <div className="fixed inset-0 pointer-events-none z-[9998] hidden md:block">
        {trails.map((trail, index) => (
          <div
            key={trail.id}
            className="absolute rounded-full"
            style={{
              left: trail.x,
              top: trail.y,
              width: 4 + index * 0.5,
              height: 4 + index * 0.5,
              background: `radial-gradient(circle, rgba(74, 159, 255, ${0.1 + index * 0.05}) 0%, transparent 70%)`,
              transform: "translate(-50%, -50%)",
              opacity: index / trails.length,
            }}
          />
        ))}
      </div>

      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-[9999] hidden md:block"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* Outer glow ring */}
        <div
          className={`absolute rounded-full transition-all duration-200 ${
            isClicking ? "scale-75" : isPointer ? "scale-150" : "scale-100"
          }`}
          style={{
            width: 40,
            height: 40,
            left: -20,
            top: -20,
            background: "radial-gradient(circle, rgba(74, 159, 255, 0.15) 0%, transparent 70%)",
            boxShadow: isPointer
              ? "0 0 30px rgba(74, 159, 255, 0.5), 0 0 60px rgba(34, 211, 238, 0.3)"
              : "0 0 20px rgba(74, 159, 255, 0.3)",
          }}
        />

        {/* Middle ring */}
        <div
          className={`absolute rounded-full border transition-all duration-150 ${
            isClicking
              ? "scale-50 border-cosmic-cyan"
              : isPointer
              ? "scale-125 border-cosmic-blue"
              : "scale-100 border-cosmic-blue/50"
          }`}
          style={{
            width: 24,
            height: 24,
            left: -12,
            top: -12,
            borderWidth: isPointer ? 2 : 1,
            boxShadow: isPointer ? "0 0 15px rgba(74, 159, 255, 0.5)" : "none",
          }}
        />

        {/* Core dot */}
        <div
          className={`absolute rounded-full transition-all duration-100 ${
            isClicking ? "scale-200 bg-cosmic-cyan" : "bg-cosmic-blue"
          }`}
          style={{
            width: 6,
            height: 6,
            left: -3,
            top: -3,
            boxShadow: `0 0 10px rgba(74, 159, 255, 0.8), 0 0 20px rgba(74, 159, 255, 0.4)`,
          }}
        />

        {/* Flash effect on click */}
        {isClicking && (
          <div
            className="absolute rounded-full animate-[ripple_0.4s_ease-out]"
            style={{
              width: 20,
              height: 20,
              left: -10,
              top: -10,
              border: "2px solid rgba(74, 159, 255, 0.8)",
            }}
          />
        )}

        {/* Sparkle particles around cursor */}
        {isPointer && (
          <>
            <div
              className="absolute w-1 h-1 rounded-full bg-cosmic-cyan animate-ping"
              style={{ left: 15, top: -10 }}
            />
            <div
              className="absolute w-1 h-1 rounded-full bg-cosmic-blue animate-ping"
              style={{ left: -15, top: 10, animationDelay: "0.2s" }}
            />
            <div
              className="absolute w-1 h-1 rounded-full bg-silver animate-ping"
              style={{ left: 10, top: 15, animationDelay: "0.4s" }}
            />
          </>
        )}
      </div>
    </>
  );
}
