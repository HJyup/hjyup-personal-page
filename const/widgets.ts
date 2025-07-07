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
  | 'books-card'
  | 'email-card';
// | 'contact-card';

export const DEFAULT_WIDGETS: Widget[] = [
  { id: 'notes-card', component: 'notes-card', column: 1, order: 0 },
  { id: 'github-card', component: 'github-card', column: 0, order: 2 },
  { id: 'books-card', component: 'books-card', column: 0, order: 3 },
  { id: 'email-card', component: 'email-card', column: 0, order: 4 },
  // { id: 'contact-card', component: 'contact-card', column: 1, order: 4 },
  {
    id: 'projects-logo-card',
    component: 'projects-logo-card',
    column: 0,
    order: 0,
  },
  { id: 'music-card', component: 'music-card', column: 1, order: 2 },
];
