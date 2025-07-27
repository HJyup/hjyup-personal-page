export interface Widget {
  id: string;
  component: WidgetComponentType;
  column: number;
  order: number;
}

export type WidgetComponentType =
  | 'music-card'
  | 'github-card'
  | 'projects-logo-card'
  | 'books-card'
  | 'email-card';

export const DEFAULT_WIDGETS: Widget[] = [
  { id: 'github-card', component: 'github-card', column: 0, order: 1 },
  { id: 'books-card', component: 'books-card', column: 0, order: 3 },
  { id: 'email-card', component: 'email-card', column: 1, order: 0 },
  {
    id: 'projects-logo-card',
    component: 'projects-logo-card',
    column: 0,
    order: 0,
  },
  { id: 'music-card', component: 'music-card', column: 1, order: 2 },
];
