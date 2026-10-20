import type { WorkHighlight } from "./types";

/**
 * Work highlights & stats — three cards, each with its metric tag.
 *
 * `keyItems` is a single line exactly as approved, so it renders as one
 * paragraph rather than being split into bullets (splitting on commas would
 * break strings such as "34,800+").
 *
 * Each card renders an empty media slot above its text for the image/video
 * samples still to be supplied — see `public/images/projects/README.md`.
 */
export const workHighlights: WorkHighlight[] = [
  {
    id: "organic-social-audience-scaling",
    title: "Organic Social Audience Scaling",
    metric: "0 → 16,000+ Followers in <10 Months",
    description:
      "Scaled Facebook audience for Cross Country Solutions FZE and supported total reach across 35,000+ combined followers for JobVortex.",
    keyItems:
      "Canva graphics, short-form Reels (34,800+ top organic views), multi-group publishing strategy.",
  },
  {
    id: "international-b2b-cold-outreach",
    title: "International B2B Cold Outreach",
    metric: "8,000+ Cold Outreach Emails | 100+ Client Meetings Booked",
    description:
      "Executed manual outreach campaigns targeting global recruitment partners, driving direct meeting acquisition for management.",
    keyItems:
      "Targeted agency databases, cold email copy, response tracking, meeting scheduling.",
  },
  {
    id: "high-volume-candidate-processing",
    title: "High-Volume Candidate Processing",
    metric: "20–30 Resumes Reformatted Daily | 50+ Daily Applicants Screened",
    description:
      "Processed applicant profiles by stripping direct contact details, unifying formatting, and branding client-ready PDFs.",
    keyItems:
      "Branded candidate profiles, candidate shortlisting (5–10 shortlist selections from 50+ daily submissions).",
  },
];
