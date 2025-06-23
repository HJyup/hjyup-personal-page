import React from 'react';

interface DroppableColumnProps {
  columnIndex: number;
  children: React.ReactNode;
  onDragOver: (
    e: React.DragEvent<HTMLDivElement>,
    column: number,
    index: number,
  ) => void;
  onDrop: (
    e: React.DragEvent<HTMLDivElement>,
    column: number,
    index: number,
  ) => void;
  length: number;
  isEditMode: boolean;
}

export function DroppableColumn({
  columnIndex,
  children,
  onDragOver,
  onDrop,
  length,
  isEditMode,
}: DroppableColumnProps) {
  return (
    <div
      className="flex flex-col gap-3 w-full sm:w-1/2 relative"
      onDragOver={
        isEditMode ? e => onDragOver(e, columnIndex, length) : undefined
      }
      onDragLeave={
        isEditMode
          ? e => {
              e.stopPropagation();
            }
          : undefined
      }
      onDrop={isEditMode ? e => onDrop(e, columnIndex, length) : undefined}
    >
      {children}
    </div>
  );
}
