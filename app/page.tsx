'use client';

import LinkBlock from '@/components/module/link-block';
import WidgetsPanel from '@/components/module/widgets-panel';
import { BlogLayout } from '@/components/ui/layout/blog-layout';
import { ExperienceLayout } from '@/components/ui/layout/experience-layout';
import { BLOG_POSTS } from '@/const/blog';
import { EXPERIENCE_DATA } from '@/const/experience';
import { useHoverController } from '@/lib/use-hover-controller';

const HOVER_DELAY = 220;

export default function Page() {
  const {
    refs,
    hover,
    hoveredWidget,
    motion: motionProps,
  } = useHoverController({
    initial: 'books',
    delay: HOVER_DELAY,
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
      <div className="flex justify-end items-center w-full md:min-h-screen">
        <div
          id="about"
          className="flex flex-col max-w-3xl justify-center py-14 md:py-16 6 px-8 md:px-24"
        >
          <div className="flex justify-between">
            <h1
              onMouseEnter={hover('books')}
              className="text-neutral-900 dark:text-neutral-50 text-base md:text-lg font-medium"
            >
              Danyil Butov
            </h1>
          </div>

          <div className="text-xs md:text-base text-neutral-700 dark:text-neutral-300 mt-0.5 w-full flex gap-4 mb-5">
            <a
              onMouseEnter={hover('github')}
              href="https://github.com/HJyup"
              className="hover:underline"
            >
              <LinkBlock>Github</LinkBlock>
            </a>
            <a
              onMouseEnter={hover('email')}
              href="mailto:danyil.butov.tech@gmail.com"
              className="hover:underline"
            >
              <LinkBlock>Email</LinkBlock>
            </a>
          </div>

          <p className="text-xs md:text-sm mt-4 w-full md:w-5/6 text-neutral-900 dark:text-neutral-50 leading-relaxed">
            Welcome to my webpage! Here I showcase the things I’ve built and
            learned. Software developer passionate about user-centric design.
          </p>

          <div className="flex flex-col gap-2 w-full">
            <h2 className="text-xs mt-10 text-muted-foreground w-full">
              Education
            </h2>
            <div>
              <p className="text-xs md:text-sm mt-4 text-neutral-900 dark:text-neutral-50 leading-relaxed">
                University of Edinburgh
              </p>
              <p className="text-xs md:text-sm mt-1 text-muted-foreground leading-relaxed">
                BSc Computer Science and Artificial Intelligence
              </p>
            </div>
          </div>

          <ExperienceLayout experiences={EXPERIENCE_DATA} hover={hover} />

          <BlogLayout posts={BLOG_POSTS} hover={hover} />

          <div className="text-xs mt-24 text-muted-foreground w-full mb-4 text-center">
            With Love, Dan &lt;3
          </div>
        </div>
      </div>

      <WidgetsPanel
        refs={refs}
        motionProps={motionProps}
        selectedWidget={hoveredWidget}
      />
    </div>
  );
}
