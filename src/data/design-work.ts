import type { DesignWorkItem } from "./types";

/**
 * Design portfolio — section header.
 *
 * `badge` and `headline` only describe what the section shows; they make no
 * claim about clients, results or dates. Replace them here if different
 * wording is approved — no component change is needed.
 */
export const designHeader = {
  badge: "DESIGN PORTFOLIO",
  headline: "Social Media Graphics",
};

/**
 * The gallery pieces, in the order they appear.
 *
 * Every string here is descriptive: `alt` says what the graphic shows (for
 * screen readers and search engines), and `title` is the short label in the
 * full-screen preview's header. The artwork itself carries all of the
 * visible wording, so nothing is duplicated as page copy.
 *
 * Files live in `public/images/design/`. Each graphic is rendered at its
 * natural aspect ratio — the set mixes 4:5, square and 3:2 artwork — so
 * nothing is ever cropped. Swap a file in, keep `width`/`height` honest and
 * the layout will not shift.
 */
export const designWork: DesignWorkItem[] = [
  {
    id: "hiring-pediatric-nurse-germany",
    image: {
      src: "/images/design/hiring-pediatric-nurse-germany.jpg",
      width: 1880,
      height: 1576,
      alt: "Recruitment poster reading \"We Are Hiring — Bound for Germany\" for a Pediatric Nurse role, with a photo of a nurse in scrubs and a list of qualifications.",
    },
    title: "Hiring Poster — Pediatric Nurse (Germany)",
  },
  {
    id: "destination-germany",
    image: {
      src: "/images/design/destination-germany.jpg",
      width: 3375,
      height: 4219,
      alt: "Social media graphic reading \"Our Next Boarding Call Is for: Germany\" over a cyan world map, with an email and website contact line.",
    },
    title: "Destination Graphic — Germany",
  },
  {
    id: "hiring-tailor-croatia",
    image: {
      src: "/images/design/hiring-tailor-croatia.jpg",
      width: 2820,
      height: 2364,
      alt: "Recruitment poster reading \"We Are Hiring — Bound for Croatia\" for a Tailor / Sewer role, with a photo of a woman using a sewing machine and a list of qualifications.",
    },
    title: "Hiring Poster — Tailor / Sewer (Croatia)",
  },
  {
    id: "fun-fact-halloween",
    image: {
      src: "/images/design/fun-fact-halloween.jpg",
      width: 2160,
      height: 2160,
      alt: "Educational post labelled \"Irish Fun Fact\" and titled \"The Ancient Festival Behind Halloween\", showing a carved pumpkin on a mossy tree stump in a forest.",
    },
    title: "Fun Fact Post — Halloween",
  },
  {
    id: "quote-sunrise",
    image: {
      src: "/images/design/quote-sunrise.jpg",
      width: 5091,
      height: 3396,
      alt: "Quote graphic showing a worker in a high-visibility jacket facing a sunrise, with the words \"Some people chase sunsets. Others spend their lives becoming the sunrise for those they love.\"",
    },
    title: "Quote Post — Sunrise",
  },
  {
    id: "announcement-united-kingdom",
    image: {
      src: "/images/design/announcement-united-kingdom.jpg",
      width: 2160,
      height: 2160,
      alt: "Announcement graphic over a Union Jack flag reading \"We're proud to share that the United Kingdom is now part of our growing list of global destinations.\"",
    },
    title: "Announcement Post — United Kingdom",
  },
];
