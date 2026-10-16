# Adrian Cadiao — Virtual Assistant Portfolio

A single-page portfolio site covering social media management, online research,
cold email outreach and administrative support.

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
| `src/data/site.ts` | **Start here.** Name, wordmark, role line, live URL, email, LinkedIn |
| `src/data/navigation.ts` | Menu labels, links and the "Contact Me" button |
| `src/data/services.ts` | The four services, their subtitles and their bullet lists |
| `src/data/work-samples.ts` | The three "Work samples" and any visuals |
| `src/data/experience.ts` | The two employers |
| `src/data/approach.ts` | The four "How I work" steps |
| `src/data/about.ts` | The four About paragraphs |
| `src/data/tools.ts` | The two tool groups and their logo files |
| `src/app/layout.tsx` | Page title, meta description, Open Graph / Twitter tags |

Types for all of the above are in `src/data/types.ts`.

Section order is set in `src/app/page.tsx`:

```
Hero → Services → Selected Work → Experience → How I Work → Tools → About → Contact
```

The navigation shows a subset of those ids (Home · Services · Work · Experience ·
About · Contact); "How I Work" and "Tools" are on the page but not in the menu.

---

## Adding a visual to a work sample

1. Drop the picture in `public/images/projects/`.
2. Open `src/data/work-samples.ts` and add an `images` array to that sample:

   ```ts
   images: [
     {
       src: "/images/projects/recruitment-poster.webp",
       alt: "A short, accurate description of the picture.",
     },
   ],
   ```

3. Save. The framed image grid appears under that sample — and until you do, the
   sample simply renders as text with no empty frame and no broken picture.

**Only add work you are allowed to publish**, and label recreated examples as
demonstrations rather than completed client projects.

## Adding a tool logo

1. Save the logo in `public/images/logos/` (SVG preferred).
2. Add `{ name: "Tool name", logo: "tool-name.svg" }` to the right group in
   `src/data/tools.ts`.

Leave `logo` out and a neutral icon is shown instead — never a broken image.
Logos are referenced by filename and served as static files, so there is no
runtime third-party request.

`public/images/logos/` also still holds the older technical marks (python,
matlab, simulink, autocad, multisim, ltspice, arduino, tinkercad, java, c,
cplusplus, labview, github, vercel). They are **unused on purpose** — the
approved Tools section lists two groups only — so no downloading is needed if a
"Technical and Engineering" group is ever added back.

---

## Content rules built into this project

- **No fabricated numbers.** The site shows no metrics, percentages, client
  counts, response rates or analytics of any kind.
- **No client names, testimonials or project results** appear anywhere.
- **No contact form.** "Email Me" opens the visitor's own mail application with
  the address already filled in, so nothing is silently discarded and no
  backend is required.
- **No profile photo.** The About section is text only by design.
- **No availability, working-hours or time-zone claims.**
- **No résumé section.** The approved copy has none, so no PDF is expected and
  no link can 404.
- Section headings, service copy, work samples, experience entries and the
  About paragraphs are all kept exactly as approved — edit them in `src/data/`
  rather than in the components.

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
git init
git add .
git commit -m "Initial commit: virtual assistant portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/va-portfolio.git
git push -u origin main
```

`node_modules/`, `.next/` and `tsconfig.tsbuildinfo` are already in
`.gitignore`.

---

## Project structure

```
public/
  images/
    logos/          <- official tool logos (SVG/PNG)
    projects/       <- work sample visuals

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

- Semantic landmarks, one `h1`, ordered heading hierarchy.
- Keyboard operable throughout: skip link and visible focus rings everywhere.
- Text colours are checked against white to at least 4.5:1 (WCAG AA).
- `prefers-reduced-motion` is honoured globally — reveals are disabled and
  scrolling becomes instant.
- Reveal animations only activate when JavaScript is available, so no content
  is ever hidden from a no-JS visitor.
- No animation libraries. Icons come from `lucide-react` plus one small inline
  SVG; tool logos are static files.
