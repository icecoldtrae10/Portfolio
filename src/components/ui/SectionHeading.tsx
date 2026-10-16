import type { ReactNode } from "react";

interface SectionHeadingProps {
  /** Small uppercase label above the title. */
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  /** Tightens the top margin when the heading follows a toolbar. */
  className?: string;
}

/**
 * Shared section header: a short rule, an uppercase eyebrow, a title that can
 * mix the sans face with a serif accent, and an optional lede.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={`${centered ? "mx-auto max-w-2xl text-center" : "max-w-3xl"} ${className}`}>
      <div
        className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}
      >
        <span aria-hidden="true" className="h-px w-8 bg-brand-400" />
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
          {eyebrow}
        </span>
      </div>

      <h2 className="mt-4 text-3xl font-semibold leading-[1.12] tracking-[-0.022em] text-ink-900 sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>

      {description ? (
        <p className="mt-5 text-[1.0625rem] leading-relaxed text-mist-600">
          {description}
        </p>
      ) : null}
    </div>
  );
}
