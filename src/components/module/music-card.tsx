import React from 'react';
import { PlayIcon } from 'lucide-react';
import Image from 'next/image';

interface MusicCardProps {
  title?: string;
  artist?: string;
  albumArt?: string;
  albumArtAlt?: string;
}

export function MusicCard({
  title = 'Supercut',
  artist = 'Lorde',
  albumArt = '/music/melodrama.png',
  albumArtAlt = 'Album cover',
}: MusicCardProps) {
  return (
    <div className="bg-[#37425e] min-h-[25vh] rounded-2xl sm:rounded-3xl break-inside-avoid p-3 sm:p-4 lg:p-5 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 lg:gap-5">
      <Image
        className="rounded-lg sm:rounded-xl shadow-xl w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 flex-shrink-0 object-cover"
        src={albumArt}
        alt={albumArtAlt}
        width={190}
        height={190}
      />
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left w-full min-w-0">
        <div className="text-[#c1ccee] text-xs sm:text-sm">NOW PLAYING</div>
        <div className="text-[#fcfcfc] text-lg sm:text-xl lg:text-2xl font-medium truncate w-full">
          {title}
        </div>
        <div className="text-[#c1ccee] text-base sm:text-lg truncate w-full">
          {artist}
        </div>
        <button className="text-[#fcfcfc] text-sm sm:text-base lg:text-lg bg-[#56617c] rounded-full gap-2 flex justify-center items-center mt-2 px-3 py-1 sm:px-4 sm:py-1.5 hover:bg-[#6b7590] transition-colors duration-200 min-w-0">
          <PlayIcon
            className="w-3 h-3 sm:w-4 sm:h-4 text-[#fcfcfc] flex-shrink-0"
            fill="#fcfcfc"
          />
          <span className="truncate">Play</span>
        </button>
      </div>
    </div>
  );
}
