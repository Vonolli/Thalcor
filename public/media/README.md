# Public media

Files in `public/media` are served from `/media/...` at runtime and are configured for Pages CMS uploads.

- `images/` — hero atmosphere images, footer horizon images, mission tile images, Open Graph images, page illustrations, and rich-text images.
- `videos/` — short compressed MP4/WebM files for optional hero atmosphere media and project video fields.
- `logos/` — THALCOR marks, partner marks, and venture-specific SVG/PNG logo files.
- `documents/` — pitch decks, PDFs, one-pagers, and downloadable files.

Use Pages CMS media uploaders or commit files directly to the matching folder. Reference files with public paths, for example:

- `/media/images/hero-atmosphere.jpg`
- `/media/videos/hero-loop.mp4`
- `/media/logos/thalcor-wordmark.svg`
- `/media/documents/one-pager.pdf`

Do not move editable media into `src`; these folders keep assets editor-friendly and GitHub Pages compatible.
