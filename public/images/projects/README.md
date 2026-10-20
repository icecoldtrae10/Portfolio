# Work highlight visuals

This folder backs the three **empty media slots** in the "Work Highlights &
Stats" section. Each card already renders a 16:9 slot above its text, waiting
for an approved image or video sample.

The slot is deliberately blank: it is `aria-hidden` and carries no placeholder
wording, because no placeholder wording has been approved. An empty folder
therefore produces no broken picture and no invented caption.

## Adding one

1. Put the image here, e.g. `public/images/projects/audience-growth.webp`.
2. Add an `images` field to `WorkHighlight` in `src/data/types.ts`:

   ```ts
   /**
    * Optional approved visuals for this highlight.
    */
   images?: { src: string; alt: string }[];
   ```

3. Set it on the card in `src/data/work-highlights.ts`:

   ```ts
   images: [
     {
       src: "/images/projects/audience-growth.webp",
       alt: "A short, accurate description of what the picture shows.",
     },
   ],
   ```

4. In `src/components/WorkHighlights.tsx`, render the array inside the slot
   instead of the empty `div`.

`alt` describes the picture for screen readers and search engines — write what
it shows, not "image" or the file name.

## Which card is which

1. **Organic Social Audience Scaling**
2. **International B2B Cold Outreach**
3. **High-Volume Candidate Processing**

## Before you publish

- **Only display visuals you have permission to share.**
- Label recreated examples as demonstrations rather than completed client
  projects — the caption you write in `alt` is what makes that clear.
- Never include real candidates' details, client contacts or private
  correspondence.
- Never invent a project to fill a slot.
