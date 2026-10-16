# Analytics screenshots

Drop platform screenshots here, then reference them from
`src/data/analytics.ts`.

## Adding a screenshot

1. Export the image from Meta Business Suite, LinkedIn Insights, or wherever
   the figure came from. WebP or PNG, roughly **1600px wide**.
2. Save it in this folder, e.g. `meta-reach-mar-aug.webp`.
3. Open `src/data/analytics.ts` and set:

   ```ts
   {
     id: "reach-and-impressions",
     image: "/images/analytics/meta-reach-mar-aug.webp",
     imageAlt: "Meta Business Suite reach and impressions report for March to August.",
     period: "Mar – Aug 2024",
     // ...
   }
   ```

4. Save. It appears in the gallery and in the lightbox automatically.

## Before you upload

- **Redact client names, revenue figures, email addresses and any personal
  data.** Blur or crop first — do not rely on the screenshot being unnoticed.
- Keep the reporting period visible in the image wherever possible, and repeat
  it in the `period` field.
- Prefer a full-width capture over a tiny crop. The gallery is designed for
  readable evidence, not a wall of thumbnails.
- Entries with no `image` render a labelled empty slot, never a fabricated
  dashboard.
