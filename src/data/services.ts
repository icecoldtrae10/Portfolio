import type { Service } from "./types";

/**
 * ============================================================================
 *  SERVICES  —  "WHAT I CAN HELP WITH"
 * ============================================================================
 * The four services, in the order they appear on the page. Each one carries a
 * title, a one-line subtitle, a paragraph and its "Services include" bullets.
 *
 * The `icon` value maps to a Lucide icon in the `ICONS` table inside
 * `src/components/Services.tsx`. Existing keys: megaphone, search, send,
 * clipboard — add a new one there if you add a new service here.
 */

export const services: Service[] = [
  {
    id: "social-media-management",
    title: "Social Media Management",
    icon: "megaphone",
    subtitle: "From content research to publication.",
    description:
      "I create social media graphics in Canva, write captions, research relevant topics and job requirements, prepare hashtags, publish posts, and share content across relevant groups. My experience includes supporting recruitment campaigns and responding to audience inquiries.",
    services: [
      "Social media graphics and post design",
      "Caption writing and hashtag research",
      "Content preparation and publishing",
      "Post distribution and audience engagement",
      "Recruitment campaign content",
    ],
  },
  {
    id: "online-research",
    title: "Online Research",
    icon: "search",
    subtitle: "Finding information and making it easier to use.",
    description:
      "I research businesses, recruitment agencies, potential partners, and professional contacts using publicly available information. I organize findings in spreadsheets so information is easier to review, reference, and use for follow-up.",
    services: [
      "Company and business research",
      "Contact research and data collection",
      "Spreadsheet preparation and data organization",
      "Information checking and verification",
      "Online research for outreach and prospecting",
    ],
  },
  {
    id: "cold-email-outreach",
    title: "Cold Email Outreach",
    icon: "send",
    subtitle: "Personalized emails backed by manual research.",
    description:
      "My experience includes researching relevant companies, reviewing their business information, preparing personalized cold emails, sending them manually, and tracking responses. I also forward relevant replies and potential partnerships to management for follow-up.",
    services: [
      "Prospect and company research",
      "Personalized cold email writing",
      "Manual email sending",
      "Response tracking and follow-up coordination",
      "Prospect list preparation",
    ],
  },
  {
    id: "administrative-support",
    title: "Administrative Support",
    icon: "clipboard",
    subtitle: "Keeping routine tasks and information in order.",
    description:
      "I assist with administrative tasks involving documents, spreadsheets, professional correspondence, and information management. I can help prepare and update records, organize files, and handle routine coordination that requires care and follow-through.",
    services: [
      "Data entry and spreadsheet updates",
      "Document preparation and formatting",
      "File and information organization",
      "Email correspondence",
      "Schedule and task coordination",
    ],
  },
];
