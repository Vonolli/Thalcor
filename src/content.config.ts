import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const linkSchema = z.object({
  label: z.string(),
  url: z.string(),
});

const site = defineCollection({
  loader: glob({ pattern: 'site.yml', base: './content/settings' }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    description: z.string(),
    url: z.string().url(),
    ogImage: z.string(),
    email: z.string().email(),
    tagline: z.string(),
    brandLogo: z.string(),
    contactPage: z.object({
      title: z.string(),
      description: z.string(),
      eyebrow: z.string(),
      heading: z.string(),
      intro: z.string(),
      panelTitle: z.string(),
      panelText: z.string(),
    }),
    contactCta: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      text: z.string(),
      buttonLabel: z.string(),
    }),
    navigation: z.array(linkSchema),
    footer: z.object({
      eyebrow: z.string(),
      text: z.string(),
    }),
  }),
});

const homepage = defineCollection({
  loader: glob({ pattern: 'homepage.yml', base: './content/pages' }),
  schema: z.object({
    seoTitle: z.string(),
    seoDescription: z.string(),
    hero: z.object({
      eyebrow: z.string(),
      headline: z.string(),
      subheadline: z.string(),
      supporting: z.string(),
      primaryAction: linkSchema,
      secondaryAction: linkSchema,
      telemetryEyebrow: z.string(),
      telemetry: z.array(z.object({ label: z.string(), value: z.string() })),
    }),
    manifesto: z.object({
      eyebrow: z.string(),
      title: z.string(),
      intro: z.string(),
      paragraphs: z.array(z.string()),
    }),
    featuredProjects: z.object({
      eyebrow: z.string(),
      title: z.string(),
      intro: z.string(),
    }),
    process: z.object({
      eyebrow: z.string(),
      title: z.string(),
      steps: z.array(z.object({ title: z.string(), text: z.string() })),
    }),
    labs: z.object({
      eyebrow: z.string(),
      title: z.string(),
      intro: z.string(),
      panelEyebrow: z.string(),
      panelTitle: z.string(),
      items: z.array(z.string()),
    }),
  }),
});

const projectPage = defineCollection({
  loader: glob({ pattern: 'projects.yml', base: './content/pages' }),
  schema: z.object({
    seoTitle: z.string(),
    seoDescription: z.string(),
    hero: z.object({
      eyebrow: z.string(),
      title: z.string(),
      description: z.string(),
    }),
    filters: z.object({
      allTitle: z.string(),
      allSignalLabel: z.string(),
      allAlphabeticalLabel: z.string(),
      statusTitle: z.string(),
      categoryTitle: z.string(),
    }),
    detail: z.object({
      dossierLabel: z.string(),
      statusLabel: z.string(),
      categoryLabel: z.string(),
      clearanceLabel: z.string(),
      featuredLabel: z.string(),
      archiveLabel: z.string(),
      heroMediaLabel: z.string(),
      fileNotesLabel: z.string(),
      fileNotes: z.string(),
      externalLinkLabel: z.string(),
      videoLinkLabel: z.string(),
      documentLinkLabel: z.string(),
      backLabel: z.string(),
    }),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    status: z.string(),
    category: z.string(),
    featured: z.boolean().default(false),
    heroImage: z.string(),
    previewImage: z.string(),
    logoImage: z.string().optional(),
    heroVideo: z.string().optional(),
    videoPath: z.string().optional(),
    documentPath: z.string().optional(),
    externalUrl: z.union([z.string().url(), z.literal('')]).optional(),
    order: z.number().default(999),
  }),
});

export const collections = { site, homepage, projectPage, projects };
