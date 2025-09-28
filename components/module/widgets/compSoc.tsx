import { forwardRef } from 'react';

import { WidgetLayout } from '@/components/ui/layout/widget-layout';

export const CompSoc = forwardRef<HTMLDivElement, { className?: string }>(
  ({ className = '' }, ref) => {
    return (
      <WidgetLayout
        ref={ref}
        className={`flex flex-col transition-all !py-0 justify-end ${className}`}
      >
        <div className="w-full bg-white dark:bg-neutral-900 pb-2 pt-3 rounded-t-md px-3 border-b">
          <div className="text-[10px] uppercase text-muted-foreground">
            Event Calendar
          </div>
          <div className="flex gap-2 items-center justify-between py-0.5">
            Comp-soc
            <svg
              width="18"
              height="18"
              viewBox="0 0 88 81"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-all duration-300"
            >
              <g clipPath="url(#clip0_1487_986)">
                <path
                  d="M50 43.75V62.5H12.5V56.25H6.25V50H0V12.5H6.25V6.25H12.5V0H43.75V6.25H50V25H31.25V37.5H43.75V43.75H50Z"
                  fill="white"
                />
                <path
                  d="M12.5 50H37.5V43.75H12.5V50ZM6.25 43.75H12.5V12.5H6.25V43.75ZM12.5 12.5H37.5V6.25H12.5V12.5ZM50 43.75V62.5H12.5V56.25H6.25V50H0V12.5H6.25V6.25H12.5V0H43.75V6.25H50V25H31.25V37.5H43.75V43.75H50Z"
                  fill="black"
                />
                <path
                  d="M87.5 50.0049V75.0049H81.25V81.2549H43.75V75.0049H37.5V62.5049H43.75V50.0049H37.5V31.2549H43.75V25.0049H50V18.7549H81.25V25.0049H87.5V43.7549H81.25V50.0049H87.5Z"
                  fill="white"
                />
                <path
                  d="M43.75 68.7549H68.75V62.5049H43.75V68.7549ZM43.75 43.7549H50V31.2549H43.75V43.7549ZM50 50.0049H68.75V43.7549H50V50.0049ZM68.75 62.5049H75V50.0049H68.75V62.5049ZM50 31.2549H75V25.0049H50V31.2549ZM87.5 50.0049V75.0049H81.25V81.2549H43.75V75.0049H37.5V62.5049H43.75V50.0049H37.5V31.2549H43.75V25.0049H50V18.7549H81.25V25.0049H87.5V43.7549H81.25V50.0049H87.5Z"
                  fill="#CC3333"
                />
              </g>
              <defs>
                <clipPath id="clip0_1487_986">
                  <rect width="88" height="81" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className="w-full grid grid-rows-3 bg-white dark:bg-neutral-900 py-2">
          <div className="flex gap-3 px-3 py-1 w-full">
            <div className="text-xs uppercase text-muted-foreground">4PM</div>
            <a
              href="https://comp-soc.com/events"
              className="bg-violet-500 flex-1 text-xs rounded-md p-3 text-white hover:cursor-pointer hover:scale-105 duration-200"
            >
              Project Share: Technology
              <div className="text-[10px] text-white/60 pt-1">AT 7.04</div>
            </a>
          </div>
          <div className="flex gap-3 px-3 py-1 w-full">
            <div className="text-xs uppercase text-muted-foreground">5PM</div>
          </div>
          <div className="flex gap-3 px-3 py-1 w-full">
            <div className="text-xs uppercase text-muted-foreground">6PM</div>
            <a
              href="https://comp-soc.com/events"
              className="bg-red-500 flex-1 text-xs rounded-md p-3 text-white hover:cursor-pointer hover:scale-105 duration-200"
            >
              STMU
              <div className="text-[10px] text-white/60 pt-1">AT 7.04</div>
            </a>
          </div>
        </div>
      </WidgetLayout>
    );
  },
);

CompSoc.displayName = 'CompSoc';
