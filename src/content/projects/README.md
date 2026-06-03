# Adding a THALCOR project

Create one new `.md` file in this folder. The projects index and detail page are generated automatically from the collection.

Required frontmatter fields:

```yaml
title: Example
slug: example
tagline: Short project line.
status: Prototype
category: Future Systems
featured: false
heroImage: /assets/images/example-hero.svg
previewImage: /assets/images/example-preview.svg
externalUrl: ''
order: 99
```

The Markdown body below the frontmatter becomes the project detail page content at `/projects/{slug}/`.
