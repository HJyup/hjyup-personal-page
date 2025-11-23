import React from 'react';

export function FolderFront(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 940 656"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_ii_purple)">
        <rect width="940" height="656" rx="72" fill="url(#front_purple_fill)" />
      </g>

      <defs>
        <filter
          id="filter0_ii_purple"
          x="0"
          y="-32"
          width="940"
          height="694"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-32" />
          <feGaussianBlur stdDeviation="64" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.46 0 0 0 0 0.12 0 0 0 0 0.52 0 0 0 0.25 0"
          />
          <feBlend
            mode="multiply"
            in2="shape"
            result="effect1_innerShadow_purple"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="6" />
          <feGaussianBlur stdDeviation="3" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow_purple"
            result="effect2_innerShadow_purple"
          />
        </filter>
        <linearGradient
          id="front_purple_fill"
          x1="470"
          y1="0"
          x2="470"
          y2="656"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CA81E4" />
          <stop offset="1" stopColor="#B351D6" />
        </linearGradient>
      </defs>
    </svg>
  );
}
