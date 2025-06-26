'use client';

import React, { useEffect } from 'react';

import { useWidgetEdit } from '@/provider/widget-edit-provider';

export function EditToggle() {
  const { isEditMode, setEditMode, saveWidgets } = useWidgetEdit();

  const handleClick = () => {
    if (isEditMode) {
      saveWidgets();
    } else {
      setEditMode(true);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isEditMode) {
        saveWidgets();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isEditMode, saveWidgets]);

  return (
    <div className="hidden flex-col items-center justify-center mb-10 xl:flex text-sm">
      <button
        onClick={handleClick}
        className={`
          flex px-5 py-1.5 w-fit rounded-2xl sm:rounded-3xl break-inside-avoid 
          items-center justify-center transition-all duration-300
          ${
            isEditMode
              ? 'bg-blue-500 hover:bg-blue-600 text-white'
              : 'bg-gray-100 text-zinc-700 dark:text-zinc-400 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700'
          }
        `}
      >
        {isEditMode ? 'Save' : 'Edit widgets'}
      </button>
    </div>
  );
}
