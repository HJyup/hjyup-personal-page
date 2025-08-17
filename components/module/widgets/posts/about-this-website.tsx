import { forwardRef, HTMLAttributes } from 'react';
import Image from 'next/image';

import PostWidgetLayout from './post-widget-layout';

type Props = { className?: string } & HTMLAttributes<HTMLDivElement>;

const AboutThisWebsite = forwardRef<HTMLDivElement, Props>(
  ({ className }, ref) => {
    return (
      <PostWidgetLayout
        ref={ref}
        link="posts/about"
        className={`group relative overflow-hidden ${className ?? ''}`}
        title="About this website"
        description="How i came up with the idea"
      >
        <Image
          src="/posts/prev-iter-1-dark.png"
          alt="About this website"
          width={300}
          height={300}
          draggable={false}
          priority
          sizes="300px"
          className="object-cover absolute bottom-[-5%] left-[15%] rounded-2xl border border-zinc-800 z-[1] pointer-events-none
             opacity-0 dark:opacity-100 transition-opacity duration-150"
        />

        <Image
          src="/posts/prev-iter-2-dark.png"
          alt="About this website"
          width={300}
          height={300}
          draggable={false}
          priority
          sizes="300px"
          className="object-cover absolute bottom-[-5%] left-[15%] scale-95 rounded-2xl border border-zinc-800 pointer-events-none
             opacity-0 dark:opacity-100 transition-[opacity,transform] duration-300 ease-out will-change-transform group-hover:-translate-y-[40px]"
        />

        <Image
          src="/posts/prev-iter-2-light.png"
          alt="About this website"
          width={300}
          height={300}
          draggable={false}
          priority
          sizes="300px"
          className="object-cover absolute bottom-[-5%] left-[15%] rounded-2xl border border-zinc-200 z-[1] pointer-events-none
             opacity-100 dark:opacity-0 transition-opacity duration-150"
        />

        <Image
          src="/posts/prev-iter-1-light.png"
          alt="About this website"
          width={300}
          height={300}
          draggable={false}
          priority
          sizes="300px"
          className="object-cover absolute bottom-[-5%] left-[15%] scale-95 rounded-2xl border border-zinc-200 pointer-events-none
             opacity-100 dark:opacity-0 transition-[opacity,transform] duration-300 ease-out will-change-transform group-hover:-translate-y-[40px]"
        />
      </PostWidgetLayout>
    );
  },
);

AboutThisWebsite.displayName = 'AboutThisWebsite';

export default AboutThisWebsite;
