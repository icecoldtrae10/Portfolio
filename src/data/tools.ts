import type { ToolGroup } from "./types";

/**
 * ============================================================================
 *  TOOLS & WORKFLOW
 * ============================================================================
 * Organised by what the tool is *for*, not by logo.
 *
 * The `note` on each tool is deliberately honest about depth of use.
 * Edit these so they match your real experience — do not upgrade yourself to
 * "expert" in a tool you have used a handful of times. Credibility compounds;
 * inflated tool levels cost more than they earn.
 */

export const toolGroups: ToolGroup[] = [
  {
    id: "content-design",
    title: "Content & design",
    blurb: "Producing graphics and copy that look like they came from one brand.",
    tools: [
      { name: "Canva", note: "Templates, recruitment ads, carousels, brand kits" },
      { name: "Meta Business Suite", note: "Scheduling, publishing, inbox, insights" },
    ],
  },
  {
    id: "social-analytics",
    title: "Social & analytics",
    blurb: "Publishing to the right platform and reading what came back.",
    tools: [
      { name: "Facebook", note: "Pages, groups, organic posting, engagement" },
      { name: "LinkedIn", note: "Company content and recruitment advertising" },
      { name: "Meta Business Suite & Insights", note: "Reach, impressions, engagement reporting" },
    ],
  },
  {
    id: "research-outreach",
    title: "Research & outreach",
    blurb: "Finding the right businesses by hand and reaching out properly.",
    tools: [
      { name: "Google Search", note: "Manual prospect discovery and qualification" },
      { name: "Google Sheets / Spreadsheets", note: "Contact databases, tracking, deduplication" },
      { name: "Email", note: "Personalised manual cold outreach and follow-ups" },
    ],
  },
  {
    id: "web-development",
    title: "Web & development",
    blurb: "Small sites and the workflow that keeps them shippable.",
    tools: [
      { name: "Visual Studio Code", note: "Day-to-day editing" },
      { name: "GitHub", note: "Version control, branches, pull requests" },
      { name: "Vercel", note: "Deployment, previews, production releases" },
      { name: "Next.js & TypeScript", note: "Building the sites above" },
    ],
  },
  {
    id: "technical",
    title: "Technical foundation",
    blurb: "Engineering study that shows up as tidier, more structured work.",
    tools: [
      { name: "Python", note: "Web scraping for academic projects" },
      { name: "AutoCAD", note: "Technical drawings" },
      { name: "Electronics Engineering (BSc, in progress)", note: "Systems thinking and debugging habits" },
    ],
  },
];
