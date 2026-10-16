import { ClipboardList, Megaphone, Search, Send, type LucideIcon } from "lucide-react";

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
 * Service catalogue — a two-column editorial list rather than a grid of
 * identical cards, and free of pricing, packages or promised outcomes.
 *
 * Each entry carries its subtitle, paragraph and "Services include" bullets
 * exactly as they appear in `src/data/services.ts`.
 */
export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="What I can help with"
            title={
              <span id="services-heading">
                Practical support across content, research, and{" "}
                <em className="font-display font-normal italic text-brand-700">
                  everyday tasks
                </em>
                .
              </span>
            }
            description="Whether you need help maintaining your social media presence, finding relevant business contacts, managing outreach, or keeping administrative work organized, I can assist with the tasks behind your day-to-day operations."
          />
        </Reveal>

        <div className="mt-14 border-t border-mist-200">
          {services.map((service, index) => {
            const Icon = ICONS[service.icon] ?? Megaphone;

            return (
              <Reveal
                key={service.id}
                delay={index * 40}
                className="group grid gap-6 border-b border-mist-200 py-10 transition-colors duration-200 hover:bg-brand-50/40 lg:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] lg:gap-16 lg:py-12"
              >
                <div className="lg:pl-2">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand-200 bg-brand-50 text-brand-700 transition-colors duration-200 group-hover:border-brand-300 group-hover:bg-brand-100">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>

                  <h3 className="mt-5 text-[1.4rem] font-semibold leading-snug tracking-[-0.02em] text-ink-900">
                    {service.title}
                  </h3>

                  <p className="mt-2 font-display text-[1.125rem] italic leading-snug text-brand-700">
                    {service.subtitle}
                  </p>
                </div>

                <div className="min-w-0">
                  <p className="max-w-2xl text-[1.0625rem] leading-relaxed text-mist-600">
                    {service.description}
                  </p>

                  <h4 className="mt-7 text-[0.8125rem] font-semibold text-mist-500">
                    Services include:
                  </h4>

                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {service.services.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2.5 text-[0.9375rem] leading-relaxed text-ink-800"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.65rem] h-1 w-1 shrink-0 rounded-full bg-brand-400"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
