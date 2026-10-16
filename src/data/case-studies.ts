import type { CaseStudy } from "./types";

/**
 * ============================================================================
 *  CASE STUDIES
 * ============================================================================
 * Four templates, one per discipline. Each follows the same structure:
 *   overview → objective → responsibilities → process → tools → results → lessons
 *
 * The `results` array is optional by design. Leave it out and the block is
 * hidden entirely — an omitted outcome always beats an invented one. Only add
 * a figure you could put a screenshot next to.
 *
 * To add a before/after pair, drop the images in `public/images/projects/` and
 * fill in `images: [{ src, alt, caption }]`.
 */

export const caseStudies: CaseStudy[] = [
  {
    id: "social-media-management",
    index: "01",
    title: "Social media management & audience performance",
    category: "Social Media",
    role: "Social media assistant",
    tools: ["Meta Business Suite", "Canva", "Facebook", "LinkedIn", "Spreadsheets"],
    overview:
      "Ongoing support for a business page: planning the content, producing the graphics, writing the copy, publishing on schedule, and reporting back on what the numbers actually said.",
    objective:
      "Keep the page consistently active and professionally presented, and give the owner a clear, jargon-free read on performance instead of a raw dashboard.",
    responsibilities: [
      "Planned a rolling content calendar around the client's dates and offers.",
      "Designed graphics in Canva and wrote captions, hashtags and calls to action.",
      "Published and scheduled posts across Facebook and LinkedIn.",
      "Handled inbound comments and messages in the brand's tone.",
      "Reviewed performance in Meta Business Suite and reported it monthly.",
    ],
    process: [
      "Agreed content themes, posting frequency and approval routes up front.",
      "Drafted a month of captions in a shared sheet so approval happened in one place.",
      "Designed assets in bulk, checking crops and contrast for each platform.",
      "Scheduled ahead, then monitored engagement and replied to inquiries.",
      "Pulled the reporting period's numbers, compared them with the previous month, and adjusted the next plan.",
    ],
    results: [
      // REPLACE with a verified figure, or delete this whole array.
      // e.g. "Audience grew from X to Y followers between [start] and [end] — screenshot filed in the Analytics section.",
      "Add your verified figures here, or delete this section. Do not guess.",
    ],
    lessons: [
      "Publishing consistently at a modest frequency beat occasional bursts every time.",
      "Recruitment posts needed a completely different crop and headline length to promotional posts.",
      "Reporting in plain language got far more useful feedback than forwarding a dashboard.",
    ],
  },

  {
    id: "recruitment-advertising",
    index: "02",
    title: "Recruitment advertising & creative production",
    category: "Recruitment",
    role: "Recruitment & creative assistant",
    tools: ["Canva", "Facebook", "LinkedIn", "Spreadsheets"],
    overview:
      "Producing and publishing job advertisements for an international recruitment operation, turning rough vacancy briefs into consistent, on-brand creative that could be published the same day.",
    objective:
      "Reduce the turnaround time between a vacancy being approved and the advertisement going live, without losing consistency between roles.",
    responsibilities: [
      "Turned raw vacancy briefs into short, readable job advertisements.",
      "Designed single-image and carousel recruitment ads in Canva.",
      "Prepared platform-specific crops for Facebook and LinkedIn.",
      "Wrote captions, hashtag sets and clear application calls to action.",
      "Coordinated which roles were live, scheduled, or awaiting copy.",
    ],
    process: [
      "Captured role title, salary band, location, working pattern and closing date before designing.",
      "Built a master template with a locked grid so only the text changed.",
      "Produced every crop from the same master to keep the set coherent.",
      "Checked readability at phone size before scheduling.",
      "Logged every live advertisement in a tracking sheet with its status.",
    ],
    lessons: [
      "A locked master template removed almost all of the per-ad design time.",
      "Salary visibility in the first two lines made a noticeable difference to inquiries.",
      "Keeping the tracking sheet current was what actually kept the coordination working.",
    ],
  },

  {
    id: "lead-research-outreach",
    index: "03",
    title: "Manual international lead research & cold email outreach",
    category: "Lead generation",
    role: "Research & outreach assistant",
    tools: ["Google Search", "LinkedIn", "Google Sheets", "Email"],
    overview:
      "Hand-conducted research into international businesses, building a verified contact database from scratch and running a personalised cold email campaign against it.",
    objective:
      "Produce a smaller, accurate, genuinely relevant prospect list rather than a large unverified one — and reach out in a way that sounded like it was written by a person.",
    responsibilities: [
      "Searched for qualifying businesses by industry, size, market and region.",
      "Located and verified decision-maker names, roles and business emails.",
      "Built, structured and deduplicated the contact database in a spreadsheet.",
      "Wrote personalised cold email copy referencing each prospect's own business.",
      "Sent outreach manually and logged replies, bounces and follow-up dates.",
    ],
    process: [
      "Agreed strict qualification criteria before any research began.",
      "Worked in batches by industry and country to keep messaging coherent.",
      "Verified every email address against a second source before adding it.",
      "Structured the sheet so it could be filtered by status and follow-up date.",
      "Sent in small daily batches and recorded the outcome of each contact.",
    ],
    lessons: [
      "Verification time paid for itself immediately in fewer bounces.",
      "Short emails that referenced something specific to the business outperformed longer generic ones.",
      "A clean status column mattered more than any outreach tool would have.",
    ],
  },

  {
    id: "website-development",
    index: "04",
    title: "Website development & deployment",
    category: "Web",
    role: "Developer & maintainer",
    tools: ["VS Code", "GitHub", "Vercel", "Next.js", "TypeScript"],
    overview:
      "Building and maintaining small marketing sites end to end — from layout and components in VS Code, through version control in GitHub, to a live deployment on Vercel.",
    objective:
      "Deliver a site that a non-technical owner could keep updated, with a publish flow that did not depend on a developer being available for every copy change.",
    responsibilities: [
      "Built pages and reusable components against a defined design system.",
      "Managed version control and commit history in GitHub.",
      "Connected the repository to Vercel for automatic deployment.",
      "Ran production builds locally and fixed errors before publishing.",
      "Checked layouts at phone, tablet and desktop widths.",
    ],
    process: [
      "Defined the type scale, spacing system and colour palette before building.",
      "Built content-driven components so new items need no layout edits.",
      "Committed small, reviewable changes with clear messages.",
      "Ran a production build locally, then deployed from the main branch.",
      "Verified the live URL, metadata and images after each deploy.",
    ],
    lessons: [
      "Static content with no database removed an entire category of things that could break.",
      "Keeping content in typed data files meant adding an item never touched a component.",
      "Deploying from a repository made every change reversible.",
    ],
  },
];
