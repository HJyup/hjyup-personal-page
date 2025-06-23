import React from 'react';

import { ListLayout } from '../ui/list-layout';

const experienceItems = [
  {
    id: 'solidgate',
    title: 'Solidgate',
    href: 'https://solidgate.com',
    date: '2023 - Present',
    colorClass: 'bg-green-400',
  },
  {
    id: 'project-share',
    title: 'Vice President of Project Share',
    href: 'https://projectshare.comp-soc.com/',
    date: '2025 - Present',
    colorClass: 'bg-violet-400',
  },
  {
    id: 'comp-soc',
    title: 'Committee Member of Comp Soc',
    href: 'https://comp-soc.com/',
    date: '2025 - Present',
    colorClass: 'bg-red-400',
  },
];

export function Experience() {
  return <ListLayout title="Experience" items={experienceItems} />;
}
