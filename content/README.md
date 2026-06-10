# THALCOR content

Pages CMS and Astro use this directory as the Git-friendly source of truth for editable website content.

- `pages/homepage.yml` controls homepage copy, sections, links, CTA labels, and lists.
- `pages/projects.yml` controls the project archive and project-detail interface copy.
- `projects/*.md` stores one project per Markdown file. Frontmatter controls cards and metadata; the Markdown body controls the project description.
- `settings/site.yml` stores shared site metadata, contact copy, and reusable CTA copy.

Keep layout, styling, animation, and component structure in `src`. Upload media through Pages CMS to `public/assets` and reference the resulting `/assets/...` path from these files.
