import Image from "next/image";
import { Boxes } from "lucide-react";

import { toolGroups } from "@/data/tools";
import type { Tool } from "@/data/types";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

/**
 * Tools I use — two groups of labelled cards.
 *
 * Every logo lives in `public/images/logos/` and is referenced by filename in
 * `src/data/tools.ts`. A tool with no `logo` entry falls back to a neutral
 * glyph, never a broken image.
 *
 * No proficiency levels or badges are shown — only names and official marks.
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
  return (
    <section
      id="tools"
      aria-labelledby="tools-heading"
      className="bg-white py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,19rem)_minmax(0,1fr)] lg:gap-20">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Tools I Use"
            title={
              <span id="tools-heading">
                Familiar with the tools behind{" "}
                <em className="font-display font-normal italic text-brand-700">
                  everyday work
                </em>
                .
              </span>
            }
            description="I use these tools for content creation, social media tasks, research, communication, and organizing information."
          />
        </Reveal>

        <div className="min-w-0 space-y-10">
          {toolGroups.map((group, groupIndex) => (
            <Reveal key={group.id} delay={groupIndex * 50} className={groupIndex > 0 ? "border-t border-mist-200 pt-10" : ""}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
                {group.title}
              </h3>

              <ul className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {group.tools.map((tool) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
