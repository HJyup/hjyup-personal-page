'use client';

import {
  About,
  Blog,
  Experience,
  MusicCard,
  NotesCard,
} from '@/components/module';
import { GrayPlaceholderCard, GridLayout } from '@/components/ui';

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
        <GrayPlaceholderCard />
        <GrayPlaceholderCard />
        <MusicCard />
        <GrayPlaceholderCard />
        <GrayPlaceholderCard />
      </GridLayout>
    </div>
  );
}
