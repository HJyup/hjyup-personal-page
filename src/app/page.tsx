'use client';

import {
  About,
  Blog,
  Experience,
  GithubCard,
  LinkedinCard,
  MusicCard,
  NotesCard,
  PhotoCard,
  ProjectCard,
} from '@/components/module';
import { GrayPlaceholderCard, GridLayout } from '@/components/ui';

const photos = [
  {
    src: '/photo_library/edinburgh_1.jpeg',
    alt: 'Edinburgh',
    date: 'Jun 2025',
  },
  {
    src: '/photo_library/lnd_1.jpeg',
    alt: 'LND',
    date: 'Mar 2025',
  },
  {
    src: '/photo_library/paris_1.jpeg',
    alt: 'Paris',
    date: 'May 2025',
  },
  {
    src: '/photo_library/paris_2.jpeg',
    alt: 'Paris',
    date: 'May 2025',
  },
  {
    src: '/photo_library/paris_3.jpeg',
    alt: 'Paris',
    date: 'May 2025',
  },
];

export default function Page() {
  return (
    <div className="text-black flex flex-col pt-16 sm:pt-20 md:pt-24 justify-center px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col w-full items-center h-full">
        <div className="w-full max-w-6xl">
          <About />
          <div className="flex flex-col lg:flex-row lg:justify-between w-full gap-6 lg:gap-8">
            <Experience />
            <Blog />
          </div>
        </div>
      </div>

      <GridLayout>
        <NotesCard />
        <ProjectCard />
        <GrayPlaceholderCard />
        <MusicCard />
        <div className="flex gap-3">
          <PhotoCard photos={photos} />
          <div className="flex flex-col gap-3 w-1/2 bg-gray-100 dark:bg-zinc-800 rounded-2xl sm:rounded-3xl p-2 h-[23vh]">
            <GithubCard />
            <LinkedinCard />
          </div>
        </div>
        <GrayPlaceholderCard />
        <GrayPlaceholderCard />
      </GridLayout>
    </div>
  );
}
