import { portfolioProfile } from "@/data/profile";
import { absoluteUrl } from "@/lib/site-url";

export function PortfolioJsonLd() {
  const url = absoluteUrl("/");

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioProfile.name,
    alternateName: portfolioProfile.nameAr,
    jobTitle: portfolioProfile.title,
    email: portfolioProfile.email,
    url,
    sameAs: [
      portfolioProfile.website,
      portfolioProfile.github,
      portfolioProfile.linkedin,
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${portfolioProfile.name} Portfolio`,
    url,
    inLanguage: ["ar", "en"],
    author: {
      "@type": "Person",
      name: portfolioProfile.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
