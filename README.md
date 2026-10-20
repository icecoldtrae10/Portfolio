# Manuel Adrian Cadiao — Virtual Assistant Portfolio

A single-page dark-themed portfolio covering social media growth, B2B lead
generation, recruitment support and technical/web support.

Built with **Next.js (App Router)**, **TypeScript** and **Tailwind CSS v4**.
No database, no API, no paid services — it deploys as a static site.

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
```

---

## Design system

Everything visible is driven by the rules below, which live in
`src/app/globals.css`.

| Rule | Implementation |
| --- | --- |
| One sharp sans-serif, no serif/script/cursive | Geist Sans only, registered in `src/app/layout.tsx`. There is no `font-display` family in the project. |
| Emphasis = weight or accent colour, never italics | `font-semibold` / `text-accent`. No `<em>` and no `italic` class appears anywhere. |
| Dark slate / deep navy background | `--color-abyss: #0b132b` (page) and `--color-deep: #0f172a` (the About band). |
| Cards = clean dark containers with a subtle 1px border | `.surface-card` → `#0f172a` background + `1px solid rgba(255,255,255,.1)` (equivalent to `border-white/10`). |
| Cyan accent for highlights, tags and buttons | `--color-accent: #00b4d8` (hover `#22d3ee`). |
| White headings, light-grey body | `--color-heading: #ffffff`, `--color-body: #e2e8f0`, secondary `--color-muted: #94a3b8`. |

Contrast against `#0b132b`: white ≈ 18.9:1, `#e2e8f0` ≈ 13.6:1, `#94a3b8` ≈
6.7:1, `#00b4d8` ≈ 6.9:1. The primary button is cyan with `#0b132b` text
(≈ 6.9:1) rather than white on cyan, which would fail AA.

---

## Where to edit things

You should never need to touch a component to add content. Everything lives in
`src/data/`.

| File | What it controls |
| --- | --- |
| `src/data/site.ts` | **Start here.** Name, wordmark, live URL, email, LinkedIn |
| `src/data/navigation.ts` | Menu labels, links and the "Contact Me" button |
| `src/data/services.ts` | The four services — title, summary and bullet list |
| `src/data/work-highlights.ts` | The three "Work Highlights & Stats" cards — screenshot, metric badge and verified highlights |
| `src/data/experience.ts` | The four employers, locations, roles, dates and points |
| `src/data/tools.ts` | The four tool groups and their logo files |
| `src/data/about.ts` | The two About Me paragraphs |
| `src/app/layout.tsx` | Page title, meta description, Open Graph / Twitter tags |

Types for all of the above are in `src/data/types.ts`.

Section order is set in `src/app/page.tsx`:

```
Hero → Services → Work Highlights & Stats → Work Experience →
Tools & Software → About Me → Contact
```

The navigation shows a subset of those ids (Home · Services · Work · Experience ·
About · Contact); "Tools & Software" is on the page but not in the menu — the
scroll-spy simply holds the last link while passing through it.

---

## The dashboard screenshots

Each of the three cards in "Work Highlights & Stats" leads with its verified
dashboard screenshot from `public/images/stats/`, stored as a fixed 16:9 plate
(`rounded-xl`, `border-white/10`, `bg-slate-900/50`, dark backing so the white
dashboards read cleanly). The dashboards are far too dense to read at card
width, so clicking one — or pressing Enter on it — opens a full-screen
preview: Escape, the backdrop or the close button dismisses it, and Left/Right
arrows step between the three.

Files, pixel sizes and `alt` text all live in
`src/data/work-highlights.ts`; see `public/images/stats/README.md` for how to
swap one.

**Only display visuals you are allowed to publish**, and keep private details
(candidate names, contacts, client identifiers) cropped out of every
screenshot. Recreated examples must be labelled as demonstrations rather than
completed client projects.

## Adding a tool logo

1. Save the logo in `public/images/logos/` (SVG preferred).
2. Add `{ name: "Tool name", logo: "tool-name.svg" }` to the right group in
   `src/data/tools.ts`.

Leave `logo` out and a neutral icon is shown instead — never a broken image.
Logos are referenced by filename and served as static files, so there is no
runtime third-party request.

`public/images/logos/` also holds nine marks that no group currently
references (gmail, microsoft-office, facebook, arduino, tinkercad, java, c,
cplusplus, labview). They are **unused on purpose** — see
[logos/README.md](public/images/logos/README.md) — so no downloading is needed
if a group is ever added.

---

## Content rules built into this project

- **Every word on the page comes from the approved copy set.** Section
  headings, service summaries, metric tags, experience points, tool names and
  the About paragraphs are stored verbatim in `src/data/` — edit them there
  rather than in the components.
- **No eyebrow labels.** The brief has no approved eyebrow copy, so
  `SectionHeading` renders only a rule and the `<h2>` rather than inventing
  one.
- **No contact form.** The email link opens the visitor's own mail application
  with the address already filled in, so nothing is silently discarded and no
  backend is required.
- **No phone number, and no availability, working-hours, time-zone or
  turnaround claims.**
- **No profile photo.** The About section is text only by design.
- **No résumé section and no PDF**, so no link can 404.
- Owner instructions in the brief (visual suggestions, permission notes) are
  kept as comments in `src/data/`, never rendered.

---

## Deploying to Vercel

1. Push the project to a GitHub repository (see below).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel detects Next.js automatically — accept the defaults and deploy.
4. Update `url` in `src/data/site.ts` to the final domain. It feeds the
   canonical URL, Open Graph tags, sitemap and `robots.txt`.

No environment variables are required.

### From the command line instead

```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production
```

---

## Pushing to GitHub

Run these from the project root once Git is installed and authenticated:

```bash
git add .
git commit -m "Describe your change"
git push
```

`node_modules/`, `.next/` and `tsconfig.tsbuildinfo` are already in
`.gitignore`.

---

## Project structure

```
public/
  images/
    logos/          <- official tool logos (SVG/PNG)
    projects/       <- optional work-highlight visuals

src/
  app/              <- page, layout, fonts, colours, SEO, sitemap, robots
  components/       <- the page sections
    icons/          <- inline SVG icons
    ui/             <- button, reveal, section heading
  data/             <- ALL editable content
  hooks/
```

---

## Accessibility and performance notes

- Semantic landmarks, one `h1`, ordered heading hierarchy (6 `h2`, 15 `h3`).
- Keyboard operable throughout: skip link, visible focus rings everywhere, and
  the mobile menu closes on Escape with focus returned to its trigger.
- Text colours are checked against `#0b132b` to at least 4.5:1 (WCAG AA).
- `prefers-reduced-motion` is honoured globally — reveals are disabled, all
  content is shown immediately, and scrolling becomes instant. A CSS rule
  forces every reveal visible under reduced motion even before JavaScript runs.
- Reveal animations only activate when JavaScript is available, so no content
  is ever hidden from a no-JS visitor.
- No animation libraries. Icons come from `lucide-react` plus one small inline
  SVG; tool logos are static files.
