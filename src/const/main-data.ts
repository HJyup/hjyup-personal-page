export type MainDataType = {
  title: string;
  description: string;
  items: ItemType[];
};

type ItemType = {
  name: string;
  description: string[];
  link?: string;
  techStack?: string[];
};

const MAIN_DATA: MainDataType[] = [
  {
    title: 'About me',
    description: 'The section is under construction...',
    items: [],
  },
  {
    title: 'Projects',
    description: "Here's listed projects that I've done.",
    items: [
      {
        name: 'FictAdvisor',
        link: 'https://fictadvisor.com',
        description: [
          'Platform for teacher evaluations and interactive timetables across all Universities faculties.',
        ],
        techStack: ['React', 'Typescript', 'SCSS', 'MUI', 'React-query'],
      },
      {
        name: 'ChipInAI',
        link: 'https://github.com/ChipInAI/chipIn-ai-mobile',
        description: [
          'AI-powered chatbot for financial planning and investment advice.',
        ],
        techStack: ['React', 'Typescript', 'SCSS', 'MUI', 'React-query'],
      },
      {
        name: 'Personal website',
        description: ['This website is a portfolio and a blog.'],
        techStack: ['React', 'Typescript', 'SCSS', 'MUI', 'React-query'],
      },
    ],
  },
  {
    title: 'Experience',
    description: 'The section is under construction...',
    items: [],
  },
  {
    title: 'Blog',
    description: 'The section is under construction...',
    items: [],
  },
];

export default MAIN_DATA;
