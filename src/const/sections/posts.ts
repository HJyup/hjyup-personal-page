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
      'A showcase of my skills and experiences in software engineering.',
  },
  {
    id: 2,
    image: '/posts/post2.png',
    title: 'Conversations with Monte Carlo Tree Search',
    disabled: true,
    link: '...',
    description:
      'Exploring how Monte Carlo Tree Search algorithms can predict conversation outcomes.',
  },
  {
    id: 3,
    image: '/posts/post3.png',
    title: 'Context Caching Techniques for AI Systems',
    disabled: true,
    link: '...',
    description:
      'Context caching techniques that enhance performance in AI-driven applications, illustrated through a code review tool.',
  },
];
