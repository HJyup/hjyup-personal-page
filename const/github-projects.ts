export const GITHUB_WIDGET: {
  name: string;
  type: 'finished' | 'in-progress' | 'on-hold';
  description: string;
  link: string;
}[] = [
  {
    name: 'HJyup/translatify',
    type: 'finished',
    link: 'https://github.com/HJyup/translatify',
    description:
      'A microservice application with async translation. (sandbox project)',
  },
  {
    name: 'HJyup/mtl-agents-preview',
    type: 'on-hold',
    link: 'https://github.com/HJyup/mtl-agents-preview',
    description:
      'Using multiple AI agents in just one hotkey. (preview project)',
  },
];
