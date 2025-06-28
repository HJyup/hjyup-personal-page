import { ListItem } from '@/components/ui/layout/list-layout';

export const BLOG: ListItem[] = [
  {
    id: 'website-build',
    title: 'How I Built This Website?',
    date: '15-07-2025',
    colour: 'gray',
    href: '/posts/portfolio',
  },
  {
    id: 'important-stuff',
    title: 'Some very important stuff',
    date: 'Coming soon',
    colour: 'purple',
    isBlurred: true,
    isDisabled: true,
  },
  {
    id: 'other-stuff',
    title: 'The other stuff',
    date: 'Coming soon',
    colour: 'red',
    isBlurred: true,
    isDisabled: true,
  },
];
