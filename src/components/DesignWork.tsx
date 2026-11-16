"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2 } from "lucide-react";

import { designHeader, designWork } from "@/data/design-work";
import Lightbox from "@/components/ui/Lightbox";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

/**
 * Design portfolio — a gallery of social media graphics.
 *
 * The artwork is laid out with CSS columns (a light masonry) so every piece
 * keeps its natural aspect ratio; the set mixes 4:5, square and 3:2 images
 * and cropping a design sample would hide the part being showcased. Each
 * tile opens the shared full-screen preview, because a poster's fine print
 * is unreadable at gallery width.
 *
 * Motion and emphasis follow the site rules: hover scale is removed under
 * `prefers-reduced-motion`, and the only emphasis is weight plus the accent
 * colour. All copy lives in `src/data/design-work.ts`.
 */
export default function DesignWork() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="design"
      aria-labelledby="design-heading"
      className="border-t border-white/10 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            badge={designHeader.badge}
            title={<span id="design-heading">{designHeader.headline}</span>}
          />
        </Reveal>

        <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {designWork.map((item, index) => (
            <Reveal
              key={item.id}
              delay={index * 60}
              className="mb-6 break-inside-avoid"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(index)}
                aria-label={`View full-size graphic: ${item.title}`}
                className="group relative block w-full cursor-zoom-in overflow-hidden rounded-xl border border-white/10 bg-slate-900/50 text-left transition-colors hover:border-accent/40 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent"
              >
                <Image
                  src={item.image.src}
                  width={item.image.width}
                  height={item.image.height}
                  alt={item.image.alt}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transform-none"
                />

                {/* Zoom affordance — an icon, never wording, so no copy is invented. */}
                <span
                  aria-hidden="true"
                  className="absolute right-3 top-3 rounded-lg border border-white/10 bg-slate-950/70 p-2 text-accent opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                >
                  <Maximize2 className="h-4 w-4" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Lightbox
        items={designWork.map((item) => ({
          ...item.image,
          title: item.title,
        }))}
        index={openIndex}
        onIndexChange={setOpenIndex}
        onClose={() => setOpenIndex(null)}
      />
    </section>
  );
}
