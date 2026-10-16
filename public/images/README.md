# Images

- `projects/` — project thumbnails and case-study previews. See
  [projects/README.md](projects/README.md).
- `analytics/` — platform screenshots for the evidence gallery. See
  [analytics/README.md](analytics/README.md).

## Portrait

To add a photo to the About section:

1. Save it here as `portrait.jpg` (portrait orientation, roughly 1200×1500).
2. Open `src/data/site.ts` and set:

   ```ts
   portrait: "/images/portrait.jpg",
   portraitAlt: "Portrait of Your Name",
   ```

Until then the About section shows a monogram instead — no invented portrait
and no broken image.
