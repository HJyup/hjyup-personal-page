import React from 'react';
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
      className={`relative bg-gray-100 dark:bg-zinc-800 h-[35vh] sm:h-[45vh] rounded-2xl sm:rounded-3xl break-inside-avoid flex items-end justify-center ${className} flex justify-center items-center`}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={1200}
        height={1200}
        className="w-11/12 h-11/12 object-cover rounded-2xl sm:rounded-3xl absolute z-0"
      />
    </div>
  );
}
