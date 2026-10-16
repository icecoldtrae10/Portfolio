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

const siteDescription = `${site.name} is a virtual assistant supporting remote teams with social media management, recruitment assistance, lead generation, content creation and administrative support.`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Virtual Assistant for Social Media, Recruitment & Digital Operations`,
    template: `%s — ${site.name}`,
  },
  description: siteDescription,
  keywords: [
    "virtual assistant",
    "social media manager",
    "social media management",
    "recruitment assistant",
    "recruitment support",
    "lead generation",
    "lead research",
    "cold email outreach",
    "content creation",
    "Canva design",
    "administrative support",
    "remote assistant",
    "Meta Business Suite",
    "virtual assistant for small business",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: `${site.name} — Virtual Assistant`,
    title: `${site.name} — Virtual Assistant for Social Media, Recruitment & Digital Operations`,
    description: siteDescription,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Virtual Assistant`,
    description: siteDescription,
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
