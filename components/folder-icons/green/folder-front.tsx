import React from 'react';

export function FolderFront(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 940 656"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_ii_green)">
        <rect width="940" height="656" rx="72" fill="url(#front_green_fill)" />
      </g>

      <defs>
        <filter
          id="filter0_ii_green"
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
            values="0 0 0 0 0.027451 0 0 0 0 0.619608 0 0 0 0 0.345098 0 0 0 0.3 0"
          />
          <feBlend
            mode="multiply"
            in2="shape"
            result="effect1_innerShadow_green"
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
            in2="effect1_innerShadow_green"
            result="effect2_innerShadow_green"
          />
        </filter>

        <linearGradient
          id="front_green_fill"
          x1="470"
          y1="0"
          x2="470"
          y2="656"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#72E2AD" />
          <stop offset="1" stopColor="#3FCD89" />
        </linearGradient>
      </defs>
    </svg>
  );
}
