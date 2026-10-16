"use client";

import { useEffect, useState } from "react";

/**
 * Returns the id of the first watched section currently crossing the top of
 * the viewport. Falls back to the previously active one while the reader is
 * between sections, so the navigation never flickers off.
 */
export function useActiveSection(ids: readonly string[], offset = 140) {
  const [active, setActive] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const visible = new Map<string, boolean>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visible.set(entry.target.id, entry.isIntersecting);
        }
        const current = ids.find((id) => visible.get(id));
        if (current) setActive(current);
      },
      { rootMargin: `-${offset}px 0px -55% 0px`, threshold: 0 },
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, [ids, offset]);

  return active;
}
