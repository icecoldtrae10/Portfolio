import type { WorkHighlight } from "./types";

/**
 * Work Highlights & Stats — section header.
 *
 * `badge` and `headline` are reproduced exactly as approved; there is no
 * other copy on this section's heading.
 */
export const workHighlightsHeader = {
  badge: "PROVEN METRICS & DASHBOARDS",
  headline: "Verified Social Media & Campaign Performance",
};

/**
 * The label above every card's bullet list. It is identical on all three
 * cards, so it is declared once here rather than repeated below.
 */
export const verifiedHighlightsLabel = "Verified Dashboard Highlights:";

/**
 * The three verified-metric cards.
 *
 * Every string here is reproduced exactly as approved — titles, metric
 * badges, descriptions, bullet labels and bullet values. Splitting each
 * bullet into `label` + `value` is only so the value can be rendered in bold
 * accent colour; the page still reads "Net Follower Growth: +16,086
 * (+804.2%)". A trailing colon is added by the component, so labels are
 * stored without one.
 *
 * The screenshots live in `public/images/stats/` and are shown inside the
 * card and again in a full-screen preview.
 */
export const workHighlights: WorkHighlight[] = [
  {
    id: "facebook-audience-growth",
    image: {
      src: "/images/stats/Portfolio Stats 1.jpg",
      width: 1666,
      height: 787,
      alt: "Screenshot of Meta Business Suite Insights for 10 Dec 2025 – 19 Oct 2026 showing net follower growth of 16,086, 16,335 lifetime followers and 4.1K messaging contacts.",
    },
    title: "Facebook Audience Growth & Engagement",
    metric: "16.3K Total Followers | 4.1K Messaging Contacts",
    description:
      "Organic Facebook page audience growth generated through recruitment campaigns, group distribution, and consistent publishing.",
    highlights: [
      { label: "Net Follower Growth", value: "+16,086 (+804.2%)" },
      { label: "Total Lifetime Followers", value: "16,335" },
      {
        label: "Messaging Contacts",
        value: "4,100+ inbound candidate conversations",
      },
      { label: "Active Campaign Period", value: "Dec 2025 – Oct 2026" },
    ],
  },
  {
    id: "multi-campaign-audience-scaling",
    image: {
      src: "/images/stats/Portfolio Stats 2.jpg",
      width: 1669,
      height: 787,
      alt: "Screenshot of Meta Business Suite Insights for 14 Jul 2024 – 20 Oct 2026 showing net follower growth of 34,960, 38,819 lifetime followers and 6.9K messaging contacts.",
    },
    title: "Multi-Campaign Audience & Lead Scaling",
    metric: "38.8K Lifetime Followers | 6.9K Messaging Contacts",
    description:
      "Long-term performance metrics across Facebook recruitment pages, driving high-volume candidate acquisition and messaging inquiries.",
    highlights: [
      { label: "Lifetime Page Followers", value: "38,819" },
      { label: "Net Follower Growth", value: "+34,960 (+7.6%)" },
      {
        label: "Inbound Candidate Inquiries",
        value: "6,900+ total messaging contacts",
      },
      { label: "Active Campaign Period", value: "Jul 2024 – Oct 2026" },
    ],
  },
  {
    id: "viral-reach-short-form",
    image: {
      src: "/images/stats/Portfolio Stats 3.jpg",
      width: 844,
      height: 757,
      alt: "Screenshot of Facebook photo post performance analytics showing 448.7K total views from Facebook and Instagram, 3.1K interactions, 2.0K likes and reactions, 562 comments, 250 shares and 294 saves.",
    },
    title: "Viral Reach & Short-Form Content Performance",
    metric: "448.7K Organic Views | 3.1K Engagements",
    description:
      "Individual viral Facebook photo post performance created in Canva, showing top-of-funnel reach and audience interaction.",
    highlights: [
      {
        label: "Total Organic Post Reach / Views",
        value: "448,700+ (448.6K Facebook / 105 Instagram)",
      },
      { label: "Total Interactions", value: "3,100+" },
      { label: "Likes & Reactions", value: "2,000+" },
      {
        label: "Comments & Shares",
        value: "562 Comments | 250 Shares | 294 Saves",
      },
    ],
  },
  {
    id: "viral-post-reach",
    image: {
      src: "/images/stats/Portfolio Stats 4.jpg",
      width: 582,
      height: 576,
      alt: "Screenshot of Facebook post performance analytics showing 866.7K total views, 3.6K interactions, 2.1K likes and reactions, 651 comments, 412 shares and 457 saves.",
    },
    title: "Viral Post Reach & High-Volume Engagement",
    metric: "866.7K Organic Views | 3.6K Total Interactions",
    description:
      "Exceptional organic reach achieved on a single promotional Facebook photo post created in Canva, driving massive top-of-funnel audience exposure.",
    highlights: [
      { label: "Total Organic Views / Reach", value: "866,700+" },
      { label: "Total Interactions", value: "3,600+" },
      { label: "Likes & Reactions", value: "2,100+" },
      {
        label: "Post Virality",
        value: "651 Comments | 412 Shares | 457 Saves",
      },
    ],
  },
];
