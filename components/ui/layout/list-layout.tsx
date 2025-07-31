import React from 'react';

export interface ListItem {
  id: string;
  title: string;
  href?: string;
  date: string;
  colour?: 'pink' | 'blue' | 'green' | 'yellow' | 'purple' | 'orange' | 'red';
  isBlurred?: boolean;
  isDisabled?: boolean;
}

const colourClassMap = {
  pink: 'bg-pink-500',
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  yellow: 'bg-yellow-500',
  purple: 'bg-purple-500',
  orange: 'bg-orange-500',
  red: 'bg-red-500',
};

interface ListLayoutProps {
  id: string;
  title: string;
  items: ListItem[];
  className?: string;
}

export function ListLayout({
  id,
  title,
  items,
  className = '',
}: ListLayoutProps) {
  return (
    <section aria-labelledby={id} className={`w-full lg:w-1/2 ${className}`}>
      <div className="text-sm sm:text-base mb-6 text-muted-foreground">
        {title}
      </div>
      <div className="flex flex-col gap-4">
        {items.map(item => (
          <div
            key={item.id}
            className={`flex items-center justify-between ${item.isDisabled ? 'select-none' : ''}`}
          >
            <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
              {item.colour && (
                <div
                  className={`${colourClassMap[item.colour]} w-1.5 h-1.5 rounded-full flex-shrink-0`}
                />
              )}
              {item.href ? (
                <a
                  href={item.href}
                  className="hover:underline underline-offset-2 text-sm sm:text-base truncate text-zinc-900 dark:text-zinc-50"
                >
                  {item.title}
                </a>
              ) : (
                <span
                  className={`text-sm sm:text-base truncate text-zinc-900 dark:text-zinc-50 ${
                    item.isBlurred ? 'blur-[6px]' : ''
                  }`}
                >
                  {item.title}
                </span>
              )}
              <div className="flex-grow border-b border-dotted border-zinc-300 dark:border-zinc-700 mx-3" />
            </div>
            <div className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm flex-shrink-0 ml-3">
              {item.date}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
