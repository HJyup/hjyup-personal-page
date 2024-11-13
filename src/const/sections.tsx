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
  layoutHref?: string;
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
        title: 'Search Engine',
        subtitle:
          'A search engine that allows users to search for information across the web using AI',
        date: 'Ongoing',
        layoutHref: '/post/search-engine',
      },
      {
        logo: 'https://github.com/hjYup.png',
        title: 'Personal Website',
        subtitle: 'Personal website to showcase my projects and skills',
        date: 'Nov 2024',
        layoutHref: '/post/personal-page',
      },
      {
        logo: 'https://avatars.githubusercontent.com/u/80922066?s=200&v=4',
        title: 'FictAdvisor',
        subtitle:
          'Developed a platform for teacher evaluations and interactive timetables across all Universities faculties',
        date: 'Feb 2023 - Apr 2023',
        layoutHref: '/post/fict-advisor',
      },
    ],
  },
];
