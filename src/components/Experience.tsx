import { MapPin } from "lucide-react";

import { experience } from "@/data/experience";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

/**
 * Professional experience — the two employers listed publicly, with the
 * responsibilities for each. No other organisation is named here.
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
                Experience in social media, research, and{" "}
                <em className="font-display font-normal italic text-brand-700">
                  recruitment support
                </em>
                .
              </span>
            }
            description="My professional experience combines social media execution with research, communication, and administrative coordination. These responsibilities have developed my ability to work with detailed information, prepare audience-focused content, and support ongoing business activities."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {experience.map((item, index) => (
            <Reveal key={item.id} delay={index * 60}>
              <article className="surface-card flex h-full flex-col p-6 transition-colors duration-200 hover:border-brand-300 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                  <div className="min-w-0">
                    <h3 className="text-[1.25rem] font-semibold tracking-[-0.02em] text-ink-900">
                      {item.company}
                    </h3>
                    <p className="mt-1.5 text-[0.9375rem] text-mist-600">{item.role}</p>
                  </div>

                  <span className="shrink-0 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-[0.75rem] font-medium tabular-nums text-brand-800">
                    {item.dates}
                  </span>
                </div>

                <p className="mt-4 inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-mist-500">
                  <MapPin className="h-3.5 w-3.5 text-brand-500" aria-hidden="true" />
                  {item.employment}
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
