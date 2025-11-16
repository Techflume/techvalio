import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ⭐ GLOBAL SEO CONFIG
export const metadata: Metadata = {
  metadataBase: new URL("https://www.techvalio.com"),

  title: {
    default: "Techvalio – Computer System Validation & Compliance Experts",
    template: "%s | Techvalio",
  },

  description:
    "Techvalio specializes in Computer System Validation (CSV), Equipment Qualification, GxP Compliance, Pharma Software Validation, and regulatory consulting for global industries.",

  keywords: [
    "Techvalio",
    "computer system validation",
    "CSV services",
    "equipment qualification",
    "data migration validation",
    "software testing and validation",
    "pharmaceutical validation",
    "21 CFR Part 11",
    "Annex 11",
    "GxP compliance",
    "FDA compliance",
    "regulated industries",
    "validation lifecycle"
  ],

  openGraph: {
    title: "Techvalio – Validation & Compliance Experts",
    description:
      "Audit-ready validation, GxP consulting, software testing, and regulatory compliance for pharma, biotech, healthcare, and regulated industries.",
    url: "https://www.techvalio.com",
    siteName: "Techvalio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Techvalio – Validation & Compliance Experts",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },

  // ⭐ Google Search Console Verification
  other: [
    {
      name: "google-site-verification",
      content: "6eqCpENKb12jsMX5YxcXqN-nnUbMcDtmhF_h-s",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
