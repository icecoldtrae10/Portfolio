"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, BarChart3 } from "lucide-react";

import { analyticsEntries } from "@/data/analytics";
import Modal from "@/components/ui/Modal";
import PlaceholderTile from "@/components/ui/PlaceholderTile";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import TemplateNotice from "@/components/ui/TemplateNotice";

/**
 * Evidence gallery for platform screenshots.
 *
 * Add an image to `public/images/analytics/`, point `image` at it in
 * `src/data/analytics.ts`, and it appears here and in the lightbox. Entries
 * without an image render an obvious empty slot instead of a broken picture.
 */
export default function AnalyticsSection() {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;
  const current = index !== null ? analyticsEntries[index] : null;

  const step = useCallback((delta: number) => {
    setIndex((prev) => {
      if (prev === null) return prev;
      const total = analyticsEntries.length;
      return (prev + delta + total) % total;
    });
  }, []);

  // Arrow keys move between screenshots while the lightbox is open.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        step(1);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        step(-1);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, step]);

  return (
    <section
      id="analytics"
      aria-labelledby="analytics-heading"
      className="bg-mist-50 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Analytics and insights"
              title={
                <span id="analytics-heading">
                  The evidence behind the{" "}
                  <em className="font-display font-normal italic text-brand-700">numbers</em>.
                </span>
              }
              description="Raw screenshots from Meta Business Suite and other platforms, each with its reporting period stated. Select any of them to view it full size."
              className="lg:max-w-2xl"
            />

            <p className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-mist-200 bg-white px-4 py-2 text-[0.8125rem] font-medium text-mist-600 lg:mb-1">
              <BarChart3 className="h-4 w-4 text-brand-600" aria-hidden="true" />
              {analyticsEntries.length} reports
            </p>
          </div>
        </Reveal>

        <div className="mt-8">
          <TemplateNotice>
            No screenshots have been supplied yet, so every slot below is empty. Export an image
            from Meta Business Suite, save it in{" "}
            <code className="rounded bg-white px-1 py-0.5 text-[0.75rem]">public/images/analytics/</code>,
            then add it in{" "}
            <code className="rounded bg-white px-1 py-0.5 text-[0.75rem]">src/data/analytics.ts</code>.
            Redact client names and personal data before uploading.
          </TemplateNotice>
        </div>

        <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {analyticsEntries.map((entry, entryIndex) => (
            <figure key={entry.id} className="group relative">
              <button
                type="button"
                onClick={() => setIndex(entryIndex)}
                className="block w-full text-left after:absolute after:inset-0 after:content-['']"
                aria-label={`Open screenshot: ${entry.caption}`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-mist-200 bg-white transition-colors group-hover:border-brand-300 group-focus-within:border-brand-400">
                  {entry.image ? (
                    <Image
                      src={entry.image}
                      alt={entry.imageAlt ?? entry.caption}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
                      className="object-cover object-top transition-transform duration-[600ms] ease-out group-hover:scale-[1.03]"
                    />
                  ) : (
                    <PlaceholderTile
                      label="Screenshot slot"
                      hint="public/images/analytics/"
                      icon={BarChart3}
                    />
                  )}

                  {!entry.image ? (
                    <span className="absolute right-3 top-3 rounded-full bg-white/92 px-2.5 py-1 text-[0.6875rem] font-medium text-mist-500 backdrop-blur-sm">
                      Not added yet
                    </span>
                  ) : null}
                </div>
              </button>

              <figcaption className="mt-4">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-brand-700">
                    {entry.source}
                  </span>
                  {entry.period ? (
                    <span className="text-[0.75rem] text-mist-500">· {entry.period}</span>
                  ) : null}
                </div>

                <h3 className="mt-1.5 text-[0.9375rem] font-semibold text-ink-900 transition-colors group-hover:text-brand-700">
                  {entry.caption}
                </h3>

                {entry.note ? (
                  <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-mist-600">
                    {entry.note}
                  </p>
                ) : null}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* ------------------------------------------------------------ Lightbox */}
      <Modal
        open={open}
        onClose={() => setIndex(null)}
        label={current ? `Screenshot: ${current.caption}` : "Screenshot"}
        maxWidth="max-w-5xl"
      >
        {current ? (
          <div className="p-5 sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-3 pr-12">
              <div>
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-brand-700">
                  {current.source}
                </p>
                <h3 className="mt-1.5 text-lg font-semibold tracking-[-0.015em] text-ink-900 sm:text-xl">
                  {current.caption}
                </h3>
              </div>

              {current.period ? (
                <span className="rounded-full border border-mist-200 bg-mist-50 px-3 py-1 text-[0.75rem] font-medium text-mist-600">
                  {current.period}
                </span>
              ) : null}
            </div>

            <div className="relative mt-5 aspect-[4/3] w-full overflow-hidden rounded-xl border border-mist-200 bg-mist-50 sm:aspect-[16/10]">
              {current.image ? (
                <Image
                  src={current.image}
                  alt={current.imageAlt ?? current.caption}
                  fill
                  sizes="(min-width: 1024px) 76vw, 92vw"
                  className="object-contain object-top"
                  priority
                />
              ) : (
                <PlaceholderTile
                  label="Screenshot not added yet"
                  hint="Add the image path in src/data/analytics.ts to display it here."
                  icon={BarChart3}
                />
              )}
            </div>

            {current.note ? (
              <p className="mt-4 text-[0.875rem] leading-relaxed text-mist-600">{current.note}</p>
            ) : null}

            <div className="mt-6 flex items-center justify-between border-t border-mist-200 pt-5">
              <p className="text-[0.75rem] text-mist-500">
                Screenshot {index! + 1} of {analyticsEntries.length}
              </p>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous screenshot"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-mist-200 text-ink-800 transition-colors hover:border-ink-900 hover:bg-mist-50"
                >
                  <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next screenshot"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-mist-200 text-ink-800 transition-colors hover:border-ink-900 hover:bg-mist-50"
                >
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </Modal>
    </section>
  );
}
