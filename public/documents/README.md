# Documents

## Adding your résumé

1. Save your PDF here as **`resume.pdf`** (so the path becomes
   `/documents/resume.pdf`).
2. Open `src/data/site.ts` and change:

   ```ts
   resumeUrl: "/documents/resume.pdf",
   ```

3. Save. Three places update at once:
   - the résumé section button,
   - the link in the About section,
   - the link in the Contact sidebar.

While `resumeUrl` is `null` the download button is visibly disabled and explains
why — the site will never link to a file that is not there.

## Checklist before publishing

- [ ] The file is named exactly `resume.pdf` (lowercase).
- [ ] It opens correctly and is under a few MB.
- [ ] It contains no phone number or home address you would not want public.
- [ ] The filename is not `resume(3)_final.pdf` — the site hardcodes the path.
