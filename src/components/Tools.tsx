import { toolGroups } from "@/data/tools";
import Reveal from "@/components/ui/Reveal";

/**
 * Tools, grouped by what they are for rather than shown as a logo wall.
 * Set on a deep navy band to break up the page rhythm.
 */
export default function Tools() {
  return (
    <section id="tools" aria-labelledby="tools-heading" className="bg-ink-900 py-20 text-white sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,19rem)_minmax(0,1fr)] lg:gap-20">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-brand-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
              Tools and workflow
            </span>
          </div>

          <h2
            id="tools-heading"
            className="mt-4 text-3xl font-semibold leading-[1.12] tracking-[-0.022em] text-white sm:text-4xl"
          >
            What I use, and{" "}
            <em className="font-display font-normal italic text-brand-300">what for</em>.
          </h2>

          <p className="mt-5 text-[0.9375rem] leading-relaxed text-mist-400">
            Listed honestly. Where I have used a tool at a basic level, it says so — an
            inflated tool list helps nobody once the work starts.
          </p>
        </Reveal>

        <div className="min-w-0">
          {toolGroups.map((group, index) => (
            <Reveal
              key={group.id}
              delay={index * 50}
              className="border-t border-white/10 py-8 first:border-t-0 first:pt-0"
            >
              <h3 className="text-[1.0625rem] font-semibold tracking-[-0.01em] text-white">
                {group.title}
              </h3>
              <p className="mt-1.5 text-[0.875rem] leading-relaxed text-mist-400">{group.blurb}</p>

              <dl className="mt-5 grid gap-x-10 sm:grid-cols-2">
                {group.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-baseline justify-between gap-5 border-b border-white/[0.07] py-2.5"
                  >
                    <dt className="shrink-0 text-[0.875rem] font-medium text-brand-200">
                      {tool.name}
                    </dt>
                    <dd className="text-right text-[0.8125rem] leading-snug text-mist-400">
                      {tool.note}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
