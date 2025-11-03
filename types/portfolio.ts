export type Metric = {
  value: string;
  label: string;
};

export type Capability = {
  title: string;
  description: string;
  icon?: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
};

export type ToolsetGroup = {
  group: string;
  focus: string;
  items: string;
};

export type ValueItem = {
  title: string;
  description: string;
};

export type SnapshotContent = {
  eyebrow: string;
  status?: string;
  metrics: Metric[];
};

export type CallToAction = {
  label: string;
  to?: string;
  href?: string;
};

export type HeroContent = {
  availability?: string;
  label?: string;
  title: string;
  description: string;
  primaryCta?: CallToAction;
  secondaryCta?: CallToAction;
  snapshot?: SnapshotContent;
};

export type SectionIntro = {
  heading: string;
  description: string;
};

export type SelectedWorkIntro = SectionIntro & {
  ctaLabel: string;
};

export type AboutOverview = {
  label: string;
  title: string;
  narrative: string;
  extended: string;
  location: string;
  languages: string[];
};

export type CurrentRole = {
  headline: string;
  summary: string;
  focus: string;
  availability: string;
};

export type ContactSection = {
  eyebrow: string;
  title: string;
  description: string;
  email: string;
  callUrl: string;
  callLabel: string;
};

export type AboutCallout = {
  eyebrow: string;
  title: string;
  description: string;
};

export type ProfileData = {
  name: string;
  role: string;
  hero: HeroContent;
  capabilitiesIntro: SectionIntro;
  capabilities: Capability[];
  selectedWork: SelectedWorkIntro;
  processIntro: SectionIntro;
  featuredProcess: ProcessStep[];
  about: AboutOverview;
  currentRole: CurrentRole;
  experience: ExperienceItem[];
  toolset: ToolsetGroup[];
  values: ValueItem[];
  aboutCallout: AboutCallout;
  contact: ContactSection;
};

export type ProjectsHero = {
  label: string;
  title: string;
  description: string;
  statusNote?: string;
  jumpLinkLabel?: string;
  highlights?: {
    label: string;
    value: string;
  }[];
};

export type ProjectsFilters = {
  heading: string;
  description: string;
  searchPlaceholder: string;
  tagsLabel: string;
};

export enum ProjectTag {
  React = 'React',
  TypeScript = 'TypeScript',
  Redux = 'Redux',
  Swiper = 'Swiper',
  JavaScript = 'JavaScript',
  Scss = 'SCSS',
  Game = 'Game',
  Vue = 'Vue',
  Vuex = 'Vuex',
  Axios = 'Axios',
  ChatGptApi = 'ChatGPT API',
}

export type Project = {
  name: string;
  description: string;
  tags: ProjectTag[];
  link: string;
};
