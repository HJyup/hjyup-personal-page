'use client';

import { forwardRef } from 'react';

import { FigmaComments, PageLayout } from '@/components/ui';
import AnimatedCard from '@/components/ui/animated-card';
import AnimatedCursor from '@/components/ui/animated-cursor';
import { COMMON_CLASSES, CSS_CLASSES } from '@/const/css-classes';
import {
  DESIGN_ANNOTATIONS,
  PROJECT_CARDS,
  PROJECTS_LAYOUT_CONFIG,
} from '@/const/layout-configs';
import { cn } from '@/lib/utils';

interface ProjectsSectionProps {
  className?: string;
}

const ProjectsSection = forwardRef<HTMLDivElement, ProjectsSectionProps>(
  ({ className }, ref) => {
    return (
      <PageLayout
        ref={ref}
        className={className}
        backgroundColor={PROJECTS_LAYOUT_CONFIG.backgroundColor}
        verticalLines={PROJECTS_LAYOUT_CONFIG.verticalLines}
        horizontalLines={PROJECTS_LAYOUT_CONFIG.horizontalLines}
      >
        <h1 className="col-start-2 col-span-4 row-start-2 font-bold text-4xl flex z-10 text-black items-center p-4">
          <span className="main-text">
            Passionate software engineer with a love for design and frontend
            development,
            <span className="text-blue-500">
              combined with growing knowledge in building scalable systems.
            </span>
          </span>
        </h1>

        <div
          className="col-start-1 row-start-1 flex items-start justify-center p-2"
          data-animate-on-scroll
        >
          <span className="font-caveat text-md text-blue-400">
            This is a page where i want to display my best projects.
          </span>
        </div>

        <div
          className="col-start-2 row-start-1 col-span-3 flex items-end pl-4"
          data-animate-on-scroll
        >
          <span className="font-caveat text-md text-blue-400">
            A short "About Me" might fit here — along with a project that shows
            my skills.
          </span>
        </div>

        <div
          className="row-start-5 flex justify-end items-end p-2"
          data-animate-on-scroll
        >
          <span className="italic font-mono text-sm text-blue-400 text-right">
            PRJ_001
          </span>
        </div>

        <div className="col-start-2 row-start-3 col-span-4 row-span-3 flex gap-4 p-4">
          {PROJECT_CARDS.map((project, index) => (
            <AnimatedCard
              key={index}
              title={project.title}
              theme={project.theme}
              className="w-full h-full"
            />
          ))}
        </div>

        <AnimatedCursor
          className={cn(
            CSS_CLASSES.PROJECTS_ANIMATED_CURSOR,
            'col-start-6 row-start-2 self-center justify-self-center',
          )}
          color="blue"
          name="Danyil Butov"
        />

        <div
          className={cn(
            DESIGN_ANNOTATIONS.horizontalMeasurement.position,
            'flex items-start justify-start pt-5 px-2',
          )}
          data-animate-on-scroll
        >
          <div className="flex w-full items-center justify-start">
            <div className={COMMON_CLASSES.MEASUREMENT.LINE.HORIZONTAL} />
            <span className={cn(COMMON_CLASSES.MEASUREMENT.LABEL, 'px-2')}>
              {DESIGN_ANNOTATIONS.horizontalMeasurement.label}
            </span>
            <div className={COMMON_CLASSES.MEASUREMENT.LINE.HORIZONTAL} />
          </div>
        </div>

        <div
          className={cn(
            DESIGN_ANNOTATIONS.verticalMeasurement.position,
            'flex flex-col w-full p-2 justify-start',
          )}
          data-animate-on-scroll
        >
          <div className="flex h-full flex-col items-center justify-center w-fit">
            <div className={COMMON_CLASSES.MEASUREMENT.LINE.VERTICAL} />
            <span
              className={cn(
                COMMON_CLASSES.MEASUREMENT.LABEL,
                'p-2 transform rotate-90 bg-white',
              )}
            >
              {DESIGN_ANNOTATIONS.verticalMeasurement.label}
            </span>
            <div className={COMMON_CLASSES.MEASUREMENT.LINE.VERTICAL} />
          </div>
        </div>

        <FigmaComments className="col-start-6 row-start-2" variant="projects" />
      </PageLayout>
    );
  },
);

ProjectsSection.displayName = 'ProjectsSection';

export default ProjectsSection;
