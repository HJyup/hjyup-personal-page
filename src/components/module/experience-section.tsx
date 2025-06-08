'use client';

import { Info } from 'lucide-react';

import { PageLayout } from '@/components/ui';

const LAYOUT_CONFIG = {
  verticalLines: [
    { position: 2, color: 'bg-zinc-800' },
    { position: 6, color: 'bg-zinc-800' },
  ],
  horizontalLines: [{ position: 6, color: 'bg-zinc-800' }],
};

const EXPERIENCE_BOX_POSITIONS = {
  redBox: 'col-start-2 row-start-5 col-span-2',
  compSocBox: 'col-start-4 row-start-5',
  solidgateBox: 'col-start-5 row-start-5',
  emptyBox: 'col-start-5 row-start-3 row-span-2',
  universityBox: 'col-start-3 row-start-4 col-span-2',
  hackathonBox: 'col-start-2 row-start-4',
};

import {
  CompSocBox,
  HackathonBox,
  NasaSpaceAppsBox,
  ProjectShareBox,
  SolidgateBox,
  UniversityBox,
} from './experience-box';
import Footer from './footer';

interface ExperienceSectionProps {
  className?: string;
}

const ExperienceSection = ({ className }: ExperienceSectionProps) => {
  return (
    <PageLayout
      className={className}
      verticalLines={LAYOUT_CONFIG.verticalLines}
      horizontalLines={LAYOUT_CONFIG.horizontalLines}
    >
      <div className="col-start-2 row-start-1 col-span-4 flex justify-around items-center gap-6 m-10 pt-20">
        <p className="text-white font-bold text-6xl">More Than Just Projects</p>
        <p className="font-light text-zinc-500 text-sm w-1/3">
          Let&apos;s talk about the <span className="font-bold">other</span>{' '}
          cool things that have shaped my path. Here&apos;s a quick, fun look at
          the highlights.
        </p>
      </div>

      <ProjectShareBox className={EXPERIENCE_BOX_POSITIONS.redBox} />

      <CompSocBox className={EXPERIENCE_BOX_POSITIONS.compSocBox} />

      <SolidgateBox className={EXPERIENCE_BOX_POSITIONS.solidgateBox} />

      <NasaSpaceAppsBox className={EXPERIENCE_BOX_POSITIONS.emptyBox} />

      <UniversityBox className={EXPERIENCE_BOX_POSITIONS.universityBox} />

      <HackathonBox className={EXPERIENCE_BOX_POSITIONS.hackathonBox} />

      <div className="col-start-4 row-start-3 flex items-end justify-end m-2">
        <button
          className="bg-white text-black hover:text-blue-600 hover:bg-blue-50 transition-all px-6 py-3 rounded-lg shadow-lg hover:shadow-xl inline-flex items-center gap-3 text-lg font-semibold group z-10 cursor-pointer"
          disabled
        >
          <Info className="w-5 h-5" />
          Discover more
        </button>
      </div>

      <div className="col-start-1 col-span-6 row-span-6 row-start-6 flex justify-center items-end">
        <Footer />
      </div>
    </PageLayout>
  );
};

export default ExperienceSection;
