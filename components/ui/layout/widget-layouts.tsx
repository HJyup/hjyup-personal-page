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
      className={`${isBackground ? 'bg-zinc-100 dark:bg-[hsl(0,0%,10%)] ' : ''} h-[20rem] sm:h-[22rem] md:h-[24rem] lg:h-[26rem] xl:h-[29.5rem] max-w-2xl mx-auto rounded-2xl sm:rounded-3xl break-inside-avoid transition-all duration-300 ${className}`}
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
      className={`${isBackground ? 'bg-zinc-100 dark:bg-[hsl(0,0%,10%)]' : ''} h-[10rem] sm:h-[11rem] md:h-[12rem] lg:h-[13rem] xl:h-[14rem] max-w-2xl mx-auto rounded-2xl sm:rounded-3xl break-inside-avoid transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}

export function SmallWidgetLayout({
  children,
  className = '',
  isBackground = true,
}: WidgetLayoutProps) {
  return (
    <div
      className={`${isBackground ? 'bg-zinc-100 dark:bg-[hsl(0,0%,10%)]' : ''} h-[8rem] sm:h-[9rem] md:h-[10rem] lg:h-[11rem] xl:h-[12rem] 2xl:h-[13rem] max-w-xs mx-auto rounded-2xl sm:rounded-3xl break-inside-avoid transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}
