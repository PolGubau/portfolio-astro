import { z } from "astro:content";

export const schemas = {
  projectSchema: z.object({
    id: z.string().min(1),
    title: z.string().min(1),
    date: z.date(),
    category: z.string().min(1),
    backgroundColor: z.string().min(1),
    images: z.array(
      z.object({
        src: z.string().min(1),
        alt: z.string().min(1),
      })
    ),
    tags: z.array(z.string().min(1)),
    invisibleTags: z.array(z.string().min(1)).optional(),
    description: z.string().min(1),
    githubLink: z.string().url().min(1).optional(),
    npmCommand: z.string().min(1).optional(),
    npmLink: z.string().url().min(1).optional(),
    link: z.string().url().min(1).optional(),
  }),
};
