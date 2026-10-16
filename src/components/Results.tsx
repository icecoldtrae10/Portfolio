import { CheckCircle2, Search, Workflow } from "lucide-react";

import { resultAreas } from "@/data/results";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

/**
 * Selected results — three descriptions of how the work is approached.
 *
 * Deliberately free of figures: nothing on this page displays a number that
 * could not be evidenced with a screenshot. See `src/data/results.ts`.
 */

const ICONS = [Search, Workflow, CheckCircle2] as const;

export default function Results() {
  return (
    <section
      id="results"
      aria-labelledby="results-heading"
      className="border-y border-mist-200 bg-mist-50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Selected results"
            title={
              <span id="results-heading">
                A consistent approach to the{" "}
                <em className="font-display font-normal italic text-brand-700">work</em>.
              </span>
            }
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-mist-200 bg-mist-200 sm:grid-cols-2 lg:grid-cols-3">
            {resultAreas.map((area, index) => {
              const Icon = ICONS[index % ICONS.length];
              return (
                <div
                  key={area.id}
                  className="group flex flex-col bg-white p-6 transition-colors duration-200 hover:bg-brand-50/50 sm:p-7"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors duration-200 group-hover:bg-brand-100">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>

                  <h3 className="mt-5 text-[1.0625rem] font-semibold tracking-[-0.015em] text-ink-900">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-mist-600">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
