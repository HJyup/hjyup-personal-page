import React from 'react';
import { FolderIcon } from 'lucide-react';

import GithubLogo from '@/components/logo/github-logo';

interface GithubCardProps {
  className?: string;
}

export function GithubCard({ className = '' }: GithubCardProps) {
  return (
    <div
      className={`bg-zinc-950 h-[25vh] rounded-2xl sm:rounded-3xl break-inside-avoid p-4 px-5 ${className}`}
    >
      <div className="flex items-center justify-between w-full">
        <div className="text-zinc-400 text-md flex items-center gap-2">
          <FolderIcon className="w-5 h-5 text-green-500" />
          <span className="text-white font-bold">8</span> repositories
        </div>
        <GithubLogo className="h-12 w-12 text-white" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-zinc-400 text-sm">
          <div className="flex items-center gap-2">
            HJyup/micro-sketch.git{' '}
            <div className="w-2 h-2 bg-yellow-500 rounded-full" />
          </div>
          <div className="text-zinc-200">
            Micro-frontend framework for building web applications.
          </div>
        </div>
        <div className="text-zinc-400 text-sm">
          <div className="flex items-center gap-2">
            HJyup/fst-tool.git{' '}
            <div className="w-2 h-2 bg-green-500 rounded-full" />
          </div>
          <div className="text-zinc-200">
            Recreation of git command line tool using go and cobra.
          </div>
        </div>
        <div className="text-zinc-400 text-sm">
          <div className="flex items-center gap-2">
            HJyup/mlt-agents-api{' '}
            <div className="w-2 h-2 bg-yellow-500 rounded-full" />
          </div>
          <div className="text-zinc-200">
            Using multiple AI agents in just one hotkey. (macOS project)
          </div>
        </div>
      </div>
    </div>
  );
}
