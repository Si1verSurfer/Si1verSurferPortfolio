import React from "react";
import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { PortfolioProviders } from "@/components/portfolio/providers";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Bashar Rizk | بشار رزق — Software Engineer",
    template: "%s | Bashar Rizk",
  },
  description:
    "أبني تطبيقات ومواقع واضحة وسريعة — منتجات تُستخدم كل يوم، وتبقى سهلة مع الوقت.",
  openGraph: {
    siteName: "Bashar Rizk",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${cairo.variable} font-sans`} suppressHydrationWarning>
        <PortfolioProviders>{children}</PortfolioProviders>
        <Analytics />
      </body>
    </html>
  );
}
