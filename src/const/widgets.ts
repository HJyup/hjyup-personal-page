export interface Widget {
  id: string;
  component: string;
  column: number;
  order: number;
}

export type WidgetComponentType =
  | 'notes-card'
  | 'project-card'
  | 'music-card'
  | 'photo-social-container';

export const DEFAULT_WIDGETS: Widget[] = [
  { id: 'notes-card', component: 'notes-card', column: 0, order: 0 },
  { id: 'project-card', component: 'project-card', column: 0, order: 1 },
  { id: 'music-card', component: 'music-card', column: 1, order: 2 },
  {
    id: 'photo-social-container',
    component: 'photo-social-container',
    column: 1,
    order: 3,
  },
];

export const WIDGET_GRID_STYLES = {
  container:
    'scroll-mt-20 flex flex-col items-center w-full my-8 sm:my-12 lg:my-16',
  columnsWrapper: 'flex flex-col sm:flex-row gap-3 w-full',
  column: 'flex flex-col gap-3 w-full sm:w-1/2',
  dropIndicator:
    'absolute -top-1 left-0 right-0 h-0.5 bg-blue-400 rounded-full z-40',
} as const;
