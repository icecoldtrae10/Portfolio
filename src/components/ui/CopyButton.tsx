"use client";

import { useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

type CopyState = "idle" | "copied" | "error";

interface CopyButtonProps {
  value: string;
  /** Visible label, e.g. "Copy email". */
  label: string;
  className?: string;
}

/** Copies text to the clipboard with explicit success and failure feedback. */
export default function CopyButton({ value, label, className = "" }: CopyButtonProps) {
  const [state, setState] = useState<CopyState>("idle");
  const timer = useRef<number | undefined>(undefined);

  const reset = () => {
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setState("idle"), 2600);
  };

  const handleCopy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
      } else {
        // Fallback for browsers or contexts without the async clipboard API.
        const area = document.createElement("textarea");
        area.value = value;
        area.setAttribute("readonly", "");
        area.style.position = "fixed";
        area.style.top = "-1000px";
        area.style.opacity = "0";
        document.body.appendChild(area);
        area.select();
        const ok = document.execCommand("copy");
        document.body.removeChild(area);
        if (!ok) throw new Error("Copy command was rejected");
      }
      setState("copied");
    } catch {
      setState("error");
    }
    reset();
  };

  return (
    <span className="inline-flex flex-col gap-1.5">
      <button
        type="button"
        onClick={handleCopy}
        className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[0.8125rem] font-medium transition-colors ${className}`}
      >
        {state === "copied" ? (
          <Check className="h-3.5 w-3.5" aria-hidden="true" />
        ) : (
          <Copy className="h-3.5 w-3.5" aria-hidden="true" />
        )}
        {state === "copied" ? "Copied" : state === "error" ? "Copy failed" : label}
      </button>

      <span role="status" aria-live="polite" className="sr-only">
        {state === "copied"
          ? "Copied to clipboard"
          : state === "error"
            ? "Could not copy to clipboard"
            : ""}
      </span>
    </span>
  );
}
