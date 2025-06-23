import { Widget } from '../../const/widgets';

export function removeWidgetFromList(widgets: Widget[], id: string): Widget[] {
  return widgets.filter(widget => widget.id !== id);
}

export function moveWidgetInList(
  widgets: Widget[],
  widgetId: string,
  newColumn: number,
  newOrder: number,
): Widget[] {
  const updatedWidgets = widgets.map(widget => {
    if (widget.id === widgetId) {
      return { ...widget, column: newColumn, order: newOrder };
    }
    return widget;
  });

  const targetColumnWidgets = updatedWidgets
    .filter(w => w.column === newColumn && w.id !== widgetId)
    .sort((a, b) => a.order - b.order);

  targetColumnWidgets.forEach((widget, index) => {
    if (index >= newOrder) {
      const widgetIndex = updatedWidgets.findIndex(w => w.id === widget.id);
      updatedWidgets[widgetIndex] = { ...widget, order: index + 1 };
    }
  });

  return updatedWidgets;
}

export function reorderWidgetsInColumnList(
  widgets: Widget[],
  column: number,
  newOrder: Widget[],
): Widget[] {
  const otherWidgets = widgets.filter(w => w.column !== column);
  const reorderedWidgets = newOrder.map((widget, index) => ({
    ...widget,
    order: index,
    column,
  }));

  return [...otherWidgets, ...reorderedWidgets];
}
