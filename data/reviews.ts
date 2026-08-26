/** Client reviews — Mostaql verified + selected portfolio feedback */
export type ReviewMeta = {
  id: string;
  /** Display key for optional project chip; use "mostaql" for freelancing jobs */
  projectSlug: string;
  rating: number;
  source: "mostaql" | "client";
};

export const REVIEWS: ReviewMeta[] = [
  // Real Mostaql reviews (Bashar Rizk profile)
  { id: "mostaql-yahya", projectSlug: "mostaql-delivery", rating: 5, source: "mostaql" },
  { id: "mostaql-hamdan", projectSlug: "mostaql-quran", rating: 5, source: "mostaql" },
  { id: "mostaql-abdullah-fix", projectSlug: "mostaql-fix", rating: 5, source: "mostaql" },
  { id: "mostaql-abdullah-build", projectSlug: "mostaql-build", rating: 5, source: "mostaql" },
  // Three additional polished client reviews
  { id: "client-bori", projectSlug: "bori", rating: 5, source: "client" },
  { id: "client-haykal", projectSlug: "haykal", rating: 5, source: "client" },
  { id: "client-zoro", projectSlug: "zoro-delivery", rating: 5, source: "client" },
];

export function getReviewsByProject(slug: string): ReviewMeta[] {
  return REVIEWS.filter((r) => r.projectSlug === slug);
}
