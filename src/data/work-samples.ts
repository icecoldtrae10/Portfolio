import type { WorkSample } from "./types";

/**
 * ============================================================================
 *  SELECTED WORK  —  "WORK SAMPLES"
 * ============================================================================
 * Three samples, each with a title, a one-line subtitle, a description and its
 * "What I contributed" line.
 *
 * ADDING THE VISUALS
 * Each sample accepts an optional `images` array. Drop files in
 * `public/images/projects/`, then add:
 *
 *   images: [
 *     {
 *       src: "/images/projects/recruitment-poster.webp",
 *       alt: "A Canva recruitment poster for a warehouse role.",
 *     },
 *   ],
 *
 * Samples without images render as text only — no empty frames and no broken
 * pictures. See `public/images/projects/README.md`.
 *
 * The suggested visuals noted against each sample are the intent behind them:
 *
 *   1. Social media content — approved recruitment posters, social media
 *      graphics and published campaign posts.
 *   2. Cold email outreach — a recreated outreach workflow, a fictional
 *      prospect-tracking spreadsheet, or a redacted example containing no
 *      private correspondence or contact information.
 *   3. Business & contact research — a recreated research spreadsheet using
 *      fictional company names, or a visual showing the research process.
 *
 * Only display work you have permission to share, and label recreated examples
 * as demonstrations rather than completed client projects.
 */

export const workSamples: WorkSample[] = [
  {
    id: "social-media-content",
    title: "Social Media Content & Campaigns",
    subtitle: "Recruitment content designed for social platforms.",
    description:
      "Created recruitment graphics and captions for job vacancies and hiring campaigns, prepared supporting hashtags, and published and distributed posts across Facebook and other relevant channels.",
    contribution:
      "Canva design, role research, caption writing, publishing, and post distribution.",
  },

  {
    id: "manual-cold-email-outreach",
    title: "Manual Cold Email Outreach",
    subtitle: "Research and personalized communication.",
    description:
      "Researched relevant companies and recruitment agencies, reviewed publicly available business information, prepared individual cold emails, sent them manually, and organized replies for management to review.",
    contribution:
      "Company research, prospect identification, email personalization, manual sending, and response coordination.",
  },

  {
    id: "business-contact-research",
    title: "Business & Contact Research",
    subtitle: "Turning online research into organized records.",
    description:
      "Collected information about companies and potential recruitment partners, checked relevant details, and organized research findings in spreadsheets for easier review and outreach planning.",
    contribution:
      "Online research, data collection, information checking, and spreadsheet organization.",
  },
];
