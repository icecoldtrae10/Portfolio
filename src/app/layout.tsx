import type { Metadata, Viewport } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import BackToTop from "@/components/BackToTop";
import { site } from "@/data/site";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

/** Approved page title. Change `site.name` and this follows automatically. */
const pageTitle = `${site.name} | Virtual Assistant Portfolio`;

/** Approved meta description. */
const pageDescription =
  "Explore Adrian Cadiao's portfolio in social media management, online research, manual outreach, lead generation, and administrative support.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "virtual assistant",
    "Adrian Cadiao",
    "social media management",
    "online research",
    "manual outreach",
    "cold email outreach",
    "lead generation",
    "lead research",
    "administrative support",
    "recruitment assistant",
    "recruitment support",
    "content planning",
    "Canva design",
    "Meta Business Suite",
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
    title: pageTitle,
    description: pageDescription,
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: pageTitle,
    description: pageDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${instrumentSerif.variable}`}
    >
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
