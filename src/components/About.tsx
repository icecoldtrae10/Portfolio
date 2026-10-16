import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { aboutIntro, timeline } from "@/data/about";
import { site } from "@/data/site";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-20">
          {/* ------------------------------------------------------ Portrait */}
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-brand-100"
              />

              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-mist-200 bg-mist-50">
                {site.portrait ? (
                  <Image
                    src={site.portrait}
                    alt={site.portraitAlt}
                    fill
                    sizes="(min-width: 1024px) 300px, 92vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-6 text-center">
                    <span className="flex h-24 w-24 items-center justify-center rounded-full border border-mist-300 bg-white font-display text-4xl text-brand-700">
                      {site.initials}
                    </span>
                    <p className="max-w-[24ch] text-[0.8125rem] leading-relaxed text-mist-500">
                      No photo supplied — drop one at{" "}
                      <span className="font-medium text-mist-600">public/images/portrait.jpg</span>{" "}
                      and set <span className="font-medium text-mist-600">portrait</span> in the
                      site config.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <a
              href="#resume"
              className="mt-6 inline-flex items-center gap-1.5 text-[0.875rem] font-medium text-brand-700 underline-offset-4 transition-colors hover:text-brand-800 hover:underline"
            >
              View my résumé
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </Reveal>

          {/* ---------------------------------------------------------- Copy */}
          <div className="min-w-0">
            <Reveal>
              <SectionHeading
                eyebrow="About me"
                title={
                  <span id="about-heading">
                    A recruiter&apos;s eye for detail, with a{" "}
                    <em className="font-display font-normal italic text-brand-700">builder&apos;s</em>{" "}
                    habit of documenting it.
                  </span>
                }
              />
            </Reveal>

            <Reveal delay={60}>
              <div className="mt-7 space-y-5">
                {aboutIntro.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)} className="text-[1.0625rem] leading-relaxed text-mist-600">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>

            {/* ----------------------------------------------------- Timeline */}
            <Reveal delay={120}>
              <h3 className="mt-12 text-xs font-semibold uppercase tracking-[0.18em] text-mist-500">
                Experience so far
              </h3>

              <ol className="mt-6 border-l border-mist-200">
                {timeline.map((item) => (
                  <li key={item.title} className="relative pb-8 pl-6 last:pb-0">
                    <span
                      aria-hidden="true"
                      className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-brand-400"
                    />
                    <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-brand-700">
                      {item.period}
                    </p>
                    <h4 className="mt-1.5 text-[1.0625rem] font-semibold tracking-[-0.01em] text-ink-900">
                      {item.title}
                    </h4>
                    <p className="mt-1.5 max-w-2xl text-[0.9375rem] leading-relaxed text-mist-600">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
