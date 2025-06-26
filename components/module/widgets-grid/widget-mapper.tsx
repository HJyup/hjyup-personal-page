import { ComponentType } from 'react';

import { WidgetComponentType } from '@/const/widgets';

import { BooksWidget } from '../widgets/books';
import { GithubWidget } from '../widgets/github';
import { LogosWidget } from '../widgets/logos';
import { MusicWidget } from '../widgets/music';
import { NotesWidget } from '../widgets/notes';
import { PhotosMapsWidget } from '../widgets/photos-maps';
import { ProjectWidget } from '../widgets/project';

export const widgetRegistry: Partial<
  Record<WidgetComponentType, ComponentType>
> = {
  'books-card': BooksWidget,
  'github-card': GithubWidget,
  'music-card': MusicWidget,
  'notes-card': NotesWidget,
  'photos-maps-card': PhotosMapsWidget,
  'project-card': ProjectWidget,
  'projects-logo-card': LogosWidget,
};

export function WidgetMapper({
  type,
}: {
  type: WidgetComponentType;
}): React.ReactNode {
  const Component = widgetRegistry[type];
  if (!Component) {
    return (
      <div className="bg-zinc-200 dark:bg-zinc-800 h-[25vh] w-full rounded-2xl sm:rounded-3xl p-4" />
    );
  }
  return <Component />;
}
