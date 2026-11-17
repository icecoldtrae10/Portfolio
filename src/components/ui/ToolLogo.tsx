"use client";

import { useState } from "react";
import { Boxes } from "lucide-react";

/**
 * Tool mark for the Tools & Software chips.
 *
 * Renders a plain `<img>` pointing straight at the static file in
 * `public/images/logos/` — no optimizer endpoint (`/_next/image`) sits in
 * between, so the browser always receives the file exactly as it exists on
 * disk. Explicit width/height keep the 20px slot stable before the image
 * decodes (no layout shift), and if a file is ever missing or fails to
 * decode, `onError` swaps in the neutral glyph — a chip can never end up as
 * an empty dark box.
 */
export default function ToolLogo({
  name,
  file,
  className,
}: {
  name: string;
  file?: string;
  className: string;
}) {
  const [failed, setFailed] = useState(false);

  if (!file || failed) {
    return (
      <span className={`${className} flex items-center justify-center text-muted`}>
        <Boxes className="h-full w-full" aria-hidden="true" />
      </span>
    );
  }

  return (
    // Deliberate plain <img>: local static marks served directly from
    // public/, bypassing the optimizer removes a whole class of blank-image
    // failures, and these files never change intrinsic size.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/images/logos/${file}`}
      alt={`${name} logo`}
      width={20}
      height={20}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={`${className} object-contain`}
    />
  );
}
