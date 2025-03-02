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
    title: 'Professional Software Engineering Portfolio',
    disabled: true,
    link: '...',
    description:
      'Comprehensive analysis of technical expertise and professional development in software engineering.',
  },
  {
    id: 2,
    image: '/posts/post2.png',
    title: 'Optimizing Conversational Outcome Prediction',
    disabled: true,
    link: '...',
    description:
      'Advanced implementation of Monte Carlo Tree Search algorithms for strategic dialogue optimization.',
  },
  {
    id: 3,
    image: '/posts/post3.png',
    title: 'Efficient Context Caching for AI Applications',
    disabled: true,
    link: '...',
    description:
      'Innovative context caching methodologies enhancing performance in AI-powered code review systems.',
  },
];
