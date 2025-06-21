'use client';

import React from 'react';
import { Instagram, Mail } from 'lucide-react';

import { GithubLogo as GithubIcon } from '@/components/logo/github-logo';
import { LinkedinLogo as LinkedinIcon } from '@/components/logo/linkedin-logo';
import { useWidgetEdit } from '@/provider/widget-edit-provider';

interface SocialCardProps {
  className?: string;
}

export function GithubBlock({ className = '' }: SocialCardProps) {
  const { isEditMode } = useWidgetEdit();

  return (
    <a
      href="https://github.com/your-username"
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative h-[9.5vh] rounded-3xl break-inside-avoid overflow-hidden ${!isEditMode ? 'transition-all duration-200 ease-out hover:scale-[1.02] cursor-pointer hover:shadow-md' : ''} bg-white dark:bg-zinc-900 shadow-sm dark:shadow-black/20 ${className}`}
    >
      <div className="relative h-full flex items-center justify-center">
        <div
          className={`${!isEditMode ? 'transition-all duration-200 ease-out group-hover:scale-105' : ''}`}
        >
          <GithubIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-zinc-700 dark:text-zinc-300 transition-colors duration-200" />
        </div>
      </div>

      <div
        className={`absolute inset-0 bg-zinc-50/50 dark:bg-zinc-800/30 opacity-0 ${!isEditMode ? 'group-hover:opacity-100' : ''} transition-opacity duration-200`}
      />
    </a>
  );
}

export function LinkedinBlock({ className = '' }: SocialCardProps) {
  const { isEditMode } = useWidgetEdit();

  return (
    <a
      href="https://linkedin.com/in/your-profile"
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative h-[9.5vh] rounded-3xl break-inside-avoid overflow-hidden ${!isEditMode ? 'transition-all duration-200 ease-out hover:scale-[1.02] cursor-pointer hover:shadow-md' : ''} bg-white dark:bg-zinc-900 shadow-sm dark:shadow-black/20 ${className}`}
    >
      <div className="relative h-full flex items-center justify-center">
        <div
          className={`${!isEditMode ? 'transition-all duration-200 ease-out group-hover:scale-105' : ''}`}
        >
          <LinkedinIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600 dark:text-blue-400 transition-colors duration-200" />
        </div>
      </div>

      <div
        className={`absolute inset-0 bg-blue-50/50 dark:bg-blue-950/30 opacity-0 ${!isEditMode ? 'group-hover:opacity-100' : ''} transition-opacity duration-200`}
      />
    </a>
  );
}

export function GmailBlock({ className = '' }: SocialCardProps) {
  const { isEditMode } = useWidgetEdit();

  return (
    <a
      href="mailto:your-email@gmail.com"
      className={`group relative h-[9.5vh] rounded-3xl break-inside-avoid overflow-hidden ${!isEditMode ? 'transition-all duration-200 ease-out hover:scale-[1.02] cursor-pointer hover:shadow-md' : ''} bg-white dark:bg-zinc-900 shadow-sm dark:shadow-black/20 ${className}`}
    >
      <div className="relative h-full flex items-center justify-center">
        <div
          className={`${!isEditMode ? 'transition-all duration-200 ease-out group-hover:scale-105' : ''}`}
        >
          <Mail className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-red-600 dark:text-red-400 transition-colors duration-200" />
        </div>
      </div>

      <div
        className={`absolute inset-0 bg-red-50/50 dark:bg-red-950/30 opacity-0 ${!isEditMode ? 'group-hover:opacity-100' : ''} transition-opacity duration-200`}
      />
    </a>
  );
}

export function InstagramBlock({ className = '' }: SocialCardProps) {
  const { isEditMode } = useWidgetEdit();

  return (
    <a
      href="https://instagram.com/your-username"
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative h-[9.5vh] rounded-3xl break-inside-avoid overflow-hidden ${!isEditMode ? 'transition-all duration-200 ease-out hover:scale-[1.02] cursor-pointer hover:shadow-md' : ''} bg-white dark:bg-zinc-900 shadow-sm dark:shadow-black/20 ${className}`}
    >
      <div className="relative h-full flex items-center justify-center">
        <div
          className={`${!isEditMode ? 'transition-all duration-200 ease-out group-hover:scale-105' : ''}`}
        >
          <Instagram className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-pink-600 dark:text-pink-400 transition-colors duration-200" />
        </div>
      </div>

      <div
        className={`absolute inset-0 bg-pink-50/50 dark:bg-pink-950/30 opacity-0 ${!isEditMode ? 'group-hover:opacity-100' : ''} transition-opacity duration-200`}
      />
    </a>
  );
}

export function SocialLinksCard() {
  return (
    <div className="grid grid-cols-2 gap-1 sm:gap-2">
      <GithubBlock />
      <LinkedinBlock />
      <GmailBlock />
      <InstagramBlock />
    </div>
  );
}
