import type { ExperienceItem } from "./types";

/**
 * ============================================================================
 *  PROFESSIONAL EXPERIENCE
 * ============================================================================
 * Only these two employers are listed publicly. Roles are part-time and
 * remote, and no other organisation is named here.
 *
 * Add a new entry by copying one of the blocks below and changing the `id`.
 */

export const experience: ExperienceItem[] = [
  {
    id: "jobvortex",
    company: "JobVortex",
    role: "Recruitment Assistant / Social Media Manager",
    employment: "Part-time · Remote",
    dates: "May 2023 – Present",
    responsibilities: [
      "Research job requirements and prepare information for recruitment campaigns.",
      "Design social media creatives and develop captions for publication.",
      "Publish and distribute content across relevant channels.",
      "Respond to audience inquiries and comments.",
      "Support research, document preparation, and website content updates.",
    ],
  },
  {
    id: "cross-country-solutions",
    company: "Cross Country Solutions FZE",
    role: "Recruitment Assistant / Social Media Manager",
    employment: "Part-time · Remote",
    dates: "July 2024 – Present",
    responsibilities: [
      "Develop recruitment content through role research, graphic design, and caption writing.",
      "Prepare and publish campaign materials for social media.",
      "Distribute content through relevant Facebook groups.",
      "Manage audience inquiries and comments.",
      "Assist with recruitment research, candidate document preparation, and campaign coordination.",
    ],
  },
];
