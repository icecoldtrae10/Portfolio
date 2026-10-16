import Image from "next/image";

import { workSamples } from "@/data/work-samples";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

/**
 * Selected work — "WORK SAMPLES".
 *
 * Three approved samples, each with its subtitle, description and
 * "What I contributed" line. Samples that have images in
 * `src/data/work-samples.ts` show a framed visual grid underneath; samples
 * without render as text only, so nothing is ever an empty box.
 */
export default function SelectedWork() {
  return (
    <section id="work" aria-labelledby="work-heading" className="border-y border-mist-200 bg-mist-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Work Samples"
            title={
              <span id="work-heading">
                A look at the work{" "}
                <em className="font-display font-normal italic text-brand-700">
                  behind the scenes
                </em>
                .
              </span>
            }
            description="These samples show how I approach content creation, research, and outreach. The focus is on the actual deliverables and tasks I've handled in professional settings."
          />
        </Reveal>

        <div className="mt-6">
          {workSamples.map((sample) => (
            <article
              key={sample.id}
              className="grid gap-6 border-t border-mist-300/70 py-10 first:border-t-0 first:pt-12 sm:py-12 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-16"
            >
              {/* ---------------------------------------------------- Left rail */}
              <div>
                <span
                  aria-hidden="true"
                  className="accent-rule block h-0.5 w-10 rounded-full"
                />
                <h3 className="mt-5 text-[1.35rem] font-semibold leading-snug tracking-[-0.02em] text-ink-900 sm:text-[1.5rem]">
                  {sample.title}
                </h3>
                <p className="mt-2 font-display text-[1.125rem] italic leading-snug text-brand-700">
                  {sample.subtitle}
                </p>
              </div>

              {/* -------------------------------------------------- Right content */}
              <Reveal className="min-w-0">
                <p className="max-w-2xl text-[1.0625rem] leading-relaxed text-mist-600">
                  {sample.description}
                </p>

                <div className="mt-6 rounded-2xl border border-brand-200 bg-brand-50 px-5 py-5 sm:px-6">
                  <h4 className="text-[0.8125rem] font-semibold text-brand-800">
                    What I contributed:
                  </h4>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-800">
                    {sample.contribution}
                  </p>
                </div>

                {sample.images && sample.images.length > 0 ? (
                  <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                    {sample.images.map((image) => (
                      <li
                        key={image.src}
                        className="surface-card relative aspect-[4/3] overflow-hidden p-0"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(min-width: 1024px) 34vw, (min-width: 640px) 46vw, 92vw"
                          className="object-cover"
                        />
                      </li>
                    ))}
                  </ul>
                ) : null}
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
