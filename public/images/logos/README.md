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

## Files in use (four groups, sixteen tools)

| File | Tool |
| --- | --- |
| `google.svg` | Google Workspace |
| `microsoft-excel.svg` | Microsoft Excel |
| `google-sheets.svg` | Google Sheets |
| `canva.svg` | Canva |
| `meta.svg` | Facebook Business Suite |
| `instagram.svg` | Instagram |
| `linkedin.svg` | LinkedIn |
| `python.svg` | Python (Basic Data Extraction) |
| `html5.svg` | HTML |
| `github.svg` | GitHub |
| `vercel.svg` | Vercel |
| `matlab.png` | MATLAB |
| `simulink.png` | Simulink |
| `autocad.svg` | AutoCAD |
| `ltspice.svg` | LTspice |
| `multisim.svg` | Multisim |

## Files kept but not currently used

The approved Tools & Software list does not name these nine, so they are
deliberately unreferenced. They are left in place in case another group is ever
added — delete them if you would rather keep the folder tidy.

| File | Tool |
| --- | --- |
| `gmail.svg` | Gmail |
| `microsoft-office.svg` | Microsoft Office |
| `facebook.svg` | Facebook |
| `arduino.svg` | Arduino IDE |
| `tinkercad.svg` | Tinkercad |
| `java.svg` | Java |
| `c.svg` | C |
| `cplusplus.svg` | C++ |
| `labview.svg` | LabVIEW |

## Sources

Most marks come from the [simple-icons](https://simple-icons.org) collection
(CC0); `instagram.svg` and `html5.svg` were taken from simple-icons 9.21.0 with
their official brand fills (`#e4405f` and `#e34f26`). `matlab.png` and
`simulink.png` come from Wikimedia Commons/Wikipedia. All remain the property of
their respective owners and are used here only to identify software this
portfolio works with.
