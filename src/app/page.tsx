import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WorkHighlights from "@/components/WorkHighlights";
import Experience from "@/components/Experience";
import Tools from "@/components/Tools";
import About from "@/components/About";
import Contact from "@/components/Contact";

/**
 * Page composition — the section order, top to bottom.
 *
 * Every section owns its own background and top-level `id`, so the list below
 * is the single place to reorder, add or remove one. The navigation in
 * `src/data/navigation.ts` is a subset of these ids.
 *
 *   Hero → Services → Work Highlights & Stats → Work Experience →
 *   Tools & Software → About Me → Contact
 *
 * "Tools & Software" sits between two sections that are not in the menu, so
 * the scroll-spy simply holds the last link it matched while passing through.
 *
 * The `<main>` wrapper and the skip link live in `layout.tsx` — do not add a
 * second one here.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WorkHighlights />
      <Experience />
      <Tools />
      <About />
      <Contact />
    </>
  );
}
