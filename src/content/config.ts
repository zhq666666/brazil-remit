import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'data',
  schema: z.object({
    tag: z.string(),
    published_date: z.string(),
    image_url: z.string(),
    title_en: z.string(),
    title_zh: z.string(),
    title_pt: z.string(),
    excerpt_en: z.string(),
    excerpt_zh: z.string(),
    excerpt_pt: z.string(),
    body_en: z.string(),
    body_zh: z.string(),
    body_pt: z.string(),
    prev_slug: z.string().nullable(),
    next_slug: z.string().nullable(),
  }),
});

export const collections = { articles };
