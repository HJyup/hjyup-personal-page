'use client';

import { forwardRef } from 'react';

import { FigmaComments, PageLayout } from '@/components/ui';
import AnimatedCard from '@/components/ui/animated-card';
import AnimatedCursor from '@/components/ui/animated-cursor';
import { cn } from '@/lib/utils';

const LAYOUT_CONFIG = {
  backgroundColor: 'bg-white',
  verticalLines: [
    { position: 2, color: 'bg-blue-400' },
    { position: 6, color: 'bg-blue-400' },
    { position: 5, color: 'bg-blue-400', start: 6 },
  ],
  horizontalLines: [
    { position: 2, color: 'bg-blue-400' },
    { position: 3, color: 'bg-blue-400' },
    { position: 6, color: 'bg-blue-400' },
  ],
};

const CARDS_CONFIG = [
  {
    title: 'Project Share',
    theme: 'purple' as const,
    gridPosition: 'col-start-2 col-span-2 row-start-3 row-span-3',
  },
  {
    title: 'MicroSketch',
    theme: 'green' as const,
    gridPosition: 'col-start-4 col-span-2 row-start-3 row-span-3',
  },
];

const DESIGN_ANNOTATIONS = {
  horizontalMeasurement: {
    label: '320px',
    position: 'col-start-2 col-span-2 row-start-6',
  },
  verticalMeasurement: {
    label: '240px',
    position: 'col-start-6 row-start-3 row-span-3',
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
            'col-start-6 row-start-2 self-center justify-self-center',
          )}
          color="blue"
          name="Danyil Butov"
        />

        <div
          className={cn(
            DESIGN_ANNOTATIONS.verticalMeasurement.position,
            'flex flex-col w-full p-2 justify-start',
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

        <FigmaComments className="col-start-6 row-start-2" variant="projects" />
      </PageLayout>
    );
  },
);

ProjectsSection.displayName = 'ProjectsSection';

export default ProjectsSection;
