import { defineCollection, z } from 'astro:content';

// Add a new project by creating one Markdown file in `src/content/projects`.
// The Markdown filename controls the final URL: `/projects/{filename}/`.
const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    status: z.string(),
    category: z.string(),
    featured: z.boolean().default(false),
    heroImage: z.string(),
    previewImage: z.string(),
    externalUrl: z.union([z.string().url(), z.literal('')]).optional(),
    order: z.number().default(999),
  }),
});

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    publishDate: z.date().optional(),
  }),
});

export const collections = { projects, posts };
