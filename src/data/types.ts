/**
 * Shared types for every content block on the site.
 *
 * All content lives in `src/data/*`. You should not need to touch any component
 * to add a project, metric, case study, service, tool or analytics screenshot.
 */

/* ------------------------------------------------------------------ *
 * Projects
 * ------------------------------------------------------------------ */

export const PROJECT_CATEGORIES = [
  "Social Media Graphics",
  "Recruitment Campaigns",
  "Content and Copywriting",
  "Social Media Analytics",
  "Website Projects",
  "Lead Generation and Research",
] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export interface Project {
  /** Stable id — used for the modal URL hash and React keys. Use kebab-case. */
  id: string;
  title: string;
  category: ProjectCategory;
  /** One or two sentences shown on the card. */
  summary: string;
  /** Longer write-up shown inside the case-study modal. */
  description?: string;
  /** e.g. ["Canva", "Meta Business Suite"] */
  tools?: string[];
  /**
   * Optional path to a REAL image in `public/`, e.g. "/images/projects/canva-recruitment-ad.webp".
   * Leave undefined and a clearly-labelled placeholder tile is rendered instead —
   * never a broken image. See `public/images/projects/README.md`.
   */
  image?: string;
  /** Describes the image for screen readers and search engines. Required if `image` is set. */
  imageAlt?: string;
  /** Reporting period or year, e.g. "2024 — Q3". */
  period?: string;
  /** Client or organisation. Use "Confidential" where you cannot name them. */
  client?: string;
  /** Your role, e.g. "Social media assistant". */
  role?: string;
  /** Bullet list of what you personally handled. */
  responsibilities?: string[];
  /** Step-by-step description of how the work was carried out. */
  process?: string[];
  /**
   * The verified outcome. ONLY add a number or claim you can evidence.
   * Leave undefined to hide the block entirely — an omitted result is better
   * than an invented one.
   */
  outcome?: string;
  /** Optional supporting note or link, e.g. "Screenshot filed in Analytics section". */
  evidence?: string;
  /** External link (live post, repository, deployed site). */
  link?: string;
}

/* ------------------------------------------------------------------ *
 * Metrics
 * ------------------------------------------------------------------ */

export interface Metric {
  id: string;
  /**
   * The figure. Leave `null` to show an empty, clearly-labelled slot.
   * Only ever set a number you can back up with a screenshot or report.
   */
  value: number | null;
  /** Prefix or suffix, e.g. "+", "%", "k". Rendered around the value. */
  prefix?: string;
  suffix?: string;
  /** Short label shown under the figure, e.g. "Followers reached". */
  label: string;
  /** One sentence of context — what this number actually measures. */
  context: string;
  /** Optional reporting period, e.g. "Jan – Jun 2024". */
  period?: string;
  /** Section id or hash to link to, e.g. "#analytics". */
  linkHref?: string;
  linkLabel?: string;
  /** Number of decimal places used by the count-up animation. Defaults to 0. */
  decimals?: number;
}

/* ------------------------------------------------------------------ *
 * Case studies
 * ------------------------------------------------------------------ */

export interface CaseStudy {
  id: string;
  /** Number shown in the left rail, e.g. "01". */
  index: string;
  title: string;
  category: string;
  period?: string;
  role?: string;
  tools?: string[];
  overview: string;
  objective: string;
  responsibilities: string[];
  process: string[];
  /**
   * Verified results and supporting evidence. Leave `undefined` if the outcome
   * is unknown — the block is hidden rather than faked.
   */
  results?: string[];
  /** Reflections, limitations and what you would improve. */
  lessons: string[];
  /** Optional before/after or supporting image pair. */
  images?: { src: string; alt: string; caption?: string }[];
}

/* ------------------------------------------------------------------ *
 * Analytics evidence
 * ------------------------------------------------------------------ */

export interface AnalyticsEntry {
  id: string;
  /** Platform the screenshot came from, e.g. "Meta Business Suite". */
  source: string;
  /** What the image shows, e.g. "Audience growth over 6 months". */
  caption: string;
  /** Reporting period shown as a chip, e.g. "Mar – Aug 2024". */
  period?: string;
  /** Optional plain-English explanation of the metric. */
  note?: string;
  /**
   * Path to a screenshot in `public/images/analytics/`.
   * Leave undefined for a labelled placeholder tile.
   */
  image?: string;
  imageAlt?: string;
}

/* ------------------------------------------------------------------ *
 * Services & tools
 * ------------------------------------------------------------------ */

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  /** Concrete deliverables shown as chips. */
  deliverables: string[];
  icon: string;
}

export interface ToolGroup {
  id: string;
  title: string;
  /** Honest, non-inflated description of how you use this set of tools. */
  blurb: string;
  tools: { name: string; note: string }[];
}

/* ------------------------------------------------------------------ *
 * Timeline
 * ------------------------------------------------------------------ */

export interface TimelineItem {
  period: string;
  title: string;
  description: string;
}
