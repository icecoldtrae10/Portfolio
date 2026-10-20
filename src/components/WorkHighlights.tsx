import { workHighlights } from "@/data/work-highlights";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

/**
 * Work highlights & stats — three cards, each leading with an empty media
 * slot reserved for the approved image/video samples.
 *
 * The slots are real, empty containers: they are `aria-hidden` and carry no
 * placeholder wording, because no placeholder wording has been approved. Drop
 * a file into `public/images/projects/` and it can be wired up in
 * `src/data/work-highlights.ts` when an `images` field is added there.
 */
export default function WorkHighlights() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="border-t border-white/10 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            title={<span id="work-heading">{"Work Highlights & Stats"}</span>}
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {workHighlights.map((item, index) => (
            <Reveal key={item.id} delay={index * 60} className="min-w-0 h-full">
              <article className="surface-card flex h-full flex-col overflow-hidden hover:border-accent/40">
                {/* Empty slot for an uploaded image or video sample. */}
                <div
                  aria-hidden="true"
                  className="aspect-video w-full border-b border-dashed border-white/15 bg-white/[0.02]"
                />

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-[1.15rem] font-semibold leading-snug tracking-[-0.02em] text-heading">
                    {item.title}
                  </h3>

                  <p className="mt-4 rounded-lg border border-accent/25 bg-accent/10 px-3 py-2 text-[0.8125rem] font-semibold leading-snug text-accent">
                    {item.metric}
                  </p>

                  <p className="mt-4 text-[0.9375rem] leading-relaxed text-body">
                    {item.description}
                  </p>

                  <p className="mt-auto border-l-2 border-accent/60 pl-4 pt-4 text-[0.875rem] leading-relaxed text-muted">
                    {item.keyItems}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
