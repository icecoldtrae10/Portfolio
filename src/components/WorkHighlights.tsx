"use client";

import { useState } from "react";
import Image from "next/image";
import {
  workHighlights,
  workHighlightsHeader,
  verifiedHighlightsLabel,
} from "@/data/work-highlights";
import Lightbox from "@/components/ui/Lightbox";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

/**
 * Work Highlights & Stats — three verified-metric cards in a grid.
 *
 * Each card leads with its dashboard screenshot (`public/images/stats/`),
 * which can be opened full size because the dashboards are far too dense to
 * read at card width. All copy comes verbatim from
 * `src/data/work-highlights.ts`; emphasis is bold weight plus the accent
 * colour only.
 */
export default function WorkHighlights() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="border-t border-white/10 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            badge={workHighlightsHeader.badge}
            title={<span id="work-heading">{workHighlightsHeader.headline}</span>}
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {workHighlights.map((item, index) => (
            <Reveal key={item.id} delay={index * 60} className="h-full min-w-0">
              <article className="flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-slate-900/50 transition-colors hover:border-accent/40">
                <button
                  type="button"
                  onClick={() => setOpenIndex(index)}
                  aria-label={`View full-size screenshot: ${item.title}`}
                  className="group relative block aspect-video w-full cursor-zoom-in border-b border-white/10 bg-slate-950/60 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent"
                >
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-contain p-2 transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transform-none"
                  />
                </button>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-[1.15rem] font-semibold leading-snug tracking-[-0.02em] text-heading">
                    {item.title}
                  </h3>

                  <p className="mt-3 self-start rounded-lg border border-accent/25 bg-accent/10 px-3 py-1.5 text-[0.8125rem] font-bold leading-snug text-accent">
                    {item.metric}
                  </p>

                  <p className="mt-4 text-[0.9375rem] leading-relaxed text-body">
                    {item.description}
                  </p>

                  <p className="mt-5 text-[0.8125rem] font-bold tracking-wide text-heading">
                    {verifiedHighlightsLabel}
                  </p>

                  <ul className="mt-3 space-y-2">
                    {item.highlights.map((point) => (
                      <li
                        key={point.label}
                        className="flex gap-2.5 text-[0.875rem] leading-relaxed"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        />
                        <span className="min-w-0">
                          {point.label}:{" "}
                          <span className="font-bold text-accent">
                            {point.value}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <Lightbox
        items={workHighlights.map((highlight) => ({
          ...highlight.image,
          title: highlight.title,
        }))}
        index={openIndex}
        onIndexChange={setOpenIndex}
        onClose={() => setOpenIndex(null)}
      />
    </section>
  );
}
