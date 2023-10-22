import { defineCollection } from "astro:content";
import { schemas } from "../models";
const projects = defineCollection({
  type: "content",
  schema: schemas.projectSchema,
});
const studies = defineCollection({
  type: "content",
  schema: schemas.studySchema,
});

export const collections = {
  projects,
  studies,
};
