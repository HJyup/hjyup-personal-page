'use client';
import React, { useCallback, useMemo, useState } from 'react';

import { useWidgetEdit } from '@/lib/widgets/use-widget-edit-context';
import {
  type DropTarget,
  getColumnEntries,
  groupWidgetsByColumn,
  handleWidgetDrop,
} from '@/lib/widgets/utils';
import { shouldDropAtEnd } from '@/lib/widgets/utils';

import { DroppableCell } from './dropable-cell';
import { DroppableColumn } from './dropable-column';
import { EditableWidget } from './edibtable-widget';
import { WidgetMapper } from './widget-mapper';

export function WidgetGrid() {
  const {
    widgets,
    isEditMode,
    moveWidget,
    reorderWidgetsInColumn,
    setDraggedWidget,
  } = useWidgetEdit();
  const [dropTarget, setDropTarget] = useState<DropTarget | null>(null);

  const widgetsByColumn = useMemo(
    () => groupWidgetsByColumn(widgets),
    [widgets],
  );

  const columnsArray = useMemo(
    () =>
      getColumnEntries(widgetsByColumn).map(
        ([k, v]) => [Number(k), v] as const,
      ),
    [widgetsByColumn],
  );

  const handleDragOver = useCallback(
    (e: React.DragEvent<HTMLDivElement>, column: number, index: number) => {
      if (!isEditMode || !e) return;
      e.preventDefault();
      const target = e.currentTarget as HTMLElement;
      if (shouldDropAtEnd(e, target)) {
        setDropTarget({ column, index });
      }
    },
    [isEditMode],
  );

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>, column: number, index: number) => {
      if (!isEditMode || !e) return;
      e.preventDefault();
      setDropTarget(null);
      const draggedId = e.dataTransfer.getData('text/plain');
      if (!draggedId) return;
      const dropSuccess = handleWidgetDrop(
        draggedId,
        widgets,
        widgetsByColumn,
        column,
        index,
        moveWidget,
        reorderWidgetsInColumn,
      );
      if (dropSuccess) setDraggedWidget(null);
    },
    [
      isEditMode,
      widgets,
      widgetsByColumn,
      moveWidget,
      reorderWidgetsInColumn,
      setDraggedWidget,
    ],
  );

  return (
    <div className="scroll-mt-20 flex flex-col items-center w-full my-8 sm:my-12 lg:my-16">
      <div className="flex flex-col sm:flex-row gap-3 w-full">
        {columnsArray.map(([colIndex, columnWidgets]) => (
          <DroppableColumn
            key={colIndex}
            columnIndex={colIndex}
            length={columnWidgets.length}
            isEditMode={isEditMode}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            {columnWidgets.map((widget, idx) => (
              <DroppableCell
                key={widget.id}
                columnIndex={colIndex}
                itemIndex={idx}
                dropTarget={dropTarget}
                isEditMode={isEditMode}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <EditableWidget id={widget.id}>
                  <WidgetMapper type={widget.component} />
                </EditableWidget>
              </DroppableCell>
            ))}
          </DroppableColumn>
        ))}
      </div>
    </div>
  );
}
