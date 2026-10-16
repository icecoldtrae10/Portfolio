# Project images

Drop project thumbnails and screenshots here, then reference them from
`src/data/projects.ts`.

## Adding a project image

1. Export the image (WebP or PNG, at least **1600px wide** looks best).
2. Save it in this folder, e.g. `recruitment-ad-series.webp`.
3. Open `src/data/projects.ts` and set:

   ```ts
   {
     id: "recruitment-ad-series",
     image: "/images/projects/recruitment-ad-series.webp",
     imageAlt: "A Canva recruitment advertisement for a warehouse role.",
     // ...
   }
   ```

4. Save. The card, the modal preview and the filter counts update automatically.

## Rules of thumb

- **Wide cards** use a 16:10 crop, **narrow cards** a 1:1 crop. Anything
  reasonably landscape works — the site crops with `object-cover`.
- Always fill in `imageAlt`. It is used by screen readers and search engines.
- While `image` is left `undefined` the card shows an obvious empty slot. It
  never shows a broken image, so it is always safe to publish mid-way.
- Do not upload client-confidential material, or anything you have not been
  given permission to publish.
