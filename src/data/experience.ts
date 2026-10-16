import type { ExperienceItem } from "./types";

/**
 * ============================================================================
 *  PROFESSIONAL EXPERIENCE
 * ============================================================================
 * These two employers only. Roles are part-time and remote, and no other
 * organisation is named here.
 *
 * `employment` and `dates` are rendered as a single line joined by "·", e.g.
 * "Part-time · Remote · May 2023 to Present".
 *
 * Add a new entry by copying one of the blocks below and changing the `id`.
 */

export const experience: ExperienceItem[] = [
  {
    id: "jobvortex",
    company: "JobVortex",
    role: "Recruitment Assistant | Social Media Management",
    employment: "Part-time · Remote",
    dates: "May 2023 to Present",
    responsibilities: [
      "Research job roles and requirements to prepare accurate recruitment content.",
      "Design recruitment graphics and write captions for social media campaigns.",
      "Prepare hashtags, publish posts, and distribute content across relevant groups.",
      "Respond to inquiries and direct interested candidates to the appropriate application process.",
      "Assist with research, document preparation, and website content updates.",
    ],
  },
  {
    id: "cross-country-solutions",
    company: "Cross Country Solutions FZE",
    role: "Recruitment Assistant | Social Media Management",
    employment: "Part-time · Remote",
    dates: "July 2024 to Present",
    responsibilities: [
      "Research vacancies and candidate requirements for international recruitment campaigns.",
      "Prepare social media graphics, captions, and supporting campaign materials.",
      "Publish and share content across social channels to reach relevant audiences.",
      "Handle social media inquiries and assist with recruitment-related communication.",
      "Support research, candidate document handling, and campaign coordination.",
    ],
  },
];
