import type { ReactNode } from "react";

interface SectionHeadingProps {
  /** The section heading, rendered as the `<h2>`. */
  title: ReactNode;
  /** Optional lede. Omit it entirely when no description has been approved. */
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

/**
 * Shared section header: a short cyan rule above a white `<h2>`.
 *
 * There is deliberately no eyebrow label — this site has no approved eyebrow
 * copy, and inventing one would put words on the page that were never signed
 * off. Emphasis comes from weight and the accent colour only.
 */
export default function SectionHeading({
  title,
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
