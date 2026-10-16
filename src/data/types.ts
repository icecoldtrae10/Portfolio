/**
 * Shared types for every content block on the site.
 *
 * All content lives in `src/data/*`. You should not need to touch any component
 * to add a service, case study, tool, employer or portfolio image.
 */

/* ------------------------------------------------------------------ *
 * Portfolio / work gallery
 * ------------------------------------------------------------------ */

export interface Project {
  /** Stable id — used for the modal URL hash and React keys. Use kebab-case. */
  id: string;
  /** What the piece is called, e.g. "Recruitment Campaign Creative". */
  title: string;
  /**
   * Free-text label used by the filter buttons, e.g. "Recruitment Campaigns".
   * Suggested labels: Recruitment Campaign Creative · Social Media Content ·
   * Campaign Announcement · Recruitment Information Post · Content Design
   */
  category: string;
  /**
   * Path to a REAL image in `public/`, e.g.
   * "/images/projects/recruitment-campaign-creative.webp".
   *
   * Projects without an image are not rendered at all, so the gallery never
   * shows an empty tile or a broken picture. See `public/images/projects/README.md`.
   */
  image: string;
  /** Describes the image for screen readers and search engines. */
  imageAlt: string;
  /** One sentence shown under the title. Optional. */
  summary?: string;
  /** Short chips shown on the card, e.g. ["Canva", "Meta Business Suite"]. */
  tools?: string[];
  /** External link to the live piece, if one can be shared. */
  link?: string;
}

/* ------------------------------------------------------------------ *
 * Selected results
 * ------------------------------------------------------------------ */

export interface ResultArea {
  id: string;
  title: string;
  /** One sentence describing the approach — no figures, no claims. */
  description: string;
}

/* ------------------------------------------------------------------ *
 * Case studies
 * ------------------------------------------------------------------ */

export interface CaseStudyStep {
  title: string;
  body: string;
}

export interface CaseStudy {
  id: string;
  /** Number shown in the left rail, e.g. "01". */
  index: string;
  title: string;
  /** Uppercase discipline list, e.g. "CONTENT STRATEGY · DESIGN · PUBLISHING". */
  category: string;
  overview: string;
  /** The numbered "My process" steps, rendered as a process diagram. */
  process: CaseStudyStep[];
  /** The "Scope of work" bullets. */
  scope: string[];
  /** The closing statement. */
  closing: string;
}

/* ------------------------------------------------------------------ *
 * Professional experience
 * ------------------------------------------------------------------ */

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  /** e.g. "Part-time · Remote" */
  employment: string;
  /** e.g. "May 2023 – Present" */
  dates: string;
  responsibilities: string[];
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
  /** Key in the `ICONS` map inside `src/components/Services.tsx`. */
  icon: string;
}

export interface Tool {
  name: string;
  /**
   * Filename inside `public/images/logos/`, e.g. "canva.svg".
   * Leave it out and a neutral Lucide glyph is shown instead — never a
   * broken image.
   */
  logo?: string;
}

export interface ToolGroup {
  id: string;
  title: string;
  tools: Tool[];
}
