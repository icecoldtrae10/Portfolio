import type { ReactNode } from "react";

type Variant = "primary" | "secondary";

interface ButtonProps {
  /** Destination. Internal hashes (#contact) and full URLs both work. */
  href: string;
  children: ReactNode;
  /** Primary = filled blue, Secondary = outlined. Visually distinct by design. */
  variant?: Variant;
  /** Adds target="_blank" + rel for external links. */
  external?: boolean;
  /** Trailing icon, already aria-hidden. */
  icon?: ReactNode;
  className?: string;
}

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium focus-visible:outline-2";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white shadow-[0_1px_2px_rgba(21,37,57,0.16)] hover:bg-brand-700",
  secondary:
    "border border-mist-300 bg-white text-ink-900 hover:border-ink-900 hover:bg-white",
};

/**
 * The one button style used across the page, so primary and secondary actions
 * always look like a pair rather than three slightly different attempts.
 */
export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
  icon,
  className = "",
}: ButtonProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${BASE} ${VARIANTS[variant]} ${className}`}
    >
      {children}
      {icon}
    </a>
  );
}
