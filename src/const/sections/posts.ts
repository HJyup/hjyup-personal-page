export type Post = {
  id: number;
  image: string;
  title: string;
  disabled: boolean;
  link: string;
  description: string;
};

export const POSTS: Post[] = [
  {
    id: 1,
    image: '/posts/post1.png',
    title: 'Me as a Software Engineer',
    disabled: false,
    link: '/posts/intro',
    description:
      'An introduction to my journey as a software engineer and my project experiences.',
  },
  {
    id: 2,
    image: '/posts/post2.png',
    title: 'Design Thinking: Lessons from Real-World Projects',
    disabled: true,
    link: '...',
    description:
      'Practical applications of design thinking in projects like Project Share and mlt-agents-tool.',
  },
  {
    id: 3,
    image: '/posts/post3.png',
    title: 'Conversations with Monte Carlo Tree Search',
    disabled: true,
    link: '...',
    description:
      'Exploring how Monte Carlo Tree Search algorithms can predict conversation outcomes.',
  },
];
