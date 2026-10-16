import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Results from "@/components/Results";
import CaseStudies from "@/components/CaseStudies";
import Portfolio from "@/components/Portfolio";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Tools from "@/components/Tools";
import ResumeSection from "@/components/ResumeSection";
import Contact from "@/components/Contact";

/**
 * The single page, top to bottom.
 *
 * Section order matches the navigation order in `src/data/navigation.ts`
 * (Home → Services → Case Studies → Work → Experience → About → Contact);
 * Results, Tools and Résumé sit between them and are not listed in the menu.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Results />
      <CaseStudies />
      <Portfolio />
      <Experience />
      <About />
      <Tools />
      <ResumeSection />
      <Contact />
    </>
  );
}
