import { atom } from 'jotai';

import { PICTURES } from '@/const/pictures';

export const pageAtom = atom(0);

export const usePages = () => {
  const pages = [
    {
      front: 'book-cover',
      back: PICTURES[0],
    },
  ];

  for (let i = 1; i < PICTURES.length - 1; i += 2) {
    pages.push({
      front: PICTURES[i % PICTURES.length],
      back: PICTURES[(i + 1) % PICTURES.length],
    });
  }

  pages.push({
    front: PICTURES[PICTURES.length - 1],
    back: 'book-back',
  });

  return pages;
};
