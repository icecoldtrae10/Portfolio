import { caseStudies } from "@/data/case-studies";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import TemplateNotice from "@/components/ui/TemplateNotice";

/** A labelled block of prose inside a case study. */
function Block({
  label,
  children,
  tone = "plain",
}: {
  label: string;
  children: React.ReactNode;
  tone?: "plain" | "brand" | "quiet";
}) {
  const tones = {
    plain: "border-mist-200 bg-white",
    brand: "border-brand-200 bg-brand-50",
    quiet: "border-mist-200 bg-mist-50",
  } as const;

  return (
    <div className={`rounded-xl border px-5 py-5 sm:px-6 ${tones[tone]}`}>
      <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-mist-500">
        {label}
      </h4>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function BulletedList({ items, ordered = false }: { items: string[]; ordered?: boolean }) {
  const List = ordered ? "ol" : "ul";
  return (
    <List className="space-y-2.5">
      {items.map((item, index) => (
        <li key={item} className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink-800">
          {ordered ? (
            <span className="mt-px shrink-0 text-[0.75rem] font-semibold tabular-nums text-brand-600">
              {String(index + 1).padStart(2, "0")}
            </span>
          ) : (
            <span
              aria-hidden="true"
              className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-brand-400"
            />
          )}
          <span>{item}</span>
        </li>
      ))}
    </List>
  );
}

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      className="border-y border-mist-200 bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="In detail"
            title={
              <span id="case-studies-heading">
                Four case studies, written the same way so they are{" "}
                <em className="font-display font-normal italic text-brand-700">easy to compare</em>.
              </span>
            }
            description="Overview, objective, responsibilities, process, tools, results and lessons. Where an outcome could not be evidenced, the results block is left out rather than filled in."
          />
        </Reveal>

        <div className="mt-8">
          <TemplateNotice>
            These are editable sample structures that describe the shape of the work, not
            verified client engagements. Rewrite each one in{" "}
            <code className="rounded bg-white px-1 py-0.5 text-[0.75rem]">src/data/case-studies.ts</code> and
            delete any result you cannot evidence.
          </TemplateNotice>
        </div>

        <div className="mt-6">
          {caseStudies.map((study) => (
            <article
              key={study.id}
              className="grid gap-10 border-t border-mist-200 py-12 first:border-t-0 sm:py-14 lg:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] lg:gap-16"
            >
              {/* ---------------------------------------------------- Left rail */}
              <div className="lg:sticky lg:top-28 lg:self-start">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="font-display text-4xl leading-none text-brand-300"
                  >
                    {study.index}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-mist-500">
                    {study.category}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-semibold leading-snug tracking-[-0.015em] text-ink-900">
                  {study.title}
                </h3>

                {study.role ? (
                  <p className="mt-3 text-sm text-mist-600">{study.role}</p>
                ) : null}
                {study.period ? (
                  <p className="text-sm text-mist-500">{study.period}</p>
                ) : null}

                {study.tools && study.tools.length > 0 ? (
                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {study.tools.map((tool) => (
                      <li
                        key={tool}
                        className="rounded border border-mist-200 px-2 py-0.5 text-[0.6875rem] font-medium text-mist-600"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>

              {/* ------------------------------------------------ Right content */}
              <Reveal className="min-w-0 space-y-5">
                <Block label="Overview">
                  <p className="text-[0.9375rem] leading-relaxed text-ink-800">{study.overview}</p>
                </Block>

                <Block label="Objective or challenge">
                  <p className="text-[0.9375rem] leading-relaxed text-ink-800">{study.objective}</p>
                </Block>

                <Block label="My responsibilities">
                  <BulletedList items={study.responsibilities} />
                </Block>

                <Block label="Process and execution">
                  <BulletedList items={study.process} ordered />
                </Block>

                {study.images && study.images.length > 0 ? (
                  <div className="grid gap-4 sm:grid-cols-2">
                    {study.images.map((image) => (
                      <figure key={image.src} className="rounded-xl border border-mist-200 bg-mist-50 p-2">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={image.src}
                          alt={image.alt}
                          loading="lazy"
                          className="h-44 w-full rounded-lg object-cover"
                        />
                        {image.caption ? (
                          <figcaption className="px-1.5 pb-1 pt-2.5 text-xs text-mist-600">
                            {image.caption}
                          </figcaption>
                        ) : null}
                      </figure>
                    ))}
                  </div>
                ) : null}

                {study.results && study.results.length > 0 ? (
                  <Block label="Results and supporting evidence" tone="brand">
                    <BulletedList items={study.results} />
                  </Block>
                ) : (
                  <div className="rounded-xl border border-dashed border-mist-300 px-5 py-4 text-[0.8125rem] text-mist-500">
                    No results block — nothing supplied here could be evidenced, so no claim is
                    made.
                  </div>
                )}

                <Block label="Lessons learned and improvements" tone="quiet">
                  <BulletedList items={study.lessons} />
                </Block>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
