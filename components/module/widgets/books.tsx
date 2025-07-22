'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ImBook } from 'react-icons/im';
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
  mass: 1,
};

const HighlightedBook = ({
  book,
  onClear,
}: {
  book: Book;
  onClear: () => void;
}) => (
  <>
    <motion.button
      onClick={onClear}
      className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-1.5 sm:p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
      aria-label="Clear selected book"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={spring}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg
        className="w-3 h-3 sm:w-4 sm:h-4 text-zinc-600 dark:text-zinc-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </motion.button>
    <div className="flex flex-row items-center gap-3 sm:gap-4 lg:gap-6 h-full">
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
          className="w-[5.5rem] h-32 lg:w-[7.5rem] lg:h-44 rounded-md shadow-sm"
        />
      </motion.div>
      <div className="flex flex-col gap-0.5 flex-1 min-w-0">
        <motion.h3
          layoutId={`book-title-${book.id}`}
          className="text-zinc-900 dark:text-zinc-100 font-semibold text-sm md:text-base leading-tight"
        >
          {book.title}
        </motion.h3>
        <motion.p
          layoutId={`book-author-${book.id}`}
          className="text-zinc-600 dark:text-zinc-400 text-xs md:text-sm"
        >
          {book.author}
        </motion.p>
        <motion.div
          layoutId={`book-status-${book.id}`}
          className="flex items-center gap-2 mt-2"
        >
          <a
            href={book.amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-xs md:text-sm font-medium hover:underline transition-colors"
          >
            View on Amazon
          </a>
        </motion.div>
      </div>
    </div>
  </>
);

const BookList = ({
  onSelect,
  scrollPosition,
  onScrollPositionChange,
}: {
  onSelect: (b: Book) => void;
  scrollPosition: number;
  onScrollPositionChange: (position: number) => void;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);

  const handleScroll = () => {
    if (scrollRef.current) {
      onScrollPositionChange(scrollRef.current.scrollLeft);
    }
  };

  return (
    <motion.div
      ref={scrollRef}
      className="flex gap-2 sm:gap-4 overflow-x-auto items-center scrollbar-hide pb-2 h-full px-2 sm:px-3"
      onScroll={handleScroll}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={spring}
    >
      {BOOKS.map((book, index) => (
        <motion.div
          key={book.id}
          layoutId={`book-image-${book.id}`}
          onClick={() => onSelect(book)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 40 }}
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
            y: 40,
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
            className="w-16 h-24 md:w-16 md:h-28 lg:w-[5.6rem] lg:h-[9rem] rounded-md shadow-sm"
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export function BooksWidget({ className = '' }: { className?: string }) {
  const [selected, setSelected] = useState<Book | null>(BOOKS[0]);
  const [scrollPosition, setScrollPosition] = useState(0);

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
          className="relative flex items-center gap-3 sm:gap-4 lg:gap-6 p-3 sm:p-4 lg:p-6 h-full w-full"
        >
          <AnimatePresence mode="wait" initial={false}>
            {selected ? (
              <HighlightedBook book={selected} onClear={handleClearSelection} />
            ) : (
              <BookList
                onSelect={handleSelectBook}
                scrollPosition={scrollPosition}
                onScrollPositionChange={setScrollPosition}
              />
            )}
          </AnimatePresence>
        </div>
      </LayoutGroup>
    </MediumWidgetLayout>
  );
}
