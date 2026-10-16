# Adrian Cadiao — Virtual Assistant Portfolio

A single-page portfolio site covering social media management, online research,
manual outreach, lead generation and administrative support.

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
| `src/data/site.ts` | **Start here.** Name, wordmark, role line, live URL, email, LinkedIn, résumé path |
| `src/data/navigation.ts` | Menu labels, links and the "Let's Talk" button |
| `src/data/services.ts` | The four services and their tags |
| `src/data/results.ts` | The three "Selected results" statements |
| `src/data/case-studies.ts` | The three case studies |
| `src/data/projects.ts` | The work gallery (ships empty — see below) |
| `src/data/experience.ts` | The two employers |
| `src/data/about.ts` | The four About paragraphs |
| `src/data/tools.ts` | The two tool groups and their logo files |
| `src/app/layout.tsx` | Page title, meta description, Open Graph tags |

Types for all of the above are in `src/data/types.ts`.

Section order is set in `src/app/page.tsx`.

---

## Adding a portfolio image

1. Drop the picture in `public/images/projects/`.
2. Open `src/data/projects.ts` and add an entry:

   ```ts
   {
     id: "recruitment-campaign-creative",
     title: "Recruitment Campaign Creative",
     category: "Recruitment Campaigns",
     image: "/images/projects/recruitment-campaign-creative.webp",
     imageAlt: "A short, accurate description of the picture.",
     summary: "One sentence on what the piece is and who it was for.",
     tools: ["Canva", "Meta Business Suite"],
   },
   ```

3. Save. The card, the filter buttons and the detail modal all appear — and if
   `projects` stays empty, the Work section simply shows its heading and
   introduction with no grid at all.

**Only add work you are allowed to publish**, and never invent a project to fill
space.

## Adding a tool logo

1. Save the logo in `public/images/logos/` (SVG preferred).
2. Add `{ name: "Tool name", logo: "tool-name.svg" }` to the right group in
   `src/data/tools.ts`.

Leave `logo` out and a neutral icon is shown instead — never a broken image.

## Adding your résumé

Save the PDF at `public/documents/resume.pdf`, then set
`resumeUrl: "/documents/resume.pdf"` in `src/data/site.ts`.

Until then the **View Résumé button is not rendered at all** — there is no
disabled control and no link that could 404.

---

## Content rules built into this project

- **No fabricated numbers.** The site displays no metrics of any kind; the
  "Selected results" section describes an approach instead of a figure.
- **No client names, testimonials, dates or project results** appear anywhere.
- **No contact form.** "Email Me" opens the visitor's own mail application with
  the address already filled in, so nothing is silently discarded and no
  backend is required.
- **No profile photo.** The About section is text only by design.
- **No availability, working-hours or time-zone claims.**

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
  documents/        <- resume.pdf goes here
  images/
    logos/          <- official tool logos (SVG/PNG)
    projects/       <- portfolio images

src/
  app/              <- page, layout, fonts, colours, SEO, sitemap, robots
  components/       <- the page sections
    icons/          <- inline SVG icons
    ui/             <- button, modal, reveal, section heading
  data/             <- ALL editable content
  hooks/
```

---

## Accessibility and performance notes

- Semantic landmarks, one `h1`, ordered heading hierarchy.
- Keyboard operable throughout: skip link, visible focus rings, focus-trapped
  dialogs that restore focus on close.
- Text colours are checked against white to at least 4.5:1 (WCAG AA).
- `prefers-reduced-motion` is honoured globally — reveals are disabled and
  scrolling becomes instant.
- Reveal animations only activate when JavaScript is available, so no content
  is ever hidden from a no-JS visitor.
- No animation libraries. Icons come from `lucide-react` plus one small inline
  SVG; tool logos are static files, so there is no runtime third-party request.
