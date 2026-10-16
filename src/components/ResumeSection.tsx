import { FileText } from "lucide-react";

import { site } from "@/data/site";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

/** Decorative line widths for the document illustration. */
const upperLines = ["88%", "72%", "81%", "64%", "79%", "70%"];
const lowerLines = ["74%", "58%", "68%"];

/**
 * Résumé section.
 *
 * `site.resumeUrl` is `null` until a real PDF is added, so the "View Résumé"
 * button is simply not rendered — no disabled control, no placeholder text and
 * no link that could 404. See `public/documents/README.md`.
 */
export default function ResumeSection() {
  const resumeUrl = site.resumeUrl;

  return (
    <section
      id="resume"
      aria-labelledby="resume-heading"
      className="bg-white py-20 sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,20rem)] lg:gap-20">
        <Reveal>
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="accent-rule h-px w-8" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              Résumé
            </span>
          </div>

          <h2
            id="resume-heading"
            className="mt-4 max-w-xl text-3xl font-semibold leading-[1.12] tracking-[-0.022em] text-ink-900 sm:text-4xl"
          >
            Further details on my{" "}
            <em className="font-display font-normal italic text-brand-700">experience</em>.
          </h2>

          <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-mist-600">
            Review my résumé for an overview of my professional experience, skills, and
            educational background.
          </p>

          {resumeUrl ? (
            <div className="mt-8">
              <Button
                href={resumeUrl}
                icon={<FileText className="h-4 w-4" aria-hidden="true" />}
              >
                View Résumé
              </Button>
            </div>
          ) : null}
        </Reveal>

        {/* -------------------------------------------- Stylised document card */}
        <Reveal delay={80} className="relative mx-auto w-full max-w-[19rem]">
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-brand-100"
          />

          <div
            aria-hidden="true"
            className="relative rounded-2xl border border-mist-200 bg-white p-6 shadow-xl shadow-ink-900/[0.06]"
          >
            <span className="absolute -right-2.5 -top-2.5 rounded-full bg-brand-600 px-2.5 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-white">
              PDF
            </span>

            <div className="h-2.5 w-24 rounded-full bg-ink-900" />
            <div className="mt-2.5 h-2 w-32 rounded-full bg-mist-300" />

            <div className="mt-7 space-y-2.5">
              {upperLines.map((width) => (
                <div key={width} className="h-1.5 rounded-full bg-mist-200" style={{ width }} />
              ))}
            </div>

            <div className="mt-7 space-y-2.5 border-t border-mist-100 pt-6">
              {lowerLines.map((width) => (
                <div key={width} className="h-1.5 rounded-full bg-mist-200" style={{ width }} />
              ))}
            </div>

            <div className="mt-7 flex items-center gap-2 text-brand-600">
              <FileText className="h-3.5 w-3.5" />
              <span className="h-1.5 w-20 rounded-full bg-brand-200" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
