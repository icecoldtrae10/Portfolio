import type { AnalyticsEntry } from "./types";

/**
 * ============================================================================
 *  ANALYTICS EVIDENCE GALLERY
 * ============================================================================
 * ADDING A SCREENSHOT
 *   1. Export the screenshot from Meta Business Suite (or whichever platform).
 *   2. Save it in  public/images/analytics/   e.g.  meta-reach-mar-aug.webp
 *   3. Copy an entry below and point `image` at it:
 *        image: "/images/analytics/meta-reach-mar-aug.webp",
 *        imageAlt: "Meta Business Suite reach report showing monthly totals.",
 *
 * Anything left with `image: undefined` renders a labelled placeholder tile —
 * never a broken image, and never a fabricated dashboard.
 *
 * Only add screenshots you are permitted to publish. Redact client names,
 * revenue figures and personal data before uploading.
 */

export const analyticsEntries: AnalyticsEntry[] = [
  {
    id: "audience-growth",
    source: "Meta Business Suite",
    caption: "Audience growth over time",
    period: "Add reporting period",
    note: "Follower count movement across the reporting period, with the dates visible in the screenshot.",
    image: undefined,
  },
  {
    id: "reach-and-impressions",
    source: "Meta Business Suite",
    caption: "Reach & impressions",
    period: "Add reporting period",
    note: "How many unique accounts saw the content, and how many times it was displayed.",
    image: undefined,
  },
  {
    id: "engagement-summary",
    source: "Meta Business Suite",
    caption: "Engagement summary",
    period: "Add reporting period",
    note: "Reactions, comments, shares and saves — the measures that indicate the content landed.",
    image: undefined,
  },
  {
    id: "top-performing-content",
    source: "Meta Business Suite",
    caption: "Top-performing content",
    period: "Add reporting period",
    note: "Individual post performance, used to decide what the next content cycle should repeat.",
    image: undefined,
  },
  {
    id: "page-views",
    source: "Platform insights",
    caption: "Page views & profile activity",
    period: "Add reporting period",
    note: "Visits to the page itself, which is a different signal from post reach.",
    image: undefined,
  },
  {
    id: "outreach-results",
    source: "Spreadsheets",
    caption: "Outreach log & response tracking",
    period: "Add reporting period",
    note: "Manually logged send, reply and bounce counts from a cold email campaign.",
    image: undefined,
  },
];
