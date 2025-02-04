export interface EducationSection {
  title: string;
  subtitle: string;
  logo: string;
  date?: string;
  href?: string;
}

const EDUCATION: EducationSection[] = [
  {
    title: 'University of Edinburgh',
    subtitle: 'Artificial Intelligence & Computer Science',
    date: '2024 - 2028',
    href: 'https://www.ed.ac.uk/',
    logo: 'https://logonoid.com/images/university-of-edinburgh-logo.png',
  },
];

export { EDUCATION };
