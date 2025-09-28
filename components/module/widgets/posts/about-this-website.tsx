import { forwardRef, HTMLAttributes } from 'react';
import clsx from 'clsx';
import Image from 'next/image';

import PostWidgetLayout from './post-widget-layout';

type Props = { className?: string } & HTMLAttributes<HTMLDivElement>;

const AboutThisWebsite = forwardRef<HTMLDivElement, Props>(
  ({ className }, ref) => {
    const baseImageProps = {
      width: 300,
      height: 300,
      draggable: false,
      sizes: '300px',
      className:
        'object-cover absolute bottom-[-5%] left-[15%] rounded-2xl pointer-events-none',
    };

    return (
      <PostWidgetLayout
        ref={ref}
        link="posts/about"
        className={clsx('relative overflow-hidden', className)}
        title="About this website"
        description="How I came up with the idea"
      >
        <Image
          {...baseImageProps}
          src="/posts/main-dark.webp"
          alt="About this website"
          priority
          className={clsx(
            baseImageProps.className,
            'border border-neutral-800 z-[1] opacity-0 dark:opacity-100 transition-opacity duration-150',
          )}
        />

        <Image
          {...baseImageProps}
          src="/posts/project-light.webp"
          alt="About this website"
          priority
          className={clsx(
            baseImageProps.className,
            'border border-neutral-200 z-[1] opacity-100 dark:opacity-0 transition-opacity duration-150',
          )}
        />
      </PostWidgetLayout>
    );
  },
);

AboutThisWebsite.displayName = 'AboutThisWebsite';

export default AboutThisWebsite;
