import type { ReactNode } from "react";

interface SectionHeadingProps {
  /** The section heading, rendered as the `<h2>`. */
  title: ReactNode;
  /**
   * Optional approved badge pill, rendered between the rule and the heading.
   * Only pass it where badge copy has been signed off (currently only the
   * Work Highlights & Stats section).
   */
  badge?: string;
  /** Optional lede. Omit it entirely when no description has been approved. */
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

/**
 * Shared section header: a short cyan rule above a white `<h2>`.
 *
 * A badge pill is rendered only where approved badge copy exists — this site
 * invents no eyebrow labels, because that would put words on the page that
 * were never signed off. Emphasis comes from weight and the accent colour.
 */
export default function SectionHeading({
  title,
  badge,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={`${centered ? "mx-auto max-w-2xl text-center" : "max-w-3xl"} ${className}`}
    >
      <span
        aria-hidden="true"
        className={`accent-rule block h-px w-12 ${centered ? "mx-auto" : ""}`}
      />

      {badge ? (
        <span className="mt-4 inline-flex max-w-full flex-wrap items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[0.6875rem] font-bold leading-snug tracking-[0.12em] text-accent">
          {badge}
        </span>
      ) : null}

      <h2 className="mt-5 text-3xl font-semibold leading-[1.12] tracking-[-0.022em] text-heading sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>

      {description ? (
        <p className="mt-5 text-[1.0625rem] leading-relaxed text-body">
          {description}
        </p>
      ) : null}
    </div>
  );
}
