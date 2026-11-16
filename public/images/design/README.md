# Design portfolio graphics

The six social media graphics shown in the "Design Portfolio" section
(`#design`). Each one is referenced from `src/data/design-work.ts`, which also
stores its intrinsic pixel size and the `alt` text describing what it shows.

| File | Size | Shows |
| --- | --- | --- |
| `hiring-pediatric-nurse-germany.jpg` | 1880×1576 | "We Are Hiring — Bound for Germany" Pediatric Nurse recruitment poster |
| `destination-germany.jpg` | 3375×4219 | "Our Next Boarding Call Is for: Germany" destination graphic |
| `hiring-tailor-croatia.jpg` | 2820×2364 | "We Are Hiring — Bound for Croatia" Tailor / Sewer recruitment poster |
| `fun-fact-halloween.jpg` | 2160×2160 | "Irish Fun Fact — The Ancient Festival Behind Halloween" educational post |
| `quote-sunrise.jpg` | 5091×3396 | Sunrise quote graphic ("Some people chase sunsets…") |
| `announcement-united-kingdom.jpg` | 2160×2160 | United Kingdom destination announcement over a Union Jack |

Graphics are shown at their **natural aspect ratio** — the set mixes 4:5,
square and 3:2 artwork — so nothing is cropped. Card width is too small to
read a poster's fine print, so every tile also opens a full-screen preview:
click it (or press Enter on it), then Escape or the close button dismisses
it. Left/Right arrows step through the gallery.

## Adding or replacing a graphic

1. Drop the file in this folder with a short kebab-case name.
2. Add (or update) its entry in `src/data/design-work.ts` with `src`,
   `width`, `height`, `alt` and a short `title`:

   ```ts
   {
     id: "my-graphic",
     image: {
       src: "/images/design/my-graphic.jpg",
       width: 2160,
       height: 2160,
       alt: "Short, accurate description of what the graphic shows.",
     },
     title: "Short label for the preview header",
   }
   ```

3. Keep `width`/`height` honest — they reserve the space before the image
   loads, so the gallery does not jump while scrolling.

`alt` describes the graphic for screen readers and search engines: write
what it shows, not "image" or the file name.

## Before you publish

- **Only display work you have permission to publish.**
- These samples use placeholder branding (`LOGO`, `Logoipsum`,
  `company.com`) — swap in real branding only where you are allowed to.
- Never include real candidates' names, contact details or client
  correspondence in a graphic.
- Originals are kept in `C:\Users\Test Laptop\Downloads\`; the copies here
  are byte-identical to them.
