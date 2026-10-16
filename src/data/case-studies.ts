import type { CaseStudy } from "./types";

/**
 * ============================================================================
 *  CASE STUDIES
 * ============================================================================
 * Three case studies, each following the same structure:
 *   overview  →  process (numbered steps)  →  scope of work  →  closing
 *
 * No client names, no dates, no numerical results and no testimonials appear
 * anywhere in this file — by design. If you add a figure, only add one you
 * could put a screenshot next to.
 *
 * `category` is displayed uppercase, separated by " · ".
 */

export const caseStudies: CaseStudy[] = [
  {
    id: "content-to-publication",
    index: "01",
    title: "Managing content from research to publication.",
    category: "Content Strategy · Design · Publishing",
    overview:
      "My social media responsibilities span the full content workflow, including researching role requirements, preparing visual assets, writing captions, publishing posts, distributing content through relevant channels, and responding to audience inquiries.",
    process: [
      {
        title: "Research and preparation",
        body: "Review the subject, requirements, and relevant information to establish the content's purpose.",
      },
      {
        title: "Content development",
        body: "Create Canva graphics and prepare captions suited to the intended audience.",
      },
      {
        title: "Publishing and distribution",
        body: "Publish approved content and share posts through relevant channels and groups where appropriate.",
      },
      {
        title: "Audience engagement and review",
        body: "Respond to comments and inquiries and review available performance data.",
      },
    ],
    scope: [
      "Social media graphics and campaign creatives.",
      "Caption writing and hashtag selection.",
      "Facebook publishing and content distribution.",
      "Comment and inquiry management.",
      "Performance monitoring where analytics are available.",
    ],
    closing:
      "This workflow combines research, content development, and ongoing audience support to keep social media activities organized and consistent.",
  },

  {
    id: "research-led-outreach",
    index: "02",
    title: "Research-led outreach and prospect coordination.",
    category: "Prospect Research · Business Communication",
    overview:
      "My outreach experience combines business research with personalized communication. I identify relevant agencies and companies, review available information, prepare individual emails, send messages manually, track responses, and coordinate relevant prospects with management.",
    process: [
      {
        title: "Prospect identification",
        body: "Research businesses that align with the target market and business objectives.",
      },
      {
        title: "Information review",
        body: "Check available business information to assess relevance and suitability.",
      },
      {
        title: "Email preparation",
        body: "Prepare personalized correspondence based on the information gathered.",
      },
      {
        title: "Outreach and tracking",
        body: "Send emails manually and maintain records of responses.",
      },
      {
        title: "Response coordination",
        body: "Forward relevant replies and assist with coordinating prospective meetings.",
      },
    ],
    scope: [
      "Business and prospect research.",
      "Review and organization of prospect information.",
      "Personalized email preparation.",
      "Manual outreach and response tracking.",
      "Coordination with management.",
    ],
    closing:
      "The process relies on targeted research, relevant communication, organized tracking, and consistent follow-through.",
  },

  {
    id: "research-into-records",
    index: "03",
    title: "Organizing business research into actionable records.",
    category: "Online Research · Data Organization",
    overview:
      "My agency research work involves identifying potential recruitment partners, reviewing publicly available business information, and organizing findings into structured records that support further review and outreach.",
    process: [
      {
        title: "Targeted research",
        body: "Identify agencies relevant to the target country or market.",
      },
      {
        title: "Information verification",
        body: "Review agency websites and available business information.",
      },
      {
        title: "Structured data collection",
        body: "Organize findings in spreadsheets using a consistent format.",
      },
      {
        title: "Review and preparation",
        body: "Keep records clear and accessible for subsequent evaluation and outreach.",
      },
    ],
    scope: [
      "Targeted agency and company research.",
      "Review of publicly available business information.",
      "Spreadsheet preparation and organization.",
      "Consistent record maintenance.",
      "Research preparation for further business development activities.",
    ],
    closing:
      "My approach emphasizes relevant information, organized records, and a clear structure that makes research easier to review and use.",
  },
];
