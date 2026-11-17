import type { ToolGroup } from "./types";

/**
 * Tools & software — four labelled groups.
 *
 * Every logo lives in `public/images/logos/` and is referenced by filename
 * here. A tool with no `logo` entry falls back to a neutral glyph, never a
 * broken image.
 *
 * Names only — no descriptions, parentheses or proficiency levels. The list
 * covers suites (Google Workspace, Microsoft Office) rather than their
 * individual apps, and Engineering Software stays its own category. Files in
 * that folder which none of these entries reference are documented in
 * `public/images/logos/README.md` as deliberately unused (along with the
 * tools still waiting for a logo).
 */
export const toolGroups: ToolGroup[] = [
  {
    id: "business-productivity",
    title: "Business & Productivity",
    tools: [
      { name: "Google Workspace", logo: "google.svg" },
      { name: "Microsoft Office", logo: "microsoft-office.svg" },
      { name: "Microsoft Outlook", logo: "outlook.svg" },
      { name: "Notion", logo: "notion.svg" },
    ],
  },
  {
    id: "design-social-media",
    title: "Design & Social Media",
    tools: [
      { name: "Canva", logo: "canva.svg" },
      { name: "Adobe Photoshop", logo: "photoshop.svg" },
      { name: "Meta Business Suite", logo: "meta.svg" },
      { name: "LinkedIn", logo: "linkedin.svg" },
      { name: "CapCut", logo: "capcut.svg" },
      // Reuses Meta's official mark, shared with Meta Business Suite.
      { name: "Meta Ads Manager", logo: "meta.svg" },
      { name: "Hootsuite", logo: "hootsuite.png" },
    ],
  },
  {
    id: "web-technical",
    title: "Web & Technical",
    tools: [
      { name: "Python", logo: "python.svg" },
      { name: "Java", logo: "java.svg" },
      { name: "HTML", logo: "html5.svg" },
      { name: "TypeScript", logo: "typescript.svg" },
      { name: "React", logo: "react.svg" },
      { name: "Next.js", logo: "nextjs.svg" },
      { name: "Git", logo: "git.svg" },
      { name: "GitHub", logo: "github.svg" },
      { name: "Vercel", logo: "vercel.svg" },
      { name: "Cursor AI", logo: "cursor.svg" },
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
      { name: "Arduino IDE", logo: "arduino.svg" },
      { name: "KiCad", logo: "kicad.png" },
      { name: "LabVIEW", logo: "labview.svg" },
    ],
  },
];
