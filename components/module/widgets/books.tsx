'use client';

import React, { useState } from 'react';
import { IoList } from 'react-icons/io5';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import Image from 'next/image';

import { MediumWidgetLayout } from '@/components/ui/layout/widget-layouts';

enum BookStatus {
  CURRENTLY_READING = 'CURRENTLY READING',
  COMPLETED = 'COMPLETED',
  WANT_TO_READ = 'WANT TO READ',
  ON_HOLD = 'ON HOLD',
  RECOMMENDED = 'RECOMMENDED',
}

type Book = {
  id: string;
  title: string;
  author: string;
  imageUrl: string;
  amazonUrl: string;
  status: BookStatus;
};

const BOOKS: Book[] = [
  {
    id: 'design-everyday-things',
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    imageUrl:
      'https://m.media-amazon.com/images/I/41rHjQCElcL._SY445_SX342_.jpg',
    amazonUrl:
      'https://www.amazon.com/Design-Everyday-Things-Revised-Expanded/dp/0465050654',
    status: BookStatus.CURRENTLY_READING,
  },
  {
    id: 'creative-selection',
    title: 'Creative Selection',
    author: 'Ken Kocienda',
    imageUrl: 'https://m.media-amazon.com/images/I/71AiWmqkN2L._SY522_.jpg',
    amazonUrl:
      'https://www.amazon.com/Creative-Selection-Inside-Apples-Process/dp/1250194466',
    status: BookStatus.COMPLETED,
  },
  {
    id: 'software-engineer-google',
    title: 'Software Engineering at Google',
    author: 'Titus Winters, Tom Manshreck, Hyrum Wright',
    imageUrl:
      'https://m.media-amazon.com/images/I/410MEGnUOCL._SY445_SX342_.jpg',
    amazonUrl:
      'https://www.amazon.com/Software-Engineering-Google-Lessons-Programming/dp/1492082791',
    status: BookStatus.COMPLETED,
  },
  {
    id: 'designing-data-intensive-apps',
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    imageUrl: 'https://m.media-amazon.com/images/I/91YfNb49PLL._SY522_.jpg',
    amazonUrl:
      'https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321',
    status: BookStatus.COMPLETED,
  },
  {
    id: 'art-of-doing-science',
    title: 'The Art of Doing Science and Engineering',
    author: 'Richard W. Hamming',
    imageUrl: 'https://m.media-amazon.com/images/I/41hZEEzw30L._SY522_.jpg',
    amazonUrl:
      'https://www.amazon.com/Art-Doing-Science-Engineering-Learning/dp/1732265178',
    status: BookStatus.RECOMMENDED,
  },
];

const spring = {
  type: 'spring' as const,
  damping: 30,
  stiffness: 200,
  mass: 2,
};

const HighlightedBook = ({
  book,
  onClear,
}: {
  book: Book;
  onClear: () => void;
}) => (
  <div className="flex flex-row items-center gap-4 sm:gap-5 lg:gap-6 h-full">
    <motion.div
      layoutId={`book-image-${book.id}`}
      className="flex-shrink-0"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Image
        src={book.imageUrl}
        alt={book.title}
        width={120}
        height={180}
        draggable={false}
        className="w-24 h-36 lg:w-32 lg:h-48 rounded-xl sm:rounded-2xl shadow-lg"
      />
    </motion.div>
    <div className="flex flex-col gap-0.5 flex-1 min-w-0">
      <motion.h3
        layoutId={`book-title-${book.id}`}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          ...spring,
          delay: 0.1,
        }}
        className="text-zinc-900 dark:text-zinc-100 font-medium text-sm sm:text-base leading-tight truncate w-full"
      >
        {book.title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          ...spring,
          delay: 0.15,
        }}
        layoutId={`book-author-${book.id}`}
        className="text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm truncate w-full mb-3"
      >
        {book.author}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          ...spring,
          delay: 0.2,
        }}
        layoutId={`book-status-${book.id}`}
        className="flex items-center gap-2"
      >
        <button
          onClick={onClear}
          className="px-3 py-1.5 bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 text-zinc-700 dark:text-zinc-300 text-xs rounded-lg transition-colors flex justify-center items-center gap-2"
        >
          <IoList className="w-3 h-3 sm:w-4 sm:h-4" /> All books
        </button>
      </motion.div>
    </div>
  </div>
);

const BookList = ({ onSelect }: { onSelect: (b: Book) => void }) => {
  return (
    <motion.div
      className="flex gap-4 overflow-x-auto items-center scrollbar-hide pb-2 h-full px-5"
      transition={spring}
    >
      {BOOKS.map((book, index) => (
        <motion.div
          key={book.id}
          layoutId={`book-image-${book.id}`}
          onClick={() => onSelect(book)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              ...spring,
              delay: index * 0.1,
            },
          }}
          exit={{
            opacity: 0,
            transition: {
              ...spring,
              delay: (BOOKS.length - index - 1) * 0.05,
            },
          }}
          className="cursor-pointer flex-shrink-0 relative"
        >
          <Image
            src={book.imageUrl}
            alt={book.title}
            width={120}
            height={180}
            draggable={false}
            className="w-20 h-32 rounded-xl shadow-lg"
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export function BooksWidget({ className = '' }: { className?: string }) {
  const [selected, setSelected] = useState<Book | null>(BOOKS[0]);

  const handleClearSelection = () => {
    setSelected(null);
  };

  const handleSelectBook = (book: Book) => {
    setSelected(book);
  };

  return (
    <MediumWidgetLayout className={className}>
      <LayoutGroup>
        <div
          role="region"
          aria-label="Books reading tracker"
          className="relative flex items-center h-full w-full rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6"
        >
          <AnimatePresence mode="wait" initial={false}>
            {selected ? (
              <HighlightedBook book={selected} onClear={handleClearSelection} />
            ) : (
              <BookList onSelect={handleSelectBook} />
            )}
          </AnimatePresence>
        </div>
      </LayoutGroup>
    </MediumWidgetLayout>
  );
}
