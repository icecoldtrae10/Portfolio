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

export interface WorkHighlightPoint {
  /**
   * Rendered followed by a colon, e.g. "Net Follower Growth" shows as
   * "Net Follower Growth: +16,086 (+804.2%)".
   */
  label: string;
  /** Rendered in bold accent colour — the emphasis the design rules ask for. */
  value: string;
}

export interface WorkHighlight {
  /** Stable id — used for React keys. Use kebab-case. */
  id: string;
  /** The verified dashboard screenshot shown at the top of the card. */
  image: {
    /** Path under `public/`, e.g. "/images/stats/Portfolio Stats 1.jpg". */
    src: string;
    /** Intrinsic pixel size of the file — used to avoid layout shift. */
    width: number;
    height: number;
    /** Short, accurate description of what the screenshot shows. */
    alt: string;
  };
  title: string;
  /** The "Key Metric Badge" line, rendered as a cyan badge. */
  metric: string;
  description: string;
  /** The "Verified Dashboard Highlights" bullets. */
  highlights: WorkHighlightPoint[];
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
