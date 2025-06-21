'use client';

import React, { useState } from 'react';

import {
  type DropTarget,
  getColumnEntries,
  groupWidgetsByColumn,
  handleWidgetDrop,
  isDropTargetActive,
} from '@/components/module/widgets/utils/widget-utils';
import { useWidgetEdit } from '@/provider/context';

import { mapWidgetToComponent } from './utils/widget-mapper';

export function WidgetGrid() {
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
    <div className="scroll-mt-20 flex flex-col items-center w-full my-8 sm:my-12 lg:my-16">
      <div className="flex flex-col sm:flex-row gap-3 w-full">
        {columnsArray.map(([columnIndex, columnWidgets]) => (
          <div
            key={columnIndex}
            className={`flex flex-col gap-3 w-full sm:w-1/2 relative`}
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
                  ) && (
                    <div className="absolute -top-1 left-0 right-0 h-0.5 bg-blue-400 rounded-full z-40" />
                  )}

                {mapWidgetToComponent(widget.component, widget.id)}
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
