import React from 'react';

interface WidgetLayoutProps {
  children: React.ReactNode;
  className?: string;
  isBackground?: boolean;
}

export function BigWidgetLayout({
  children,
  className = '',
  isBackground = true,
}: WidgetLayoutProps) {
  return (
    <div
      className={`${isBackground ? 'bg-zinc-100 dark:bg-[hsl(0,0%,10%)] ' : ''} h-[22rem] lg:h-[26rem] xl:h-[29.5rem] max-w-2xl mx-auto rounded-2xl sm:rounded-3xl break-inside-avoid transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}

export function MediumWidgetLayout({
  children,
  className = '',
  isBackground = true,
}: WidgetLayoutProps) {
  return (
    <div
      className={`${isBackground ? 'bg-zinc-100 dark:bg-[hsl(0,0%,10%)]' : ''} h-[11rem] lg:h-[13rem] xl:h-[14rem] max-w-2xl mx-auto rounded-2xl sm:rounded-3xl break-inside-avoid transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}
