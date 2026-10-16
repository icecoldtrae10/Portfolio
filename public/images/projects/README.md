# Portfolio images

Drop approved work samples here, then reference them from
`src/data/projects.ts`.

## Adding an image

1. Export the picture (WebP or PNG, at least **1600px wide** looks best).
2. Save it in this folder, e.g. `recruitment-campaign-creative.webp`.
3. Add an entry to `projects` in `src/data/projects.ts`:

   ```ts
   {
     id: "recruitment-campaign-creative",
     title: "Recruitment Campaign Creative",
     category: "Recruitment Campaigns",
     image: "/images/projects/recruitment-campaign-creative.webp",
     imageAlt: "A Canva recruitment advertisement for a warehouse role.",
     summary: "One sentence on what the piece is and who it was for.",
   },
   ```

4. Save. The card, the detail modal and the filter buttons all appear by
   themselves.

## Rules of thumb

- The gallery ships **empty**. It stays that way until you add real work, and
  projects without an `image` are never rendered — so there are no empty tiles
  and no broken pictures.
- Suggested `category` labels: Recruitment Campaign Creative · Social Media
  Content · Campaign Announcement · Recruitment Information Post · Content
  Design.
- Always fill in `imageAlt` with an accurate description.
- Do not upload client-confidential material, or anything you have not been
  given permission to publish.
