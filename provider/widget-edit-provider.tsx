'use client';

import { ReactNode, useCallback, useState } from 'react';

import { DEFAULT_WIDGETS, Widget } from '../const/widgets';
import { WidgetEditContext } from '../lib/widgets/use-widget-edit-context';
import {
  moveWidgetInList,
  reorderWidgetsInColumnList,
} from '../lib/widgets/widget-operations';
import { removeWidgetFromList } from '../lib/widgets/widget-operations';

export interface WidgetEditProviderProps {
  children: ReactNode;
  initialWidgets?: Widget[];
}

export function WidgetEditProvider({
  children,
  initialWidgets = DEFAULT_WIDGETS,
}: WidgetEditProviderProps) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [draggedWidgetId, setDraggedWidgetId] = useState<string | null>(null);
  const [widgets, setWidgets] = useState<Widget[]>(initialWidgets);

  const setEditMode = useCallback((isEdit: boolean) => {
    setIsEditMode(isEdit);
    if (!isEdit) {
      setDraggedWidgetId(null);
    }
  }, []);

  const setDraggedWidget = useCallback((id: string | null) => {
    setDraggedWidgetId(id);
  }, []);

  const removeWidget = useCallback((id: string) => {
    setWidgets(prev => removeWidgetFromList(prev, id));
  }, []);

  const moveWidget = useCallback(
    (widgetId: string, newColumn: number, newOrder: number) => {
      setWidgets(prev => moveWidgetInList(prev, widgetId, newColumn, newOrder));
    },
    [],
  );

  const reorderWidgetsInColumn = useCallback(
    (column: number, newOrder: Widget[]) => {
      setWidgets(prev => reorderWidgetsInColumnList(prev, column, newOrder));
    },
    [],
  );

  const saveWidgets = useCallback(() => {
    // TODO: Save widgets to localstorage
    setEditMode(false);
  }, [setEditMode]);

  const value = {
    isEditMode,
    draggedWidgetId,
    widgets,
    setEditMode,
    setDraggedWidget,
    removeWidget,
    moveWidget,
    reorderWidgetsInColumn,
    saveWidgets,
  };

  return (
    <WidgetEditContext.Provider value={value}>
      {children}
    </WidgetEditContext.Provider>
  );
}
