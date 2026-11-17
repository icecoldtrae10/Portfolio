import { toolGroups } from "@/data/tools";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ToolLogo from "@/components/ui/ToolLogo";

/**
 * Tools & software — four groups of labelled chips.
 *
 * Every logo lives in `public/images/logos/` and is referenced by filename in
 * `src/data/tools.ts`, rendered by `ToolLogo` as a direct static `<img>`.
 * A tool with no `logo` entry — or one whose file fails to load — falls back
 * to a neutral glyph, never an empty box.
 *
 * No proficiency levels or badges are shown — only names and official marks.
 */

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
                      <ToolLogo
                      name={tool.name}
                      file={tool.logo}
                      className="h-5 w-5"
                    />
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
