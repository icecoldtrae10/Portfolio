/**
 * Shared types for every content block on the site.
 *
 * All content lives in `src/data/*`. You should not need to touch any component
 * to add a service, work sample, employer, approach step or tool.
 */

/* ------------------------------------------------------------------ *
 * Services
 * ------------------------------------------------------------------ */

export interface Service {
  id: string;
  title: string;
  /** One-line positioning statement, shown in italic under the title. */
  subtitle: string;
  description: string;
  /** The bullets under the "Services include:" label. */
  services: string[];
  /** Key in the `ICONS` map inside `src/components/Services.tsx`. */
  icon: string;
}

/* ------------------------------------------------------------------ *
 * Selected work
 * ------------------------------------------------------------------ */

export interface WorkImage {
  /** Path inside `public/`, e.g. "/images/projects/recruitment-poster.webp". */
  src: string;
  /** Describes the picture for screen readers and search engines. */
  alt: string;
}

export interface WorkSample {
  /** Stable id — used for React keys. Use kebab-case. */
  id: string;
  title: string;
  /** One-line summary, shown under the title. */
  subtitle: string;
  description: string;
  /** Shown after the "What I contributed:" label. */
  contribution: string;
  /**
   * Optional approved visuals for this sample.
   *
   * Images that are not here simply do not render — no empty frames and no
   * broken pictures. See `public/images/projects/README.md`.
   */
  images?: WorkImage[];
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
  /** e.g. "May 2023 to Present" */
  dates: string;
  responsibilities: string[];
}

/* ------------------------------------------------------------------ *
 * How I work
 * ------------------------------------------------------------------ */

export interface ApproachStep {
  id: string;
  /** Displayed as "01", "02", … */
  number: string;
  title: string;
  body: string;
}

/* ------------------------------------------------------------------ *
 * Tools
 * ------------------------------------------------------------------ */

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
