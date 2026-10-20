import type { ToolGroup } from "./types";

/**
 * Tools & software — four labelled groups.
 *
 * Every logo lives in `public/images/logos/` and is referenced by filename
 * here. A tool with no `logo` entry falls back to a neutral glyph, never a
 * broken image.
 *
 * No proficiency levels or badges are shown — only names and official marks.
 * Files in that folder which none of these entries reference are documented
 * in `public/images/logos/README.md` as deliberately unused.
 */
export const toolGroups: ToolGroup[] = [
  {
    id: "business-productivity",
    title: "Business & Productivity",
    tools: [
      { name: "Google Workspace", logo: "google.svg" },
      { name: "Microsoft Excel", logo: "microsoft-excel.svg" },
      { name: "Google Sheets", logo: "google-sheets.svg" },
    ],
  },
  {
    id: "design-social-media",
    title: "Design & Social Media",
    tools: [
      { name: "Canva", logo: "canva.svg" },
      { name: "Facebook Business Suite", logo: "meta.svg" },
      { name: "Instagram", logo: "instagram.svg" },
      { name: "LinkedIn", logo: "linkedin.svg" },
    ],
  },
  {
    id: "web-technical",
    title: "Web & Technical",
    tools: [
      { name: "Python (Basic Data Extraction)", logo: "python.svg" },
      { name: "HTML", logo: "html5.svg" },
      { name: "GitHub", logo: "github.svg" },
      { name: "Vercel", logo: "vercel.svg" },
    ],
  },
  {
    id: "engineering-software",
    title: "Engineering Software",
    tools: [
      { name: "MATLAB", logo: "matlab.png" },
      { name: "Simulink", logo: "simulink.png" },
      { name: "AutoCAD", logo: "autocad.svg" },
      { name: "LTspice", logo: "ltspice.svg" },
      { name: "Multisim", logo: "multisim.svg" },
    ],
  },
];
