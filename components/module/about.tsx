import React from 'react';

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
        CS student at University of Edinburgh and software developer at
        Solidgate. Im passionate about building products that are not only
        functional but also beautiful and easy to use. This is my third
        iteration of my portfolio. Built with love and care.
      </div>
    </div>
  );
}
