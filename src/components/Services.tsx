import { Briefcase, CalendarDays, Code, Palette, Search, type LucideIcon } from "lucide-react";

import { services } from "@/data/services";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const ICONS: Record<string, LucideIcon> = {
  calendar: CalendarDays,
  palette: Palette,
  briefcase: Briefcase,
  search: Search,
  code: Code,
};

/**
 * Service catalogue. Deliberately a numbered editorial list rather than a grid
 * of identical cards — and deliberately free of pricing, packages and any
 * promised outcome.
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
                Five things I can take off your{" "}
                <em className="font-display font-normal italic text-brand-700">list</em>.
              </span>
            }
            description="Practical, day-to-day support. I would rather describe what I actually do well than promise everything."
          />
        </Reveal>

        <div className="mt-14 border-t border-mist-200">
          {services.map((service, index) => {
            const Icon = ICONS[service.icon] ?? CalendarDays;

            return (
              <Reveal
                key={service.id}
                delay={index * 40}
                className="grid gap-6 border-b border-mist-200 py-10 lg:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] lg:gap-16 lg:py-12"
              >
                <div>
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span aria-hidden="true" className="font-display text-3xl leading-none text-brand-300">
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
                        className="rounded-full border border-mist-200 bg-mist-50 px-3.5 py-1.5 text-[0.8125rem] font-medium text-ink-800"
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

        <Reveal>
          <p className="mt-8 max-w-2xl text-[0.875rem] leading-relaxed text-mist-500">
            No pricing is published because every engagement depends on scope, hours and
            frequency. Tell me what you need handled and I will come back with a realistic
            proposal.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
