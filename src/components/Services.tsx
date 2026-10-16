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
 * Service catalogue — a numbered editorial list rather than a grid of
 * identical cards, and free of pricing, packages or promised outcomes.
 */
export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title={
              <span id="services-heading">
                Practical support for your{" "}
                <em className="font-display font-normal italic text-brand-700">
                  day-to-day operations
                </em>
                .
              </span>
            }
            description="I provide support across content, research, outreach, and administrative tasks, helping businesses keep information organized, maintain consistent communication, and move projects forward."
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
                    <span aria-hidden="true" className="font-display text-3xl leading-none text-brand-500">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-5 text-[1.4rem] font-semibold leading-snug tracking-[-0.02em] text-ink-900">
                    {service.title}
                  </h3>
                </div>

                <div>
                  <p className="max-w-2xl text-[1.0625rem] leading-relaxed text-mist-600">
                    {service.description}
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-mist-200 bg-white px-3.5 py-1.5 text-[0.8125rem] font-medium text-ink-800 transition-colors duration-200 hover:border-brand-300 hover:text-brand-800"
                      >
                        {item}
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
