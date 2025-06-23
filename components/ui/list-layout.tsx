import React from 'react';

interface ListItem {
  id: string;
  title: string;
  href?: string;
  date: string;
  colorClass: string;
  isBlurred?: boolean;
  isDisabled?: boolean;
}

interface ListLayoutProps {
  title: string;
  items: ListItem[];
  className?: string;
}

export function ListLayout({ title, items, className = '' }: ListLayoutProps) {
  return (
    <div className={`w-full lg:w-1/2 ${className}`}>
      <div className="text-muted-foreground text-xs sm:text-sm mt-8 sm:mt-12 lg:mt-12">
        {title}
      </div>
      <div className="flex flex-col gap-3 mt-3">
        {items.map(item => (
          <div
            key={item.id}
            className={`flex items-center justify-between ${item.isDisabled ? 'select-none' : ''}`}
          >
            <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
              <div
                className={`${item.colorClass} w-1.5 h-1.5 rounded-full flex-shrink-0`}
              />
              {item.href ? (
                <a
                  href={item.href}
                  className="hover:underline text-sm sm:text-base truncate dark:text-zinc-300"
                >
                  {item.title}
                </a>
              ) : (
                <span
                  className={`text-sm sm:text-base truncate dark:text-zinc-300 ${
                    item.isBlurred ? 'blur-sm' : ''
                  }`}
                >
                  {item.title}
                </span>
              )}
            </div>
            <div className="text-muted-foreground text-xs flex-shrink-0 ml-2">
              {item.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
