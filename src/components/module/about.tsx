import React from 'react';
import { MapPinIcon } from 'lucide-react';

export function About() {
  return (
    <div id="about">
      <div className="text-muted-foreground text-lg sm:text-xl">
        Danyil Butov
      </div>
      <div className="text-lg sm:text-xl dark:text-zinc-300">
        Software Developer
      </div>
      <div className="text-muted-foreground text-xs sm:text-sm mt-8 sm:mt-12">
        About
      </div>
      <div className="text-base sm:text-lg lg:text-xl mt-3 xl:w-2/3 lg:w-3/4 md:w-5/6 w-full leading-relaxed dark:text-zinc-300">
        Based in{' '}
        <span className="inline-flex items-center px-1.5 py-0.5 gap-1.5 text-base sm:text-lg lg:text-xl bg-zinc-100 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-300 rounded-md">
          <MapPinIcon className="w-4 h-4 text-zinc-900 dark:text-zinc-300" />
          Edinburgh
        </span>
        . CS student at University of Edinburgh and software developer at
        Solidgate. Welcome to my third iteration of my portfolio. Built with
        care and a touch of fun.
      </div>
    </div>
  );
}
