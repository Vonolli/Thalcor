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
    contactButton: linkSchema.optional(),
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
      title: z.string(),
      subtitle: z.string(),
      body: z.string(),
      backgroundImage: z.string().optional(),
    }),
    footer: z.object({
      horizonImage: z.string().optional(),
      text: z.string(),
    }),
    featuredCategories: z.array(z.string()).default([]),
    process: z.object({
      eyebrow: z.string().optional(),
      title: z.string().optional(),
      steps: z.array(z.object({ title: z.string(), text: z.string() })),
    }).optional(),
  }),
});

const missions = defineCollection({
  loader: glob({ pattern: 'missions.yml', base: './content/missions' }),
  schema: z.object({
    categories: z.array(z.object({
      id: z.string(),
      title: z.string(),
      description: z.string(),
      shapeType: z.enum(['circle', 'triangle', 'square', 'hexagon']),
      iconShape: z.enum(['circle', 'triangle', 'square', 'hexagon']),
      order: z.number().default(999),
      visible: z.boolean().default(true),
      items: z.array(z.object({
        title: z.string(),
        subtitle: z.string().optional(),
        image: z.string(),
        alt: z.string().optional(),
        href: z.string(),
        order: z.number().default(999),
        visible: z.boolean().default(true),
      })),
    })),
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

export const collections = { site, homepage, missions, projectPage, projects };
