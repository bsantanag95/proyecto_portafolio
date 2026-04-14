import type { ContentSection } from "./content";

export interface Project {
  slug: string;

  title: {
    es: string;
    en: string;
  };

  intro: {
    es: string;
    en: string;
  };

  description: {
    es: string;
    en: string;
  };
  stack: string[];
  backend: string;
  category: string;
  database?: string | null;
  images: string[];
  github?: string;
  descriptionContent: {
    es: {
      sections: ContentSection[];
    };
    en: {
      sections: ContentSection[];
    };
  };
}
