export enum ExperienceType {
  JOB = 'job',
  VOLUNTEER = 'volunteer',
}

export interface ExperienceSection {
  type: ExperienceType;
  title: string;
  subtitle: string;
  date?: string;
  logo?: string;
  href?: string;
}

const EXPERIENCE: ExperienceSection[] = [
  {
    type: ExperienceType.JOB,
    title: 'Solidgate',
    subtitle:
      'Fintech payment processing platform that helps businesses accept online payments across 150+ countries',
    date: 'Aug 2023 - Present',
    href: 'https://www.solidgate.com/',
    logo: 'https://cdn-1.webcatalog.io/catalog/solidgate/solidgate-icon.png?v=1714781239646',
  },
  {
    type: ExperienceType.VOLUNTEER,
    title: 'HackTheBurgh XI',
    subtitle: 'Collaborated with the tech team to develop a hackathon platform',
    date: 'Dec 2024 - Mar 2025',
    href: 'https://hacktheburgh.com/',
    logo: 'https://2023.hacktheburgh.com/static/logos/htblogo.png',
  },
  {
    type: ExperienceType.VOLUNTEER,
    title: 'FictAdvisor',
    logo: 'https://avatars.githubusercontent.com/u/80922066?s=200&v=4',
    subtitle:
      'Developed a platform for teacher evaluations and interactive timetables across all Universities faculties',
    date: 'Feb 2023 - Apr 2023',
  },
];

export { EXPERIENCE };
