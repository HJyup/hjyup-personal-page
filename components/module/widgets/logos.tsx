'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CircleArrowOutUpRightIcon, InfoIcon } from 'lucide-react';

import Htb from '@/components/ui/icons/htb';
import ProjectShare from '@/components/ui/icons/project-share';
import { MediumWidgetLayout } from '@/components/ui/layout/widget-layouts';
import { useWidgetEdit } from '@/provider/widget-edit-provider';

interface LogoInfo {
  title: string;
  description: string;
}

interface BackdropOverlayProps {
  isVisible: boolean;
  onClose: () => void;
}

interface InfoTooltipProps {
  info: LogoInfo;
  isVisible: boolean;
}

interface LogoContainerProps {
  logoKey: string;
  href: string;
  ariaLabel: string;
  info: LogoInfo;
  children: React.ReactNode;
  isActive: boolean;
  isEditMode: boolean;
  onInfoClick: (logoKey: string) => void;
  onMouseEnter: (logoKey: string) => void;
  onMouseLeave: () => void;
}

interface LogosWidgetProps {
  className?: string;
}

function BackdropOverlay({ isVisible, onClose }: BackdropOverlayProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-30 backdrop-blur-xl dark:bg-black/40 bg-black/10"
          onClick={onClose}
          onTouchEnd={onClose}
          role="button"
          aria-label="Close information overlay"
        />
      )}
    </AnimatePresence>
  );
}

function InfoTooltip({ info, isVisible }: InfoTooltipProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full mt-3 z-50 max-w-xs sm:max-w-sm"
        >
          <p className="text-lg font-medium text-zinc-950 dark:text-zinc-50 drop-shadow-sm">
            {info.title}
          </p>
          <p className="text-sm text-muted-foreground mt-1 drop-shadow-sm">
            {info.description}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function LogoContainer({
  logoKey,
  href,
  ariaLabel,
  info,
  children,
  isActive,
  isEditMode,
  onInfoClick,
  onMouseEnter,
  onMouseLeave,
}: LogoContainerProps) {
  return (
    <div className={`relative w-1/2 max-w-xs h-full ${isActive ? 'z-40' : ''}`}>
      <a
        href={href}
        className={`w-full h-full bg-gray-100 dark:bg-[hsl(0,0%,10%)] rounded-2xl sm:rounded-3xl flex justify-center items-center group focus:outline-none transition-all duration-300 ${
          !isEditMode ? 'cursor-pointer hover:scale-[1.01]' : ''
        } ${isActive ? 'scale-[1.02]' : ''}`}
        aria-label={ariaLabel}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>

      <button
        className="absolute bottom-3 left-3 w-10 h-10 bg-white/10 dark:bg-zinc-800/50 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:bg-white/30 dark:hover:bg-zinc-800/80 z-10 touch-manipulation"
        onMouseEnter={() => onMouseEnter(logoKey)}
        onMouseLeave={onMouseLeave}
        onClick={e => {
          e.preventDefault();
          e.stopPropagation();
          onInfoClick(logoKey);
        }}
        aria-label={`Show ${info.title} information`}
      >
        <CircleArrowOutUpRightIcon className="w-5 h-5 text-zinc-500 dark:text-zinc-500" />
      </button>

      <InfoTooltip info={info} isVisible={isActive} />
    </div>
  );
}

export function LogosWidget({ className = '' }: LogosWidgetProps) {
  const { isEditMode } = useWidgetEdit();
  const [hoveredInfo, setHoveredInfo] = useState<string | null>(null);
  const [clickedInfo, setClickedInfo] = useState<string | null>(null);

  const logoInfo: Record<string, LogoInfo> = {
    htb: {
      title: '🏆 HackTheBurgh',
      description: 'Organiser of the largest Scotland Hackathon',
    },
    projectshare: {
      title: '💻 Project share',
      description:
        'Community where enthusiastic students bring their projects to life',
    },
  };

  const activeInfo = clickedInfo || hoveredInfo;

  const handleInfoClick = (logoKey: string) => {
    if (isEditMode) return;
    setClickedInfo(clickedInfo === logoKey ? null : logoKey);
    setHoveredInfo(null);
  };

  const handleMouseEnter = (logoKey: string) => {
    if (isEditMode || clickedInfo) return;
    setHoveredInfo(logoKey);
  };

  const handleMouseLeave = () => {
    if (clickedInfo) return;
    setHoveredInfo(null);
  };

  const handleBackdropClose = () => {
    setClickedInfo(null);
    setHoveredInfo(null);
  };

  return (
    <>
      <BackdropOverlay isVisible={!!activeInfo} onClose={handleBackdropClose} />

      <MediumWidgetLayout className={className} isBackground={false}>
        <div
          className="h-full flex items-center justify-center gap-3 sm:gap-4 lg:gap-5"
          role="region"
          aria-label="Partner organizations and projects"
        >
          <LogoContainer
            logoKey="htb"
            href="https://hacktheburgh.com/"
            ariaLabel="Visit HackTheBurgh hackathon website"
            info={logoInfo.htb}
            isActive={activeInfo === 'htb'}
            isEditMode={isEditMode}
            onInfoClick={handleInfoClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Htb
              className={`w-[60%] h-[60%] transition-transform duration-300 ${
                activeInfo === 'htb' ? 'scale-110' : 'group-hover:scale-105'
              }`}
              showHoverColor={activeInfo === 'htb'}
            />
          </LogoContainer>

          <LogoContainer
            logoKey="projectshare"
            href="https://projectshare.comp-soc.com/"
            ariaLabel="Visit ProjectShare platform by CompSoc"
            info={logoInfo.projectshare}
            isActive={activeInfo === 'projectshare'}
            isEditMode={isEditMode}
            onInfoClick={handleInfoClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <ProjectShare
              className={`w-[60%] h-[60%] transition-transform duration-300 ${
                activeInfo === 'projectshare'
                  ? 'scale-110'
                  : 'group-hover:scale-105'
              }`}
              showHoverColor={activeInfo === 'projectshare'}
            />
          </LogoContainer>
        </div>
      </MediumWidgetLayout>
    </>
  );
}
