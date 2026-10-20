import { ArrowUpRight, Mail } from "lucide-react";

import LinkedInIcon from "@/components/icons/LinkedInIcon";
import { site } from "@/data/site";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

/**
 * Contact — the two approved links and nothing else.
 *
 * There is no form on this site: the email link opens the visitor's own mail
 * application with the address already filled in, so nothing is faked and no
 * backend is needed. Both values come from `src/data/site.ts`.
 *
 * The field labels ("Primary Email", "LinkedIn") and both link values are
 * reproduced exactly as supplied.
 */
export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading title={<span id="contact-heading">Contact</span>} />
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <Reveal delay={40} className="min-w-0 h-full">
            <div className="surface-card h-full p-6 sm:p-7">
              <p className="flex items-center gap-2.5 text-[0.8125rem] font-semibold tracking-[-0.01em] text-accent">
                <Mail className="h-4 w-4" aria-hidden="true" />
                Primary Email
              </p>

              <a
                href={`mailto:${site.email}`}
                className="mt-4 block break-all text-[1.0625rem] font-medium text-heading underline-offset-4 transition-colors hover:text-accent hover:underline"
              >
                {site.email}
              </a>
            </div>
          </Reveal>

          <Reveal delay={100} className="min-w-0 h-full">
            <div className="surface-card h-full p-6 sm:p-7">
              <p className="flex items-center gap-2.5 text-[0.8125rem] font-semibold tracking-[-0.01em] text-accent">
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn
              </p>

              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-start gap-1.5 break-all text-[1.0625rem] font-medium text-heading underline-offset-4 transition-colors hover:text-accent hover:underline"
              >
                {site.linkedin}
                <ArrowUpRight
                  className="mt-1 h-4 w-4 shrink-0 text-accent"
                  aria-hidden="true"
                />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
