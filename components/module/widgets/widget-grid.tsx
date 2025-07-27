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
      <div className="bg-zinc-200 dark:bg-zinc-800 h-[20rem] sm:h-[22rem] md:h-[24rem] lg:h-[26rem] xl:h-[28rem] 2xl:h-[30rem] w-full rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10" />
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
    <div className="w-full">
      <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 w-full max-w-7xl mx-auto">
        {columnsArray.map(([colIndex, columnWidgets]) => (
          <div
            key={colIndex}
            className="flex flex-col gap-6 lg:gap-8 w-full sm:w-1/2"
          >
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
