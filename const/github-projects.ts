export const GITHUB_WIDGET: {
  name: string;
  type: 'finished' | 'in-progress' | 'on-hold';
  description: string;
}[] = [
  {
    name: 'HJyup/micro-sketch.git',
    type: 'finished',
    description: 'Micro-frontend framework for building web applications.',
  },
  {
    name: 'HJyup/fst-tool.git',
    type: 'in-progress',
    description: 'Recreation of git command line tool using go and cobra.',
  },
  {
    name: 'HJyup/mlt-agents-api',
    type: 'on-hold',
    description: 'Using multiple AI agents in just one hotkey. (macOS project)',
  },
];
