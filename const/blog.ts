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
    title: 'About This Website',
    description: 'Design overview of how this site was built.',
    link: '/posts/about',
  },
  {
    id: 'animations',
    title: 'Animations',
    description: 'How to build animations that feel better.',
    link: '/posts/animations',
  },
];
