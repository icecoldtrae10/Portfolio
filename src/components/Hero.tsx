import { ArrowRight } from "lucide-react";

import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

/**
 * Hero — the approved introduction copy, and nothing else.
 *
 * The tag badge is stored as a single string with "·" separators so it can be
 * edited without touching this file's layout.
 */

const TAG_BADGE =
  "VIRTUAL ASSISTANCE · SOCIAL MEDIA GROWTH · B2B OUTREACH · LEAD GENERATION";

/** Kept in a constant so the "&" is never re-typed or re-wrapped in JSX. */
const PRIMARY_CTA = "View Experience & Projects";

/** Renders a separator-delimited string with the separators tinted. */
function Separated({ value, separator }: { value: string; separator: string }) {
  const parts = value.split(separator);
  return (
    <>
      {parts.map((part, index) => (
        <span key={`${index}-${part}`} className="inline-flex items-center gap-3">
          {index > 0 ? (
            <span aria-hidden="true" className="text-accent-hi">
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
      {/* Restrained cyan bloom behind the headline. Decorative only. */}
      <div aria-hidden="true" className="hero-glow absolute inset-0" />

      <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-28 sm:px-8 sm:pb-28 sm:pt-32 lg:pb-36 lg:pt-44">
        <Reveal>
          <p className="inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-[0.6875rem] font-semibold tracking-[0.16em] text-accent sm:text-xs">
            <Separated value={TAG_BADGE} separator="·" />
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-8 max-w-4xl text-[2.25rem] font-semibold leading-[1.08] tracking-[-0.03em] text-heading sm:text-5xl lg:text-[3.5rem]">
            Driving <span className="text-accent">organic growth</span>,{" "}
            <span className="text-accent">B2B lead pipelines</span>, and
            dependable operational support.
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-7 max-w-2xl text-[1.0625rem] leading-relaxed text-body sm:text-lg">
            I’m Manuel Adrian Cadiao, a Virtual Assistant and Recruitment Operations Specialist based in Manila, Philippines. I specialize in scaling social media audiences, managing end-to-end B2B cold email outreach, and streamlining candidate processing for international agencies.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Button
              href="#work"
              icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
            >
              {PRIMARY_CTA}
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
