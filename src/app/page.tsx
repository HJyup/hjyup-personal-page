'use client';

import {
  CompassIcon,
  FileIcon,
  PencilIcon,
  ProjectorIcon,
  SendIcon,
  Settings,
} from 'lucide-react';

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
        <MusicCard />
        <div className="h-[23vh] rounded-3xl break-inside-avoid bg-gray-100 dark:bg-zinc-800 backdrop-blur-xl">
          <div className="flex flex-col p-5 h-full bg-gray-100 dark:bg-zinc-800 rounded-3xl justify-center">
            <div className="flex items-center justify-between mb-4">
              <h3 className=" text-zinc-500 dark:text-zinc-300 bg-gray-200 dark:bg-zinc-900 w-full p-3 rounded-2xl flex gap-2 items-center text-base sm:text-lg px-5">
                <FileIcon className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <span className="truncate">Projects library</span>
              </h3>
            </div>

            <div className="flex gap-2 flex-1">
              <div className="flex-1 bg-gradient-to-br bg-gray-200 h-24 dark:bg-zinc-900 rounded-2xl p-4 flex flex-col items-center justify-center  hover:scale-[1.02] transition-all duration-200 cursor-pointer group">
                <SendIcon className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0 text-zinc-500 dark:text-zinc-300" />
              </div>
              <div className="flex-1 bg-gradient-to-br bg-gray-200 h-24 dark:bg-zinc-900 rounded-2xl p-4 flex flex-col items-center justify-center  hover:scale-[1.02] transition-all duration-200 cursor-pointer group">
                <PencilIcon className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0 text-zinc-500 dark:text-zinc-300" />
              </div>
              <div className="flex-1 bg-gradient-to-br bg-gray-200 h-24 dark:bg-zinc-900 rounded-2xl p-4 flex flex-col items-center justify-center  hover:scale-[1.02] transition-all duration-200 cursor-pointer group">
                <CompassIcon className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0 text-zinc-500 dark:text-zinc-300" />
              </div>
              <div className="flex-1 bg-gradient-to-br bg-gray-200 h-24 dark:bg-zinc-900 rounded-2xl p-4 flex flex-col items-center justify-center  hover:scale-[1.02] transition-all duration-200 cursor-pointer group">
                <Settings className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0 text-zinc-500 dark:text-zinc-300" />
              </div>
            </div>
          </div>
        </div>
        <GrayPlaceholderCard />
      </GridLayout>
    </div>
  );
}
