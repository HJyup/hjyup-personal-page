'use client';

import React, { forwardRef } from 'react';
import {
  IoMusicalNotes,
  IoPlay,
  IoPlayBack,
  IoPlayForward,
  IoVolumeHigh,
} from 'react-icons/io5';
import Image from 'next/image';

import { WidgetLayout } from '@/components/ui/layout/widget-layout';

interface MusicWidgetProps {
  title?: string;
  artist?: string;
  albumArt?: string;
  albumArtAlt?: string;
  className?: string;
}

interface AlbumArtProps {
  src: string;
  alt: string;
  title: string;
  artist: string;
}

interface SongInfoProps {
  title: string;
  artist: string;
}

function AlbumArt({ src, alt, title, artist }: AlbumArtProps) {
  return (
    <Image
      className="rounded-xl sm:rounded-2xl shadow-lg aspect-square w-52 md:w-36 flex-shrink-0 object-cover transition-transform duration-200 ease-out-cubic motion-reduce:transition-none motion-reduce:transform-none"
      src={src}
      alt={`${alt} for ${title} by ${artist}`}
      width={250}
      height={250}
      draggable={false}
    />
  );
}

function SongInfo({ title, artist }: SongInfoProps) {
  return (
    <div className="flex flex-col items-start text-left w-full min-w-0 flex-1">
      <h3 className="text-zinc-900 dark:text-zinc-100 text-base font-medium truncate w-full">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm truncate w-full mb-3">
        {artist}
      </p>
    </div>
  );
}

function VolumeControl() {
  return (
    <div
      style={{
        width: 'fit-content',
        justifyContent: 'center',
      }}
      className="bg-zinc-200/50 dark:bg-[hsl(0,0%,15%)] h-10 w-fit px-2 rounded-full flex items-center shadow-sm cursor-pointer transition-all duration-200"
    >
      <div className="transition-all duration-200">
        <IoVolumeHigh className="w-6 h-6 text-zinc-500 dark:text-zinc-400" />
      </div>
    </div>
  );
}

function Controls() {
  return (
    <div className="flex justify-between">
      <div className="flex justify-between w-full gap-2">
        <div className="bg-zinc-200/50 dark:bg-[hsl(0,0%,15%)] h-10 w-fit px-5 rounded-full flex items-center justify-center gap-4 shadow-sm">
          <IoPlayBack className="w-6 h-6 text-zinc-500 dark:text-zinc-400" />
          <IoPlay className="w-6 h-6 text-zinc-500 dark:text-zinc-400" />
          <IoPlayForward className="w-6 h-6 text-zinc-500 dark:text-zinc-400" />
        </div>

        <VolumeControl />
      </div>
    </div>
  );
}

export const MusicWidget = forwardRef<HTMLDivElement, MusicWidgetProps>(
  (
    {
      title = 'Cosmic Love',
      artist = 'Florence + The Machine',
      albumArt = 'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/4d/b6/73/4db6730b-ffb5-2147-c374-05edec48c7d0/10UMGIM04103.rgb.jpg/416x416bb.webp',
      albumArtAlt = 'Album cover',
      className = '',
    },
    ref,
  ) => {
    return (
      <WidgetLayout
        ref={ref}
        className={`${className} h-full w-full relative flex flex-col justify-between`}
      >
        <IoMusicalNotes className="absolute top-4 right-4 md:top-5 md:right-5 lg:top-6 lg:right-6 w-5 h-5 text-zinc-500 dark:text-zinc-400" />

        <div className="items-center space-y-3">
          <AlbumArt
            src={albumArt}
            alt={albumArtAlt}
            title={title}
            artist={artist}
          />
          <SongInfo title={title} artist={artist} />
        </div>

        <Controls />
      </WidgetLayout>
    );
  },
);

MusicWidget.displayName = 'MusicWidget';
