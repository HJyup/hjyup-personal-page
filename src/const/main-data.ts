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
    title: 'Projects',
    description: "Here's listed projects that I've done.",
    items: [
      {
        name: 'Search Engine',
        description: ['The project is in the planning stage.'],
        techStack: [
          'Golang',
          'Buf Schema Registry',
          'Microservices',
          'Python',
          'TensorFlow',
        ],
      },
      {
        name: 'FictAdvisor',
        link: 'https://fictadvisor.com',
        description: [
          'Platform for teacher evaluations and interactive timetables across all Universities faculties.',
        ],
        techStack: ['Next.js', 'Typescript', 'SCSS', 'MUI', 'React-query'],
      },
      {
        name: 'ChipInAI',
        link: 'https://github.com/ChipInAI/chipIn-ai-mobile',
        description: ['AI-powered mobile app for automated bill splitting.'],
        techStack: ['React-Native', 'Typescript', 'Tailwind CSS', 'Expo'],
      },
      {
        name: 'Personal website',
        description: ['This website is a portfolio and a blog.'],
        techStack: ['Next.js', 'Typescript', 'Tailwind CSS', 'Three.js'],
      },
    ],
  },
  {
    title: 'Experience',
    description: 'Here is my work experience.',
    items: [
      {
        name: 'Solidgate',
        link: 'https://solidgate.com',
        description: [
          'Have been working for a fintech company developing a business-to-business payment processing platform',
          'that enables businesses to accept online payments in over 150 countries.',
        ],
        techStack: [
          'React',
          'Typescript',
          'Golang',
          'Buf Schema Registry',
          'React-query',
        ],
      },
    ],
  },
];

export default MAIN_DATA;
