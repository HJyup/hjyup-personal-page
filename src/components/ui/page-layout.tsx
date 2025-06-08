'use client';

import { forwardRef, ReactNode } from 'react';

import { cn } from '@/lib/utils';

import AnimatedLine from './animated-line';

export interface PageLayoutProps {
  children?: ReactNode;
  className?: string;
  verticalLines?: {
    position: number;
    start?: number;
    span?: number;
    color?: string;
    className?: string;
  }[];
  horizontalLines?: {
    position: number;
    start?: number;
    span?: number;
    color?: string;
    className?: string;
  }[];
  backgroundColor?: string;
}

const PageLayout = forwardRef<HTMLDivElement, PageLayoutProps>(
  (
    {
      children,
      className,
      verticalLines = [],
      horizontalLines = [],
      backgroundColor = '',
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'w-full h-screen grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 grid-rows-6',
          backgroundColor,
          className,
        )}
      >
        {verticalLines.map((line, index) => (
          <AnimatedLine
            key={`vertical-${index}`}
            className={cn(
              `col-start-${line.position} row-start-${line.start || 1} row-span-${line.span || 6} vertical-line h-full opacity-50 md:opacity-100`,
              line.className,
            )}
            color={line.color}
            position="vertical"
          />
        ))}

        {horizontalLines.map((line, index) => (
          <AnimatedLine
            key={`horizontal-${index}`}
            className={cn(
              `row-start-${line.position} col-start-${line.start || 1} horizontal-line col-span-${line.span || 6} w-full opacity-50 md:opacity-100`,
              line.className,
            )}
            color={line.color}
            position="horizontal"
          />
        ))}
        {children}
      </div>
    );
  },
);

PageLayout.displayName = 'PageLayout';

export default PageLayout;
