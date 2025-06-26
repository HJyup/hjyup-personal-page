import React from 'react';
import { FolderClosed } from 'lucide-react';

import { BigWidgetLayout } from '@/components/ui/layout/widget-layouts';
import { NOTES } from '@/const/notes';

interface NotesWidgetProps {
  className?: string;
}

export function NotesWidget({ className = '' }: NotesWidgetProps) {
  return (
    <BigWidgetLayout className={className}>
      <div
        className="bg-gray-100 dark:bg-zinc-800 h-full w-full rounded-2xl sm:rounded-3xl flex justify-center items-end"
        role="region"
        aria-label="Personal notes and thoughts"
      >
        <div className="w-5/6 bg-white dark:bg-zinc-900 rounded-t-2xl sm:rounded-t-3xl flex flex-col h-[85%]">
          <header className="bg-gradient-to-t from-[#fabd00] to-[#fed202] dark:from-[#DAA500] dark:to-[#fabd00] rounded-t-2xl sm:rounded-t-3xl flex items-center text-white text-lg sm:text-xl gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex-shrink-0">
            <FolderClosed
              className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
              aria-hidden="true"
            />
            <h2 className="truncate font-medium">Notes</h2>
          </header>
          <div
            className="flex flex-col gap-3 sm:gap-4 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 relative flex-1 overflow-y-auto scrollbar-hide"
            role="list"
            aria-label="List of notes"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {NOTES.map((note, index) => (
              <article key={note.id} role="listitem" className="group">
                <div className="py-1 sm:py-2">
                  <p className="text-sm sm:text-base leading-relaxed dark:text-zinc-300 mb-2">
                    {note.text}
                  </p>
                  <div
                    className="flex flex-wrap gap-1 sm:gap-2"
                    role="list"
                    aria-label="Tags"
                  >
                    {note.tags.map(tag => (
                      <span
                        key={tag}
                        className="bg-zinc-100 dark:bg-zinc-700 text-zinc-500 dark:text-zinc-400 text-xs px-2 py-0.5 rounded-md transition-colors duration-200"
                        role="listitem"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {index < NOTES.length - 1 && (
                  <hr
                    className="border-zinc-200 dark:border-zinc-700 w-full mt-2 sm:mt-3"
                    aria-hidden="true"
                  />
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </BigWidgetLayout>
  );
}
