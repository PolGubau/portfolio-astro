export type Projects = Project[];

export interface Project {
  id: string;
  title: string;
  year: number;
  category: TranslatedLabels;
  pointOfInterest: PointOfInterest;
  textColor: string;
  width: number;
  backgroundColor: string;
  pathToImg: string;
  tags: string[];
  invisibleTags?: string[];
  description: TranslatedLabels;
  githubLink?: string;
  npmCommand?: string;
  npmLink?: string;
  link: string;
  madeFor?: TranslatedLabels;
  figmaLink?: string;
}

export interface TranslatedLabels {
  en: string;
  es: string;
  ca: string;
  de: string;
}

export interface PointOfInterest {
  x: number;
  y: number;
}
