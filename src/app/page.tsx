'use client';

import {
  ComputerIcon,
  FileIcon,
  GithubIcon,
  InstagramIcon,
  Linkedin,
  LinkIcon,
  MailIcon,
  Pencil,
  Send,
} from 'lucide-react';
import Image from 'next/image';

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
        <div className="relative bg-gray-100 dark:bg-zinc-800 h-[50vh] rounded-2xl sm:rounded-3xl break-inside-avoid flex items-end justify-center">
          <Image
            src="/photos/project_share.png"
            alt="Placeholder"
            width={1200}
            height={1200}
            className="w-full h-full object-cover rounded-2xl sm:rounded-3xl absolute z-0"
          />
          <div className="relative mb-5">
            <div className="relative bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/15 dark:border-white/10 rounded-full py-3 px-6 shadow-sm shadow-black/20 dark:shadow-black/60 ring-1 ring-white/10 dark:ring-white/5 flex gap-8">
              <ComputerIcon className="w-5 h-5 flex-shrink-0 text-zinc-500 dark:text-zinc-100" />
              <FileIcon className="w-5 h-5 flex-shrink-0 text-zinc-500 dark:text-zinc-100" />
              <Pencil className="w-5 h-5 flex-shrink-0 text-zinc-500 dark:text-zinc-100" />
              <Send className="w-5 h-5 flex-shrink-0 text-zinc-500 dark:text-zinc-100" />
            </div>
          </div>
        </div>
        <GrayPlaceholderCard />
        <MusicCard />
        <div className="h-[15vh] sm:h-[17vh] md:h-[23vh] rounded-2xl sm:rounded-3xl break-inside-avoid bg-gray-100 dark:bg-zinc-800 backdrop-blur-xl">
          <div className="flex flex-col p-3 sm:p-4 md:p-5 h-full bg-gray-100 dark:bg-zinc-800 rounded-2xl sm:rounded-3xl justify-center">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h3 className="text-sm sm:text-base md:text-lg text-zinc-500 dark:text-zinc-300 bg-gray-200 dark:bg-zinc-900 w-full p-2 sm:p-3 rounded-xl sm:rounded-2xl flex gap-2 items-center px-3 sm:px-4 md:px-5">
                <LinkIcon className="w-5 h-5 flex-shrink-0" />
                <span className="truncate">Links to connect</span>
              </h3>
            </div>

            <div className="flex gap-1.5 sm:gap-2 flex-1">
              <div className="flex-1 bg-gradient-to-br bg-gray-200 h-16 sm:h-20 md:h-24 dark:bg-zinc-900 rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 flex flex-col items-center justify-center hover:scale-[1.02] transition-all duration-200 cursor-pointer group">
                <GithubIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 flex-shrink-0 text-zinc-500 dark:text-zinc-300" />
              </div>
              <div className="flex-1 bg-gradient-to-br bg-gray-200 h-16 sm:h-20 md:h-24 dark:bg-zinc-900 rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 flex flex-col items-center justify-center hover:scale-[1.02] transition-all duration-200 cursor-pointer group">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 flex-shrink-0 text-zinc-500 dark:text-zinc-300" />
              </div>
              <div className="flex-1 bg-gradient-to-br bg-gray-200 h-16 sm:h-20 md:h-24 dark:bg-zinc-900 rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 flex flex-col items-center justify-center hover:scale-[1.02] transition-all duration-200 cursor-pointer group">
                <InstagramIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 flex-shrink-0 text-zinc-500 dark:text-zinc-300" />
              </div>
              <div className="flex-1 bg-gradient-to-br bg-gray-200 h-16 sm:h-20 md:h-24 dark:bg-zinc-900 rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 flex flex-col items-center justify-center hover:scale-[1.02] transition-all duration-200 cursor-pointer group">
                <MailIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 flex-shrink-0 text-zinc-500 dark:text-zinc-300" />
              </div>
            </div>
          </div>
        </div>
        <GrayPlaceholderCard />
        <GrayPlaceholderCard />
      </GridLayout>
    </div>
  );
}
