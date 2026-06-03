# Public assets

Files in `public/assets` are served from `/assets/...` at runtime and can be managed by Pages CMS.

- `images/` — project hero images, preview images, Open Graph images, page illustrations, and rich-text images.
- `videos/` — compressed MP4/WebM files referenced by project `heroVideo` or `videoPath` fields.
- `logos/` — THALCOR marks, partner marks, and venture-specific SVG/PNG logo files.
- `documents/` — pitch decks, PDFs, one-pagers, and downloadable files.

## Adding assets

Use Pages CMS media uploaders or commit files directly to the matching folder. Reference files with public paths, for example:

- `/assets/images/omega-hero.svg`
- `/assets/videos/demo.mp4`
- `/assets/logos/venture-mark.svg`
- `/assets/documents/one-pager.pdf`

Do not move assets into `src`; these folders keep media editor-friendly and Netlify-ready.
