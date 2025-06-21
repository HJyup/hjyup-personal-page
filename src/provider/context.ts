'use client';

import { createContext, useContext } from 'react';

import { Widget } from '@/const/widgets';

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

export const WidgetEditContext = createContext<
  WidgetEditContextType | undefined
>(undefined);

export function useWidgetEdit() {
  const context = useContext(WidgetEditContext);
  if (!context) {
    throw new Error('useWidgetEdit must be used within a WidgetEditProvider');
  }
  return context;
}
