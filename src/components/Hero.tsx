import { ArrowRight } from "lucide-react";

import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

/**
 * Hero — the approved introduction copy, and nothing else.
 *
 * The eyebrow is stored as a single string with "·" separators so it can be
 * edited without touching this file's layout.
 */

const EYEBROW = "VIRTUAL ASSISTANT · SOCIAL MEDIA · RESEARCH · ADMIN SUPPORT";

/** Renders a separator-delimited string with the separators tinted. */
function Separated({ value, separator }: { value: string; separator: string }) {
  const parts = value.split(separator);
  return (
    <>
      {parts.map((part, index) => (
        <span key={part} className="inline-flex items-center gap-3">
          {index > 0 ? (
            <span aria-hidden="true" className="text-brand-400">
              {separator}
            </span>
          ) : null}
          <span>{part.trim()}</span>
        </span>
      ))}
    </>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Soft pale-blue → lavender wash. Flat and quiet rather than decorative. */}
      <div aria-hidden="true" className="accent-gradient absolute inset-0" />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white"
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-28 sm:px-8 sm:pb-24 sm:pt-32 lg:pb-28 lg:pt-40">
        <Reveal>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-brand-700 sm:text-xs">
            <Separated value={EYEBROW} separator="·" />
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-7 max-w-4xl text-[2.25rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink-900 sm:text-5xl lg:text-[3.5rem]">
            Creative support, thorough research, and{" "}
            <em className="font-display font-normal italic text-brand-700">
              dependable day-to-day assistance
            </em>
            .
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-7 max-w-2xl text-[1.0625rem] leading-relaxed text-mist-600 sm:text-lg">
            I&apos;m Adrian, a Virtual Assistant with hands-on experience in social
            media management, business research, personalized cold email outreach,
            and recruitment support. From preparing social media content to
            organizing research and handling routine administrative tasks, I can
            support the work that keeps your projects moving.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Button href="#work" icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}>
              View My Work
            </Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
