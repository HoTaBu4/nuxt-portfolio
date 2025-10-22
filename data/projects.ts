import type { Project, ProjectsFilters, ProjectsHero } from '@/types/portfolio';

export const projectsHero: ProjectsHero = {
  label: 'Projects',
  title: 'Practical builds that balance polish, performance, and maintainability.',
  description:
    'A sample of apps, widgets, and experiments shipped with Vue, Nuxt, React, and TypeScript—each focused on delivering measurable improvements.',
  statusNote: 'Available for new engagements',
  jumpLinkLabel: 'Browse projects',
  highlights: [
    { label: 'Stack', value: 'Vue · Nuxt · React · TypeScript' },
    { label: 'Collaboration', value: 'Remote · Cross-functional' },
  ],
};

export const projectFilters: ProjectsFilters = {
  heading: 'Filter the case studies',
  description:
    'Search by name or filter by stack to surface the most relevant examples.',
  searchPlaceholder: 'Search by project, stack, or feature…',
  tagsLabel: 'Tech tags',
};

export const projects: Project[] = [
  {
    name: 'Tech-spot',
    description:
      'A sleek phone catalog built with React and TypeScript. Redux drives state management, while Swiper powers product carousels for a smooth browsing experience.',
    tags: ['React', 'TypeScript', 'Redux', 'Swiper'],
    link: 'https://hotabu4.github.io/tech-spot/',
  },
  {
    name: '2048 Puzzle Game',
    description:
      'Browser-based 2048 puzzle game crafted with HTML, CSS, SCSS, and vanilla JavaScript. Emphasizes smooth gameplay, responsive layout, and classic visuals.',
    tags: ['JavaScript', 'SCSS', 'Game'],
    link: 'https://hotabu4.github.io/puzzle-game/',
  },
  {
    name: 'Adviser Elli',
    description:
      'Vue and Vuex advisor platform integrating ChatGPT API for intelligent responses. Focused on responsive design, dynamic state management, and collaborative delivery.',
    tags: ['Vue', 'Vuex', 'ChatGPT API'],
    link: 'https://adviser-elli.netlify.app/',
  },
];
