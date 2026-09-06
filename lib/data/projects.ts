import { Project } from '@/components/project-list';

export const PROJECTS: Project[] = [
  {
    name: 'Patchdock',
    video: '/main/patchdock.webm',
    description:
      'Concurrent coding agent pipelines with configurable environment control.',
    topic: 'Agent infrastructure',
    icon: '/logos/patchdock_logo.svg',
    iconId: 'patchdock_logo',
    url: '/agents',
  },

  {
    name: 'HackTheBurgh',
    preview: '/main/htb.png',
    description:
      'Hackathon platform handling applications and events for 3,150+ students.',
    topic: 'Web platform',
    icon: '/logos/hacktheburgh-logo.svg',
    iconId: 'hacktheburgh_logo',
    url: 'https://hacktheburgh.com',
  },
  {
    name: 'Project Share',
    video: '/main/project-share.webm',
    description: 'Stage for students to share their engineering projects.',
    topic: 'Student Society',
    icon: '/logos/compsoc-logo.svg',
    iconId: 'project_share_logo',
    url: 'https://projectshare.comp-soc.com/',
  },
];
