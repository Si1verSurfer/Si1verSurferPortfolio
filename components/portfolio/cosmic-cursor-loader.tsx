"use client";

import dynamic from "next/dynamic";

const CosmicCursor = dynamic(
  () => import("./cosmic-cursor").then((m) => m.CosmicCursor),
  { ssr: false }
);

export function CosmicCursorLoader() {
  return <CosmicCursor />;
}
