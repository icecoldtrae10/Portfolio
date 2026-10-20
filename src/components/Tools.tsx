import Image from "next/image";
import { Boxes } from "lucide-react";

import { toolGroups } from "@/data/tools";
import type { Tool } from "@/data/types";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

/**
 * Tools & software — four groups of labelled chips.
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
      <span className={`${className} flex items-center justify-center text-muted`}>
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
      className="border-t border-white/10 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            title={<span id="tools-heading">{"Tools & Software"}</span>}
          />
        </Reveal>

        <div className="mt-12 space-y-10">
          {toolGroups.map((group, groupIndex) => (
            <Reveal key={group.id} delay={groupIndex * 50}>
              <h3 className="text-[0.9375rem] font-semibold tracking-[-0.01em] text-accent">
                {group.title}
              </h3>

              <ul className="mt-5 flex flex-wrap gap-3">
                {group.tools.map((tool) => (
                  <li
                    key={tool.name}
                    className="surface-card flex items-center gap-3 px-4 py-3"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
                      <Logo tool={tool} className="h-5 w-5" />
                    </span>
                    <span className="text-[0.875rem] font-medium leading-snug text-heading">
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
