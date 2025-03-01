export type Section = {
  id: string;
  label: string;
  disabled?: boolean;
};

export const SECTIONS: Section[] = [
  { id: 'start', label: 'Start animation' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'posts', label: 'Posts', disabled: true },
];
