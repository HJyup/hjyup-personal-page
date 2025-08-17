'use client';

import { GoArrowUpRight } from 'react-icons/go';
import { motion } from 'framer-motion';

import { ColumnWithBackdrop } from '@/components/module/column-with-backdrop';
import { BooksWidget } from '@/components/module/widgets/books';
import CardWidget from '@/components/module/widgets/card';
import { CompSoc } from '@/components/module/widgets/compSoc';
import { EmailWidget } from '@/components/module/widgets/email';
import { GithubWidget } from '@/components/module/widgets/github';
import { MusicWidget } from '@/components/module/widgets/music';
import AboutThisWebsite from '@/components/module/widgets/posts/about-this-website';
import AnimationsAndRetrospectives from '@/components/module/widgets/posts/animationsAndRetrospective';
import { ProjectShare } from '@/components/module/widgets/projectShare';
import { BlogLayout } from '@/components/ui/layout/blog-layout';
import { ExperienceLayout } from '@/components/ui/layout/experience-layout';
import { BLOG_POSTS } from '@/const/blog';
import { EXPERIENCE_DATA } from '@/const/experience';
import { useHoverController } from '@/lib/use-hover-controller';

const HOVER_DELAY = 300;

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
      <div className="flex justify-end items-center w-full pt-14 md:py-16 6 px-8 md:px-24">
        <header
          id="about"
          className="flex flex-col max-w-xl justify-center md:min-h-screen"
        >
          <div className="flex justify-between">
            <h1
              onMouseEnter={hover('books')}
              className="text-neutral-900 dark:text-neutral-50 text-base md:text-lg font-medium"
            >
              Danyil Butov
            </h1>
          </div>

          <div className="text-xs md:text-base text-neutral-700 dark:text-neutral-300 mt-0.5 w-full flex gap-4">
            <a
              onMouseEnter={hover('github')}
              href="https://github.com/HJyup"
              className="hover:underline flex items-center gap-1"
            >
              Github <GoArrowUpRight className="w-3 h-3 md:w-4 md:h-4" />
            </a>
            <a
              onMouseEnter={hover('email')}
              href="mailto:danyil.butov.tech@gmail.com"
              className="hover:underline flex items-center gap-1"
            >
              Email <GoArrowUpRight className="w-3 h-3 md:w-4 md:h-4" />
            </a>
          </div>

          <h2 className="text-xs mt-10 text-muted-foreground w-full">About</h2>
          <p className="text-xs md:text-sm mt-4 w-full md:w-5/6 text-neutral-900 dark:text-neutral-50 leading-relaxed">
            Software developer passionate about user-centric design. I enjoy
            building seamless, functional products that feel intuitive to use.
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
        </header>
      </div>

      <div
        className="fixed h-screen w-1/2 right-0 overflow-hidden hidden md:block"
        ref={refs.container}
      >
        <div className="absolute top-0 left-0 h-full w-[50px] bg-gradient-to-r from-background to-transparent z-20" />
        <motion.div
          className="flex flex-row items-center justify-center w-max gap-4 h-full"
          {...motionProps}
        >
          <ColumnWithBackdrop
            className="ml-8"
            hoveredWidget={hoveredWidget}
            items={[
              { id: 'about', component: <AboutThisWebsite ref={refs.about} /> },
              { id: 'books', component: <BooksWidget ref={refs.books} /> },
              { id: 'email', component: <EmailWidget ref={refs.email} /> },
            ]}
          />

          <ColumnWithBackdrop
            hoveredWidget={hoveredWidget}
            items={[
              {
                id: 'project-share',
                component: <ProjectShare ref={refs['project-share']} />,
              },
              {
                id: 'solidgate',
                component: <CardWidget ref={refs.solidgate} />,
              },
              { id: 'music', component: <MusicWidget ref={refs.music} /> },
            ]}
          />

          <ColumnWithBackdrop
            hoveredWidget={hoveredWidget}
            items={[
              { id: 'github', component: <GithubWidget ref={refs.github} /> },
              {
                id: 'comp-soc',
                component: <CompSoc ref={refs['comp-soc']} />,
              },
              {
                id: 'animations',
                component: (
                  <AnimationsAndRetrospectives ref={refs.animations} />
                ),
              },
            ]}
          />
        </motion.div>
      </div>
    </div>
  );
}
