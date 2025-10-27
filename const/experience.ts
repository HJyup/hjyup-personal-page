import { WidgetId } from '@/types/widgets';

export interface ExperienceItem {
  id: WidgetId;
  title: string;
  company: string;
  period: string;
  description: string;
  status: 'active' | 'inactive';
  statusColor: 'green' | 'red' | 'violet';
  href: string;
}

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'solidgate',
    title: 'Software Engineer',
    company: 'Solidgate',
    period: '2023 - Present',
    description:
      'Building a global payments orchestration platform for thousands of merchants in 150+ countries.',
    status: 'active',
    statusColor: 'green',
    href: 'https://solidgate.com',
  },
  {
    id: 'compSoc',
    title: '2nd Year Representative',
    company: 'Comp-soc',
    period: '2025 - Present',
    description:
      "Organised Scotland's largest student hackathon and maintain the society's website.",
    status: 'active',
    statusColor: 'red',
    href: 'https://comp-soc.com/',
  },
  {
    id: 'projectShare',
    title: 'Committee member',
    company: 'Project Share',
    period: '2025 - Present',
    description:
      'Help students share personal tech projects, exchange advice, and inspire each other to turn ideas into reality.',
    status: 'active',
    statusColor: 'violet',
    href: 'https://projectshare.comp-soc.com/',
  },
];
