"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export interface LightboxItem {
  src: string;
  width: number;
  height: number;
  alt: string;
  /** Shown in the dialog header and used as its accessible name. */
  title: string;
}

interface LightboxProps {
  items: LightboxItem[];
  /** Index of the item being previewed, or `null` when closed. */
  index: number | null;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}

const BUTTON_CLASS =
  "rounded-lg p-2 text-muted transition-colors hover:bg-white/10 hover:text-heading focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent";

/**
 * Full-screen preview for the dashboard screenshots, which are far too dense
 * to read at card width.
 *
 * Opens from a card image (mouse or keyboard), closes on Escape, the backdrop
 * or the close button, and hands focus back to whatever opened it. Left/Right
 * arrows step between screenshots — unless the visitor is scrolling a tall
 * image with the keyboard.
 */
export default function Lightbox({
  items,
  index,
  onIndexChange,
  onClose,
}: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  const open = index !== null && Boolean(items[index]);
  const count = items.length;

  // Move focus into the dialog when it opens; hand it back when it closes.
  useEffect(() => {
    if (!open) return;

    returnFocusRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    closeButtonRef.current?.focus();

    return () => returnFocusRef.current?.focus();
  }, [open]);

  // Stop the page behind the dialog from scrolling.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  // Escape closes, arrows navigate, Tab stays inside the dialog.
  useEffect(() => {
    if (index === null) return;
    // Captured so the narrowing survives inside the event handler below.
    const openIndex = index;

    function onKeyDown(event: KeyboardEvent) {
      const target = event.target instanceof HTMLElement ? event.target : null;
      const scrollingImage = Boolean(target?.hasAttribute("data-lightbox-scroller"));

      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (scrollingImage) return;

      if (event.key === "ArrowRight") {
        event.preventDefault();
        onIndexChange((openIndex + 1) % count);
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        onIndexChange((openIndex - 1 + count) % count);
        return;
      }

      if (event.key === "Tab") {
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
          "button, [data-lightbox-scroller]",
        );
        if (!focusable || focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [index, count, onClose, onIndexChange]);

  if (index === null) return null;
  const current = items[index];
  if (!current) return null;

  return (
    // Clicking the backdrop closes; clicks inside the panel do not.
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 backdrop-blur-sm sm:p-6"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${current.title} — screenshot preview`}
        className="flex max-h-full w-full max-w-4xl flex-col overflow-hidden rounded-xl border border-white/10 bg-slate-900/95 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-3 py-2 sm:px-4">
          <p className="min-w-0 truncate text-sm font-semibold text-heading">
            {current.title}
          </p>

          <div className="flex shrink-0 items-center gap-1">
            <button
              type="button"
              aria-label="Previous screenshot"
              onClick={() => onIndexChange((index - 1 + count) % count)}
              className={BUTTON_CLASS}
            >
              <ChevronLeft aria-hidden="true" className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next screenshot"
              onClick={() => onIndexChange((index + 1) % count)}
              className={BUTTON_CLASS}
            >
              <ChevronRight aria-hidden="true" className="h-5 w-5" />
            </button>
            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Close preview"
              onClick={onClose}
              className={BUTTON_CLASS}
            >
              <X aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/*
          Tall screenshots scroll here; the div is focusable so keyboard
          visitors can scroll them too.
        */}
        <div
          data-lightbox-scroller=""
          tabIndex={0}
          role="group"
          aria-label={`${current.title} screenshot`}
          className="max-h-[72vh] overflow-auto p-3 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent sm:p-4"
        >
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            width={current.width}
            height={current.height}
            sizes="(min-width: 1024px) 56rem, calc(100vw - 3rem)"
            className="mx-auto h-auto w-auto max-w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
