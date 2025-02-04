export interface ProjectSection {
  title: string;
  subtitle: string;
  date?: string;
  href?: string;
}

const PROJECTS: ProjectSection[] = [
  {
    title: 'Translatify',
    subtitle:
      'Designed and implemented a high-performance real-time chat application with asynchronous translation',
    date: 'Ongoing',
  },
  {
    title: 'Feature Flags',
    href: 'https://github.com/matt-west/feature-flags',
    subtitle:
      'Built a TypeScript feature flag library supporting flag dependencies, real-time updates',
    date: 'Jan 2025',
  },
  {
    title: 'Personal Website',
    subtitle: 'Personal website to showcase my projects and skills',
    date: 'Nov 2024',
  },
];

export { PROJECTS };
