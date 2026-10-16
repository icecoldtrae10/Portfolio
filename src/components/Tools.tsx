import Image from "next/image";
import { Boxes } from "lucide-react";

import { toolGroups } from "@/data/tools";
import type { Tool } from "@/data/types";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

/**
 * Tools and technology.
 *
 * Business tools are shown as prominent cards, technical tools as a quieter
 * chip row — the two approved groups, in that order.
 *
 * Every logo lives in `public/images/logos/` and is referenced by filename in
 * `src/data/tools.ts`. A tool with no `logo` falls back to a neutral glyph,
 * never a broken image.
 */

function Logo({ tool, className }: { tool: Tool; className: string }) {
  if (!tool.logo) {
    return (
      <span className={`${className} flex items-center justify-center text-mist-500`}>
        <Boxes className="h-full w-full" aria-hidden="true" />
      </span>
    );
  }

  return (
    <Image
      src={`/images/logos/${tool.logo}`}
      alt={`${tool.name} logo`}
      width={44}
      height={44}
      className={`${className} object-contain`}
    />
  );
}

export default function Tools() {
  const [business, technical] = toolGroups;

  return (
    <section
      id="tools"
      aria-labelledby="tools-heading"
      className="border-y border-mist-200 bg-mist-50 py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,19rem)_minmax(0,1fr)] lg:gap-20">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Tools and Technology"
            title={
              <span id="tools-heading">
                Tools for content, research, and{" "}
                <em className="font-display font-normal italic text-brand-700">organization</em>.
              </span>
            }
            description="I use a range of digital tools to support content production, business research, communication, and administrative tasks. My Electronics Engineering studies also provide exposure to technical software and structured problem-solving."
          />
        </Reveal>

        <div className="min-w-0">
          {/* ------------------------------------------ Business & productivity */}
          {business ? (
            <Reveal>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
                {business.title}
              </h3>

              <ul className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {business.tools.map((tool) => (
                  <li
                    key={tool.name}
                    className="surface-card flex items-center gap-3.5 p-4 transition-colors duration-200 hover:border-brand-300"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand-100 bg-brand-50">
                      <Logo tool={tool} className="h-6 w-6" />
                    </span>
                    <span className="min-w-0 text-[0.875rem] font-medium leading-snug text-ink-900">
                      {tool.name}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ) : null}

          {/* ------------------------------------------------ Technical tools */}
          {technical ? (
            <Reveal delay={60} className="mt-12 border-t border-mist-200 pt-10">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-mist-500">
                {technical.title}
              </h3>

              <ul className="mt-5 flex flex-wrap gap-2">
                {technical.tools.map((tool) => (
                  <li
                    key={tool.name}
                    className="inline-flex items-center gap-2 rounded-full border border-mist-200 bg-white px-3.5 py-2 text-[0.8125rem] font-medium text-mist-700 transition-colors duration-200 hover:border-brand-300 hover:text-ink-900"
                  >
                    <Logo tool={tool} className="h-[1.125rem] w-[1.125rem]" />
                    {tool.name}
                  </li>
                ))}
              </ul>
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
