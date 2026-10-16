import { Briefcase } from "lucide-react";

import { experience } from "@/data/experience";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

/**
 * Professional experience — the two employers listed publicly, with the
 * responsibilities for each. `employment` and `dates` are joined into the
 * single "Part-time · Remote · May 2023 to Present" line.
 */
export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Professional Experience"
            title={
              <span id="experience-heading">
                Experience built around content, research, and{" "}
                <em className="font-display font-normal italic text-brand-700">
                  coordination
                </em>
                .
              </span>
            }
            description="My work combines social media execution with business research, professional communication, and recruitment support. These roles have given me practical experience handling different tasks, working with detailed information, and supporting ongoing campaigns remotely."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {experience.map((item, index) => (
            <Reveal key={item.id} delay={index * 60}>
              <article className="surface-card flex h-full flex-col p-6 transition-colors duration-200 hover:border-brand-300 sm:p-8">
                <div className="min-w-0">
                  <h3 className="text-[1.25rem] font-semibold tracking-[-0.02em] text-ink-900">
                    {item.company}
                  </h3>
                  <p className="mt-1.5 text-[0.9375rem] text-mist-600">{item.role}</p>
                </div>

                <p className="mt-4 inline-flex flex-wrap items-center gap-2 text-[0.8125rem] font-medium text-mist-500">
                  <Briefcase className="h-3.5 w-3.5 shrink-0 text-brand-500" aria-hidden="true" />
                  <span>
                    {item.employment} <span aria-hidden="true">·</span> {item.dates}
                  </span>
                </p>

                <ul className="mt-6 space-y-3 border-t border-mist-200 pt-6">
                  {item.responsibilities.map((line) => (
                    <li key={line} className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink-800">
                      <span
                        aria-hidden="true"
                        className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-brand-400"
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
