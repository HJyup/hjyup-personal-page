export interface ProjectSection {
  title: string;
  subtitle: string;
  href?: string;
}

const PROJECTS: ProjectSection[] = [
  {
    title: 'Translatify',
    subtitle:
      'Designed and implemented a high-performance real-time chat application with asynchronous translation',
  },
  {
    title: 'Feature Flags',
    href: 'https://github.com/matt-west/feature-flags',
    subtitle:
      'Built a TypeScript feature flag library supporting flag dependencies, real-time updates',
  },
  {
    title: 'Personal Website',
    subtitle: 'Personal website to showcase my projects and skills',
  },
];

export { PROJECTS };
