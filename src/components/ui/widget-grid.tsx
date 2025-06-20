'use client';

import React, { useState } from 'react';

import { WIDGET_GRID_STYLES, WidgetComponentType } from '@/const/widgets';
import { createWidgetComponent } from '@/lib/widget-factory';
import {
  type DropTarget,
  getColumnEntries,
  groupWidgetsByColumn,
  handleWidgetDrop,
  isDropTargetActive,
} from '@/lib/widget-utils';
import { useWidgetEdit } from '@/provider/widget-edit-provider';

interface WidgetGridProps {
  photos: Array<{
    src: string;
    alt: string;
    date: string;
  }>;
}

export function WidgetGrid({ photos }: WidgetGridProps) {
  const {
    widgets,
    isEditMode,
    moveWidget,
    reorderWidgetsInColumn,
    setDraggedWidget,
  } = useWidgetEdit();
  const [dropTarget, setDropTarget] = useState<DropTarget | null>(null);

  const widgetsByColumn = groupWidgetsByColumn(widgets);

  const handleDragOver = (
    e: React.DragEvent,
    column: number,
    index: number,
  ) => {
    if (!isEditMode) return;
    e.preventDefault();
    setDropTarget({ column, index });
  };

  const handleDragLeave = () => {
    setDropTarget(null);
  };

  const handleDrop = (
    e: React.DragEvent,
    targetColumn: number,
    targetIndex: number,
  ) => {
    if (!isEditMode) return;

    e.preventDefault();
    setDropTarget(null);

    const draggedId = e.dataTransfer.getData('text/plain');
    if (!draggedId) return;

    const dropSuccess = handleWidgetDrop(
      draggedId,
      widgets,
      widgetsByColumn,
      targetColumn,
      targetIndex,
      moveWidget,
      reorderWidgetsInColumn,
    );

    if (dropSuccess) {
      setDraggedWidget(null);
    }
  };

  const columnsArray = getColumnEntries(widgetsByColumn);

  return (
    <div className={WIDGET_GRID_STYLES.container}>
      <div className={WIDGET_GRID_STYLES.columnsWrapper}>
        {columnsArray.map(([columnIndex, columnWidgets]) => (
          <div
            key={columnIndex}
            className={`${WIDGET_GRID_STYLES.column} relative`}
            onDragOver={
              isEditMode
                ? e => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const mouseY = e.clientY;
                    const columnBottom = rect.bottom;
                    const threshold = 50;

                    if (mouseY > columnBottom - threshold) {
                      handleDragOver(
                        e,
                        parseInt(columnIndex),
                        columnWidgets.length,
                      );
                    }
                  }
                : undefined
            }
            onDragLeave={handleDragLeave}
            onDrop={
              isEditMode
                ? e => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const mouseY = e.clientY;
                    const columnBottom = rect.bottom;
                    const threshold = 50;

                    if (mouseY > columnBottom - threshold) {
                      handleDrop(
                        e,
                        parseInt(columnIndex),
                        columnWidgets.length,
                      );
                    }
                  }
                : undefined
            }
          >
            {columnWidgets.map((widget, index) => (
              <div
                key={widget.id}
                onDragOver={e => {
                  e.stopPropagation();
                  handleDragOver(e, parseInt(columnIndex), index);
                }}
                onDragLeave={handleDragLeave}
                onDrop={e => {
                  e.stopPropagation();
                  handleDrop(e, parseInt(columnIndex), index);
                }}
                className="relative"
              >
                {isEditMode &&
                  isDropTargetActive(
                    dropTarget,
                    parseInt(columnIndex),
                    index,
                  ) && <div className={WIDGET_GRID_STYLES.dropIndicator} />}

                {createWidgetComponent(
                  widget.component as WidgetComponentType,
                  widget.id,
                  { photos },
                )}
              </div>
            ))}

            {isEditMode &&
              isDropTargetActive(
                dropTarget,
                parseInt(columnIndex),
                columnWidgets.length,
              ) && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-400 rounded-full" />
              )}
          </div>
        ))}
      </div>
    </div>
  );
}
