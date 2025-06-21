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
  | 'photo-container'
  | 'github-card'
  | 'projects-logo-card'
  | 'contact-card';

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
    id: 'photo-container',
    component: 'photo-container',
    column: 1,
    order: 3,
  },
  { id: 'contact-card', component: 'contact-card', column: 0, order: 3 },
];
