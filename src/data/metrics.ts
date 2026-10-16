import type { Metric } from "./types";

/**
 * ============================================================================
 *  RESULTS / METRICS
 * ============================================================================
 * Every `value` is `null` on purpose.
 *
 * A metric only earns its place here if you can screenshot it. To add one:
 *
 *   {
 *     id: "followers-growth",
 *     value: 1240,                 // <- your verified figure
 *     suffix: "+",                 // <- rendered after the number
 *     label: "Followers added",
 *     context: "Facebook page audience growth across a six-month contract.",
 *     period: "Jan – Jun 2024",
 *     linkHref: "#analytics",
 *     linkLabel: "See the supporting screenshots",
 *   }
 *
 * While `value` is `null` the section renders an honest, labelled empty slot —
 * and the count-up animation stays switched off for that figure.
 *
 * IMPORTANT: describe what you *supported*, not what you single-handedly
 * caused. "Audience I helped grow and maintain" reads far better — and is far
 * more defensible — than "Audience I generated".
 */

export const metrics: Metric[] = [
  {
    id: "audience-managed",
    value: null,
    label: "Audience maintained",
    context:
      "Total followers across the Facebook and LinkedIn pages I have scheduled, published and engaged with.",
    period: "Add your reporting period",
    linkHref: "#analytics",
    linkLabel: "Evidence gallery",
  },
  {
    id: "content-published",
    value: null,
    suffix: "+",
    label: "Posts published",
    context:
      "Graphics, captions and recruitment ads shipped on a recurring content calendar.",
    period: "Add your reporting period",
    linkHref: "#work",
    linkLabel: "Related projects",
  },
  {
    id: "contacts-researched",
    value: null,
    suffix: "+",
    label: "Contacts researched",
    context:
      "Verified business contacts compiled into organised, deduplicated spreadsheets for outreach.",
    period: "Add your reporting period",
    linkHref: "#case-studies",
    linkLabel: "Lead research case study",
  },
  {
    id: "outreach-sent",
    value: null,
    suffix: "+",
    label: "Outreach emails sent",
    context:
      "Personalised cold emails sent manually to international businesses, one at a time.",
    period: "Add your reporting period",
    linkHref: "#case-studies",
    linkLabel: "Outreach case study",
  },
];
