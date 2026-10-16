"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Layers } from "lucide-react";

import { projects } from "@/data/projects";
import type { Project } from "@/data/types";
import Modal from "@/components/ui/Modal";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const imageSizes = "(min-width: 1024px) 58vw, (min-width: 640px) 92vw, 100vw";

/**
 * Work gallery.
 *
 * Only entries with a real image in `src/data/projects.ts` are rendered — the
 * data file ships empty, so the section currently shows its heading and
 * introduction and no grid at all. Add an image and the cards, the filter
 * buttons and the detail modal all appear by themselves.
 */
export default function Portfolio() {
  const [active, setActive] = useState<string>("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const withImages = useMemo(
    () => projects.filter((project) => Boolean(project.image)),
    [],
  );

  const categories = useMemo(
    () => Array.from(new Set(withImages.map((project) => project.category))),
    [withImages],
  );

  const filtered = useMemo(
    () =>
      active === "All"
        ? withImages
        : withImages.filter((project) => project.category === active),
    [active, withImages],
  );

  const openProject = useMemo(
    () => filtered.find((project) => project.id === openId) ?? null,
    [filtered, openId],
  );

  const heading = (
    <SectionHeading
      eyebrow="Portfolio"
      title={
        <span id="work-heading">
          Selected work and{" "}
          <em className="font-display font-normal italic text-brand-700">campaign materials</em>.
        </span>
      }
      description="A selection of social media creatives and campaign materials that demonstrate my experience in content preparation, visual communication, and recruitment-related marketing."
      className="lg:max-w-2xl"
    />
  );

  const filters = ["All", ...categories];

  return (
    <section id="work" aria-labelledby="work-heading" className="bg-brand-50/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            {heading}

            {withImages.length > 0 ? (
              <p className="inline-flex shrink-0 items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-2 text-[0.8125rem] font-medium text-mist-600 lg:mb-1">
                <Layers className="h-4 w-4 text-brand-600" aria-hidden="true" />
                {withImages.length} {withImages.length === 1 ? "piece" : "pieces"}
              </p>
            ) : null}
          </div>
        </Reveal>

        {withImages.length === 0 ? null : (
          <>
            {/* ---------------------------------------------------- Filters */}
            <Reveal delay={60}>
              <div
                role="group"
                aria-label="Filter work by category"
                className="no-scrollbar -mx-5 mt-9 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0"
              >
                {filters.map((filter) => {
                  const isActive = active === filter;
                  const count =
                    filter === "All"
                      ? withImages.length
                      : withImages.filter((p) => p.category === filter).length;

                  return (
                    <button
                      key={filter}
                      type="button"
                      onClick={() => setActive(filter)}
                      aria-pressed={isActive}
                      className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-[0.8125rem] font-medium transition-colors duration-200 ${
                        isActive
                          ? "border-ink-900 bg-ink-900 text-white"
                          : "border-mist-300 bg-white text-mist-600 hover:border-ink-900 hover:text-ink-900"
                      }`}
                    >
                      {filter}
                      <span
                        className={`text-[0.6875rem] tabular-nums ${
                          isActive ? "text-brand-300" : "text-mist-400"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </Reveal>

            {/* ------------------------------------------------------- Grid */}
            <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-12">
              {filtered.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  wide={index % 4 === 0 || index % 4 === 3}
                  onOpen={() => setOpenId(project.id)}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <Modal
        open={openProject !== null}
        onClose={() => setOpenId(null)}
        label={openProject ? `Work sample: ${openProject.title}` : "Work sample"}
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
  wide,
  onOpen,
}: {
  project: Project;
  wide: boolean;
  onOpen: () => void;
}) {
  return (
    <article className={`group relative ${wide ? "lg:col-span-7" : "lg:col-span-5"}`}>
      <div className="surface-card relative aspect-[16/10] w-full overflow-hidden sm:aspect-[4/3]">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes={imageSizes}
          className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.03]"
        />

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
          {project.summary ? (
            <p className="mt-2 text-[0.875rem] leading-relaxed text-mist-600">{project.summary}</p>
          ) : null}
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
              className="rounded border border-mist-200 bg-white px-2 py-0.5 text-[0.6875rem] font-medium text-mist-600"
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
 * Detail
 * ------------------------------------------------------------------ */

function ProjectDetail({ project }: { project: Project }) {
  return (
    <div className="max-h-[80vh] overflow-y-auto p-5 sm:p-8">
      <span className="rounded-full bg-brand-50 px-3 py-1 text-[0.6875rem] font-medium text-brand-800">
        {project.category}
      </span>

      <h3 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-ink-900 sm:text-[1.75rem]">
        {project.title}
      </h3>

      <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-mist-200 bg-mist-50">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 896px) 80vw, 92vw"
          className="object-contain"
        />
      </div>

      {project.summary ? (
        <p className="mt-6 text-[0.9375rem] leading-relaxed text-mist-600">{project.summary}</p>
      ) : null}

      {project.tools && project.tools.length > 0 ? (
        <div className="mt-6 border-t border-mist-200 pt-5">
          <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-mist-500">Tools</h4>
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
    </div>
  );
}
