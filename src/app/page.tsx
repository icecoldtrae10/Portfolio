import Hero from "@/components/Hero";
import Results from "@/components/Results";
import Portfolio from "@/components/Portfolio";
import CaseStudies from "@/components/CaseStudies";
import AnalyticsSection from "@/components/AnalyticsSection";
import Services from "@/components/Services";
import Tools from "@/components/Tools";
import About from "@/components/About";
import ResumeSection from "@/components/ResumeSection";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Results />
      <Portfolio />
      <CaseStudies />
      <AnalyticsSection />
      <Services />
      <Tools />
      <About />
      <ResumeSection />
      <Contact />
    </>
  );
}
