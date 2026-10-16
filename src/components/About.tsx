import { aboutIntro } from "@/data/about";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

/**
 * About — text only, by design. There is no profile photo on this site, so
 * there is no image column, no monogram placeholder and nothing to upload.
 */
export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-y border-mist-200 bg-mist-50 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-20">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="A Little About Me"
              title={
                <span id="about-heading">
                  A practical mindset, with{" "}
                  <em className="font-display font-normal italic text-brand-700">
                    room to keep learning
                  </em>
                  .
                </span>
              }
            />
          </Reveal>

          <Reveal delay={60} className="min-w-0">
            <div className="space-y-6 border-l-2 border-brand-200 pl-6 sm:pl-8">
              {aboutIntro.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="max-w-3xl text-[1.0625rem] leading-relaxed text-mist-600"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
