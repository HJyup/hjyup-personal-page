import { Widget } from '../../const/widgets';

export interface DropTarget {
  column: number;
  index: number;
}

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

export function handleWidgetDrop(
  draggedId: string,
  widgets: Widget[],
  widgetsByColumn: Record<number, Widget[]>,
  targetColumn: number,
  targetIndex: number,
  moveWidget: (widgetId: string, newColumn: number, newOrder: number) => void,
  reorderWidgetsInColumn: (column: number, newOrder: Widget[]) => void,
): boolean {
  const draggedWidget = widgets.find(w => w.id === draggedId);
  if (!draggedWidget) return false;

  const sourceColumn = draggedWidget.column;

  if (sourceColumn === targetColumn) {
    const columnWidgets = [...widgetsByColumn[targetColumn]];
    const draggedIndex = columnWidgets.findIndex(w => w.id === draggedId);

    if (draggedIndex === -1 || draggedIndex === targetIndex) return false;

    columnWidgets.splice(draggedIndex, 1);
    columnWidgets.splice(targetIndex, 0, draggedWidget);

    reorderWidgetsInColumn(targetColumn, columnWidgets);
  } else {
    moveWidget(draggedId, targetColumn, targetIndex);
  }

  return true;
}

export function isDropTargetActive(
  dropTarget: DropTarget | null,
  column: number,
  index: number,
): boolean {
  return dropTarget?.column === column && dropTarget?.index === index;
}

export function shouldDropAtEnd(
  e: React.DragEvent<HTMLDivElement>,
  el: HTMLElement,
  threshold = 50,
): boolean {
  const { bottom } = el.getBoundingClientRect();
  return e.clientY > bottom - threshold;
}
