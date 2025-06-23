'use client';

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

import { DEFAULT_WIDGETS, Widget } from '../const/widgets';
import {
  moveWidgetInList,
  removeWidgetFromList,
  reorderWidgetsInColumnList,
} from '../lib/widgets/widget-operations';

export interface WidgetEditProviderProps {
  children: ReactNode;
  initialWidgets?: Widget[];
}

export interface WidgetEditContextType {
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

export function useWidgetEdit(): WidgetEditContextType {
  const context = useContext(WidgetEditContext);
  if (!context) {
    throw new Error('useWidgetEdit must be used within a WidgetEditProvider');
  }
  return context;
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
    if (!isEdit) setDraggedWidgetId(null);
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

  const contextValue: WidgetEditContextType = {
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
    <WidgetEditContext.Provider value={contextValue}>
      {children}
    </WidgetEditContext.Provider>
  );
}
