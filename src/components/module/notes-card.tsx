import React from 'react';
import { FolderClosed } from 'lucide-react';

interface Note {
  id: string;
  text: string;
  tags: string[];
}

const notes: Note[] = [
  {
    id: 'landing-page',
    text: 'Design a new landing page for HackTheBurgh XII',
    tags: ['Project'],
  },
  {
    id: 'book-data-intensive',
    text: 'Read "Designing Data-Intensive Applications" by Martin Kleppmann',
    tags: ['Book', 'Backend'],
  },
  {
    id: 'microservices',
    text: 'Explore microservices architecture with Go',
    tags: ['Code'],
  },
  {
    id: 'book-design',
    text: 'Read "The Design of Everyday Things" by Don Norman',
    tags: ['Book', 'Design'],
  },
];

export function NotesCard() {
  return (
    <div className="bg-gray-100 dark:bg-zinc-800 h-[50vh] sm:h-[50vh] rounded-2xl sm:rounded-3xl break-inside-avoid flex justify-end items-end">
      <div className="w-5/6 bg-white dark:bg-zinc-900 rounded-t-2xl rounded-br-2xl sm:rounded-t-3xl sm:rounded-br-3xl">
        <div className="w-full h-[5vh] sm:h-[6vh] bg-gradient-to-t from-[#fabd00] to-[#fed202] dark:from-[#DAA500] dark:to-[#fabd00] rounded-t-2xl sm:rounded-t-3xl flex items-center text-white text-base sm:text-lg gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8">
          <FolderClosed className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
          <span className="truncate">Notes</span>
        </div>
        <div className="flex flex-col gap-3 sm:gap-4 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 relative max-h-[40vh] overflow-hidden">
          {notes.map((note, index) => (
            <div key={note.id}>
              <div className="py-1 sm:py-2">
                <span className="text-sm sm:text-base leading-relaxed dark:text-zinc-300">
                  {note.text}
                </span>
                <br />
                {note.tags.map(tag => (
                  <span
                    key={tag}
                    className="bg-zinc-100 dark:bg-zinc-700 text-zinc-500 dark:text-zinc-400 text-xs px-2 py-0.5 rounded-md mr-2 mt-1 inline-block"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {index < notes.length - 1 && (
                <div className="border-b border-zinc-200 dark:border-zinc-700 w-full mt-0.5" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
