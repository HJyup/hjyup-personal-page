import { WidgetId } from '@/types/widgets';

export interface BlogPost {
  id: WidgetId;
  title: string;
  description: string;
  link: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'about',
    title: 'About this website',
    description: 'How i came up with the idea',
    link: '/posts/about',
  },
  {
    id: 'animations',
    title: 'Animations & Retrospectives',
    description: "Some thoughts on Emil Kowalski's course and some experiments",
    link: '/posts/animations',
  },
];
