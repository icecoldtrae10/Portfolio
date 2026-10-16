import { ArrowUpRight, Mail } from "lucide-react";

import LinkedInIcon from "@/components/icons/LinkedInIcon";
import { site } from "@/data/site";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

/**
 * Contact — two working links and nothing else.
 *
 * There is no form on this site: "Email Me" opens the visitor's own mail
 * application with the address already filled in, so nothing is faked and no
 * backend is needed. `site.email` and `site.linkedin` come from
 * `src/data/site.ts`.
 */
export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-brand-50/60 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:gap-16">
          <Reveal className="min-w-0">
            <SectionHeading
              eyebrow="Contact"
              title={
                <span id="contact-heading">
                  Let&apos;s discuss how I can{" "}
                  <em className="font-display font-normal italic text-brand-700">
                    support your work
                  </em>
                  .
                </span>
              }
              description="For inquiries about social media management, research, outreach, or administrative support, you can reach me by email or connect with me on LinkedIn."
            />

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Button
                href={`mailto:${site.email}`}
                icon={<Mail className="h-4 w-4" aria-hidden="true" />}
              >
                Email Me
              </Button>
              <Button
                href={site.linkedin}
                variant="secondary"
                external
                icon={<LinkedInIcon className="h-4 w-4" />}
              >
                Connect on LinkedIn
              </Button>
            </div>
          </Reveal>

          {/* ------------------------------------------------- Direct details */}
          <Reveal delay={80}>
            <div className="surface-card h-full p-6 sm:p-7">
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-mist-500">
                Direct
              </h3>

              <ul className="mt-5 space-y-5">
                <li>
                  <span className="flex items-center gap-2.5 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-brand-700">
                    <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                    Email
                  </span>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-1.5 block break-all text-[0.9375rem] font-medium text-ink-900 underline-offset-4 transition-colors duration-200 hover:text-brand-700 hover:underline"
                  >
                    {site.email}
                  </a>
                </li>

                <li className="border-t border-mist-200 pt-5">
                  <span className="flex items-center gap-2.5 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-brand-700">
                    <LinkedInIcon className="h-3.5 w-3.5" />
                    LinkedIn
                  </span>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 inline-flex items-center gap-1.5 break-all text-[0.9375rem] font-medium text-ink-900 underline-offset-4 transition-colors duration-200 hover:text-brand-700 hover:underline"
                  >
                    {site.name}
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-mist-400" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
