/**
 * Shared types for every content block on the site.
 *
 * All content lives in `src/data/*`. You should not need to touch any component
 * to add a service, a work highlight, an employer or a tool.
 */

/* ------------------------------------------------------------------ *
 * Services
 * ------------------------------------------------------------------ */

export interface Service {
  /** Stable id — used for React keys. Use kebab-case. */
  id: string;
  title: string;
  /** One-line summary, shown above the bullet list. */
  summary: string;
  /** The bullets listed under the summary. */
  items: string[];
  /** Key in the `ICONS` map inside `src/components/Services.tsx`. */
  icon: string;
}

/* ------------------------------------------------------------------ *
 * Work highlights & stats
 * ------------------------------------------------------------------ */

export interface WorkHighlight {
  /** Stable id — used for React keys. Use kebab-case. */
  id: string;
  title: string;
  /** The "Metric Tag" line, rendered as a cyan badge. */
  metric: string;
  description: string;
  /** The "Key Items" line. */
  keyItems: string;
}

/* ------------------------------------------------------------------ *
 * Professional experience
 * ------------------------------------------------------------------ */

export interface ExperienceItem {
  /** Stable id — used for React keys. Use kebab-case. */
  id: string;
  company: string;
  /** e.g. "Dubai, UAE (Remote)" */
  location: string;
  role: string;
  /** e.g. "July 2024 – Present" */
  dates: string;
  points: string[];
}

/* ------------------------------------------------------------------ *
 * Tools & software
 * ------------------------------------------------------------------ */

export interface Tool {
  /** Displayed verbatim — including any parenthetical note. */
  name: string;
  /**
   * Filename inside `public/images/logos/`, e.g. "canva.svg".
   * Leave it out and a neutral Lucide glyph is shown instead — never a
   * broken image.
   */
  logo?: string;
}

export interface ToolGroup {
  /** Stable id — used for React keys. Use kebab-case. */
  id: string;
  title: string;
  tools: Tool[];
}
