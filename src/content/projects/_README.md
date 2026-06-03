# Adding a THALCOR project

Project pages are Git-backed CMS entries. The easiest path is Pages CMS:

1. Open `https://app.pagescms.org`, sign in with GitHub, and choose this repository.
2. Open **Project pages**.
3. Click **New**, fill in the fields, upload/select media, and save.
4. Pages CMS commits the new Markdown file to `src/content/projects`; Netlify rebuilds the site from that commit.

You can also add a project manually by creating one new `.md` file in this folder. The projects index and detail page are generated automatically from the collection.

Required frontmatter fields:

```yaml
title: Example
tagline: Short project line.
status: Prototype
category: Future Systems
featured: false
heroImage: /assets/images/example-hero.svg
previewImage: /assets/images/example-preview.svg
logoImage: ''
heroVideo: ''
videoPath: ''
documentPath: ''
externalUrl: ''
order: 99
```

Name the file for the route you want, such as `example.md`. The Markdown body below the frontmatter becomes the project detail page content at `/projects/{filename}/`.

## Adding media

- Images: upload or commit to `public/assets/images`, then use `/assets/images/filename.ext`.
- Videos: upload or commit to `public/assets/videos`, then use `/assets/videos/filename.ext`.
- Logos: upload or commit to `public/assets/logos`, then use `/assets/logos/filename.ext`.
- Documents: upload or commit to `public/assets/documents`, then use `/assets/documents/filename.ext`.

Keep layout/design changes in Astro components. Project Markdown should only hold editable copy and media paths.
