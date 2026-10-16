import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SelectedWork from "@/components/SelectedWork";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
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
 *   Hero → Services → Selected Work → Experience → How I Work → Tools →
 *   About → Contact
 *
 * (There is no results/analytics band and no résumé section: neither has
 * approved copy, so neither is rendered.)
 *
 * The `<main>` wrapper and the skip link live in `layout.tsx` — do not add a
 * second one here.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <SelectedWork />
      <Experience />
      <Approach />
      <Tools />
      <About />
      <Contact />
    </>
  );
}
