# Tool logos

Official brand marks shown in the Tools section. Each one is referenced by
filename in `src/data/tools.ts`.

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

## Files in use (two groups, nine tools)

| File | Tool |
| --- | --- |
| `canva.svg` | Canva |
| `facebook.svg` | Facebook |
| `meta.svg` | Meta Business Suite |
| `linkedin.svg` | LinkedIn |
| `google.svg` | Google Search |
| `google-sheets.svg` | Google Sheets |
| `microsoft-excel.svg` | Microsoft Excel |
| `gmail.svg` | Gmail |
| `microsoft-office.svg` | Microsoft Office |

## Files kept but not currently used

The approved Tools section lists two groups only, so these 14 marks are
deliberately unreferenced. They cost ~160 KB and are left in place so a
"Technical and Engineering" group can be added back without downloading
anything — delete them if you would rather keep the folder tidy.

| File | Tool |
| --- | --- |
| `python.svg` | Python |
| `matlab.png` | MATLAB |
| `simulink.png` | Simulink |
| `autocad.svg` | AutoCAD |
| `multisim.svg` | Multisim |
| `ltspice.svg` | LTspice |
| `arduino.svg` | Arduino IDE |
| `tinkercad.svg` | Tinkercad |
| `java.svg` | Java |
| `c.svg` | C |
| `cplusplus.svg` | C++ |
| `labview.svg` | LabVIEW |
| `github.svg` | GitHub |
| `vercel.svg` | Vercel |

## Sources

Most marks come from the [simple-icons](https://simple-icons.org) collection
(CC0). `java.svg`, `matlab.png` and `simulink.png` come from Wikimedia
Commons/Wikipedia. All remain the property of their respective owners and are
used here only to identify software this portfolio works with.
