import { ArrowUpRight } from "lucide-react";

import { navItems } from "@/data/navigation";
import { site } from "@/data/site";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  const contactLinks = [
    { label: "Email", href: `mailto:${site.email}`, external: false },
    { label: "LinkedIn", href: site.linkedin, external: true },
    ...(site.github ? [{ label: "GitHub", href: site.github, external: true }] : []),
  ];

  return (
    <footer className="border-t border-mist-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <a href="#home" className="inline-flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-ink-900 text-[0.7rem] font-semibold uppercase tracking-wider text-white">
                {site.initials}
              </span>
              <span className="text-[0.95rem] font-semibold tracking-[-0.01em] text-ink-900">
                {site.wordmark}
              </span>
            </a>
            <p className="mt-4 text-[0.875rem] leading-relaxed text-mist-600">{site.tagline}</p>
          </div>

          <div className="flex gap-14 sm:gap-16">
            <nav aria-label="Footer">
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-mist-500">
                Site
              </h2>
              <ul className="mt-4 space-y-2.5">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-[0.875rem] text-ink-800 transition-colors hover:text-brand-700"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-mist-500">
                Elsewhere
              </h2>
              <ul className="mt-4 space-y-2.5">
                {contactLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="inline-flex items-center gap-1 text-[0.875rem] text-ink-800 transition-colors hover:text-brand-700"
                    >
                      {link.label}
                      {link.external ? (
                        <ArrowUpRight className="h-3.5 w-3.5 text-mist-400" aria-hidden="true" />
                      ) : null}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-mist-100 pt-6 text-[0.75rem] text-mist-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>Built with Next.js · Deployed on Vercel</p>
        </div>
      </div>
    </footer>
  );
}
