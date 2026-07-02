# THALCOR content

Pages CMS and Astro use this directory as the Git-friendly source of truth for editable website content.

- `pages/homepage.yml` controls homepage SEO copy, hero manifesto, optional hero video, hero atmosphere image, footer horizon image, and featured category ordering.
- `missions/missions.yml` controls homepage category names, descriptions, shape types, visibility, ordering, tile labels, tile media, alt text, and tile links.
- `pages/projects.yml` controls the project archive and project-detail interface copy.
- `projects/*.md` stores one project per Markdown file. Frontmatter controls cards and metadata; the Markdown body controls the project description.
- `settings/site.yml` stores shared site metadata, navigation labels, contact button, logo path, contact copy, and reusable CTA copy.

Keep layout, styling, animation, and component structure in `src`. Upload media through Pages CMS to `public/media/images`, `public/media/videos`, `public/media/logos`, or `public/media/documents`, then reference the resulting `/media/...` path from these files.

To add a homepage mission tile in Pages CMS, open **Mission categories and homepage tiles**, choose the category, add a row under **Tiles**, set title, image, alt text, link, order, and visible status, then save.
