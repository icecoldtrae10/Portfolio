import {
  ClipboardList,
  Megaphone,
  Search,
  Send,
  type LucideIcon,
} from "lucide-react";

import { services } from "@/data/services";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

/** Maps the `icon` key in `src/data/services.ts` to a Lucide line icon. */
const ICONS: Record<string, LucideIcon> = {
  megaphone: Megaphone,
  search: Search,
  send: Send,
  clipboard: ClipboardList,
};

/**
 * Services — four dark cards, each with its approved summary and bullet list.
 *
 * There is no section lede: the brief supplied a heading and four service
 * entries and nothing else, so nothing is invented to fill the gap.
 */
export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="border-t border-white/10 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading title={<span id="services-heading">Services</span>} />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = ICONS[service.icon] ?? Megaphone;

            return (
              <Reveal
                key={service.id}
                delay={index * 50}
                className="min-w-0 h-full"
              >
                <article className="surface-card flex h-full flex-col p-6 hover:border-accent/40 sm:p-7">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>

                  <h3 className="mt-5 text-[1.2rem] font-semibold leading-snug tracking-[-0.02em] text-heading">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-body">
                    {service.summary}
                  </p>

                  <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-5">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2.5 text-[0.9375rem] leading-relaxed text-body"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.62rem] h-1 w-1 shrink-0 rounded-full bg-accent"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
