import { ComponentType } from 'react';

import { WidgetComponentType } from '@/const/widgets';

import { BooksWidget } from '../widgets/books';
import { EmailWidget } from '../widgets/email';
import { GithubWidget } from '../widgets/github';
import { LogosWidget } from '../widgets/logos';
import { MusicWidget } from '../widgets/music';
import { NotesWidget } from '../widgets/notes';

export const widgetRegistry: Partial<
  Record<WidgetComponentType, ComponentType>
> = {
  'books-card': BooksWidget,
  'github-card': GithubWidget,
  'email-card': EmailWidget,
  'music-card': MusicWidget,
  'notes-card': NotesWidget,
  'projects-logo-card': LogosWidget,
  // 'contact-card': ContactWidget,
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
