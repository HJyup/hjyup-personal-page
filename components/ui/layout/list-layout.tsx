import React from 'react';

export interface ListItem {
  id: string;
  title: string;
  href?: string;
  date: string;
  colour:
    | 'pink'
    | 'blue'
    | 'green'
    | 'yellow'
    | 'purple'
    | 'orange'
    | 'red'
    | 'gray';
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
  gray: 'bg-gray-500',
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
      <div className="text-muted-foreground text-xs sm:text-sm mb-3">
        {title}
      </div>
      <div className="flex flex-col gap-3">
        {items.map(item => (
          <div
            key={item.id}
            className={`flex items-center justify-between ${item.isDisabled ? 'select-none' : ''}`}
          >
            <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
              <div
                className={`${colourClassMap[item.colour]} w-1.5 h-1.5 rounded-full flex-shrink-0`}
              />
              {item.href ? (
                <a
                  href={item.href}
                  className="hover:underline text-sm md:text-base truncate dark:text-zinc-300"
                >
                  {item.title}
                </a>
              ) : (
                <span
                  className={`text-sm md:text-base truncate dark:text-zinc-300 ${
                    item.isBlurred ? 'blur-[6px]' : ''
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
    </section>
  );
}
