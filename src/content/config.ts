import { z, defineCollection } from 'astro:content';

// Blog content collection schema
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    readTime: z.string().optional(),
    author: z.string().optional(),
    draft: z.boolean().default(false)
  })
});

export const collections = { blog };