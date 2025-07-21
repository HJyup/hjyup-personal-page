import { DEFAULT_WIDGETS } from '@/const/widgets';
import { getColumnEntries, groupWidgetsByColumn } from '@/lib/widgets/utils';

import { WidgetMapper } from './widget-mapper';

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
