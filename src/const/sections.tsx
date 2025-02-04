export type SectionType = {
  header: string;
  items: SectionItemType[];
};

export type SectionItemType = {
  logo?: string;
  title: string;
  subtitle: string;
  date?: string;
  href?: string;
};

export const SECTIONS: SectionType[] = [
  {
    header: 'Education',
    items: [
      {
        logo: 'https://logonoid.com/images/university-of-edinburgh-logo.png',
        title: 'University of Edinburgh',
        subtitle: 'Artificial Intelligence & Computer Science',
        date: '2024 - 2028',
        href: 'https://www.ed.ac.uk/',
      },
    ],
  },
  {
    header: 'Professional Experience',
    items: [
      {
        logo: 'https://cdn-1.webcatalog.io/catalog/solidgate/solidgate-icon.png?v=1714781239646',
        title: 'Solidgate',
        subtitle:
          'Fintech payment processing platform that helps businesses accept online payments across 150+ countries',
        date: 'Aug 2023 - Present',
        href: 'https://www.solidgate.com/',
      },
    ],
  },
  {
    header: 'Projects',
    items: [
      {
        title: 'Translatify',
        subtitle:
          'Designed and implemented a high-performance real-time chat application with asynchronous translation',
        date: 'Ongoing',
      },
      {
        title: 'Feature Flags',
        subtitle:
          'Built a TypeScript feature flag library supporting flag dependencies, real-time updates',
        date: 'Jan 2025',
        href: 'https://github.com/HJyup/hjyup-flags',
      },
      {
        logo: 'https://github.com/hjYup.png',
        title: 'Personal Website',
        subtitle: 'Personal website to showcase my projects and skills',
        date: 'Nov 2024',
      },
    ],
  },
  {
    header: 'Volunteering',
    items: [
      {
        title: 'HackTheBurgh XI',
        logo: 'https://2023.hacktheburgh.com/static/logos/htblogo.png',
        subtitle:
          'Collaborated with the tech team to develop a hackathon platform',
        date: 'Dec 2024 - Jan 2025',
        href: 'https://hacktheburgh.com/',
      },
      {
        logo: 'https://avatars.githubusercontent.com/u/80922066?s=200&v=4',
        title: 'FictAdvisor',
        subtitle:
          'Developed a platform for teacher evaluations and interactive timetables across all Universities faculties',
        date: 'Feb 2023 - Apr 2023',
      },
    ],
  },
];
