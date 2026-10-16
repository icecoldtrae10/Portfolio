import { ImageOff, type LucideIcon } from "lucide-react";

interface PlaceholderTileProps {
  /** Main line, e.g. "Project image". */
  label: string;
  /** Supporting line telling the owner where to drop the file. */
  hint: string;
  icon?: LucideIcon;
  className?: string;
}

/**
 * A deliberately obvious, on-brand empty slot.
 *
 * It is rendered whenever a data entry has no `image` yet, so the site never
 * shows a broken-image icon and never presents a placeholder as real work.
 */
export default function PlaceholderTile({
  label,
  hint,
  icon: Icon = ImageOff,
  className = "",
}: PlaceholderTileProps) {
  return (
    <div className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-mist-50 ${className}`}>
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent 0 9px, rgba(159,176,194,0.16) 9px 10px)",
        }}
      />
      <div className="relative flex flex-col items-center gap-2.5 px-6 text-center">
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-dashed border-mist-300 bg-white">
          <Icon className="h-5 w-5 text-mist-400" aria-hidden="true" />
        </span>
        <span className="text-sm font-medium text-mist-600">{label}</span>
        <span className="max-w-[22ch] text-xs leading-relaxed text-mist-500">{hint}</span>
      </div>
    </div>
  );
}
