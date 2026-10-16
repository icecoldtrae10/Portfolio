"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, FolderOpen, Layers } from "lucide-react";

import { PROJECT_CATEGORIES, type Project, type ProjectCategory } from "@/data/types";
import { projects } from "@/data/projects";
import Modal from "@/components/ui/Modal";
import PlaceholderTile from "@/components/ui/PlaceholderTile";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import TemplateNotice from "@/components/ui/TemplateNotice";

const FILTERS: ("All" | ProjectCategory)[] = ["All", ...PROJECT_CATEGORIES];

/**
 * Editorial grid rhythm. The wide/narrow pattern repeats every four cards so
 * the gallery never reads as a uniform wall, and re-flows correctly no matter
 * which filter is active.
 */
const GRID_PATTERN: { span: string; ratio: string }[] = [
  { span: "lg:col-span-7", ratio: "aspect-[16/10]" },
  { span: "lg:col-span-5", ratio: "aspect-square" },
  { span: "lg:col-span-5", ratio: "aspect-square" },
  { span: "lg:col-span-7", ratio: "aspect-[16/10]" },
];

const imageSizes =
  "(min-width: 1024px) 58vw, (min-width: 640px) 92vw, 100vw";

export default function Portfolio() {
  const [active, setActive] = useState<"All" | ProjectCategory>("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  const openProject = useMemo(
    () => filtered.find((p) => p.id === openId) ?? null,
    [filtered, openId],
  );

  const countFor = (filter: "All" | ProjectCategory) =>
    filter === "All" ? projects.length : projects.filter((p) => p.category === filter).length;

  return (
    <section id="work" aria-labelledby="work-heading" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Featured portfolio"
              title={
                <span id="work-heading">
                  Selected <em className="font-display font-normal italic text-brand-700">work</em>,
                  organised by what it was for.
                </span>
              }
              description="Filter by discipline, then open any card for the full breakdown — background, responsibilities, process and tools."
              className="lg:max-w-2xl"
            />

            <p className="inline-flex shrink-0 items-center gap-2 rounded-full border border-mist-200 bg-mist-50 px-4 py-2 text-[0.8125rem] font-medium text-mist-600 lg:mb-1">
              <Layers className="h-4 w-4 text-brand-600" aria-hidden="true" />
              {projects.length} projects
            </p>
          </div>
        </Reveal>

        <div className="mt-8">
          <TemplateNotice>
            These are structure templates covering each category — not specific client
            engagements, and deliberately free of client names, dates and results. Replace them
            with your real work in <code className="rounded bg-white px-1 py-0.5 text-[0.75rem]">src/data/projects.ts</code>,
            then switch off <code className="rounded bg-white px-1 py-0.5 text-[0.75rem]">showTemplateNotices</code>.
          </TemplateNotice>
        </div>

        {/* ------------------------------------------------------------ Filters */}
        <Reveal delay={60}>
          <div
            role="group"
            aria-label="Filter projects by category"
            className="no-scrollbar -mx-5 mt-9 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0"
          >
            {FILTERS.map((filter) => {
              const isActive = active === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActive(filter)}
                  aria-pressed={isActive}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-[0.8125rem] font-medium transition-colors ${
                    isActive
                      ? "border-ink-900 bg-ink-900 text-white"
                      : "border-mist-300 bg-white text-mist-600 hover:border-ink-900 hover:text-ink-900"
                  }`}
                >
                  {filter}
                  <span
                    className={`text-[0.6875rem] tabular-nums ${
                      isActive ? "text-brand-200" : "text-mist-400"
                    }`}
                  >
                    {countFor(filter)}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* -------------------------------------------------------------- Grid */}
        {filtered.length === 0 ? (
          <p className="mt-14 rounded-xl border border-dashed border-mist-300 bg-mist-50 px-6 py-14 text-center text-sm text-mist-600">
            No projects in this category yet.
          </p>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-12">
            {filtered.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                pattern={GRID_PATTERN[index % GRID_PATTERN.length]}
                onOpen={() => setOpenId(project.id)}
              />
            ))}
          </div>
        )}
      </div>

      <Modal
        open={openProject !== null}
        onClose={() => setOpenId(null)}
        label={openProject ? `Case study: ${openProject.title}` : "Case study"}
      >
        {openProject ? <ProjectDetail project={openProject} /> : null}
      </Modal>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * Card
 * ------------------------------------------------------------------ */

function ProjectCard({
  project,
  pattern,
  onOpen,
}: {
  project: Project;
  pattern: { span: string; ratio: string };
  onOpen: () => void;
}) {
  return (
    <article className={`group relative ${pattern.span}`}>
      <div className={`relative w-full overflow-hidden rounded-xl border border-mist-200 bg-mist-50 transition-colors group-hover:border-brand-300 group-focus-within:border-brand-400 ${pattern.ratio}`}>
        {project.image ? (
          <Image
            src={project.image}
            alt={project.imageAlt ?? project.title}
            fill
            sizes={imageSizes}
            className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.035]"
          />
        ) : (
          <PlaceholderTile
            label="Project image"
            hint="Drop a file into public/images/projects/"
          />
        )}

        <span className="absolute left-3 top-3 rounded-full bg-white/92 px-3 py-1 text-[0.6875rem] font-medium text-ink-800 backdrop-blur-sm">
          {project.category}
        </span>
      </div>

      <div className="mt-5 flex items-start justify-between gap-5">
        <div className="min-w-0">
          <h3 className="text-[1.0625rem] font-semibold tracking-[-0.015em] text-ink-900">
            <button
              type="button"
              onClick={onOpen}
              className="text-left transition-colors after:absolute after:inset-0 after:content-[''] hover:text-brand-700"
            >
              {project.title}
            </button>
          </h3>
          <p className="mt-2 text-[0.875rem] leading-relaxed text-mist-600">{project.summary}</p>
        </div>

        <ArrowUpRight
          className="mt-1 h-5 w-5 shrink-0 text-mist-400 transition-colors group-hover:text-brand-600"
          aria-hidden="true"
        />
      </div>

      {project.tools && project.tools.length > 0 ? (
        <ul className="mt-3.5 flex flex-wrap gap-1.5">
          {project.tools.map((tool) => (
            <li
              key={tool}
              className="rounded border border-mist-200 px-2 py-0.5 text-[0.6875rem] font-medium text-mist-600"
            >
              {tool}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

/* ------------------------------------------------------------------ *
 * Case-study detail
 * ------------------------------------------------------------------ */

function ProjectDetail({ project }: { project: Project }) {
  return (
    <div className="max-h-[80vh] overflow-y-auto p-5 sm:p-8">
      <div className="flex flex-wrap items-center gap-2.5">
        <span className="rounded-full bg-brand-50 px-3 py-1 text-[0.6875rem] font-medium text-brand-800">
          {project.category}
        </span>
        {project.role ? (
          <span className="rounded-full border border-mist-200 px-3 py-1 text-[0.6875rem] font-medium text-mist-600">
            {project.role}
          </span>
        ) : null}
        {project.client ? (
          <span className="rounded-full border border-mist-200 px-3 py-1 text-[0.6875rem] font-medium text-mist-600">
            {project.client}
          </span>
        ) : null}
        {project.period ? (
          <span className="text-[0.75rem] text-mist-500">{project.period}</span>
        ) : null}
      </div>

      <h3 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-ink-900 sm:text-[1.75rem]">
        {project.title}
      </h3>

      <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-xl border border-mist-200 bg-mist-50">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.imageAlt ?? project.title}
            fill
            sizes="(min-width: 896px) 80vw, 92vw"
            className="object-cover"
          />
        ) : (
          <PlaceholderTile
            label="Larger preview"
            hint="Add the same image path used on the card to show it full size here."
          />
        )}
      </div>

      {project.description ? (
        <p className="mt-6 text-[0.9375rem] leading-relaxed text-mist-600">{project.description}</p>
      ) : null}

      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        {project.responsibilities && project.responsibilities.length > 0 ? (
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-mist-500">
              My responsibilities
            </h4>
            <ul className="mt-3 space-y-2">
              {project.responsibilities.map((item) => (
                <li key={item} className="flex gap-2.5 text-[0.875rem] leading-relaxed text-ink-800">
                  <span aria-hidden="true" className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-brand-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {project.process && project.process.length > 0 ? (
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-mist-500">
              Process
            </h4>
            <ol className="mt-3 space-y-2">
              {project.process.map((item, index) => (
                <li key={item} className="flex gap-3 text-[0.875rem] leading-relaxed text-ink-800">
                  <span className="mt-px shrink-0 text-[0.75rem] font-semibold tabular-nums text-brand-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        ) : null}
      </div>

      {project.tools && project.tools.length > 0 ? (
        <div className="mt-8 border-t border-mist-200 pt-6">
          <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-mist-500">
            Tools used
          </h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <li
                key={tool}
                className="rounded-full border border-mist-200 bg-mist-50 px-3 py-1 text-[0.75rem] font-medium text-ink-800"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {project.outcome ? (
        <div className="mt-6 rounded-xl border border-brand-200 bg-brand-50 p-5">
          <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-800">
            Outcome
          </h4>
          <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-800">{project.outcome}</p>
          {project.evidence ? (
            <p className="mt-2 text-[0.8125rem] text-mist-600">{project.evidence}</p>
          ) : null}
        </div>
      ) : null}

      {project.link ? (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 text-[0.875rem] font-medium text-brand-700 underline-offset-4 hover:underline"
        >
          View live
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      ) : null}

      {!project.outcome ? (
        <p className="mt-6 flex items-center gap-2 rounded-lg border border-mist-200 bg-mist-50 px-4 py-3 text-[0.8125rem] text-mist-600">
          <FolderOpen className="h-4 w-4 shrink-0 text-mist-400" aria-hidden="true" />
          No result is claimed for this project — nothing has been supplied that could be
          evidenced.
        </p>
      ) : null}
    </div>
  );
}
