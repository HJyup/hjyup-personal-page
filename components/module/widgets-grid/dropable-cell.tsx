'use client';
import React from 'react';

import { isDropTargetActive } from '@/lib/widgets/utils';
import { DropTarget } from '@/lib/widgets/utils';

interface DroppableCellProps {
  columnIndex: number;
  itemIndex: number;
  dropTarget: DropTarget | null;
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
  isEditMode: boolean;
  children: React.ReactNode;
}

export function DroppableCell({
  columnIndex,
  itemIndex,
  dropTarget,
  onDragOver,
  onDrop,
  isEditMode,
  children,
}: DroppableCellProps) {
  return (
    <div
      onDragOver={
        isEditMode
          ? e => {
              e.stopPropagation();
              onDragOver(e, columnIndex, itemIndex);
            }
          : undefined
      }
      onDragLeave={
        isEditMode
          ? e => {
              e.stopPropagation();
            }
          : undefined
      }
      onDrop={
        isEditMode
          ? e => {
              e.stopPropagation();
              onDrop(e, columnIndex, itemIndex);
            }
          : undefined
      }
      className="relative"
    >
      {isEditMode && isDropTargetActive(dropTarget, columnIndex, itemIndex) && (
        <div className="absolute -top-1 left-0 right-0 h-0.5 bg-blue-400 rounded-full z-40" />
      )}
      {children}
    </div>
  );
}
