import React from 'react';
import Image from 'next/image';

import { MediumWidgetLayout } from '@/components/ui/layout/widget-layouts';

export function BooksWidget({ className = '' }: { className?: string }) {
  return (
    <MediumWidgetLayout className={className}>
      <div
        className="h-full w-full p-4 sm:p-5 lg:p-6 flex flex-row items-center gap-4 sm:gap-5 lg:gap-6 relative overflow-hidden rounded-2xl sm:rounded-3xl"
        role="region"
        aria-label="Books reading tracker"
      >
        <Image
          className="w-24 lg:w-32 h-36 lg:h-48 flex-shrink-0"
          src="/books/design_of_things.jpg"
          alt="The Design of Everyday Things"
          width={288}
          draggable={false}
          height={432}
        />

        {/* Main content */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm">
              CURRENTLY READING
            </div>
            <a
              href="https://www.amazon.co.uk/Design-Everyday-Things-Revised-Expanded/dp/0465050654/ref=asc_df_0465050654?mcid=e93f5bb3984336ac97c5ef83aea9e26c&hvocijid=9856961943512471641-0465050654-&hvexpln=74&tag=googshopuk-21&linkCode=df0&hvadid=696285193871&hvpos=&hvnetw=g&hvrand=9856961943512471641&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9045438&hvtargid=pla-2281435176898&psc=1&gad_source=1"
              className="text-zinc-700 dark:text-zinc-300 font-medium text-base sm:text-lg leading-tight hover:underline"
            >
              The Design of Everyday Things
            </a>
            <p className="text-zinc-400 dark:text-zinc-600 text-xs sm:text-sm">
              by Don Norman
            </p>
          </div>
        </div>
      </div>
    </MediumWidgetLayout>
  );
}
