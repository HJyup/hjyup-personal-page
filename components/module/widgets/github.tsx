import React from 'react';
import { FolderIcon } from 'lucide-react';

import GithubIcon from '@/components/ui/icons/github';
import { GITHUB_WIDGET } from '@/const/github-projects';
import { cn } from '@/lib/utils';

const TypeBadgeMapper = {
  finished: 'bg-green-500',
  'in-progress': 'bg-yellow-500',
  'on-hold': 'bg-red-500',
} as const;

function GithubWidgetItem({
  className,
  name,
  type,
  description,
}: (typeof GITHUB_WIDGET)[number] & { className?: string }) {
  const color = TypeBadgeMapper[type];

  return (
    <div className={cn('text-zinc-400 text-sm', className)}>
      <div className="flex items-center gap-2">
        {name}
        <div className={cn('w-2 h-2 rounded-full', color)} />
      </div>
      <div className="text-zinc-200">{description}</div>
    </div>
  );
}

export function GithubWidget({ className = '' }: { className?: string }) {
  return (
    <div
      className={`bg-zinc-950 h-[25vh] rounded-2xl sm:rounded-3xl break-inside-avoid p-4 px-5 ${className}`}
    >
      <div className="flex items-center justify-between w-full">
        <div className="text-zinc-400 text-md flex items-center gap-2">
          <FolderIcon className="w-5 h-5 text-white-500" fill="currentColor" />
          <span className="text-white font-bold">3</span> pinned repositories
        </div>
        <GithubIcon className="h-12 w-12 text-white" />
      </div>
      <div className="flex flex-col gap-2">
        {GITHUB_WIDGET.map(item => (
          <GithubWidgetItem
            key={item.name}
            className="text-zinc-400 text-sm"
            name={item.name}
            type={item.type}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
