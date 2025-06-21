export interface Widget {
  id: string;
  component: WidgetComponentType;
  column: number;
  order: number;
}

export type WidgetComponentType =
  | 'notes-card'
  | 'project-card'
  | 'music-card'
  | 'photo-social-container'
  | 'github-card'
  | 'projects-logo-card';

export const DEFAULT_WIDGETS: Widget[] = [
  { id: 'notes-card', component: 'notes-card', column: 1, order: 0 },
  { id: 'github-card', component: 'github-card', column: 0, order: 2 },
  {
    id: 'projects-logo-card',
    component: 'projects-logo-card',
    column: 0,
    order: 0,
  },
  { id: 'project-card', component: 'project-card', column: 0, order: 1 },
  { id: 'music-card', component: 'music-card', column: 1, order: 2 },
  {
    id: 'photo-social-container',
    component: 'photo-social-container',
    column: 1,
    order: 3,
  },
];
