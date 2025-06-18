import React from 'react';

interface GrayPlaceholderCardProps {
  height?: string;
  className?: string;
}

export function GrayPlaceholderCard({ 
  height = 'h-[40vh] sm:h-[50vh]', 
  className = '' 
}: GrayPlaceholderCardProps) {
  return (
    <div className={`bg-gray-100 dark:bg-zinc-800 ${height} rounded-2xl sm:rounded-3xl break-inside-avoid ${className}`} />
  );
} 