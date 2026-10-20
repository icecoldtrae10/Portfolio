import { ArrowUpRight } from "lucide-react";

import { navItems } from "@/data/navigation";
import { site } from "@/data/site";

/**
 * Footer — the navigation link set plus LinkedIn, and the copyright line with
 * a dynamic year.
 *
 * The six internal links come straight from `navItems`; LinkedIn is appended
 * here because it is external. The contact details themselves live in the
 * Contact section, so they are not repeated here.
 */

const footerLinks = navItems;

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-abyss">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full bg-accent"
            />
            <span className="text-[0.95rem] font-semibold tracking-[-0.01em] text-heading">
              {site.name}
            </span>
          </p>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2.5">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[0.875rem] text-body transition-colors duration-200 hover:text-accent"
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
                  className="inline-flex items-center gap-1 text-[0.875rem] text-body transition-colors duration-200 hover:text-accent"
                >
                  LinkedIn
                  <ArrowUpRight
                    className="h-3.5 w-3.5 text-muted"
                    aria-hidden="true"
                  />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <p className="mt-10 border-t border-white/10 pt-6 text-[0.75rem] text-muted">
          © {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
