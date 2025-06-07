import { LineConfig } from '@/components/ui/page-layout';

export const HERO_LAYOUT_CONFIG = {
  verticalLines: [{ position: 2 }, { position: 6 }] as LineConfig[],
  horizontalLines: [
    { position: 3 },
    { position: 4 },
    { position: 5 },
  ] as LineConfig[],
};

export const PROJECTS_LAYOUT_CONFIG = {
  backgroundColor: 'bg-white',
  verticalLines: [
    { position: 2, color: 'bg-blue-300' },
    { position: 6, color: 'bg-blue-300' },
    { position: 5, color: 'bg-blue-300', start: 6 },
  ] as LineConfig[],
  horizontalLines: [
    { position: 2, color: 'bg-blue-300' },
    { position: 3, color: 'bg-blue-300' },
    { position: 6, color: 'bg-blue-300' },
  ] as LineConfig[],
};

export const EXPERIENCE_LAYOUT_CONFIG = {
  verticalLines: [
    { position: 2, color: 'bg-zinc-800' },
    { position: 6, color: 'bg-zinc-800' },
  ] as LineConfig[],
  horizontalLines: [{ position: 6, color: 'bg-zinc-800' }] as LineConfig[],
};

export const PROJECT_CARDS = [
  {
    title: 'Project Share',
    theme: 'purple' as const,
    gridPosition: 'col-start-2 col-span-2 row-start-3 row-span-3',
  },
  {
    title: 'MicroSketch',
    theme: 'green' as const,
    gridPosition: 'col-start-4 col-span-2 row-start-3 row-span-3',
  },
];

export const DESIGN_ANNOTATIONS = {
  horizontalMeasurement: {
    label: '320px',
    position: 'col-start-2 col-span-2 row-start-6',
  },
  verticalMeasurement: {
    label: '240px',
    position: 'col-start-6 row-start-3 row-span-3',
  },
};

export const EXPERIENCE_BOX_POSITIONS = {
  redBox: 'col-start-2 row-start-5 col-span-2',
  compSocBox: 'col-start-4 row-start-5',
  solidgateBox: 'col-start-5 row-start-5',
  emptyBox: 'col-start-5 row-start-3 row-span-2',
  universityBox: 'col-start-3 row-start-4 col-span-2',
  hackathonBox: 'col-start-2 row-start-4',
};
