import { Download, FileText } from "lucide-react";

import { site } from "@/data/site";
import Reveal from "@/components/ui/Reveal";

const bodyLines = ["88%", "72%", "81%", "64%", "79%", "70%"];
const lowerLines = ["74%", "58%", "68%"];

/**
 * Résumé download section.
 *
 * `site.resumeUrl` is `null` until a real PDF is added, so this renders an
 * honest "not uploaded yet" state rather than a link that 404s. See
 * `public/documents/README.md`.
 */
export default function ResumeSection() {
  const hasResume = Boolean(site.resumeUrl);

  return (
    <section
      id="resume"
      aria-labelledby="resume-heading"
      className="border-y border-mist-200 bg-mist-50 py-20 sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,20rem)] lg:gap-20">
        <Reveal>
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-brand-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              Résumé
            </span>
          </div>

          <h2
            id="resume-heading"
            className="mt-4 max-w-xl text-3xl font-semibold leading-[1.12] tracking-[-0.022em] text-ink-900 sm:text-4xl"
          >
            The one-page version, if you&apos;d rather{" "}
            <em className="font-display font-normal italic text-brand-700">skim</em>.
          </h2>

          <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-mist-600">
            A concise summary of the roles I have supported, the tools I work in, and the kind
            of tasks I can pick up from day one.
          </p>

          <div className="mt-8">
            {hasResume ? (
              <a
                href={site.resumeUrl as string}
                download
                className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand-700"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download résumé (PDF)
              </a>
            ) : (
              <div className="max-w-xl">
                <span
                  aria-disabled="true"
                  className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-mist-300 bg-white px-6 py-3.5 text-sm font-medium text-mist-500"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download résumé (PDF)
                </span>

                <p className="mt-4 flex items-start gap-2.5 rounded-lg border border-dashed border-mist-300 bg-white px-4 py-3 text-[0.8125rem] leading-relaxed text-mist-600">
                  <FileText className="mt-0.5 h-4 w-4 shrink-0 text-mist-400" aria-hidden="true" />
                  <span>
                    No PDF has been supplied yet, so the download is intentionally switched off.
                    Save your file as{" "}
                    <span className="font-medium text-ink-800">public/documents/resume.pdf</span>,
                    then set <span className="font-medium text-ink-800">resumeUrl</span> in{" "}
                    <span className="font-medium text-ink-800">src/data/site.ts</span> to{" "}
                    <span className="font-medium text-ink-800">&quot;/documents/resume.pdf&quot;</span>.
                  </span>
                </p>
              </div>
            )}
          </div>
        </Reveal>

        {/* ------------------------------------------------ Stylised document */}
        <Reveal delay={80} className="relative mx-auto w-full max-w-[19rem]">
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-3 translate-y-3 rounded-xl bg-brand-100"
          />

          <div className="relative rounded-xl border border-mist-200 bg-white p-6 shadow-xl shadow-ink-900/[0.06]">
            <span className="absolute -right-2.5 -top-2.5 rounded-full bg-brand-600 px-2.5 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-white">
              PDF
            </span>

            <div aria-hidden="true" className="h-2.5 w-24 rounded-full bg-ink-900" />
            <div aria-hidden="true" className="mt-2.5 h-2 w-32 rounded-full bg-mist-300" />

            <div aria-hidden="true" className="mt-7 space-y-2.5">
              {bodyLines.map((width) => (
                <div
                  key={width}
                  className="h-1.5 rounded-full bg-mist-200"
                  style={{ width }}
                />
              ))}
            </div>

            <div aria-hidden="true" className="mt-7 space-y-2.5 border-t border-mist-100 pt-6">
              {lowerLines.map((width) => (
                <div
                  key={width}
                  className="h-1.5 rounded-full bg-mist-200"
                  style={{ width }}
                />
              ))}
            </div>

            <p className="mt-7 text-center text-[0.6875rem] text-mist-400">
              Your name · your email
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
