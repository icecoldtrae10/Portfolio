import type { Service } from "./types";

/**
 * ============================================================================
 *  SERVICES
 * ============================================================================
 * The four services, in the order they appear on the page.
 *
 * The `icon` value maps to a Lucide icon in the `ICONS` table inside
 * `src/components/Services.tsx`. Existing keys: megaphone, search, send,
 * clipboard — add a new one there if you add a new service here.
 */

export const services: Service[] = [
  {
    id: "social-media-management",
    number: "01",
    title: "Social Media Management",
    icon: "megaphone",
    description:
      "I support the social media process from initial research and content planning to graphic design, caption writing, publishing, and audience engagement. My experience includes preparing recruitment campaigns and managing the day-to-day tasks behind social media content.",
    deliverables: [
      "Content Planning",
      "Canva Design",
      "Caption Writing",
      "Publishing",
      "Community Management",
    ],
  },
  {
    id: "online-research",
    number: "02",
    title: "Online Research",
    icon: "search",
    description:
      "I research businesses, agencies, and relevant contacts, verify available information, and organize findings into structured records. I approach research methodically, paying attention to accuracy, relevance, and how the information will be used.",
    deliverables: [
      "Web Research",
      "Company Research",
      "Information Verification",
      "Spreadsheet Organization",
    ],
  },
  {
    id: "cold-email-outreach",
    number: "03",
    title: "Cold Email Outreach and Lead Generation",
    icon: "send",
    description:
      "My outreach experience combines business research with personalized communication. I identify relevant agencies and companies, review available information, prepare individual emails, send messages manually, track responses, and coordinate relevant prospects with management.",
    deliverables: [
      "Prospect Research",
      "Personalized Outreach",
      "Response Tracking",
      "Follow-up Coordination",
    ],
  },
  {
    id: "administrative-support",
    number: "04",
    title: "Administrative Support",
    icon: "clipboard",
    description:
      "I assist with routine administrative tasks that require organization, accuracy, and follow-through. This includes updating spreadsheets, preparing documents, organizing files, coordinating schedules, and handling professional correspondence.",
    deliverables: [
      "Data Entry",
      "Document Preparation",
      "Scheduling",
      "Email Correspondence",
      "File Management",
    ],
  },
];
