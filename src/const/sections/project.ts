export interface ProjectSection {
  title: string;
  subtitle: string;
  href?: string;
  disabled?: boolean;
}

const PROJECTS: ProjectSection[] = [
  {
    title: 'Translatify',
    subtitle:
      'Designed and implemented a high-performance real-time chat application with asynchronous translation',
  },
  {
    title: 'Feature Flags',
    href: 'https://github.com/HJyup/hjyup-flags',
    subtitle:
      'Built a TypeScript feature flag library supporting flag dependencies, real-time updates',
  },
  {
    title: 'Personal Website',
    subtitle: 'Personal website to showcase my projects and skills',
  },
  {
    title: 'file-sync-tool (FST) [in progress]',
    subtitle:
      'Developed a CLI that recreates the functionality of git for syncing files across machines',
    disabled: true,
  },
];

export { PROJECTS };
