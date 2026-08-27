"use client";

import { ArrowUpRight, Quote, Star } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { REVIEWS } from "@/data/reviews";
import { useLanguage } from "@/context/language-context";
import { scrollToSection } from "@/lib/scroll-to-section";
import { duration, easeOutExpo } from "@/lib/motion";

function Stars({ rating }: { rating: number }) {
  return (
    <span className="rv-stars" aria-label={`${rating}.0 / 5`}>
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="h-2.5 w-2.5 fill-current" strokeWidth={0} />
      ))}
    </span>
  );
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
}

export function ProofSection() {
  const { t, isRtl } = useLanguage();
  const reduced = useReducedMotion();
  const featured = REVIEWS[1] ?? REVIEWS[0];
  const featuredCopy = featured ? t.proof.reviews[featured.id] : null;
  const list = REVIEWS.filter((r) => r.id !== featured?.id);

  return (
    <section
      id="proof"
      className="section-pad relative scroll-mt-28 overflow-x-hidden border-t border-[var(--border)]"
    >
      <div className="section-glow pointer-events-none absolute inset-0" aria-hidden />

      <div className="site-container relative">
        <motion.div
          className="rv-shell"
          initial={false}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: duration.reveal, ease: easeOutExpo }}
        >
          {/* Top bar */}
          <div className="rv-top">
            <div className="min-w-0">
              <div className="section-kicker mb-3">
                <span className="section-kicker-line !bg-[var(--navy)]/25" aria-hidden />
                <p className="eyebrow !mb-0 !text-[var(--navy)]/45">{t.proof.eyebrow}</p>
              </div>
              <h2 className="rv-title">{t.proof.title}</h2>
              <p className="rv-subtitle">{t.proof.subtitle}</p>
            </div>

            <div className="rv-rating-badge">
              <p className="rv-rating-value">5.0</p>
              <div>
                <Stars rating={5} />
                <p className="rv-rating-caption">{t.proof.stats[0]?.label}</p>
              </div>
            </div>
          </div>

          {/* Compact score pills */}
          <div className="rv-scores">
            {t.proof.scores.map((score) => (
              <div key={score.label} className="rv-score-pill">
                <span className="rv-score-num">{score.value}</span>
                <span className="rv-score-txt">{score.label}</span>
              </div>
            ))}
          </div>

          {/* Featured quote — compact */}
          {featuredCopy && (
            <article className="rv-featured">
              <Quote className="rv-featured-mark" aria-hidden />
              <div className="min-w-0 flex-1">
                <p className="rv-featured-quote">“{featuredCopy.quote}”</p>
                <div className="rv-featured-meta">
                  <span className="rv-avatar" aria-hidden>
                    {initials(featuredCopy.name)}
                  </span>
                  <div className="min-w-0">
                    <p className="rv-name">{featuredCopy.name}</p>
                    <p className="rv-role">{featuredCopy.project}</p>
                  </div>
                  <span className="rv-chip">{t.proof.sourceMostaql}</span>
                </div>
              </div>
            </article>
          )}

          {/* Compact trust chips */}
          <div className="rv-trust">
            {t.proof.pillars.map((pillar, index) => (
              <div key={pillar.title} className="rv-trust-chip">
                <span className="rv-trust-index">{String(index + 1).padStart(2, "0")}</span>
                <div className="min-w-0">
                  <p className="rv-trust-title">{pillar.title}</p>
                  <p className="rv-trust-desc">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Reviews grid — small cards */}
          <div className="rv-head">
            <p className="rv-head-label">{t.proof.reviewsEyebrow}</p>
            <h3 className="rv-head-title">{t.proof.reviewsTitle}</h3>
          </div>

          <div className="rv-grid">
            {list.map((review, index) => {
              const copy = t.proof.reviews[review.id];
              if (!copy) return null;

              return (
                <motion.article
                  key={review.id}
                  className="rv-card"
                  initial={false}
                  whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    delay: reduced ? 0 : index * 0.04,
                    duration: 0.4,
                    ease: easeOutExpo,
                  }}
                >
                  <div className="rv-card-top">
                    <Stars rating={review.rating} />
                    <span className="rv-chip">
                      {review.source === "mostaql" ? t.proof.sourceMostaql : t.proof.sourceClient}
                    </span>
                  </div>

                  <p className="rv-card-quote">“{copy.quote}”</p>

                  <div className="rv-card-foot">
                    <span className="rv-avatar rv-avatar-sm" aria-hidden>
                      {initials(copy.name)}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="rv-name">{copy.name}</p>
                      <p className="rv-role truncate">{copy.project}</p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* Slim CTA */}
          <div className="rv-cta">
            <div className="min-w-0">
              <p className="rv-cta-title">{t.proof.ctaTitle}</p>
              <p className="rv-cta-text">{t.proof.ctaText}</p>
            </div>
            <button
              type="button"
              className="rv-cta-btn"
              onClick={() => scrollToSection("contact")}
            >
              {t.proof.cta}
              <ArrowUpRight className={`h-3.5 w-3.5 ${isRtl ? "-scale-x-100" : ""}`} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
