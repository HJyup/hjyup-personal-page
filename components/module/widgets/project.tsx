import React from 'react';

import { BigWidgetLayout } from '@/components/ui/layout/widget-layouts';

interface ProjectWidgetProps {
  videoSrc?: string;
  className?: string;
  title?: string;
  description?: string;
}

export function ProjectWidget({
  videoSrc = '/videos/project-showcase.mov',
  className = '',
  title = 'Project Showcase',
  description = 'A showcase of the latest project development',
}: ProjectWidgetProps) {
  return (
    <BigWidgetLayout className={className}>
      <div
        className="relative bg-gray-100 dark:bg-zinc-800 rounded-2xl sm:rounded-3xl overflow-hidden h-full w-full"
        role="region"
        aria-label="Project showcase video"
      >
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover rounded-2xl sm:rounded-3xl focus:outline-none"
          aria-label={`${title} - ${description}`}
          title={title}
          tabIndex={0}
        />
        <div 
          className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300"
          aria-hidden="true"
        >
          {title}
        </div>
      </div>
    </BigWidgetLayout>
  );
}
