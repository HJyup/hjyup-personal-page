'use client';

import { forwardRef } from 'react';

import { FigmaComments, PageLayout } from '@/components/ui';
import AnimatedCard from '@/components/ui/animated-card';
import AnimatedCursor from '@/components/ui/animated-cursor';
import { cn } from '@/lib/utils';

const LAYOUT_CONFIG = {
  backgroundColor: 'bg-white',
  verticalLines: [
    { position: 2, color: 'bg-blue-400', className: 'hidden md:block' },
    { position: 6, color: 'bg-blue-400', className: 'hidden md:block' },
    {
      position: 5,
      color: 'bg-blue-400',
      start: 6,
      className: 'hidden md:block',
    },
  ],
  horizontalLines: [
    { position: 2, color: 'bg-blue-400' },
    { position: 3, color: 'bg-blue-400', className: 'hidden md:block' },
    { position: 4, color: 'bg-blue-400', className: 'block md:hidden' },
    { position: 6, color: 'bg-blue-400' },
  ],
};

const CARDS_CONFIG = [
  {
    title: 'Project Share',
    theme: 'purple' as const,
    gridPosition:
      'col-span-full md:col-start-2 md:col-span-2 row-start-3 row-span-3',
  },
  {
    title: 'MicroSketch',
    theme: 'green' as const,
    gridPosition:
      'col-span-full md:col-start-4 md:col-span-2 row-start-6 md:row-start-3 row-span-3',
  },
];

const DESIGN_ANNOTATIONS = {
  horizontalMeasurement: {
    label: '320px',
    position: 'hidden md:flex col-start-2 col-span-2 row-start-6',
  },
  horizontalMeasurementMobile: {
    label: '425px',
    position: 'flex md:hidden col-span-full row-start-6',
  },
  verticalMeasurement: {
    label: '240px',
    position: 'hidden md:flex col-start-6 row-start-3 row-span-3',
  },
};

interface ProjectsSectionProps {
  className?: string;
}

const ProjectsSection = forwardRef<HTMLDivElement, ProjectsSectionProps>(
  ({ className }, ref) => {
    return (
      <PageLayout
        ref={ref}
        className={className}
        backgroundColor={LAYOUT_CONFIG.backgroundColor}
        verticalLines={LAYOUT_CONFIG.verticalLines}
        horizontalLines={LAYOUT_CONFIG.horizontalLines}
      >
        <h1 className="col-span-full md:col-start-2 md:col-span-4 row-start-1 md:row-start-2 font-bold text-xl md:text-4xl flex z-10 text-black items-center px-4">
          <span className="main-text">
            Passionate software engineer with a love for design and frontend
            development,{' '}
            <span className="text-blue-500">
              combined with growing knowledge in building scalable systems.
            </span>
          </span>
        </h1>

        <div
          className="hidden md:flex col-start-1 row-start-1 items-start justify-center p-2"
          data-animate-on-scroll
        >
          <span className="font-caveat text-md text-blue-400">
            This is a page where i want to display my best projects.
          </span>
        </div>

        <div
          className="hidden md:flex col-start-2 row-start-1 col-span-3 items-end pl-4"
          data-animate-on-scroll
        >
          <span className="font-caveat text-md text-blue-400">
            A short "About Me" might fit here — along with a project that shows
            my skills.
          </span>
        </div>

        <div
          className="flex row-start-6 md:justify-end items-end p-2 col-start-1"
          data-animate-on-scroll
        >
          <span className="italic font-mono text-xl md:text-sm text-blue-400 text-right">
            PRJ_001
          </span>
        </div>

        <div className="col-span-full col-start-1 md:col-start-2 row-start-2 md:row-start-3 md:col-span-4 row-span-3 flex flex-col md:flex-row gap-4 p-4">
          {CARDS_CONFIG.map((project, index) => (
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
            'projects-animated-cursor',
            'flex col-start-3 md:col-start-6 row-start-2 self-center justify-self-center',
          )}
          color="blue"
          name="Danyil Butov"
        />

        <div
          className={cn(
            DESIGN_ANNOTATIONS.verticalMeasurement.position,
            'flex-col w-full p-2 justify-start',
          )}
          data-animate-on-scroll
        >
          <div className="flex h-full flex-col items-center justify-center w-fit">
            <div className="flex-1 w-px bg-blue-400" />
            <span
              className={cn(
                'text-xs font-mono text-blue-400',
                'p-2 transform rotate-90 bg-white',
              )}
            >
              {DESIGN_ANNOTATIONS.verticalMeasurement.label}
            </span>
            <div className="flex-1 w-px bg-blue-400" />
          </div>
        </div>

        <div
          className={cn(
            DESIGN_ANNOTATIONS.horizontalMeasurementMobile.position,
            'flex-row h-full p-2 justify-center',
          )}
          data-animate-on-scroll
        >
          <div className="flex w-full flex-row items-center justify-center h-fit">
            <div className="flex-1 h-px bg-blue-400" />
            <span
              className={cn('text-xs font-mono text-blue-400', 'p-2 bg-white')}
            >
              {DESIGN_ANNOTATIONS.horizontalMeasurementMobile.label}
            </span>
            <div className="flex-1 h-px bg-blue-400" />
          </div>
        </div>

        <FigmaComments
          className="hidden md:block col-start-6 row-start-2"
          variant="projects"
        />
      </PageLayout>
    );
  },
);

ProjectsSection.displayName = 'ProjectsSection';

export default ProjectsSection;
