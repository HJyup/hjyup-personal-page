import { ComponentType } from 'react';

import { DEFAULT_WIDGETS, WidgetComponentType } from '@/const/widgets';
import { getColumnEntries, groupWidgetsByColumn } from '@/lib/widgets/utils';

import { BooksWidget } from './books';
import { EmailWidget } from './email';
import { GithubWidget } from './github';
import { LogosWidget } from './logos';
import { MusicWidget } from './music';

const widgetRegistry: Partial<Record<WidgetComponentType, ComponentType>> = {
  'books-card': BooksWidget,
  'github-card': GithubWidget,
  'email-card': EmailWidget,
  'music-card': MusicWidget,
  'projects-logo-card': LogosWidget,
};

function WidgetMapper({
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

export function WidgetGrid() {
  const widgetsByColumn = groupWidgetsByColumn(DEFAULT_WIDGETS);
  const columnsArray = getColumnEntries(widgetsByColumn).map(
    ([k, v]) => [Number(k), v] as const,
  );

  return (
    <div className="scroll-mt-20 flex flex-col items-center w-full my-8 sm:my-12 lg:my-16">
      <div className="flex flex-col sm:flex-row gap-3 w-full">
        {columnsArray.map(([colIndex, columnWidgets]) => (
          <div key={colIndex} className="flex flex-col gap-3 w-full sm:w-1/2">
            {columnWidgets.map(widget => (
              <div key={widget.id}>
                <WidgetMapper type={widget.component} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
