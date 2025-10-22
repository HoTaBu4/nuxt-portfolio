interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  links: {
    live: string;
    source: string;
  };
}

interface SiteMeta {
  title: string;
  description: string;
  keywords: string[];
}

export type { Project, SiteMeta };