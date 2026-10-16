"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

/** The portal target never changes, so there is nothing to subscribe to. */
const noopSubscribe = () => () => {};

interface ModalProps {
  open: boolean;
  onClose: () => void;
  /** Accessible name for the dialog. */
  label: string;
  children: ReactNode;
  maxWidth?: string;
}

/**
 * Accessible dialog: focus is moved in on open, trapped while open, and
 * returned to the trigger on close. Escape closes it, the backdrop closes it,
 * and the page behind it does not scroll.
 */
export default function Modal({
  open,
  onClose,
  label,
  children,
  maxWidth = "max-w-4xl",
}: ModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const titleId = useId();

  // Held in a ref so the keydown listener (and the effect that owns it) can
  // stay stable instead of re-running whenever the parent re-renders.
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  });

  // Document.body only exists in the browser. `useSyncExternalStore` yields
  // the right value on the server and during hydration without a setState
  // inside an effect.
  const mounted = useSyncExternalStore(noopSubscribe, () => true, () => false);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") {
      event.preventDefault();
      onCloseRef.current();
      return;
    }
    if (event.key !== "Tab") return;

    const panel = panelRef.current;
    if (!panel) return;

    const items = Array.from(
      panel.querySelectorAll<HTMLElement>(FOCUSABLE),
    ).filter((el) => el.offsetParent !== null || el === document.activeElement);

    if (items.length === 0) {
      event.preventDefault();
      return;
    }

    const first = items[0];
    const last = items[items.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }, []);

  useEffect(() => {
    if (!open) return;

    triggerRef.current = document.activeElement as HTMLElement | null;

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const previousOverflow = document.body.style.overflow;
    const previousPadding = document.body.style.paddingRight;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;

    // Focus the panel itself so screen readers announce the dialog.
    const panel = panelRef.current;
    panel?.focus();

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPadding;
      triggerRef.current?.focus?.();
    };
  }, [open]);

  if (!open || !mounted) return null;

  return createPortal(
    <div
      className="animate-fade-in fixed inset-0 z-[90] flex items-start justify-center overflow-y-auto bg-ink-950/55 p-4 backdrop-blur-[2px] sm:p-6 sm:py-10"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className={`animate-modal-in relative w-full ${maxWidth} rounded-xl bg-white shadow-2xl shadow-ink-950/25 outline-none`}
      >
        <span id={titleId} className="sr-only">
          {label}
        </span>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-mist-200 bg-white/90 text-mist-600 transition hover:border-mist-300 hover:bg-white hover:text-ink-900 sm:right-4 sm:top-4"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        {children}
      </div>
    </div>,
    document.body,
  );
}
