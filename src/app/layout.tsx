import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import BackToTop from "@/components/BackToTop";
import { site } from "@/data/site";

/**
 * One clean sans-serif face for the whole page. There is deliberately no
 * serif, script or cursive family in this project — emphasis is carried by
 * weight and the cyan accent only.
 */
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

/** Approved page title (browser tab and search result). */
const pageTitle = `${site.name} | Virtual Assistant Portfolio`;

/** Approved meta description (search result snippet). */
const pageDescription =
  "Explore Adrian Cadiao's portfolio featuring social media management, Canva design, online research, manual cold email outreach, and administrative support.";

/** Approved social sharing title — deliberately shorter than `pageTitle`. */
const socialTitle = `${site.name} | Virtual Assistant`;

/** Approved social sharing description. */
const socialDescription =
  "Social media, research, outreach, and administrative support from a Virtual Assistant with hands-on recruitment industry experience.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "virtual assistant",
    "Adrian Cadiao",
    "social media management",
    "Canva design",
    "online research",
    "cold email outreach",
    "manual outreach",
    "administrative support",
    "recruitment assistant",
    "recruitment support",
    "spreadsheet organization",
    "remote assistant",
    "virtual assistant portfolio",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: pageTitle,
    title: socialTitle,
    description: socialDescription,
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: socialTitle,
    description: socialDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b132b",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body>
        {/* Marks the document as JS-enabled so the reveal animations can hide
            content before it scrolls in. Without JS these rules never match
            and everything stays visible. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js');",
          }}
        />

        <a href="#main" className="skip-link">
          Skip to main content
        </a>

        <SiteHeader />

        <main id="main">{children}</main>

        <SiteFooter />
        <BackToTop />
      </body>
    </html>
  );
}
