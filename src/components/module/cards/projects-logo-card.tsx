'use client';

import React from 'react';

import { useWidgetEdit } from '@/provider/context';

interface ProjectsLogoCardProps {
  className?: string;
}

export function ProjectsLogoCard({ className = '' }: ProjectsLogoCardProps) {
  const { isEditMode } = useWidgetEdit();

  return (
    <div
      className={`h-[25vh] flex items-center justify-center gap-3 ${className}`}
    >
      <div
        className={`w-1/2 h-full bg-gray-100 dark:bg-zinc-800 rounded-2xl sm:rounded-3xl flex justify-center items-center group ${!isEditMode ? 'cursor-pointer transition-all duration-300 hover:scale-[1.02]' : ''}`}
      >
        <svg
          width="618"
          height="534"
          viewBox="0 0 618 534"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[60%] h-[60%]"
        >
          <path
            d="M460.776 8L464.657 14.8147L605.178 261.57L609 268.283L605.146 274.979L464.625 518.923L460.732 525.679H160.242L156.33 519.023L12.9987 275.079L9 268.284L12.9571 261.47L156.288 14.7147L160.189 8H460.776Z"
            stroke="currentColor"
            strokeWidth="15"
            className={`transition-colors duration-300 ${!isEditMode ? 'group-hover:stroke-yellow-400' : ''} text-zinc-800 dark:text-white`}
          />
          <path
            d="M341.806 319.333L356.893 384.709L357.863 384.724L375.189 319.333H544.246L440.842 497.075H178.375L168.527 478.47L258.183 319.333H341.806ZM196.351 36.6042L222.457 77.1531L167.522 174.694L167.384 174.938L167.521 175.183L199.56 232.515L199.983 233.272L200.426 232.527L257.881 136.024L292.163 196.297L148.256 445.475L111.774 390.201L168.39 292.666L168.536 292.413L168.388 292.161L132.977 232.018L132.534 231.267L132.11 232.028L79.1233 326.844L43.1956 269.359L178.363 36.6042H196.351ZM291.74 378.172L259.701 436.066L259.291 436.808H324.273L324.144 436.204L311.778 378.309L311.694 377.914H291.883L291.74 378.172ZM401.304 378.273L384.442 436.169L384.255 436.808H405.999L406.146 436.569L441.557 378.675L442.022 377.914H401.409L401.304 378.273ZM551.569 228.837L574.323 269.353L563.951 285.731H536.424L506.596 228.837H551.569ZM442.526 36.6042L476.806 96.8718H404.851L405.286 97.6228L514.457 285.731H450.414L342.638 97.1238L342.493 96.8718H269.984L235.15 36.6042H442.526ZM392.508 228.837L426.756 285.731H375.096L343.059 228.837H392.508ZM341.355 285.731H276.199L310.146 229.337L341.355 285.731Z"
            fill="currentColor"
            stroke="currentColor"
            className={`transition-colors duration-300 text-zinc-800 dark:text-white ${!isEditMode ? 'group-hover:fill-yellow-400 group-hover:stroke-yellow-400' : ''}`}
          />
        </svg>
      </div>
      <div
        className={`w-1/2 h-full bg-gray-100 dark:bg-zinc-800 rounded-2xl sm:rounded-3xl flex justify-center items-center group ${!isEditMode ? 'cursor-pointer transition-all duration-300 hover:scale-[1.02]' : ''}`}
      >
        <svg
          width="134"
          height="90"
          viewBox="0 0 134 90"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-[60%] h-[60%] transition-colors duration-300 text-zinc-800 dark:text-white ${!isEditMode ? 'group-hover:text-violet-600' : ''}`}
        >
          <path
            d="M26.8003 8.93335H125.067V71.4667H116.134V80.4H26.8003V62.5333H17.8669V44.6667H8.93359V35.7333H26.8003V8.93335Z"
            fill="none"
          />
          <path
            d="M134 17.8667H125.066V71.4667H116.133V80.4H26.7998V89.3334H134V17.8667Z"
            fill="currentColor"
          />
          <rect
            width="8.93333"
            height="17.8667"
            transform="matrix(-1 0 0 1 116.134 53.6002)"
            fill="currentColor"
          />
          <rect
            width="8.93333"
            height="17.8667"
            transform="matrix(-1 0 0 1 107.201 35.7334)"
            fill="currentColor"
          />
          <rect
            width="8.93333"
            height="17.8667"
            transform="matrix(-1 0 0 1 26.7998 62.5333)"
            fill="currentColor"
          />
          <rect
            width="8.93333"
            height="17.8667"
            transform="matrix(-1 0 0 1 17.8667 44.6667)"
            fill="currentColor"
          />
          <path
            d="M26.8 8.93335H17.8667V26.8H0V44.6667H8.93333V35.7333H98.2667V26.8H26.8V8.93335Z"
            fill="currentColor"
          />
          <rect
            width="62.5333"
            height="8.93333"
            transform="matrix(-1 0 0 1 125.067 8.93335)"
            fill="currentColor"
          />
          <rect
            width="35.7333"
            height="8.93333"
            transform="matrix(-1 0 0 1 62.5337 0)"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
}
