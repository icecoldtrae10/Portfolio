/**
 * ============================================================================
 *  SITE / PERSONAL DETAILS  —  EDIT THIS FILE FIRST
 * ============================================================================
 * Every value below is live copy used by the navigation, footer, contact
 * buttons and page metadata.
 *
 * Nothing here is confidential — do not put anything you would not want public.
 */

export const site = {
  /* ------------------------------------------------------------------ *
   * Identity
   * ------------------------------------------------------------------ */

  /** Your name. Used for the wordmark, the footer and the page title. */
  name: "Adrian Cadiao",

  /** Short wordmark shown in the navigation. Keep it to 1–2 words/lines. */
  wordmark: "Adrian Cadiao",

  /** Your professional title, also used as the footer line. */
  role: "Virtual Assistant | Social Media, Research & Administrative Support",

  /**
   * The live URL of the site (no trailing slash). Used for the canonical link
   * and Open Graph tags. Update it if the domain ever changes.
   */
  url: "https://portfolio-opal-gamma-92.vercel.app",

  /* ------------------------------------------------------------------ *
   * Contact
   * ------------------------------------------------------------------ */

  /** Powers every `mailto:` link and the copy button in the contact section. */
  email: "manuelacadiao@gmail.com",

  /** Full LinkedIn profile URL — used by the contact and footer links. */
  linkedin: "https://www.linkedin.com/in/adrian-cadiao-829907269/",

  /* ------------------------------------------------------------------ *
   * Résumé
   * ------------------------------------------------------------------ */

  /**
   * Path to your résumé inside `public/`.
   *
   *   1. Drop your PDF at  public/documents/resume.pdf
   *   2. Change this value to "/documents/resume.pdf"
   *
   * While this is `null` the "View Résumé" button is simply not rendered —
   * there is no link that 404s and no placeholder text on the page.
   */
  resumeUrl: null as string | null,
};
