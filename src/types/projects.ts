export interface Project {
  slug: string;

  title: {
    es: string;
    en: string;
  };
  summary: {
    es: string;
    en: string;
  };
  
  description: {
    es: string;
    en: string;
  };
  stack: string[];
  backend: string;
  database?: string | null;
  images: string[];
  github?: string;
}