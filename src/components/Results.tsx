import { ArrowRight } from "lucide-react";

import { metrics } from "@/data/metrics";
import CountUp from "@/components/ui/CountUp";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import TemplateNotice from "@/components/ui/TemplateNotice";

/**
 * Compact results band.
 *
 * Figures only appear once they are entered in `src/data/metrics.ts` with a
 * `value` you can evidence. Until then each slot renders an obvious empty
 * state — this section is never allowed to display an invented number.
 */
export default function Results() {
  return (
    <section id="results" aria-labelledby="results-heading" className="border-y border-mist-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Selected results"
              title={
                <span id="results-heading">
                  Numbers I can put a{" "}
                  <em className="font-display font-normal italic text-brand-700">screenshot</em>{" "}
                  next to.
                </span>
              }
              className="lg:max-w-xl"
            />
            <p className="max-w-sm text-[0.9375rem] leading-relaxed text-mist-600 lg:pb-1.5">
              Every figure below describes work I supported directly, and each one links back
              to the project or evidence gallery behind it.
            </p>
          </div>
        </Reveal>

        <div className="mt-9">
          <TemplateNotice>
            No verified figures have been supplied yet, so every slot is intentionally empty.
            Add a number you can back up in <code className="rounded bg-white px-1 py-0.5 text-[0.75rem]">src/data/metrics.ts</code> and
            it will appear here with a count-up animation.
          </TemplateNotice>
        </div>

        <Reveal delay={80}>
          <div className="mt-10 overflow-hidden rounded-xl border border-mist-200">
            <div className="grid gap-px bg-mist-200 sm:grid-cols-2 lg:grid-cols-4">
              {metrics.map((metric) => {
                const hasValue = metric.value !== null;

                return (
                  <div key={metric.id} className="flex flex-col bg-white p-6 sm:p-7">
                    <div
                      className="flex items-baseline text-[2.5rem] font-semibold leading-none tracking-[-0.03em] text-ink-900 tabular-nums"
                      aria-label={
                        hasValue
                          ? `${metric.prefix ?? ""}${metric.value}${metric.suffix ?? ""} ${metric.label}`
                          : `${metric.label}: figure not yet supplied`
                      }
                    >
                      {hasValue ? (
                        <>
                          {metric.prefix}
                          <CountUp value={metric.value as number} decimals={metric.decimals ?? 0} />
                          {metric.suffix}
                        </>
                      ) : (
                        <span aria-hidden="true" className="text-mist-300">
                          —
                        </span>
                      )}
                    </div>

                    <h3 className="mt-4 text-sm font-semibold text-ink-800">{metric.label}</h3>

                    {metric.period ? (
                      <p className="mt-1 text-xs text-mist-500">{metric.period}</p>
                    ) : null}

                    <p className="mt-3 text-[0.8125rem] leading-relaxed text-mist-600">
                      {metric.context}
                    </p>

                    <div className="mt-auto pt-5">
                      {metric.linkHref && metric.linkLabel ? (
                        <a
                          href={metric.linkHref}
                          className="inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-brand-700 underline-offset-4 transition-colors hover:text-brand-800 hover:underline"
                        >
                          {metric.linkLabel}
                          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                      ) : null}

                      {!hasValue ? (
                        <p className="text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-mist-400">
                          Awaiting verified figure
                        </p>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
