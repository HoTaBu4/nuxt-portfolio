import type { ProfileData } from '@/types/portfolio';

export const profile: ProfileData = {
  name: 'Volodymyr',
  role: 'Frontend developer',
  hero: {
    availability: 'Available for new opportunities',
    title: 'Introduce yourself with a concise headline.',
    description: 'Share a short paragraph about the value you bring and the kind of collaborations you are looking for.',
    primaryCta: {
      label: 'View selected work',
      to: '/projects',
    },
    secondaryCta: {
      label: 'Reach out',
      href: '#contact',
    },
    snapshot: {
      eyebrow: 'Snapshot',
      status: 'Update this status to reflect your availability',
      metrics: [
        { value: '0+', label: 'YEARS EXPERIENCE' },
        { value: '0', label: 'PROJECTS DELIVERED' },
        { value: '0%', label: 'CLIENT REFERRALS' },
      ],
    },
  },
  capabilitiesIntro: {
    heading: 'Outline your core strengths.',
    description: 'Use this section to describe what you do best and how you support the teams you collaborate with.',
  },
  capabilities: [
    {
      title: 'Capability one',
      description: 'Explain the type of work you take on, the tools you use, and the impact you create.',
      icon: '✨',
    },
    {
      title: 'Capability two',
      description: 'Add a second capability or service offering that highlights another way you can help.',
      icon: '🛠️',
    },
    {
      title: 'Capability three',
      description: 'Share any other speciality, such as accessibility audits, performance improvements, or mentorship.',
      icon: '🚀',
    },
  ],
  selectedWork: {
    heading: 'Selected Work',
    description: 'Introduce a small set of featured projects that showcase the breadth of your experience.',
    ctaLabel: 'Browse all projects',
  },
  processIntro: {
    heading: 'How I collaborate',
    description: 'Summarise the steps you take with partners so they know what to expect when working with you.',
  },
  featuredProcess: [
    {
      title: 'Discovery & alignment',
      description: 'List the first steps you take to understand goals, constraints, timelines, and success metrics.',
    },
    {
      title: 'Design & iteration',
      description: 'Describe how you explore solutions, validate concepts, and gather feedback along the way.',
    },
    {
      title: 'Build & handoff',
      description: 'Explain how you ship production-ready work, document decisions, and support teams post-launch.',
    },
  ],
  about: {
    label: 'About',
    title: 'Share a longer story about your background.',
    narrative: 'Use a few sentences to explain the journey that led you here, the kind of products you love building, and what motivates you.',
    extended: 'Add more colour about your values, your approach to collaboration, or the environments where you thrive.',
    location: 'Based in your city, collaborating remotely',
    languages: ['Language 1', 'Language 2'],
  },
  currentRole: {
    headline: 'Current role or availability',
    summary: 'One or two sentences about what you are doing today and the impact you are creating.',
    focus: 'List focus areas or specialities',
    availability: 'Availability details (e.g. part-time, full-time, fractional)',
  },
  experience: [
    {
      role: 'Recent Role',
      company: 'Company name',
      period: 'Year — Year',
      summary: 'Summarise your contribution, responsibilities, and achievements for this position.',
      highlights: ['Highlight one', 'Highlight two', 'Highlight three'],
    },
    {
      role: 'Past Role',
      company: 'Company name',
      period: 'Year — Year',
      summary: 'Add another previous role with a short description of what you delivered or improved.',
      highlights: ['Key skill', 'Team collaboration', 'Impact metric'],
    },
  ],
  toolset: [
    {
      group: 'Frontend',
      focus: 'Technologies',
      items: 'Nuxt, Vue, TypeScript, Tailwind',
    },
    {
      group: 'Design',
      focus: 'Product & UI',
      items: 'Figma, Framer, Lottie',
    },
    {
      group: 'Tooling',
      focus: 'DX & Automation',
      items: 'Vite, Vitest, Playwright, GitHub Actions',
    },
  ],
  values: [
    {
      title: 'Value one',
      description: 'Highlight a principle you care about when collaborating with teams or shipping work.',
    },
    {
      title: 'Value two',
      description: 'Describe another value or working style that partners should know about.',
    },
  ],
  aboutCallout: {
    eyebrow: 'Let’s collaborate',
    title: 'Add a short call-to-action for visitors who reach this point on the page.',
    description: 'Invite people to share context about their project, timeline, or goals so you can get a conversation started.',
  },
  contact: {
    eyebrow: 'Get in touch',
    title: 'Ready to work together?',
    description: 'Add your preferred contact details and a secondary link for anyone who wants to schedule a call.',
    email: 'hello@example.com',
    callUrl: 'https://cal.com/your-handle',
    callLabel: 'Book a call',
  },
};
