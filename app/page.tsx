import type { Metadata } from "next";
import { PortfolioHome } from "@/components/portfolio/portfolio-home";
import { PortfolioJsonLd } from "@/components/portfolio/portfolio-json-ld";
import { absoluteUrl, getSiteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  alternates: {
    canonical: absoluteUrl("/"),
    languages: {
      ar: absoluteUrl("/"),
      en: absoluteUrl("/?lang=en"),
      "x-default": absoluteUrl("/"),
    },
  },
  openGraph: {
    type: "website",
    url: absoluteUrl("/"),
    title: "Bashar Rizk | بشار رزق — Software Engineer",
    description:
      "Portfolio of Bashar Rizk — mobile apps, web platforms, and products shipped to the App Store.",
    locale: "ar_SA",
    alternateLocale: ["en_US"],
  },
};

export default function Page() {
  return (
    <>
      <PortfolioJsonLd />
      <PortfolioHome />
    </>
  );
}
