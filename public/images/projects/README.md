# Work sample visuals

This folder is **optional**. The "Work Samples" section renders its three
approved samples as text on its own, so an empty folder produces no empty
frames and no broken pictures — only a missing picture would be worse, and
there is no picture until you add one.

## Adding one

1. Put the image here, e.g. `public/images/projects/recruitment-poster.webp`.
2. Open `src/data/work-samples.ts` and add an `images` array to that sample:

   ```ts
   images: [
     {
       src: "/images/projects/recruitment-poster.webp",
       alt: "A Canva recruitment poster for a warehouse role.",
     },
   ],
   ```

3. Save. A framed image grid appears directly under that sample's
   "What I contributed" block.

`alt` describes the picture for screen readers and search engines — write what
it shows, not "image" or the file name.

## What goes here

The three samples expect these visuals:

1. **Social Media Content & Campaigns** — approved recruitment posters, social
   media graphics and published campaign posts.
2. **Manual Cold Email Outreach** — a recreated outreach workflow, a fictional
   prospect-tracking spreadsheet, or a redacted example containing no private
   correspondence or contact information.
3. **Business & Contact Research** — a recreated research spreadsheet using
   fictional company names and contact details, or a visual showing the
   research and organization process.

## Before you publish

- **Only display work samples you have permission to share.**
- Label recreated examples as demonstrations rather than completed client
  projects — the caption you write in `alt` (and the sample's own copy) is what
  makes that clear.
- Never include real candidates' details, client contacts or private
  correspondence.
- Never invent a project to fill space.
