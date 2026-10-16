import { ArrowUpRight } from "lucide-react";

import { site } from "@/data/site";

/**
 * Footer — the approved link set (Home · Services · Work · About · Contact ·
 * LinkedIn) and the copyright line with a dynamic year.
 */

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-mist-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <p className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="h-2.5 w-2.5 rounded-full bg-brand-600"
              />
              <span className="text-[0.95rem] font-semibold tracking-[-0.01em] text-ink-900">
                {site.name}
              </span>
            </p>

            <p className="mt-4 text-[0.875rem] leading-relaxed text-mist-600">{site.role}</p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-mist-500">
              Site
            </h2>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2.5">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[0.875rem] text-ink-800 transition-colors duration-200 hover:text-brand-700"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[0.875rem] text-ink-800 transition-colors duration-200 hover:text-brand-700"
                >
                  LinkedIn
                  <ArrowUpRight className="h-3.5 w-3.5 text-mist-400" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <p className="mt-12 border-t border-mist-100 pt-6 text-[0.75rem] text-mist-500">
          © {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
