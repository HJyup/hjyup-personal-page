import React from 'react';

import { ListLayout } from '../ui/list-layout';

const blogItems = [
  {
    id: 'website-build',
    title: 'How i built this website?',
    date: '2025 - 07 - 15',
    colorClass: 'bg-zinc-400',
    href: '/posts/portfolio',
  },
  {
    id: 'important-stuff',
    title: 'Somevery very important stuff',
    date: 'Coming soon',
    colorClass: 'bg-violet-400',
    isBlurred: true,
    isDisabled: true,
  },
  {
    id: 'other-stuff',
    title: 'The other stuff',
    date: 'Coming soon',
    colorClass: 'bg-red-400',
    isBlurred: true,
    isDisabled: true,
  },
];

export function Blog() {
  return <ListLayout title="Blog" items={blogItems} />;
}
