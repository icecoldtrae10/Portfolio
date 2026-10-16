import { Info } from "lucide-react";
import { site } from "@/data/site";

/**
 * A slim reminder strip shown while template content is still in place.
 *
 * It renders nothing once `showTemplateNotices` is switched off in
 * `src/data/site.ts`, so it cannot ship to production by accident.
 */
export default function TemplateNotice({ children }: { children: React.ReactNode }) {
  if (!site.showTemplateNotices) return null;

  return (
    <div className="flex items-start gap-3 rounded-lg border border-brand-200 bg-brand-50 px-4 py-3.5 sm:px-5">
      <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" aria-hidden="true" />
      <p className="text-[0.8125rem] leading-relaxed text-brand-800">{children}</p>
    </div>
  );
}
