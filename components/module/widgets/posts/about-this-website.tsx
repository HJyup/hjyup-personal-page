import { forwardRef, HTMLAttributes } from 'react';
import clsx from 'clsx';
import Image from 'next/image';

import PostWidgetLayout from './post-widget-layout';

type Props = { className?: string } & HTMLAttributes<HTMLDivElement>;

const AboutThisWebsite = forwardRef<HTMLDivElement, Props>(
  ({ className }, ref) => {
    return (
      <PostWidgetLayout
        ref={ref}
        link="posts/about"
        className={clsx('flex flex-col justify-between', className)}
        title="About this website"
        description="How I came up with the idea"
      >
        <div className="relative w-full mx-auto h-[180px]">
          <Image
            src="/posts/main-dark.webp"
            alt="About this website"
            fill
            priority
            className="object-cover pointer-events-none rounded-md border border-neutral-800 hidden dark:block"
          />
          <Image
            src="/posts/project-light.webp"
            alt="About this website"
            fill
            priority
            className="object-cover pointer-events-none rounded-md border border-neutral-200 block dark:hidden"
          />
        </div>
      </PostWidgetLayout>
    );
  },
);

AboutThisWebsite.displayName = 'AboutThisWebsite';

export default AboutThisWebsite;
