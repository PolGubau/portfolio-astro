export interface Project {
  id: string;
  title: string;
  date: Date;
  category: string;
  backgroundColor: string;
  images: {
    src: string;
    alt: string;
  }[];
  tags: string[];
  invisibleTags?: string[] | undefined;
  description: string;
  githubLink?: string | undefined;
  npmCommand?: string | undefined;
  npmLink?: string | undefined;
  link?: string | undefined;
}

export interface ProjectMetadata {
  id: string;
  slug: string;
  body: string;
  collection: string;
  data: Project;
}
