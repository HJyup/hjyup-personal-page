'use client';

import React, { useState } from 'react';
import {
  IoMenu,
  IoMusicalNotes,
  IoPlay,
  IoPlayBack,
  IoPlayForward,
  IoVolumeHigh,
} from 'react-icons/io5';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

import { Slider } from '@/components/ui/components/slider';
import { MediumWidgetLayout } from '@/components/ui/layout/widget-layouts';

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

interface VolumeControlProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

const BLUR_DATA_URL =
  'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAEklEQVR42mOUS19SzwAEjDAGACM9A1PjZKmWAAAAAElFTkSuQmCC';

function AlbumArt({ src, alt, title, artist }: AlbumArtProps) {
  return (
    <Image
      className="rounded-xl sm:rounded-2xl shadow-lg aspect-square w-24 lg:w-32 flex-shrink-0 object-cover transition-transform duration-200 ease-out-cubic motion-reduce:transition-none motion-reduce:transform-none"
      src={src}
      alt={`${alt} for ${title} by ${artist}`}
      width={250}
      height={250}
      draggable={false}
      placeholder="blur"
      blurDataURL={BLUR_DATA_URL}
    />
  );
}

function SongInfo({ title, artist }: SongInfoProps) {
  return (
    <div className="flex flex-col items-start text-left w-full min-w-0 flex-1">
      <h3 className="text-zinc-900 dark:text-zinc-100 text-base sm:text-lg font-medium truncate w-full">
        {title}
      </h3>
      <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base truncate w-full mb-3">
        {artist}
      </p>
    </div>
  );
}

function VolumeControl({ isOpen, onToggle, onClose }: VolumeControlProps) {
  return (
    <motion.div
      layout
      style={{
        width: isOpen ? '100%' : 'fit-content',
        justifyContent: isOpen ? 'flex-start' : 'center',
      }}
      transition={{ type: 'spring', duration: 0.5, bounce: 0.1 }}
      className="bg-zinc-200/50 dark:bg-[hsl(0,0%,15%)] h-10 w-fit px-2 rounded-full flex items-center shadow-sm cursor-pointer"
      onClick={onToggle}
      whileHover={{ scale: isOpen ? 1 : 1.05 }}
      onMouseUp={onClose}
      onMouseLeave={onClose}
      whileTap={{ scale: isOpen ? 1 : 0.95 }}
    >
      {isOpen ? (
        <Slider defaultValue={[50]} max={100} step={1} className="w-full" />
      ) : (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.2,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 0.2,
          }}
        >
          <IoVolumeHigh className="w-6 h-6 text-zinc-500 dark:text-zinc-400" />
        </motion.div>
      )}
    </motion.div>
  );
}

function LibraryControl({ isOpen, onToggle, onClose }: VolumeControlProps) {
  return (
    <motion.div
      layout
      style={{
        width: isOpen ? '100%' : 'fit-content',
        justifyContent: isOpen ? 'flex-start' : 'center',
      }}
      transition={{ type: 'spring', duration: 0.5, bounce: 0.1 }}
      className="bg-zinc-200/50 dark:bg-[hsl(0,0%,15%)] h-10 w-fit px-2 rounded-full flex items-center shadow-sm gap-2 cursor-pointer"
      onClick={onToggle}
      whileHover={{ scale: isOpen ? 1 : 1.05 }}
      onMouseUp={onClose}
      onMouseLeave={onClose}
      whileTap={{ scale: isOpen ? 1 : 0.95 }}
    >
      <IoMenu className="w-6 h-6 text-zinc-500 dark:text-zinc-400" />
      {isOpen && (
        <span className="text-zinc-500 dark:text-zinc-400 text-sm">
          Melodrama
        </span>
      )}
    </motion.div>
  );
}

function Controls() {
  const [isVolumeOpen, setIsVolumeOpen] = useState(false);
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);
  return (
    <motion.div className="flex justify-between">
      <AnimatePresence mode="popLayout">
        <motion.div
          key="control-buttons"
          className="flex justify-between w-full gap-2"
        >
          <LibraryControl
            isOpen={isLibraryOpen}
            onToggle={() => setIsLibraryOpen(true)}
            onClose={() => setIsLibraryOpen(false)}
          />

          <motion.div
            layout
            className="bg-zinc-200/50 dark:bg-[hsl(0,0%,15%)] h-10 w-fit px-5 rounded-full flex items-center justify-center gap-4 shadow-sm"
          >
            <IoPlayBack className="w-6 h-6 text-zinc-500 dark:text-zinc-400" />
            <IoPlay className="w-6 h-6 text-zinc-500 dark:text-zinc-400" />
            <IoPlayForward className="w-6 h-6 text-zinc-500 dark:text-zinc-400" />
          </motion.div>

          <VolumeControl
            isOpen={isVolumeOpen}
            onToggle={() => setIsVolumeOpen(true)}
            onClose={() => setIsVolumeOpen(false)}
          />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

export function MusicWidget({
  title = 'Supercut',
  artist = 'Lorde',
  albumArt = 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/8d/0d/15/8d0d1532-493b-52ec-6a29-a239ced6931b/17UMGIM81023.rgb.jpg/632x632bb.webp',
  albumArtAlt = 'Album cover',
  className = '',
}: MusicWidgetProps) {
  return (
    <MediumWidgetLayout className={className}>
      <div
        className="h-full w-full rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 flex flex-col justify-center gap-4 relative"
        role="region"
        aria-label={`Music player - ${title} by ${artist}`}
      >
        <IoMusicalNotes className="absolute top-4 right-4 md:top-5 md:right-5 lg:top-6 lg:right-6 w-5 h-5 text-zinc-500 dark:text-zinc-400" />

        <div className="flex flex-row items-center gap-4 sm:gap-5 lg:gap-6">
          <AlbumArt
            src={albumArt}
            alt={albumArtAlt}
            title={title}
            artist={artist}
          />
          <SongInfo title={title} artist={artist} />
        </div>

        <Controls />
      </div>
    </MediumWidgetLayout>
  );
}
