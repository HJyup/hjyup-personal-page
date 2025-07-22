'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Htb from '@/components/ui/icons/htb';
import ProjectShare from '@/components/ui/icons/project-share';
import { MediumWidgetLayout } from '@/components/ui/layout/widget-layouts';

interface Logo {
  title: string;
  description: string;
  key: string;
  href: string;
  ariaLabel: string;
  icon: (props: {
    className: string;
    showHoverColor: boolean;
  }) => React.ReactNode;
}

interface Props {
  className?: string;
}

function Tooltip({
  title,
  description,
  isVisible,
}: {
  title: string;
  description: string;
  isVisible: boolean;
}) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
          transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute top-full mt-3 z-50 max-w-xs sm:max-w-sm"
        >
          <p className="text-lg md:text-xl font-medium text-zinc-950 dark:text-zinc-50 drop-shadow-sm">
            {title}
          </p>
          <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 mt-2 drop-shadow-sm">
            {description}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function LogosWidget({ className = '' }: Props) {
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const logos: Logo[] = [
    {
      key: 'htb',
      title: 'HackTheBurgh',
      description: 'Organiser of the largest Scotland Hackathon',
      href: 'https://hacktheburgh.com/',
      ariaLabel: 'Visit HackTheBurgh hackathon website',
      icon: Htb,
    },
    {
      key: 'projectshare',
      title: 'Project share',
      description:
        'Community where enthusiastic students bring their projects to life',
      href: 'https://projectshare.comp-soc.com/',
      ariaLabel: 'Visit ProjectShare platform by CompSoc',
      icon: ProjectShare,
    },
  ];

  return (
    <>
      <AnimatePresence>
        {activeKey && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="fixed inset-0 z-30 backdrop-blur-md dark:bg-black/20 bg-black/5"
            onClick={() => setActiveKey(null)}
            role="button"
            aria-label="Close information overlay"
          />
        )}
      </AnimatePresence>

      <MediumWidgetLayout className={className} isBackground={false}>
        <div
          className="h-full flex items-center justify-center gap-4"
          role="region"
          aria-label="Partner organizations and projects"
        >
          {logos.map(logo => (
            <div
              key={logo.key}
              className={`relative w-1/2 max-w-xs h-full ${activeKey === logo.key ? 'z-40' : ''}`}
              onMouseEnter={() => setActiveKey(logo.key)}
              onMouseLeave={() => setActiveKey(null)}
            >
              <a
                href={logo.href}
                className="w-full h-full bg-zinc-100 dark:bg-[hsl(0,0%,10%)] rounded-2xl sm:rounded-3xl flex justify-center items-center group focus:outline-none transition-all duration-200 ease-out-cubic motion-reduce:transition-none hover:scale-105 cursor-pointer"
                aria-label={logo.ariaLabel}
                target="_blank"
                rel="noopener noreferrer"
              >
                <logo.icon
                  className="w-[60%] h-[60%] transition-colors duration-200 ease-out-cubic motion-reduce:transition-none"
                  showHoverColor={activeKey === logo.key}
                />
              </a>

              <Tooltip
                title={logo.title}
                description={logo.description}
                isVisible={activeKey === logo.key}
              />
            </div>
          ))}
        </div>
      </MediumWidgetLayout>
    </>
  );
}
