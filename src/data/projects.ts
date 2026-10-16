import type { Project } from "./types";

/**
 * ============================================================================
 *  PROJECTS  —  the filterable gallery
 * ============================================================================
 * ADDING A PROJECT
 *   1. Drop the image in        public/images/projects/
 *   2. Copy any entry below, change the `id`, and set:
 *        image: "/images/projects/your-file.webp",
 *        imageAlt: "A short, accurate description of the picture.",
 *   3. Save. The card, the filter counts and the modal all update automatically.
 *
 * LEAVING OUT `image` renders a clearly-labelled placeholder tile instead of a
 * broken image — so the gallery never shows a missing-picture icon.
 *
 * The six entries below are STRUCTURE TEMPLATES. They describe the kind of work
 * covered by each category, not a specific client engagement, and they
 * deliberately carry no client name, no dates and no results.
 * Replace them with your real work, then set `showTemplateNotices: false`
 * in `src/data/site.ts`.
 */

export const projects: Project[] = [
  {
    id: "recruitment-ad-design",
    title: "Job advertisement design set",
    category: "Recruitment Campaigns",
    role: "Design & scheduling",
    tools: ["Canva", "Facebook", "LinkedIn"],
    summary:
      "A repeatable template set for vacancy posts, so a role can move from approved brief to publish-ready graphic in a single sitting.",
    description:
      "Recruitment advertising moves fast and usually arrives as a paragraph of text from a client. This project turned that into a fixed workflow: pull the non-negotiable requirements, agree the tone, design the ad in Canva using locked brand colours and type, then schedule it across the channels the client actually uses.",
    responsibilities: [
      "Rewrote raw vacancy briefs into short, scannable job advertisements.",
      "Designed single-image and carousel ads in Canva with consistent branding.",
      "Prepared platform-specific versions for Facebook and LinkedIn crops.",
      "Wrote captions, hashtag sets and a clear call to action for each role.",
      "Scheduled posts and tracked which roles needed a follow-up creative.",
    ],
    process: [
      "Collected the role title, salary band, location, working pattern and closing date before opening Canva.",
      "Built one master template with a locked grid so only the text changed between roles.",
      "Produced every size variant from the same master to keep the set visually consistent.",
      "Checked contrast and font size so the ad stayed readable on a phone feed.",
      "Scheduled through Meta Business Suite and logged each live post in a tracking sheet.",
    ],
  },

  {
    id: "content-calendar",
    title: "Monthly content calendar",
    category: "Content and Copywriting",
    role: "Content planning & publishing",
    tools: ["Meta Business Suite", "Canva", "Google Sheets"],
    summary:
      "A rolling calendar covering captions, hashtags, image assets and publish dates, built so a page never goes quiet.",
    description:
      "A calendar is only useful if it survives contact with a busy week. This one is deliberately simple: one row per post, one column per decision, and a status that tells anyone opening the sheet exactly what is draft, scheduled or already live.",
    responsibilities: [
      "Planned themes and post formats around the client's key dates and offers.",
      "Wrote captions and hashtag sets matched to the platform and audience.",
      "Paired each caption with its Canva asset and verified the crop.",
      "Scheduled posts and adjusted timing once performance data came back.",
      "Kept the calendar current so the client could see the pipeline at a glance.",
    ],
    process: [
      "Started from the client's calendar events, promotions and seasonal moments.",
      "Split the month across content types rather than repeating one format.",
      "Drafted captions in the sheet so the client could approve copy in one place.",
      "Attached final assets and scheduled each post ahead of its publish date.",
      "Reviewed the week's numbers and moved the next week's plan accordingly.",
    ],
  },

  {
    id: "meta-insights-review",
    title: "Monthly performance review",
    category: "Social Media Analytics",
    role: "Reporting & analysis",
    tools: ["Meta Business Suite", "Spreadsheets"],
    summary:
      "A short monthly read of Meta Business Suite data: what reached people, what got ignored, and what to change next month.",
    description:
      "Rather than forwarding a dashboard screenshot, this review turns the numbers into a few decisions. Reach, impressions, engagement and follower movement are compared against the previous period, with the standout posts pulled out and explained in plain language.",
    responsibilities: [
      "Pulled reach, impressions, engagement and audience growth from Meta Business Suite.",
      "Compared each period against the previous one rather than reporting in isolation.",
      "Identified the best and worst performing posts and wrote down why.",
      "Wrote a short summary a non-technical client could act on.",
      "Kept an ordered evidence trail of screenshots for every reported figure.",
    ],
    process: [
      "Fixed a consistent reporting period so month-to-month comparisons stayed valid.",
      "Captured every metric screenshot before writing a single sentence of summary.",
      "Separated vanity numbers from the ones that matched the client's actual goal.",
      "Turned the findings into two or three concrete changes for the next cycle.",
    ],
  },

  {
    id: "b2b-lead-research",
    title: "B2B prospect list & outreach",
    category: "Lead Generation and Research",
    role: "Research & outreach",
    tools: ["Google Search", "LinkedIn", "Google Sheets", "Email"],
    summary:
      "Manual, hand-verified prospect research for international businesses, organised into a spreadsheet and paired with personalised cold emails.",
    description:
      "No scraping tools and no purchased lists. Every contact was found by hand, checked against a second source, and only then added to the outreach sheet. The point was a shorter list that was actually correct.",
    responsibilities: [
      "Searched for qualifying businesses by industry, size, market and region.",
      "Found and verified decision-maker names, roles and business email addresses.",
      "Built and deduplicated the contact database with consistent column structure.",
      "Wrote personalised cold emails referencing the prospect's own business.",
      "Sent outreach manually and logged replies, bounces and follow-up dates.",
    ],
    process: [
      "Agreed the qualification criteria before researching, so the list stayed on-target.",
      "Researched in batches by industry and country to keep the messaging consistent.",
      "Verified each email address against a second source before adding it.",
      "Structured the sheet so outreach could be filtered by status and follow-up date.",
      "Sent in small daily batches and recorded outcomes for the next round.",
    ],
  },

  {
    id: "portfolio-site-build",
    title: "Portfolio site & deployment",
    category: "Website Projects",
    role: "Build & deployment",
    tools: ["VS Code", "GitHub", "Vercel", "Next.js"],
    summary:
      "A small marketing site taken from layout to a live HTTPS URL, with the whole publish flow handled through GitHub and Vercel.",
    description:
      "This site itself. It is deliberately lightweight: static content, no database and no paid services, deployed from a Git repository so a copy change is a commit rather than an FTP session.",
    responsibilities: [
      "Built the pages and components in VS Code against a defined design system.",
      "Committed and pushed work to a GitHub repository on a clean history.",
      "Connected the repository to Vercel for automatic deployment.",
      "Checked the build output and fixed errors before every publish.",
      "Reviewed the result at phone, tablet and desktop widths.",
    ],
    process: [
      "Set up the type scale, spacing system and colour palette first.",
      "Built reusable components so new content needs no layout changes.",
      "Ran a production build locally to catch errors before pushing.",
      "Deployed from the main branch and verified the live URL.",
    ],
  },

  {
    id: "canva-template-system",
    title: "Reusable Canva graphic templates",
    category: "Social Media Graphics",
    role: "Graphic design",
    tools: ["Canva"],
    summary:
      "A small library of branded Canva templates covering announcements, tips, quotes and recruitment posts — built so non-designers can publish without breaking the brand.",
    description:
      "Most pages do not need a designer for every single post; they need a set of good starting points. This project produced a compact template library with fixed margins, a locked palette and type hierarchy, plus a short guide explaining what may and may not be moved.",
    responsibilities: [
      "Designed templates across square, portrait and story dimensions.",
      "Locked brand colours, fonts and safe margins inside each layout.",
      "Wrote a one-page guide so the client could edit templates safely.",
      "Included a recruitment ad layout and an announcement layout.",
    ],
    process: [
      "Audited the existing posts to find the formats that repeated most often.",
      "Designed one master layout per format rather than many near-duplicates.",
      "Tested each template with real copy to confirm the text actually fits.",
      "Handed over the library with the guide and a short walkthrough.",
    ],
  },
];
