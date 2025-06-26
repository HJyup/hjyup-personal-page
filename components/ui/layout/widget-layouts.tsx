import React from 'react';

interface WidgetLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function BigWidgetLayout({
  children,
  className = '',
}: WidgetLayoutProps) {
  return (
    <div
      className={`h-[24.75rem] md:h-[28.75rem] lg:h-[32.75rem] max-w-2xl mx-auto rounded-2xl sm:rounded-3xl break-inside-avoid transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}

export function MediumWidgetLayout({
  children,
  className = '',
}: WidgetLayoutProps) {
  return (
    <div
      className={`h-[12rem] md:h-[14rem] lg:h-[16rem] max-w-2xl mx-auto rounded-2xl sm:rounded-3xl break-inside-avoid transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}

export function SmallWidgetLayout({
  children,
  className = '',
}: WidgetLayoutProps) {
  return (
    <div
      className={`h-40 sm:h-44 lg:h-48 xl:h-52 2xl:h-56 max-w-xs mx-auto rounded-2xl sm:rounded-3xl break-inside-avoid transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}
