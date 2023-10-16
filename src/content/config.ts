import { schemas } from "@/models/schemas";
import { defineCollection } from "astro:content";
const projectsCollection = defineCollection({
  type: "content",
  schema: schemas.projectSchema,
});

export const collections = {
  projects: projectsCollection,
};
