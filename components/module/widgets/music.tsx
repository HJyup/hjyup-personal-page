import React, { useState } from 'react';
import { PauseIcon, PlayIcon } from 'lucide-react';
import Image from 'next/image';

interface MusicWidgetProps {
  title?: string;
  artist?: string;
  albumArt?: string;
  albumArtAlt?: string;
}

export function MusicWidget({
  title = 'Supercut',
  artist = 'Lorde',
  albumArt = '/music/melodrama.png',
  albumArtAlt = 'Album cover',
}: MusicWidgetProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-[#37425e] min-h-[20vh] rounded-2xl sm:rounded-3xl break-inside-avoid p-3 sm:p-4 lg:p-5 flex flex-row items-center gap-3 sm:gap-4 lg:gap-5">
      <Image
        className={`rounded-lg sm:rounded-xl shadow-xl w-32 h-32 lg:w-48 lg:h-48 flex-shrink-0 object-cover transition-transform duration-300 ${
          isPlaying ? 'scale-105 rotate-1' : 'scale-100 rotate-0'
        }`}
        src={albumArt}
        alt={albumArtAlt}
        width={220}
        height={220}
      />
      <div className="flex flex-col items-start text-left w-full min-w-0">
        <div className="text-[#c1ccee] text-xs sm:text-sm">
          {isPlaying ? 'NOW PLAYING' : 'PAUSED'}
        </div>
        <div className="text-[#fcfcfc] text-lg sm:text-xl lg:text-2xl font-medium truncate w-full">
          {title}
        </div>
        <div className="text-[#c1ccee] text-base sm:text-lg truncate w-full">
          {artist}
        </div>
        <button
          onClick={handlePlayPause}
          className={`text-[#fcfcfc] text-sm sm:text-base lg:text-lg rounded-full gap-2 flex justify-center items-center mt-2 px-3 py-1 sm:px-4 sm:py-1.5 transition-all duration-300 min-w-0 transform active:scale-95 ${
            isPlaying
              ? 'bg-[#0374d4] hover:bg-[#0374d4] shadow-lg shadow-blue-500/20'
              : 'bg-[#56617c] hover:bg-[#6b7590]'
          }`}
        >
          {isPlaying ? (
            <PauseIcon
              className="w-3 h-3 sm:w-4 sm:h-4 text-[#fcfcfc] flex-shrink-0 transition-transform duration-200"
              fill="#fcfcfc"
            />
          ) : (
            <PlayIcon
              className="w-3 h-3 sm:w-4 sm:h-4 text-[#fcfcfc] flex-shrink-0 transition-transform duration-200"
              fill="#fcfcfc"
            />
          )}
          <span className="truncate">{isPlaying ? 'Pause' : 'Play'}</span>
        </button>
      </div>
    </div>
  );
}
