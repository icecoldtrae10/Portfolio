# Personal Portfolio — Virtual Assistant

A single-page portfolio site for a Virtual Assistant working across social media
management, recruitment support, lead generation, content creation,
administrative support and basic web development.

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

## Where to edit things

You should never need to touch a component to add content. Everything lives in
`src/data/`.

| File | What it controls |
| --- | --- |
| `src/data/site.ts` | **Start here.** Name, wordmark, initials, email, LinkedIn, GitHub, résumé path, portrait path, availability badge, template-notice switch |
| `src/data/projects.ts` | Portfolio gallery entries |
| `src/data/analytics.ts` | Screenshot evidence gallery |
| `src/data/metrics.ts` | The results figures |
| `src/data/case-studies.ts` | The four detailed case studies |
| `src/data/services.ts` | The five services |
| `src/data/tools.ts` | Tools grouped by use case |
| `src/data/about.ts` | About copy and experience timeline |
| `src/data/navigation.ts` | Nav labels and section ids |

Types for all of the above are in `src/data/types.ts`.

### Adding a project

1. Drop the image in `public/images/projects/`.
2. Copy any entry in `src/data/projects.ts`, change the `id`, and set:

   ```ts
   image: "/images/projects/your-file.webp",
   imageAlt: "A short, accurate description of the picture.",
   ```

3. Save. The card, the modal and the filter counts update automatically.

### Adding an analytics screenshot

1. Save the image in `public/images/analytics/`.
2. Copy any entry in `src/data/analytics.ts` and set `image`, `imageAlt` and
   `period`.

### Adding your portrait and résumé

- Save a photo at `public/images/portrait.jpg`, then set
  `portrait: "/images/portrait.jpg"` in `src/data/site.ts`.
- Save your PDF at `public/documents/resume.pdf`, then set
  `resumeUrl: "/documents/resume.pdf"` in the same file.

While those are `null` the site shows an honest placeholder or a disabled
button — it never renders a broken image or a dead download link.

---

## A note on the template content

The project entries, metrics, case studies and analytics slots ship as
**structure templates**, not real engagements. They contain no client names, no
dates and no results, and the metrics are deliberately `null`.

This is intentional: it is much harder to accidentally publish an unverifiable
claim than to write one by mistake.

While `showTemplateNotices` is `true` in `src/data/site.ts`, the portfolio,
results, case-study and analytics sections show a slim reminder strip. **Set it
to `false` once you have replaced everything with your real work.**

Only ever add a figure you could put a screenshot next to. Where a result is
unknown, leave it out — the blocks are designed to hide themselves.

---

## Contact form

The site has no backend. The form validates in the browser, then hands the
message to the visitor's own mail application via a `mailto:` link. If that
does not open, a fallback panel shows the composed message with copy buttons
and the raw email address. Nothing is silently discarded.

---

## Deploying to Vercel

1. Push the project to a GitHub repository (see below).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel detects Next.js automatically — accept the defaults and deploy.
4. Once live, update `url` in `src/data/site.ts` to your real domain. This
   feeds the canonical URL, Open Graph tags, sitemap and `robots.txt`.

No environment variables are required.

### Deploying from the command line instead

```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production
```

---

## Pushing to GitHub

The repo has not been pushed yet. Once you have Git installed and are
authenticated, run these from the project root:

```bash
git init
git add .
git commit -m "Initial commit: virtual assistant portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/va-portfolio.git
git push -u origin main
```

`node_modules/`, `.next/` and `tsconfig.tsbuildinfo` are already listed in
`.gitignore` and will not be committed.

---

## Project structure

```
public/
  documents/        <- resume.pdf goes here
  images/
    analytics/      <- platform screenshots
    projects/       <- project thumbnails
    portrait.jpg

src/
  app/              <- page, layout, fonts, colours, SEO, sitemap, robots
  components/       <- the page sections
    icons/          <- inline SVG icons
    ui/             <- modal, lightbox, count-up, reveal, copy button
  data/             <- ALL editable content
  hooks/
```

---

## Accessibility and performance notes

- Semantic landmarks, one `h1`, ordered heading hierarchy.
- Keyboard operable throughout: skip link, visible focus rings, focus-trapped
  dialogs that restore focus on close.
- `prefers-reduced-motion` is honoured globally — reveals and count-ups are
  disabled and scrolling becomes instant.
- Reveal animations only activate when JavaScript is available, so no content
  is ever hidden from a no-JS visitor.
- Metric figures render at their final value on the server; the count-up
  animation only replays over an already-correct number.
- No heavy animation libraries. Icons come from `lucide-react` plus one small
  inline SVG.
