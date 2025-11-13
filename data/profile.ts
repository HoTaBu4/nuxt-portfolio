import type { ProfileData } from '@/types/portfolio';

export const profile: ProfileData = {
  name: 'Volodymyr Dzybyk',
  role: 'Frontend Developer',
  hero: {
    availability: 'Open to new frontend opportunities',
    title: 'Frontend developer crafting performant, user-first interfaces.',
    description:
      'Driven and creative engineer with nearly three years of commercial experience delivering SPAs, e-commerce widgets, and cross-platform apps with Vue, Nuxt, React, and TypeScript. I thrive in collaborative teams and ship clean, maintainable code.',
    primaryCta: {
      label: 'View projects',
      to: '/projects',
    },
    secondaryCta: {
      label: 'Let’s talk',
      href: '#contact',
    },
    snapshot: {
      eyebrow: 'Snapshot',
      status: 'Availability: Freelance / Full-time',
      metrics: [
        { value: '2 years', label: 'COMMERCIAL EXPERIENCE' },
        { value: '20+ projects', label: 'PROJECTS CONTRIBUTED' },
        { value: '5 teammates', label: 'TYPICAL SQUAD SIZE' },
      ],
    },
  },
  capabilitiesIntro: {
    heading: 'Turning product ideas into intuitive, high-performing experiences.',
    description:
      'I partner with backend developers, designers, and QA to ship polished interfaces that balance velocity, maintainability, and user impact.',
  },
  capabilities: [
    {
      title: 'Modern web engineering',
      description:
        'Build performant SPAs and SSR apps with Vue 3, Nuxt, React, TypeScript, Redux, and Vuex—focusing on clean architecture and maintainable code.',
      icon: '⚙️',
    },
    {
      title: 'UI implementation & styling',
      description:
        'Translate Figma concepts into responsive layouts using HTML5, CSS3, Sass, BEM, Material UI, and Bulma while preserving design fidelity.',
      icon: '🎨',
    },
    {
      title: 'Product delivery & collaboration',
      description:
        'Iterate closely with cross-functional teams, integrate REST APIs, handle SSR/SEO, and optimize performance to elevate user experience.',
      icon: '🤝',
    },
  ],
  selectedWork: {
    heading: 'Selected Work',
    description:
      'Highlights from recent engagements spanning SPAs, mobile experiences, and product platforms built with Vue, Nuxt, React, and TypeScript.',
    ctaLabel: 'Browse all projects',
  },
  processIntro: {
    heading: 'How I collaborate',
    description:
      'A pragmatic, feedback-friendly delivery process rooted in transparency, quality, and continuous improvement.',
  },
  featuredProcess: [
    {
      title: 'Discovery & alignment',
      description:
        'Clarify business goals, user journeys, technical constraints, and success metrics with stakeholders before writing code.',
    },
    {
      title: 'Design translation & iteration',
      description:
        'Pair with designers to translate concepts into pixel-perfect, accessible UI while iterating quickly on feedback.',
    },
    {
      title: 'Implementation & optimization',
      description:
        'Ship features with scalable architecture, integrate APIs, enforce code quality, and fine-tune performance for smooth experiences.',
    },
    {
      title: 'Launch & continuous improvement',
      description:
        'Support QA, handle polish, monitor metrics, and plan iterative enhancements to keep the product evolving.',
    },
  ],
  about: {
    label: 'About',
    title: 'Frontend developer focused on thoughtful architecture and delightful experiences.',
    narrative:
      'Driven and creative Frontend Developer with nearly three years of commercial experience building real estate SPAs, e-commerce widgets, and cross-platform mobile apps.',
    extended:
      'I collaborate closely with backend engineers, designers, and QA to deliver clean, efficient solutions that elevate user experience and product quality. Passionate about learning, exploring new tooling, and contributing to team growth.',
    location: 'Warsaw, Poland · collaborating remotely',
    languages: ['English (Upper-Intermediate)'],
  },
  currentRole: {
    headline: 'Frontend Developer · Frontco',
    summary:
      'Partner with a multidisciplinary team to develop Nuxt 3 and Vue applications, integrate APIs, and drive performance improvements.',
    focus: 'Nuxt 3, Vue 3, TypeScript, SSR, API integration',
    availability: 'Jan 2022 – Oct 2025 · open to new opportunities',
  },
  experience: [
    {
      role: 'Frontend Developer',
      company: 'Frontco',
      period: 'Jan 2022 — Oct 2025',
      summary:
        'Developed Nuxt and Vue web apps, implemented SSR, and optimized rendering to boost SEO and performance within a cross-functional squad of five.',
      highlights: [
        'Implemented SSR & dynamic routing with vue-router',
        'Delivered API integrations and component optimizations (−30% load time)',
        'Collaborated with frontend, backend, design, and QA teammates',
      ],
    },
  ],
  toolset: [
    {
      group: 'Languages & Frameworks',
      focus: 'Core stack',
      items: 'TypeScript, JavaScript, React, Redux, Vue, Vuex, Nuxt, Node.js, Lit.js',
    },
    {
      group: 'UI & Styling',
      focus: 'Interface delivery',
      items: 'HTML5, CSS3, Sass (SCSS), BEM, Bulma, Material UI, Figma',
    },
    {
      group: 'Tools & Platforms',
      focus: 'Build & shipping',
      items: 'Webpack, Rspack, Git/GitHub, NPM, REST API, SSR, Swiper, react-router, Fetch',
    },
    {
      group: 'Data & Extras',
      focus: 'Supporting tech',
      items: 'MongoDB, Basic OOP, Capacitor',
    },
  ],
  values: [
    {
      title: 'Clean, maintainable code',
      description:
        'Obsessed with structure, readability, and long-term maintainability to help teams move faster without friction.',
    },
    {
      title: 'Team-first collaboration',
      description:
        'Partner closely with designers, backend engineers, and QA to ship cohesive experiences while sharing knowledge across the team.',
    },
    {
      title: 'Relentless learning',
      description:
        'Invest in continuous growth through courses, technical communities, and side projects that sharpen product intuition and code quality.',
    },
  ],
  aboutCallout: {
    eyebrow: 'Let’s collaborate',
    title: 'Need a frontend dev who blends velocity with quality?',
    description:
      'Share your product goals, timelines, and vision—I’d love to explore how I can help bring them to life.',
  },
  contact: {
    eyebrow: 'Get in touch',
    title: 'Ready to work together?',
    description:
      'Email or message me with project context and let’s plan the next steps together.',
    email: 'volodymyr.dz47@gmail.com',
    callUrl: 'https://t.me/Volodya8',
    callLabel: 'Message on Telegram',
  },
};
