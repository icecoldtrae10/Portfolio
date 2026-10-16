import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  Palette,
  Search,
} from "lucide-react";

import { site } from "@/data/site";
import Reveal from "@/components/ui/Reveal";

const capabilities = [
  "Social media management",
  "Recruitment support",
  "Lead generation",
  "Content creation",
  "Administrative support",
  "Basic web development",
];

const board = [
  {
    icon: CalendarDays,
    title: "Content calendar",
    detail: "Planned and scheduled",
    tag: "Meta",
  },
  {
    icon: Palette,
    title: "Recruitment ads",
    detail: "Designed and published",
    tag: "Canva",
  },
  {
    icon: Search,
    title: "Prospect research",
    detail: "Verified by hand",
    tag: "Sheets",
  },
  {
    icon: BarChart3,
    title: "Performance review",
    detail: "Measured and reported",
    tag: "Insights",
  },
];

const loop = ["Plan", "Design", "Publish", "Report"];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Pale blue field behind the hero, kept flat rather than gradient-heavy. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] bg-gradient-to-b from-brand-50/80 via-brand-50/30 to-white"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-14 sm:px-8 sm:pb-28 sm:pt-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:pb-32 lg:pt-24">
        {/* ---------------------------------------------------------- Copy */}
        <div>
          {site.availability.enabled ? (
            <Reveal>
              <p className="inline-flex items-center gap-2.5 rounded-full border border-brand-200 bg-white/80 py-1.5 pl-3 pr-4 text-xs font-medium text-brand-800">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-600" />
                </span>
                {site.availability.label}
                {site.availability.detail ? (
                  <span className="text-mist-500">· {site.availability.detail}</span>
                ) : null}
              </p>
            </Reveal>
          ) : null}

          <Reveal delay={60}>
            <h1 className="mt-6 text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink-900 sm:text-[2.9rem] lg:text-[3.35rem]">
              Your{" "}
              <em className="font-display font-normal italic text-brand-700">
                behind-the-scenes
              </em>{" "}
              partner for social media, recruitment, and digital operations.
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-mist-600 sm:text-lg">
              I help businesses stay organised and look consistent online — planning and
              publishing content, designing the graphics, supporting recruitment campaigns,
              and researching the contacts that keep outreach moving. The day-to-day digital
              work gets handled properly, without you having to chase it.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand-700"
              >
                Explore My Work
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-mist-300 bg-white px-6 py-3.5 text-sm font-medium text-ink-900 transition-colors hover:border-ink-900 hover:bg-mist-50"
              >
                Let&apos;s Work Together
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <ul className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-mist-200 pt-6 text-[0.8125rem] text-mist-500">
              {capabilities.map((item, index) => (
                <li key={item} className="flex items-center gap-3">
                  {index > 0 ? <span aria-hidden="true" className="text-mist-300">/</span> : null}
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* ------------------------------------------------------- Visual */}
        <Reveal delay={160} className="relative">
          {/* Offset block behind the board, for a printed-layer feel. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-4 translate-y-4 rounded-[1.75rem] bg-brand-100 sm:translate-x-5 sm:translate-y-5"
          />

          <div className="relative rounded-[1.75rem] border border-mist-200 bg-white p-5 shadow-xl shadow-ink-900/[0.06] sm:p-6">
            <div className="flex items-center justify-between border-b border-mist-100 pb-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-mist-500">
                What I keep moving
              </p>
              <span className="rounded-full bg-brand-50 px-2.5 py-1 text-[0.6875rem] font-medium text-brand-800">
                Ongoing support
              </span>
            </div>

            <ul className="mt-2 divide-y divide-mist-100">
              {board.map((item) => (
                <li key={item.title} className="flex items-center gap-4 py-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                    <item.icon className="h-[1.15rem] w-[1.15rem]" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-semibold text-ink-900">
                      {item.title}
                    </span>
                    <span className="block truncate text-[0.8125rem] text-mist-500">
                      {item.detail}
                    </span>
                  </span>
                  <span className="shrink-0 rounded-md border border-mist-200 px-2 py-1 text-[0.6875rem] font-medium text-mist-600">
                    {item.tag}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex items-center gap-2 rounded-lg bg-mist-50 px-4 py-3 text-[0.8125rem] text-mist-600">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
              Everything above arrives with the next step already prepared.
            </div>
          </div>

          {/* Floating workflow pill */}
          <div className="relative -mt-4 ml-4 inline-flex items-center gap-3 rounded-full border border-mist-200 bg-white px-4 py-2.5 shadow-lg shadow-ink-900/[0.07] sm:ml-8">
            <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-mist-400">
              How I work
            </span>
            <ol className="flex items-center gap-2">
              {loop.map((step, index) => (
                <li key={step} className="flex items-center gap-2">
                  {index > 0 ? (
                    <span aria-hidden="true" className="text-mist-300">
                      →
                    </span>
                  ) : null}
                  <span className="text-[0.8125rem] font-medium text-ink-800">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
