'use client';

import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

import { DEFAULT_WIDGETS, Widget } from '@/const/widgets';

export type { Widget };

interface WidgetEditContextType {
  isEditMode: boolean;
  draggedWidgetId: string | null;
  widgets: Widget[];
  setEditMode: (isEdit: boolean) => void;
  setDraggedWidget: (id: string | null) => void;
  removeWidget: (id: string) => void;
  moveWidget: (widgetId: string, newColumn: number, newOrder: number) => void;
  reorderWidgetsInColumn: (column: number, newOrder: Widget[]) => void;
  saveWidgets: () => void;
}

const WidgetEditContext = createContext<WidgetEditContextType | undefined>(
  undefined,
);

export function useWidgetEdit() {
  const context = useContext(WidgetEditContext);
  if (!context) {
    throw new Error('useWidgetEdit must be used within a WidgetEditProvider');
  }
  return context;
}

interface WidgetEditProviderProps {
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
    setWidgets(prev => prev.filter(widget => widget.id !== id));
  }, []);

  const moveWidget = useCallback(
    (widgetId: string, newColumn: number, newOrder: number) => {
      setWidgets(prev => {
        const updatedWidgets = prev.map(widget => {
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
            const widgetIndex = updatedWidgets.findIndex(
              w => w.id === widget.id,
            );
            updatedWidgets[widgetIndex] = { ...widget, order: index + 1 };
          }
        });

        return updatedWidgets;
      });
    },
    [],
  );

  const reorderWidgetsInColumn = useCallback(
    (column: number, newOrder: Widget[]) => {
      setWidgets(prev => {
        const otherWidgets = prev.filter(w => w.column !== column);
        const reorderedWidgets = newOrder.map((widget, index) => ({
          ...widget,
          order: index,
          column,
        }));

        return [...otherWidgets, ...reorderedWidgets];
      });
    },
    [],
  );

  const saveWidgets = useCallback(() => {
    // TODO: Save widgets to localstorage
    setEditMode(false);
  }, [setEditMode]);

  const value: WidgetEditContextType = {
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
