'use client';

import React, { forwardRef } from 'react';

import { WidgetLayout } from '@/components/ui/layout/widget-layout';

const CONTRIBUTION_DATA = Array(31)
  .fill(null)
  .map(() => (Math.random() > 0.25 ? (Math.random() > 0.5 ? 2 : 1) : 0));

type Props = { className?: string } & React.HTMLAttributes<HTMLDivElement>;

export const GithubWidget = forwardRef<HTMLDivElement, Props>(
  ({ className = '' }, ref) => {
    return (
      <WidgetLayout ref={ref} className={className}>
        <div className="h-full w-full relative flex flex-col items-center justify-center p-3">
          <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50 leading-relaxed text-left w-full mb-2">
            Monthly contributions
          </p>

          <div className="grid grid-cols-6 gap-1.5 h-full w-full">
            {CONTRIBUTION_DATA.map((level, i) => (
              <div
                key={i}
                className={`
                  w-full h-full rounded-sm aspect-square select-none
                  transform-gpu transition-transform duration-150
                  motion-safe:hover:scale-105 motion-safe:active:scale-95
                  ${level === 0 ? 'bg-zinc-200 dark:bg-zinc-800' : ''}
                  ${level === 1 ? 'bg-green-200 dark:bg-green-900' : ''}
                  ${level === 2 ? 'bg-green-500 dark:bg-green-600' : ''}
                `}
                aria-label={`Contribution level ${level}`}
              />
            ))}
          </div>
        </div>
      </WidgetLayout>
    );
  },
);

GithubWidget.displayName = 'GithubWidget';
