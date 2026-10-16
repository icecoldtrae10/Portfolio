import type { TimelineItem } from "./types";

/**
 * ============================================================================
 *  ABOUT
 * ============================================================================
 * Written in the first person. Edit freely — the more it sounds like you, the
 * better it works. Avoid rewriting it into generic professional phrasing; that
 * is the one thing that makes portfolios blend together.
 */

export const aboutIntro = [
  "I started out in recruitment assistance — preparing job advertisements, keeping applicant information in order, and helping roles move from a brief to something published. From there the work widened into social media: planning content, designing graphics, writing captions, publishing, and checking what the numbers said afterwards.",
  "What I like about that mix is that it rewards both sides of how I work. The creative side — a graphic that finally reads well at phone size, a caption that sounds like a person wrote it. And the operational side — a spreadsheet with no duplicates, a calendar that tells you what is happening on Thursday, a contact list where every email has been checked twice.",
  "I am currently finishing a Bachelor of Science in Electronics Engineering. It was not a direct route into this work, but it left me comfortable with systems, documentation and debugging — which turns out to be a large part of what keeping a business organised actually is.",
  "I work remotely, default to writing things down, and would rather ask a clarifying question early than guess and redo later.",
];

export const timeline: TimelineItem[] = [
  {
    period: "Recruitment",
    title: "Recruitment assistance",
    description:
      "Preparing job advertisements, organising applicant information, and supporting international recruitment processes day to day.",
  },
  {
    period: "Social",
    title: "Social media operations",
    description:
      "Content planning, Canva design, caption writing, publishing, engagement support and performance reporting through Meta Business Suite.",
  },
  {
    period: "Outreach",
    title: "Lead research and outreach",
    description:
      "Manual prospect research, contact verification, spreadsheet organisation and personalised cold email campaigns for international businesses.",
  },
  {
    period: "Web",
    title: "Website development",
    description:
      "Self-directed builds and deployments using VS Code, GitHub, Vercel and Next.js — including this portfolio.",
  },
  {
    period: "Study",
    title: "BSc Electronics Engineering, in progress",
    description:
      "Technical grounding in systems, documentation and problem-solving that carries over into how I organise operations.",
  },
];
