import { ListItem } from '@/components/ui/layout/list-layout';

export const BLOG: ListItem[] = [
  {
    id: 'website-build',
    title: 'How i built this website?',
    date: '2025 - 07 - 15',
    colour: 'gray',
    href: '/posts/portfolio',
  },
  {
    id: 'important-stuff',
    title: 'Somevery very important stuff',
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
