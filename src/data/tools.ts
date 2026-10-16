import type { ToolGroup } from "./types";

/**
 * ============================================================================
 *  TOOLS AND TECHNOLOGY
 * ============================================================================
 * Two groups. Business tools are shown as prominent cards, technical tools as
 * a quieter chip row — the visual hierarchy matches how central each set is to
 * the work.
 *
 * ADDING A TOOL
 *   1. Drop the logo file in        public/images/logos/
 *   2. Add { name: "Tool name", logo: "tool-name.svg" } to the right group.
 *   3. Leave `logo` out entirely and a neutral icon is shown instead — never
 *      a broken image, and never an emoji.
 *
 * The logo filenames currently in use are listed against each tool below.
 * Alt text is generated from `name`, so keep names accurate and recognisable.
 */

export const toolGroups: ToolGroup[] = [
  {
    id: "business-productivity",
    title: "Business and Productivity",
    tools: [
      { name: "Canva", logo: "canva.svg" },
      { name: "Meta Business Suite", logo: "meta.svg" },
      { name: "Facebook", logo: "facebook.svg" },
      { name: "LinkedIn", logo: "linkedin.svg" },
      { name: "Google Sheets", logo: "google-sheets.svg" },
      { name: "Gmail", logo: "gmail.svg" },
      { name: "Microsoft Excel", logo: "microsoft-excel.svg" },
    ],
  },
  {
    id: "technical-engineering",
    title: "Technical and Engineering",
    tools: [
      { name: "Python", logo: "python.svg" },
      { name: "MATLAB", logo: "matlab.png" },
      { name: "Simulink", logo: "simulink.png" },
      { name: "AutoCAD", logo: "autocad.svg" },
      { name: "Multisim", logo: "multisim.svg" },
      { name: "LTspice", logo: "ltspice.svg" },
      { name: "Arduino IDE", logo: "arduino.svg" },
      { name: "Tinkercad", logo: "tinkercad.svg" },
      { name: "Java", logo: "java.svg" },
      { name: "C", logo: "c.svg" },
      { name: "C++", logo: "cplusplus.svg" },
      { name: "LabVIEW", logo: "labview.svg" },
      { name: "GitHub", logo: "github.svg" },
      { name: "Vercel", logo: "vercel.svg" },
    ],
  },
];
