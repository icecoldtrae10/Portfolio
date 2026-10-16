import type { ToolGroup } from "./types";

/**
 * ============================================================================
 *  TOOLS I USE
 * ============================================================================
 * Two groups. Both are shown as labelled cards with official logos — no
 * proficiency levels, no badges, no claims.
 *
 * ADDING A TOOL
 *   1. Drop the logo file in        public/images/logos/
 *   2. Add { name: "Tool name", logo: "tool-name.svg" } to the right group.
 *   3. Leave `logo` out entirely and a neutral icon is shown instead — never
 *      a broken image, and never an emoji.
 *
 * Only list tools you have personally used. Alt text is generated from
 * `name`, so keep names accurate and recognisable.
 *
 * The logo folder also still holds the older technical marks (python, matlab,
 * simulink, autocad, multisim, ltspice, arduino, tinkercad, java, c, cplusplus,
 * labview, github, vercel). They are intentionally unused, so adding a
 * "Technical and Engineering" group again needs no downloading.
 */

export const toolGroups: ToolGroup[] = [
  {
    id: "social-media-design",
    title: "Social media and design",
    tools: [
      { name: "Canva", logo: "canva.svg" },
      { name: "Facebook", logo: "facebook.svg" },
      { name: "Meta Business Suite", logo: "meta.svg" },
      { name: "LinkedIn", logo: "linkedin.svg" },
    ],
  },
  {
    id: "research-productivity",
    title: "Research and productivity",
    tools: [
      { name: "Google Search", logo: "google.svg" },
      { name: "Google Sheets", logo: "google-sheets.svg" },
      { name: "Microsoft Excel", logo: "microsoft-excel.svg" },
      { name: "Gmail", logo: "gmail.svg" },
      { name: "Microsoft Office", logo: "microsoft-office.svg" },
    ],
  },
];
