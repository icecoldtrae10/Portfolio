# Documents

## Adding your résumé

1. Save your PDF here as **`resume.pdf`** (so the path becomes
   `/documents/resume.pdf`).
2. Open `src/data/site.ts` and change:

   ```ts
   resumeUrl: "/documents/resume.pdf",
   ```

3. Save. The **View Résumé** button appears in the Résumé section.

While `resumeUrl` is `null` the button is not rendered at all — the section
still shows its heading and description, but there is no disabled control and
no link that could point at a missing file.

## Checklist before publishing

- [ ] The file is named exactly `resume.pdf` (lowercase).
- [ ] It opens correctly and is under a few MB.
- [ ] It contains no phone number or home address you would not want public.
- [ ] The filename is not `resume(3)_final.pdf` — the site hardcodes the path.
