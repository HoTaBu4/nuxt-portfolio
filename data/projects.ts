import type { Project, ProjectsFilters, ProjectsHero } from '@/types/portfolio';

export const projectsHero: ProjectsHero = {
  label: 'Projects',
  title: 'Showcase the work you are most proud of.',
  description: 'Introduce your collection of case studies so visitors understand what they can explore below.',
  statusNote: 'Available for new engagements',
  jumpLinkLabel: 'Browse projects',
  highlights: [
    { label: 'Focus', value: 'Add focus areas or verticals' },
    { label: 'Collaboration', value: 'Remote · Async friendly' },
  ],
};

export const projectFilters: ProjectsFilters = {
  heading: 'Filter the case studies',
  description: 'Use the search or tags to help visitors find relevant examples.',
  searchPlaceholder: 'Search by project, stack, or feature…',
  tagsLabel: 'Focus tags',
};

export const projects: Project[] = [
  {
    name: 'Project Alpha',
    description: 'Describe the product, the problem you solved, and the outcome you drove.',
    tags: ['Nuxt', 'Design System', 'TypeScript'],
    link: '/projects/project-alpha',
  },
  {
    name: 'Project Beta',
    description: 'Share how you collaborated with the team and what made this build unique.',
    tags: ['Vue', 'Animations', 'Accessibility'],
    link: '/projects/project-beta',
  },
  {
    name: 'Project Gamma',
    description: 'Highlight measurable impact or learnings from this project.',
    tags: ['Performance', 'DX', 'Automation'],
    link: '/projects/project-gamma',
  },
];
