'use client';

import { BookIcon, CodeIcon, LinkIcon } from 'lucide-react';

import FolderPack from '@/components/folder-pack';

export default function Home() {
  return (
    <main className="min-h-screen py-16 px-12 flex flex-col items-center">
      <div className="max-w-lg">
        <p className="uppercase text-zinc-800 dark:text-zinc-50 text-sm">
          Danyil Butov
        </p>
        <p className=" uppercase text-zinc-500 dark:text-zinc-400 text-sm">
          Software Engineer
        </p>

        <div className="flex gap-5 mt-6">
          <div className="flex items-center justify-center gap-1 text-sm text-zinc-800 dark:text-zinc-100 underline">
            Github <LinkIcon className="w-3 h-3" />
          </div>
          <div className="flex items-center justify-center gap-1 text-sm text-zinc-800 dark:text-zinc-100 underline">
            LinkedIn <LinkIcon className="w-3 h-3" />
          </div>
        </div>

        <p className="text-zinc-700 dark:text-zinc-300 mt-12 max-w-lg text-sm leading-6">
          I'm a software engineer with 2 years of experience at Solidgate, where
          I build fintech products. I’m passionate about crafting user-centric
          products. Based in Edinburgh, Scotland.
        </p>

        <p className="text-zinc-700 dark:text-zinc-300 mt-6 max-w-lg text-sm leading-6">
          I'm also a Computer Science and Artificial Intelligence student at the
          University of Edinburgh, actively involved in the tech community. I
          previously led technical projects for HackTheBurgh, Scotland’s largest
          student hackathon.
        </p>

        <p className=" uppercase text-zinc-500 dark:text-zinc-300 text-sm mt-12">
          Experience
        </p>
        <div className="mt-4 flex flex-col gap-1">
          <p className="text-sm text-zinc-800 dark:text-zinc-100">
            Software Engineer at{' '}
            <span className="inline-flex items-center justify-center gap-1 text-sm text-zinc-800 dark:text-zinc-100 underline">
              Solidgate <LinkIcon className="w-3 h-3" />
            </span>
          </p>
          <p className="text-xs text-zinc-500">August 2023 - Present</p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 max-w-lg">
            Working within the Financial Team to build internal tools with a
            strong UI/UX focus, including complex pricing systems for digitising
            merchant onboarding. I also contribute to component and design
            systems used across all merchant platforms.
          </p>
        </div>
        <p className=" uppercase text-zinc-500 dark:text-zinc-300 text-sm mt-12">
          Projects
        </p>
        <div className="flex gap-12 mt-32">
          <FolderPack />
          <FolderPack color="green" icon={BookIcon} />
          <FolderPack color="purple" icon={CodeIcon} />
        </div>
      </div>
    </main>
  );
}
