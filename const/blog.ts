import { ListItem } from '@/components/ui/layout/list-layout';

export const BLOG: ListItem[] = [
  {
    id: 'website-build',
    title: 'About this website',
    date: '03-07-2025',
    colour: 'blue',
    href: '/posts/portfolio',
  },
  {
    id: 'animations',
    title: 'Animations',
    date: 'Coming soon',
    colour: 'yellow',
    isBlurred: true,
    isDisabled: true,
  },
  {
    id: 'other-stuff',
    title: 'The other stuff',
    date: 'Coming soon',
    colour: 'gray',
    isBlurred: true,
    isDisabled: true,
  },
];
