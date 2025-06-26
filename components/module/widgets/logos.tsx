'use client';

import React from 'react';

import Htb from '@/components/ui/icons/htb';
import ProjectShare from '@/components/ui/icons/project-share';
import { MediumWidgetLayout } from '@/components/ui/layout/widget-layouts';
import { useWidgetEdit } from '@/provider/widget-edit-provider';

interface LogosWidgetProps {
  className?: string;
}

export function LogosWidget({ className = '' }: LogosWidgetProps) {
  const { isEditMode } = useWidgetEdit();

  return (
    <MediumWidgetLayout className={className} isBackground={false}>
      <div
        className="h-full flex items-center justify-center gap-3 sm:gap-4 lg:gap-5"
        role="region"
        aria-label="Partner organizations and projects"
      >
        <a
          href="https://hacktheburgh.com/"
          className={`w-1/2 max-w-xs h-full bg-gray-100 dark:bg-[hsl(0,0%,10%)] rounded-2xl sm:rounded-3xl flex justify-center items-center group focus:outline-none ${!isEditMode ? 'cursor-pointer transition-all duration-300 hover:scale-[1.01]' : ''}`}
          aria-label="Visit HackTheBurgh hackathon website"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Htb
            className="w-[60%] h-[60%] transition-transform duration-300 group-hover:scale-105"
            isEditMode={isEditMode}
          />
        </a>
        <a
          href="https://projectshare.comp-soc.com/"
          className={`w-1/2 max-w-xs h-full bg-gray-100 dark:bg-[hsl(0,0%,10%)] rounded-2xl sm:rounded-3xl flex justify-center items-center group focus:outline-none ${!isEditMode ? 'cursor-pointer transition-all duration-300 hover:scale-[1.01]' : ''}`}
          aria-label="Visit ProjectShare platform by CompSoc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectShare
            className="w-[60%] h-[60%] transition-transform duration-300 group-hover:scale-105"
            isEditMode={isEditMode}
          />
        </a>
      </div>
    </MediumWidgetLayout>
  );
}
