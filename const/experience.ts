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
    title: 'Software developer',
    company: 'Solidgate',
    period: '2023 - Present',
    description:
      'Building internal financial tools and pricing systems at a global payment processor.',
    status: 'active',
    statusColor: 'green',
    href: 'https://solidgate.com',
  },
  {
    id: 'comp-soc' as WidgetId,
    title: 'Committee member',
    company: 'Comp-soc',
    period: '2025 - Present',
    description:
      "Organise Scotland's largest student hackathon\u00A0(400+\u00A0participants) and maintain the society's website.",
    status: 'active',
    statusColor: 'red',
    href: 'https://comp-soc.com/',
  },
  {
    id: 'project-share' as WidgetId,
    title: 'Committee member',
    company: 'Project Share',
    period: '2025 - Present',
    description: 'Host student-led project sharing sessions.',
    status: 'active',
    statusColor: 'violet',
    href: 'https://projectshare.comp-soc.com/',
  },
];
