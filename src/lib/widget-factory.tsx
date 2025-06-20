import React from 'react';

import {
  MusicCard,
  NotesCard,
  PhotoCard,
  ProjectCard,
  SocialLinksCard,
} from '@/components/module';
import { EditableWidget } from '@/components/ui';
import { WidgetComponentType } from '@/const/widgets';

interface WidgetFactoryProps {
  photos: Array<{
    src: string;
    alt: string;
    date: string;
  }>;
}

export function createWidgetComponent(
  componentType: WidgetComponentType,
  id: string,
  props: WidgetFactoryProps,
) {
  const { photos } = props;

  switch (componentType) {
    case 'notes-card':
      return (
        <EditableWidget id={id}>
          <NotesCard />
        </EditableWidget>
      );
    case 'project-card':
      return (
        <EditableWidget id={id}>
          <ProjectCard />
        </EditableWidget>
      );
    case 'music-card':
      return (
        <EditableWidget id={id}>
          <MusicCard />
        </EditableWidget>
      );
    case 'photo-social-container':
      return (
        <EditableWidget id={id}>
          <div className="flex gap-3">
            <PhotoCard photos={photos} />
            <div className="w-1/2 bg-gray-100 dark:bg-zinc-800 rounded-2xl sm:rounded-3xl p-3 h-[23vh]">
              <SocialLinksCard />
            </div>
          </div>
        </EditableWidget>
      );
    default:
      return null;
  }
}
