import { defineCollection } from "astro:content";
import { schemas } from "../models";
const projectsCollection = defineCollection({
  type: "content",
  schema: schemas.projectSchema,
});

export const collections = {
  projects: projectsCollection,
};
