import { motion, MotionProps } from 'framer-motion';

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
import { WidgetId } from '@/types/widgets';

const WidgetsPanel = ({
  refs,
  selectedWidget,
  motionProps,
}: {
  selectedWidget: WidgetId | null;
  refs: Record<WidgetId, (element: HTMLElement | null) => void>;
  motionProps: MotionProps;
}) => {
  return (
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
          hoveredWidget={selectedWidget}
          items={[
            { id: 'about', component: <AboutThisWebsite ref={refs.about} /> },
            { id: 'books', component: <BooksWidget ref={refs.books} /> },
            { id: 'email', component: <EmailWidget ref={refs.email} /> },
          ]}
        />

        <ColumnWithBackdrop
          hoveredWidget={selectedWidget}
          items={[
            {
              id: 'projectShare',
              component: <ProjectShare ref={refs.projectShare} />,
            },
            {
              id: 'solidgate',
              component: <CardWidget ref={refs.solidgate} />,
            },
            { id: 'music', component: <MusicWidget ref={refs.music} /> },
          ]}
        />

        <ColumnWithBackdrop
          hoveredWidget={selectedWidget}
          items={[
            { id: 'github', component: <GithubWidget ref={refs.github} /> },
            {
              id: 'compSoc',
              component: <CompSoc ref={refs.compSoc} />,
            },
            {
              id: 'animations',
              component: <AnimationsAndRetrospectives ref={refs.animations} />,
            },
          ]}
        />
      </motion.div>
    </div>
  );
};

export default WidgetsPanel;
