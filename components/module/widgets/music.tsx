'use client';

import React, { useState } from 'react';
import { PauseIcon, PlayIcon } from 'lucide-react';
import Image from 'next/image';

import { MediumWidgetLayout } from '@/components/ui/layout/widget-layouts';

interface MusicWidgetProps {
  title?: string;
  artist?: string;
  albumArt?: string;
  albumArtAlt?: string;
  className?: string;
}

export function MusicWidget({
  title = 'Supercut',
  artist = 'Lorde',
  albumArt = 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/8d/0d/15/8d0d1532-493b-52ec-6a29-a239ced6931b/17UMGIM81023.rgb.jpg/632x632bb.webp',
  albumArtAlt = 'Album cover',
  className = '',
}: MusicWidgetProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handlePlayPause();
    }
  };

  const BLUR_DATA_URL =
    'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAEklEQVR42mOUS19SzwAEjDAGACM9A1PjZKmWAAAAAElFTkSuQmCC';

  return (
    <MediumWidgetLayout className={className}>
      <div
        className=" h-full w-full rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 flex flex-row items-center gap-4 sm:gap-5 lg:gap-6"
        role="region"
        aria-label={`Music player - ${title} by ${artist}`}
      >
        <Image
          className={`rounded-lg sm:rounded-xl shadow-lg aspect-square w-32 md:w-36 lg:w-40 xl:w-44 flex-shrink-0 object-cover transition-transform duration-300 ${
            isPlaying ? 'scale-105' : 'scale-100'
          }`}
          src={albumArt}
          alt={`${albumArtAlt} for ${title} by ${artist}`}
          width={250}
          height={250}
          draggable={false}
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
        />
        <div className="flex flex-col items-start text-left w-full min-w-0 flex-1">
          <div
            className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm"
            aria-live="polite"
          >
            {isPlaying ? 'NOW PLAYING' : 'PAUSED'}
          </div>
          <h3 className="text-zinc-900 dark:text-zinc-100 text-lg sm:text-xl font-medium truncate w-full">
            {title}
          </h3>
          <p className="text-zinc-600 dark:text-zinc-300 text-base sm:text-lg truncate w-full">
            {artist}
          </p>
          <button
            onClick={handlePlayPause}
            onKeyDown={handleKeyDown}
            className={`text-white text-sm sm:text-base rounded-full gap-2 flex justify-center items-center mt-2 px-3 py-1 sm:px-4 sm:py-1.5 transition-all duration-300 min-w-0 transform active:scale-95 focus:outline-none ${
              isPlaying
                ? 'bg-blue-500 hover:bg-blue-600 shadow-lg'
                : 'bg-zinc-400 dark:bg-zinc-600 hover:bg-zinc-500 dark:hover:bg-zinc-500'
            }`}
            aria-label={`${isPlaying ? 'Pause' : 'Play'} ${title} by ${artist}`}
            type="button"
          >
            {isPlaying ? (
              <PauseIcon
                className="w-3 h-3 sm:w-4 sm:h-4 text-white flex-shrink-0 transition-transform duration-200"
                fill="white"
                aria-hidden="true"
              />
            ) : (
              <PlayIcon
                className="w-3 h-3 sm:w-4 sm:h-4 text-white flex-shrink-0 transition-transform duration-200"
                fill="white"
                aria-hidden="true"
              />
            )}
            <span className="truncate">{isPlaying ? 'Pause' : 'Play'}</span>
          </button>
        </div>
      </div>
    </MediumWidgetLayout>
  );
}
