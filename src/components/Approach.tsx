import { approachSteps } from "@/data/approach";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

/**
 * How I work — "MY APPROACH".
 *
 * Four numbered steps. The step numbers are part of the approved copy, so they
 * are stored with the steps in `src/data/approach.ts` rather than generated.
 */
export default function Approach() {
  return (
    <section
      id="approach"
      aria-labelledby="approach-heading"
      className="bg-brand-50/60 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="My Approach"
            title={
              <span id="approach-heading">
                Clear steps. Careful execution.{" "}
                <em className="font-display font-normal italic text-brand-700">
                  Work you can review
                </em>
                .
              </span>
            }
          />
        </Reveal>

        <Reveal delay={60}>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-brand-200 bg-brand-200 sm:grid-cols-2 lg:grid-cols-4">
            {approachSteps.map((step) => (
              <li
                key={step.id}
                className="group flex flex-col bg-white p-6 transition-colors duration-200 hover:bg-brand-50/60 sm:p-7"
              >
                <span
                  aria-hidden="true"
                  className="font-display text-4xl leading-none text-brand-500"
                >
                  {step.number}
                </span>

                <h3 className="mt-5 text-[1.0625rem] font-semibold tracking-[-0.015em] text-ink-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-[0.9375rem] leading-relaxed text-mist-600">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
