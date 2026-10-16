import { caseStudies } from "@/data/case-studies";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

/** A labelled block of prose inside a case study. */
function Block({
  label,
  children,
  tone = "plain",
}: {
  label: string;
  children: React.ReactNode;
  tone?: "plain" | "brand";
}) {
  const tones = {
    plain: "border-mist-200 bg-white",
    brand: "border-brand-200 bg-brand-50",
  } as const;

  return (
    <div className={`rounded-2xl border px-5 py-5 transition-colors duration-200 sm:px-6 ${tones[tone]}`}>
      <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-mist-500">{label}</h4>
      <div className="mt-3">{children}</div>
    </div>
  );
}

/** Vertical connector with numbered nodes — the "how it runs" diagram. */
function ProcessSteps({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    <ol className="relative">
      {steps.map((step, index) => (
        <li key={step.title} className="relative flex gap-4 pb-6 last:pb-0">
          {/* Connecting line, hidden behind the final node. */}
          {index < steps.length - 1 ? (
            <span
              aria-hidden="true"
              className="absolute left-[1.0625rem] top-9 h-[calc(100%-1.5rem)] w-px bg-brand-200"
            />
          ) : null}

          <span
            aria-hidden="true"
            className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-200 bg-white text-[0.75rem] font-semibold tabular-nums text-brand-700"
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className="min-w-0 pt-1.5">
            <h5 className="text-[0.9375rem] font-semibold tracking-[-0.01em] text-ink-900">
              {step.title}
            </h5>
            <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-mist-600">{step.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink-800">
          <span aria-hidden="true" className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-brand-400" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      className="bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Case Studies"
            title={
              <span id="case-studies-heading">
                A closer look at my{" "}
                <em className="font-display font-normal italic text-brand-700">approach</em>.
              </span>
            }
            description="These case studies outline the processes behind my work in social media management, outreach, and business research. Each highlights the tasks involved, the approach taken, and the resulting deliverables where supporting materials are available."
          />
        </Reveal>

        <div className="mt-6">
          {caseStudies.map((study) => (
            <article
              key={study.id}
              className="grid gap-10 border-t border-mist-200 py-12 first:border-t-0 sm:py-14 lg:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] lg:gap-16"
            >
              {/* ---------------------------------------------------- Left rail */}
              <div className="lg:sticky lg:top-28 lg:self-start">
                <div className="flex items-center gap-3">
                  <span aria-hidden="true" className="font-display text-4xl leading-none text-brand-500">
                    {study.index}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-mist-500">
                    {study.category}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-semibold leading-snug tracking-[-0.015em] text-ink-900">
                  {study.title}
                </h3>
              </div>

              {/* ------------------------------------------------ Right content */}
              <Reveal className="min-w-0 space-y-5">
                <Block label="Overview">
                  <p className="text-[0.9375rem] leading-relaxed text-ink-800">{study.overview}</p>
                </Block>

                <Block label="My process">
                  <ProcessSteps steps={study.process} />
                </Block>

                <Block label="Scope of work">
                  <Bullets items={study.scope} />
                </Block>

                <Block label="Closing statement" tone="brand">
                  <p className="text-[0.9375rem] leading-relaxed text-ink-800">{study.closing}</p>
                </Block>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
