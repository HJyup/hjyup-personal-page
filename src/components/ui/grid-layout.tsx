import React, { ReactNode } from 'react';

interface GridLayoutProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export function GridLayout({
  children,
  id = 'projects',
  className = '',
}: GridLayoutProps) {
  return (
    <div
      id={id}
      className={`scroll-mt-20 flex flex-col items-center w-full my-8 sm:my-12 lg:my-16 ${className}`}
    >
      <div className="columns-1 sm:columns-2 gap-3 w-full space-y-3">
        {children}
      </div>
    </div>
  );
}
