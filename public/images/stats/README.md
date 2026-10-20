# Dashboard screenshots

The four screenshots shown at the top of the "Work Highlights & Stats"
cards. Each one is referenced from `src/data/work-highlights.ts`, which also
stores its intrinsic pixel size and the `alt` text describing what it shows.

| File | Card | Shows |
| --- | --- | --- |
| `Portfolio Stats 1.jpg` (1666×787) | Facebook Audience Growth & Engagement | Meta Business Suite Insights, 10 Dec 2025 – 19 Oct 2026: net follower growth 16,086, 16,335 lifetime followers, 4.1K messaging contacts |
| `Portfolio Stats 2.jpg` (1669×787) | Multi-Campaign Audience & Lead Scaling | Meta Business Suite Insights, 14 Jul 2024 – 20 Oct 2026: net follower growth 34,960, 38,819 lifetime followers, 6.9K messaging contacts |
| `Portfolio Stats 3.jpg` (844×757) | Viral Reach & Short-Form Content Performance | Facebook photo post analytics: 448.7K views, 3.1K interactions, 2.0K likes, 562 comments, 250 shares, 294 saves |
| `Portfolio Stats 4.jpg` (582×576) | Viral Post Reach & High-Volume Engagement | Facebook post analytics: 866.7K views, 3.6K interactions, 2.1K likes, 651 comments, 412 shares, 457 saves |

Card width is too small to read a dashboard, so every screenshot is also
openable full size — click it (or press Enter on it) to open the preview, then
Escape or the close button to dismiss it.

## Replacing a screenshot

1. Overwrite the file here, **keeping the same name** (the filenames contain
   spaces, which `next/image` handles — no code change needed).
2. If the new file has a different pixel size, update `width` and `height` in
   `src/data/work-highlights.ts` so the layout does not shift while it loads.
3. Update the card's `alt` text in the same file so it still describes what is
   actually shown.

## Before you publish

- **Only display screenshots you have permission to share.**
- Crop out anything private before uploading: candidate names, phone numbers,
  email addresses, client identifiers or internal comments.
- The visible figures in a screenshot and the copy beside it should agree —
  if a dashboard is refreshed, update the card copy too.
