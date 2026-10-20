import type { ReactNode } from "react";

type Variant = "primary" | "secondary";

interface ButtonProps {
  /** Destination. Internal hashes (#contact) and full URLs both work. */
  href: string;
  children: ReactNode;
  /**
   * Primary = filled cyan with dark text (6.9:1 contrast), Secondary =
   * outlined on the dark background. Visually distinct by design.
   */
  variant?: Variant;
  /** Adds target="_blank" + rel for external links. */
  external?: boolean;
  /** Trailing icon, already aria-hidden. */
  icon?: ReactNode;
  className?: string;
}

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-accent font-semibold text-abyss shadow-[0_1px_2px_rgba(0,0,0,0.35)] transition-colors hover:bg-accent-hi",
  secondary:
    "border border-white/20 font-medium text-heading transition-colors hover:border-accent hover:text-accent",
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
