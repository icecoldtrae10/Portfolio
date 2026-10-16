import type { Service } from "./types";

/**
 * ============================================================================
 *  SERVICES
 * ============================================================================
 * Five services, matching the work actually covered by this portfolio.
 * No pricing, no packages, no guaranteed outcomes — deliberately.
 * The `icon` value maps to a Lucide icon in `src/components/Services.tsx`.
 */

export const services: Service[] = [
  {
    id: "social-media-management",
    number: "01",
    title: "Social media management",
    icon: "calendar",
    description:
      "Keeping a business page active without the owner having to think about it. I plan the content, prepare it, publish it on schedule, and keep an eye on how it performs so the next month can be adjusted rather than guessed at.",
    deliverables: [
      "Content planning & calendars",
      "Scheduling & publishing",
      "Captions & hashtag sets",
      "Engagement & inquiry replies",
      "Performance monitoring",
    ],
  },
  {
    id: "design-content",
    number: "02",
    title: "Design & content creation",
    icon: "palette",
    description:
      "Graphics produced in Canva against a consistent brand look — including recruitment advertisements, campaign creatives and reusable templates your own team can edit safely.",
    deliverables: [
      "Canva graphics",
      "Recruitment advertisements",
      "Campaign creatives",
      "Branded content",
      "Reusable templates",
    ],
  },
  {
    id: "recruitment-admin",
    number: "03",
    title: "Recruitment & admin support",
    icon: "briefcase",
    description:
      "The coordination work that keeps a recruitment process moving: preparing job advertisements, keeping applicant information organised, and handling the documentation so nothing sits waiting.",
    deliverables: [
      "Job advertisement preparation",
      "Applicant communication support",
      "Recruitment coordination",
      "Organised documentation",
      "Tracking & status sheets",
    ],
  },
  {
    id: "lead-research",
    number: "04",
    title: "Lead research & outreach",
    icon: "search",
    description:
      "Manual, hand-verified business research. I find companies that actually match your criteria, verify the contact details, build a clean spreadsheet, and prepare and send personalised cold emails one at a time.",
    deliverables: [
      "Manual business research",
      "Prospect list building",
      "Contact verification",
      "Spreadsheet organisation",
      "Personalised cold emails",
    ],
  },
  {
    id: "web-digital-support",
    number: "05",
    title: "Website & digital support",
    icon: "code",
    description:
      "Basic website updates, small builds and the maintenance around them — editing in VS Code, version control through GitHub, and deployment through Vercel. Enough to keep a marketing site current without a full development team.",
    deliverables: [
      "Website updates & edits",
      "Portfolio maintenance",
      "GitHub workflows",
      "Vercel deployment",
      "Content changes",
    ],
  },
];
