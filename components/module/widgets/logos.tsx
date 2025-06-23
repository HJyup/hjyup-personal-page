'use client';

import React from 'react';

import Htb from '@/components/ui/icons/htb';
import ProjectShare from '@/components/ui/icons/project-share';
import { useWidgetEdit } from '@/lib/widgets/use-widget-edit-context';

interface LogosWidgetProps {
  className?: string;
}

export function LogosWidget({ className = '' }: LogosWidgetProps) {
  const { isEditMode } = useWidgetEdit();

  return (
    <div
      className={`h-[25vh] flex items-center justify-center gap-3 ${className}`}
    >
      <div
        className={`w-1/2 h-full bg-gray-100 dark:bg-zinc-800 rounded-2xl sm:rounded-3xl flex justify-center items-center group ${!isEditMode ? 'cursor-pointer transition-all duration-300 hover:scale-[1.02]' : ''}`}
      >
        <Htb className="w-[60%] h-[60%]" isEditMode={isEditMode} />
      </div>
      <div
        className={`w-1/2 h-full bg-gray-100 dark:bg-zinc-800 rounded-2xl sm:rounded-3xl flex justify-center items-center group ${!isEditMode ? 'cursor-pointer transition-all duration-300 hover:scale-[1.02]' : ''}`}
      >
        <ProjectShare className="w-[60%] h-[60%]" isEditMode={isEditMode} />
      </div>
    </div>
  );
}
