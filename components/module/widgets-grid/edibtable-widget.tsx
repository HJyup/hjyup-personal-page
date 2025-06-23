'use client';

import React, { ReactNode } from 'react';
import { X } from 'lucide-react';

import { useWidgetEdit } from '../../../lib/widgets/use-widget-edit-context';

interface EditableWidgetProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function EditableWidget({
  id,
  children,
  className = '',
}: EditableWidgetProps) {
  const { isEditMode, draggedWidgetId, setDraggedWidget, removeWidget } =
    useWidgetEdit();

  const isCurrentlyDragged = draggedWidgetId === id;
  const isOtherWidgetDragged = draggedWidgetId && draggedWidgetId !== id;

  const handleDragStart = (e: React.DragEvent) => {
    if (!isEditMode) {
      e.preventDefault();
      return;
    }

    setDraggedWidget(id);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', id);
  };

  const handleDragEnd = () => {
    setDraggedWidget(null);
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    removeWidget(id);
  };

  if (!isEditMode) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      draggable
      id={id}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      className={`
        group relative cursor-move select-none transition-all duration-200 break-inside-avoid
        ${className}
        ${isCurrentlyDragged ? 'opacity-60 scale-105 rotate-1 z-50' : ''}
        ${isOtherWidgetDragged ? 'blur-sm opacity-40 scale-95' : ''}
        ${!draggedWidgetId && !isEditMode ? 'hover:scale-[1.02] hover:ring-2 hover:ring-blue-400 hover:ring-opacity-60 hover:rounded-2xl sm:hover:rounded-3xl' : ''}
      `}
    >
      {children}

      {!draggedWidgetId && (
        <button
          onClick={handleRemove}
          className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 shadow-lg transition-all duration-200 z-30 opacity-0 group-hover:opacity-100 transform hover:scale-110"
          aria-label="Remove widget"
        >
          <X className="w-4 h-4" />
        </button>
      )}

      {!draggedWidgetId && (
        <div className="absolute inset-0 bg-blue-500 bg-opacity-5 rounded-2xl sm:rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      )}
    </div>
  );
}
