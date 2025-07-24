import { Widget } from '../../const/widgets';

export function groupWidgetsByColumn(
  widgets: Widget[],
): Record<number, Widget[]> {
  const widgetsByColumn = widgets.reduce(
    (acc, widget) => {
      if (!acc[widget.column]) {
        acc[widget.column] = [];
      }
      acc[widget.column].push(widget);
      return acc;
    },
    {} as Record<number, Widget[]>,
  );

  Object.keys(widgetsByColumn).forEach(column => {
    widgetsByColumn[parseInt(column)].sort((a, b) => a.order - b.order);
  });

  return widgetsByColumn;
}

export function getColumnEntries(
  widgetsByColumn: Record<number, Widget[]>,
): Array<[string, Widget[]]> {
  return Object.entries(widgetsByColumn).sort(
    ([a], [b]) => parseInt(a) - parseInt(b),
  );
}
