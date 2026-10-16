/**
 * ============================================================================
 *  SITE / PERSONAL DETAILS  —  EDIT THIS FILE FIRST
 * ============================================================================
 * Everything marked with a `PLACEHOLDER` comment is a stand-in.
 * Replace it with your real details before you publish.
 *
 * Nothing here is confidential — do not put client names, private emails or
 * personal addresses you would not want public.
 */

export const site = {
  /* ------------------------------------------------------------------ *
   * Identity
   * ------------------------------------------------------------------ */

  /** PLACEHOLDER — your real name. Used for the wordmark, titles and metadata. */
  name: "Your Name",

  /** Short wordmark shown in the navigation. Keep it to 1–2 words. */
  wordmark: "Your Name",

  /**
   * PLACEHOLDER — initials used for the monogram until you add a portrait.
   * Set to your real initials, e.g. "AR".
   */
  initials: "YN",

  /** Your professional title. */
  role: "Virtual Assistant — Social Media, Recruitment & Digital Operations",

  /**
   * PLACEHOLDER — used in <title>, Open Graph and canonical URL.
   * Swap for your real domain once the site is deployed.
   */
  url: "https://your-domain.com",

  /* ------------------------------------------------------------------ *
   * Contact  —  PLACEHOLDERS
   * ------------------------------------------------------------------ */

  /**
   * PLACEHOLDER — your professional email address.
   * The contact form, copy button and mailto links all read from this value.
   */
  email: "hello@yourdomain.com",

  /** PLACEHOLDER — full LinkedIn profile URL. */
  linkedin: "https://www.linkedin.com/in/your-profile",

  /** PLACEHOLDER — GitHub profile, if you want to show web work. */
  github: "https://github.com/your-handle",

  /**
   * PLACEHOLDER — optional portrait.
   *
   *   1. Drop a photo at  public/images/portrait.jpg
   *   2. Change this value to "/images/portrait.jpg"
   *
   * While `null` the About section shows an elegant monogram instead — there
   * is no invented portrait and no broken image.
   */
  portrait: null as string | null,
  /** Describe the photo for screen readers once `portrait` is set. */
  portraitAlt: "Portrait of Your Name",

  /**
   * PLACEHOLDER — path to your résumé inside `public/`.
   *
   *   1. Drop your PDF at  public/documents/resume.pdf
   *   2. Change this value to "/documents/resume.pdf"
   *
   * While this is `null` the site shows an honest "not uploaded yet" state
   * instead of a link that 404s.
   */
  resumeUrl: null as string | null,

  /* ------------------------------------------------------------------ *
   * Availability banner
   * ------------------------------------------------------------------ */

  availability: {
    /** Master switch. Set to `false` to remove the badge from the hero. */
    enabled: true,
    /** Short label, e.g. "Available for part-time remote work". */
    label: "Available for remote & part-time work",
    /** Optional timezone / working-hours note. */
    detail: "Overlapping EU & US East Coast hours",
  },

  /* ------------------------------------------------------------------ *
   * Editing helpers
   * ------------------------------------------------------------------ */

  /**
   * Set to `false` once you have replaced every template entry with your real
   * projects, metrics, case studies and screenshots. While `true`, the
   * portfolio, results, case-study and analytics sections show a slim
   * reminder strip so nothing templated is published by accident.
   */
  showTemplateNotices: true,

  /** Footer credit line. */
  tagline:
    "Social media, recruitment support and digital operations for remote teams.",
};

export type SiteConfig = typeof site;

/** Convenience helper so components never deal with a missing href. */
export const RESUME_HREF = site.resumeUrl ?? null;
