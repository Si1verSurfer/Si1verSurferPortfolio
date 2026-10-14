import type { Project } from "@/data/projects";

export type ProjectTagId = "mobile" | "web" | "islamic" | "ecommerce" | "live-store";

export type ProjectFilterId = "all" | ProjectTagId;

export const PROJECT_TAG_IDS: ProjectTagId[] = [
  "mobile",
  "web",
  "islamic",
  "ecommerce",
  "live-store",
];

export function projectMatchesFilter(project: Project, filter: ProjectFilterId): boolean {
  if (filter === "all") return true;
  return project.tags.includes(filter);
}
