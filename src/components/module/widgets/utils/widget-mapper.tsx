import React from 'react';

import {
  GithubCard,
  MusicCard,
  NotesCard,
  PhotoCard,
  ProjectCard,
} from '@/components/module/cards';
import { EditableWidget } from '@/components/module/widgets/editable-widget';
import { WidgetComponentType } from '@/const/widgets';
import { assertNever } from '@/lib/utils';

import { ProjectsLogoCard } from '../../cards/projects-logo-card';

type WidgetRenderer = (id: string) => React.ReactNode;

const createEditableWidget =
  (Component: React.ComponentType) => (id: string) => (
    <EditableWidget id={id}>
      <Component />
    </EditableWidget>
  );

const widgetMap = {
  'notes-card': createEditableWidget(NotesCard),
  'project-card': createEditableWidget(ProjectCard),
  'music-card': createEditableWidget(MusicCard),
  'github-card': createEditableWidget(GithubCard),
  'projects-logo-card': createEditableWidget(ProjectsLogoCard),
  'photo-container': createEditableWidget(PhotoCard),
  'contact-card': (id: string) => (
    <EditableWidget id={id}>
      <div className="flex flex-col gap-2">
        <div className="h-[25vh] flex items-center justify-center gap-3">
          <div className="w-full h-full bg-gray-100 dark:bg-zinc-800 rounded-2xl sm:rounded-3xl " />
          <div className="w-full h-full bg-gray-100 dark:bg-zinc-800 rounded-2xl sm:rounded-3xl" />
        </div>
      </div>
    </EditableWidget>
  ),
} as const satisfies Record<WidgetComponentType, WidgetRenderer>;

export const mapWidgetToComponent = (
  componentType: WidgetComponentType,
  id: string,
): React.ReactNode => {
  const renderer = widgetMap[componentType];

  if (!renderer) {
    return assertNever(
      componentType as never,
      `Unknown widget component type: ${componentType}`,
    );
  }

  return renderer(id);
};
