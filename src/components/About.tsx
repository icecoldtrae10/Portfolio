import { aboutIntro } from "@/data/about";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

/**
 * About Me — the two approved paragraphs, text only, by design.
 *
 * There is no profile photo on this site, so there is no image column, no
 * monogram placeholder and nothing to upload.
 */
export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-y border-white/10 bg-deep py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-20">
          <Reveal className="min-w-0">
            <SectionHeading title={<span id="about-heading">About Me</span>} />
          </Reveal>

          <Reveal delay={60} className="min-w-0">
            <div className="space-y-6 border-l-2 border-accent/50 pl-6 sm:pl-8">
              {aboutIntro.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="max-w-3xl text-[1.0625rem] leading-relaxed text-body"
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
