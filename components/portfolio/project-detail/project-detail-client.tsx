"use client";

import dynamic from "next/dynamic";
import type { Project } from "@/data/projects";

const WebProjectDetail = dynamic(
  () => import("./web-project-detail").then((m) => ({ default: m.WebProjectDetail })),
  { ssr: true, loading: () => <ProjectDetailSkeleton /> }
);

const MobileProjectDetail = dynamic(
  () => import("./mobile-project-detail").then((m) => ({ default: m.MobileProjectDetail })),
  { ssr: true, loading: () => <ProjectDetailSkeleton /> }
);

function ProjectDetailSkeleton() {
  return (
    <div className="min-h-screen bg-deep-space animate-pulse flex items-center justify-center">
      <div className="h-8 w-48 rounded bg-white/10" />
    </div>
  );
}

export function ProjectDetailClient({ project }: { project: Project }) {
  return project.is_mobile_app ? (
    <MobileProjectDetail project={project} />
  ) : (
    <WebProjectDetail project={project} />
  );
}
