import { experience } from "@/data/experience";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

/**
 * Work experience — four employers, each with its location, role, dates and
 * approved bullet points. Location and dates come from the "Company | …" and
 * "Title | …" lines in the brief, split so they can be styled separately.
 */
export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-t border-white/10 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            title={<span id="experience-heading">Work Experience</span>}
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {experience.map((item, index) => (
            <Reveal key={item.id} delay={index * 50} className="min-w-0 h-full">
              <article className="surface-card flex h-full flex-col p-6 sm:p-7">
                <div className="min-w-0">
                  <h3 className="text-[1.2rem] font-semibold tracking-[-0.02em] text-heading">
                    {item.company}
                  </h3>
                  <p className="mt-1.5 text-[0.875rem] text-muted">
                    {item.location}
                  </p>
                </div>

                <p className="mt-5 text-[0.9375rem] font-medium leading-snug text-body">
                  {item.role}
                </p>

                <p className="mt-3 w-fit rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-[0.75rem] font-semibold text-accent">
                  {item.dates}
                </p>

                <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
                  {item.points.map((line) => (
                    <li
                      key={line}
                      className="flex gap-3 text-[0.9375rem] leading-relaxed text-body"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-accent"
                      />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
