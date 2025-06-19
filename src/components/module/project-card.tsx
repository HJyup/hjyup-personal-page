import React from 'react';
import { ComputerIcon, FileIcon, Pencil, Send } from 'lucide-react';
import Image from 'next/image';

interface ProjectCardProps {
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

export function ProjectCard({
  imageSrc = '/photos/project_share.png',
  imageAlt = 'Project showcase',
  className = '',
}: ProjectCardProps) {
  return (
    <div
      className={`relative bg-gray-100 dark:bg-zinc-800 h-[50vh] rounded-2xl sm:rounded-3xl break-inside-avoid flex items-end justify-center ${className}`}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={1200}
        height={1200}
        className="w-full h-full object-cover rounded-2xl sm:rounded-3xl absolute z-0"
      />
      <div className="relative mb-5">
        <div className="relative bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/15 dark:border-white/10 rounded-full py-3 px-6 shadow-sm shadow-black/20 dark:shadow-black/60 ring-1 ring-white/10 dark:ring-white/5 flex gap-8">
          <ComputerIcon className="w-5 h-5 flex-shrink-0 text-zinc-500 dark:text-zinc-100" />
          <FileIcon className="w-5 h-5 flex-shrink-0 text-zinc-500 dark:text-zinc-100" />
          <Pencil className="w-5 h-5 flex-shrink-0 text-zinc-500 dark:text-zinc-100" />
          <Send className="w-5 h-5 flex-shrink-0 text-zinc-500 dark:text-zinc-100" />
        </div>
      </div>
    </div>
  );
}
