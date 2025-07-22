'use client';

import React from 'react';
import { FolderIcon } from 'lucide-react';

import GithubIcon from '@/components/ui/icons/github';
import { MediumWidgetLayout } from '@/components/ui/layout/widget-layouts';
import { GITHUB_WIDGET } from '@/const/github-projects';
import { cn } from '@/lib/utils';

const TypeBadgeMapper = {
  finished: 'bg-green-500',
  'in-progress': 'bg-yellow-500',
  'on-hold': 'bg-red-500',
} as const;

const TypeLabels = {
  finished: 'Completed project',
  'in-progress': 'Work in progress',
  'on-hold': 'On hold',
} as const;

function GithubWidgetItem({
  className,
  name,
  type,
  description,
  link,
}: (typeof GITHUB_WIDGET)[number] & { className?: string }) {
  const color = TypeBadgeMapper[type];
  const statusLabel = TypeLabels[type];

  return (
    <article
      className={cn(
        'text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mb-2',
        className,
      )}
    >
      <div className="flex items-center gap-2 mb-0.5">
        <a
          href={link}
          className="text-zinc-700 dark:text-zinc-300 text-md hover:underline"
        >
          {name}
        </a>
        <div
          className={cn('w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full', color)}
          aria-label={statusLabel}
          title={statusLabel}
        />
      </div>
      <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
        {description}
      </p>
    </article>
  );
}

export function GithubWidget({ className = '' }: { className?: string }) {
  return (
    <MediumWidgetLayout className={className}>
      <div
        className="h-full w-full p-4 sm:p-5 lg:p-6 flex flex-col rounded-2xl sm:rounded-3xl"
        role="region"
        aria-label="GitHub repositories showcase"
      >
        <header className="flex items-center justify-between w-full mb-3">
          <div className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base flex items-center gap-3">
            <FolderIcon
              className="w-3 h-3 sm:w-4 sm:h-4 text-zinc-700 dark:text-zinc-300"
              fill="currentColor"
              aria-hidden="true"
            />
            <span className="text-zinc-900 dark:text-zinc-100 font-bold text-base sm:text-lg">
              {GITHUB_WIDGET.length}
            </span>
            <span>pinned repositories</span>
          </div>
          <a
            href="https://github.com/HJyup"
            className="hover:cursor-pointer hover:scale-110 transition-transform duration-200 ease-out-cubic motion-reduce:transition-none motion-reduce:transform-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon
              className="h-8 w-8 sm:h-10 sm:w-10 text-zinc-700 dark:text-zinc-300"
              aria-label="GitHub"
            />
          </a>
        </header>
        <div
          className="flex flex-col gap-0.5 flex-1 overflow-hidden"
          role="list"
          aria-label="Repository list"
        >
          {GITHUB_WIDGET.map(item => (
            <GithubWidgetItem
              key={item.name}
              name={item.name}
              type={item.type}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </MediumWidgetLayout>
  );
}
