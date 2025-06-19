'use client';

import React from 'react';
import { GithubIcon, LinkedinIcon } from 'lucide-react';

interface SocialCardProps {
  className?: string;
}

export function GithubCard({ className = '' }: SocialCardProps) {
  return (
    <a
      href="https://github.com/your-username"
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative h-[11vh] rounded-2xl sm:rounded-3xl break-inside-avoid overflow-hidden transition-all duration-200 hover:scale-[1.02] cursor-pointer ${className}`}
    >
      <div className="absolute inset-0 bg-black dark:bg-zinc-950">
        <div className="relative h-full flex flex-col justify-center items-center p-3">
          <div className="transform transition-all duration-200 group-hover:scale-105">
            <GithubIcon className="w-8 h-8 text-white mb-1" />
          </div>
          <p className="text-white text-sm font-medium opacity-90 group-hover:opacity-100 transition-opacity duration-200">
            GitHub
          </p>
        </div>

        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
      </div>
    </a>
  );
}

export function LinkedinCard({ className = '' }: SocialCardProps) {
  return (
    <a
      href="https://linkedin.com/in/your-profile"
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative h-[11vh] rounded-2xl sm:rounded-3xl break-inside-avoid overflow-hidden transition-all duration-200 hover:scale-[1.02] cursor-pointer ${className}`}
    >
      <div className="absolute inset-0 bg-blue-600 dark:bg-blue-700">
        <div className="relative h-full flex flex-col justify-center items-center p-3">
          <div className="transform transition-all duration-200 group-hover:scale-105">
            <LinkedinIcon className="w-8 h-8 text-white mb-1" />
          </div>
          <p className="text-white text-sm font-medium opacity-90 group-hover:opacity-100 transition-opacity duration-200">
            LinkedIn
          </p>
        </div>

        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
      </div>
    </a>
  );
}

export function SocialLinksCard() {
  return (
    <div className="flex gap-3 w-full">
      <GithubCard className="w-1/2" />
      <LinkedinCard className="w-1/2" />
    </div>
  );
}
