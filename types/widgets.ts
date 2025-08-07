export const WIDGET_IDS = [
  'books',
  'github',
  'email',
  'about',
  'solidgate',
  'music',
  'animations',
  'container',
  'project-share',
  'comp-soc',
] as const;

export type WidgetId = (typeof WIDGET_IDS)[number];
