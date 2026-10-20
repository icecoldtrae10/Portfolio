"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { navCta, navItems, observedSections } from "@/data/navigation";
import { site } from "@/data/site";
import { useActiveSection } from "@/hooks/useActiveSection";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(observedSections);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile panel with Escape and stop the page behind it scrolling.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-abyss/85 backdrop-blur-md"
          : "border-b border-transparent bg-abyss/0"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:gap-5 sm:px-8 lg:h-[4.5rem]">
        {/* Wordmark — allowed to shrink and wrap so the full name never pushes
            the header wider than the viewport on small screens. */}
        <a
          href="#home"
          className="group flex min-w-0 items-start gap-2.5 py-2"
          onClick={() => setOpen(false)}
        >
          <span
            aria-hidden="true"
            className="mt-[0.3rem] h-2.5 w-2.5 shrink-0 rounded-full bg-accent transition-colors duration-200 group-hover:bg-accent-hi"
          />
          <span className="min-w-0 text-[0.95rem] font-semibold leading-tight tracking-[-0.01em] text-heading [overflow-wrap:anywhere]">
            {site.wordmark}
          </span>
        </a>

        {/* Desktop navigation — hidden below `lg`, where the list is too wide. */}
        <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => {
            const isActive = active === item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "location" : undefined}
                className={`relative whitespace-nowrap rounded-md px-2.5 py-2 text-[0.8125rem] font-medium transition-colors duration-200 ${
                  isActive ? "text-accent" : "text-muted hover:text-heading"
                }`}
              >
                {item.label}
                {isActive ? (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-2.5 -bottom-0.5 h-[2px] rounded-full bg-accent"
                  />
                ) : null}
              </a>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={navCta.href}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-accent px-3.5 py-2 text-[0.8125rem] font-semibold whitespace-nowrap text-abyss transition-colors duration-200 hover:bg-accent-hi sm:px-4 sm:text-sm"
          >
            {navCta.label}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>

          {/* Mobile / tablet trigger */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-body transition-colors duration-200 hover:border-accent hover:text-accent lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/10 bg-abyss lg:hidden"
      >
        <nav aria-label="Mobile" className="mx-auto max-w-6xl px-5 py-4 sm:px-8">
          <ul className="flex flex-col">
            {navItems.map((item) => {
              const isActive = active === item.href.replace("#", "");
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "location" : undefined}
                    className={`flex items-center justify-between border-b border-white/10 py-3.5 text-[0.95rem] font-medium transition-colors duration-200 ${
                      isActive ? "text-accent" : "text-body hover:text-accent"
                    }`}
                  >
                    {item.label}
                    {isActive ? (
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-accent"
                      />
                    ) : null}
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href={navCta.href}
            onClick={() => setOpen(false)}
            className="mt-5 flex items-center justify-center gap-1.5 rounded-full bg-accent px-4 py-3 text-sm font-semibold text-abyss transition-colors duration-200 hover:bg-accent-hi"
          >
            {navCta.label}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
}
