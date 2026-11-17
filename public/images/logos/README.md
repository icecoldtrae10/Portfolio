# Tool logos

Official brand marks shown in the "Tools & Software" section. Each one is
referenced by filename in `src/data/tools.ts`.

## Adding a logo

1. Save the file here, e.g. `newtool.svg` (SVG preferred — it stays sharp and
   weighs almost nothing).
2. Add it to the right group in `src/data/tools.ts`:

   ```ts
   { name: "New Tool", logo: "newtool.svg" },
   ```

3. Save. Alt text is generated from `name`, so keep the name accurate.

If a tool has no `logo` entry, a neutral icon is shown in its place — the site
never renders a broken image.

## Files in use (four groups, 29 tools, 28 files)

| File | Tool |
| --- | --- |
| `google.svg` | Google Workspace |
| `microsoft-office.svg` | Microsoft Office |
| `outlook.svg` | Microsoft Outlook |
| `notion.svg` | Notion |
| `canva.svg` | Canva |
| `photoshop.svg` | Adobe Photoshop |
| `meta.svg` | Meta Business Suite, Meta Ads Manager |
| `linkedin.svg` | LinkedIn |
| `capcut.svg` | CapCut |
| `hootsuite.png` | Hootsuite |
| `python.svg` | Python |
| `java.svg` | Java |
| `html5.svg` | HTML |
| `typescript.svg` | TypeScript |
| `react.svg` | React |
| `nextjs.svg` | Next.js |
| `git.svg` | Git |
| `github.svg` | GitHub |
| `vercel.svg` | Vercel |
| `cursor.svg` | Cursor AI |
| `matlab.png` | MATLAB |
| `simulink.png` | Simulink |
| `autocad.svg` | AutoCAD |
| `ltspice.svg` | LTspice |
| `multisim.svg` | Multisim |
| `arduino.svg` | Arduino IDE |
| `kicad.png` | KiCad |
| `labview.svg` | LabVIEW |

Every tool in the section has a mark — no neutral glyphs remain.

## Files kept but not currently used

The Tools & Software list does not name these ten, so they are
deliberately unreferenced. They are left in place in case another group is ever
added — delete them if you would rather keep the folder tidy.

| File | Tool |
| --- | --- |
| `gmail.svg` | Gmail |
| `microsoft-excel.svg` | Microsoft Excel (covered by Microsoft Office) |
| `google-sheets.svg` | Google Sheets (covered by Google Workspace) |
| `facebook.svg` | Facebook |
| `instagram.svg` | Instagram (covered by Meta Business Suite) |
| `tinkercad.svg` | Tinkercad |
| `c.svg` | C |
| `cplusplus.svg` | C++ |
| `Hootsuite_logo.png` | Full Hootsuite logo (owl + wordmark) — `hootsuite.png` is cropped from it |
| `LTspice.png` | Official LTspice app icon; the black tile reads poorly on the dark chip, so `ltspice.svg` is used instead |

## Sources

Most marks come from the [simple-icons](https://simple-icons.org) collection
(CC0); `instagram.svg` and `html5.svg` were taken from simple-icons 9.21.0 with
their official brand fills (`#e4405f` and `#e34f26`). `matlab.png` and
`simulink.png` come from Wikimedia Commons/Wikipedia; the rest — including
`outlook.svg`, `photoshop.svg`, `capcut.svg`, `notion.svg`, `react.svg`,
`cursor.svg`, `kicad.png`, `hootsuite.png` (cropped from the owner's full
logo), and the refreshed `github`/`vercel`/`python`/`meta`/`arduino`/
`autocad`/`labview` marks — were supplied by the site owner. All remain the
property of their respective owners and are used here only to identify
software this portfolio works with.
