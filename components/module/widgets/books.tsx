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
  description: string;
  imageUrl: string;
  amazonUrl: string;
  status: BookStatus;
};

const BOOKS: Book[] = [
  {
    id: 'design-everyday-things',
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    description:
      'A fundamental book about design principles that shape our daily interactions with objects and interfaces.',
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
    description:
      "Inside story of Apple's design process and creative decision making from a software engineer who worked on Safari and iOS.",
    imageUrl: 'https://m.media-amazon.com/images/I/71AiWmqkN2L._SY522_.jpg',
    amazonUrl:
      'https://www.amazon.com/Creative-Selection-Inside-Apples-Process/dp/1250194466',
    status: BookStatus.COMPLETED,
  },
  {
    id: 'software-engineer-google',
    title: 'Software Engineering at Google',
    author: 'Titus Winters, Tom Manshreck, Hyrum Wright',
    description:
      'Lessons learned from programming at scale, covering testing, code review, and software architecture.',
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
    description:
      'Deep dive into the principles and practicalities of data systems, from databases to stream processing.',
    imageUrl: 'https://m.media-amazon.com/images/I/91YfNb49PLL._SY522_.jpg',
    amazonUrl:
      'https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321',
    status: BookStatus.COMPLETED,
  },
  {
    id: 'art-of-doing-science',
    title: 'The Art of Doing Science and Engineering',
    author: 'Richard W. Hamming',
    description:
      "A legendary mathematician's perspective on creative thinking and problem-solving in scientific work.",
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
      className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
      aria-label="Clear selected book"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={spring}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <ImBook className="w-5 h-5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors" />
    </motion.button>

    <motion.div
      className="flex gap-4 items-center w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={spring}
    >
      <motion.div
        layoutId={`book-image-${book.id}`}
        className="flex-shrink-0"
        transition={spring}
      >
        <Image
          src={book.imageUrl}
          alt={book.title}
          width={288}
          height={432}
          draggable={false}
          className="w-24 h-36 lg:w-32 lg:h-48 rounded-md shadow-sm"
        />
      </motion.div>

      <div className="flex flex-col gap-2 min-w-0 flex-1">
        <span className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium tracking-wide">
          {book.status}
        </span>
        <a
          href={book.amazonUrl}
          className="font-semibold text-base sm:text-lg leading-tight text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 hover:underline transition-colors"
        >
          {book.title}
        </a>
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-500">
          by {book.author}
        </p>
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3">
          {book.description}
        </p>
      </div>
    </motion.div>
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
      className="flex gap-4 overflow-x-auto items-center scrollbar-hide pb-2 h-full"
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
            className="w-24 h-36 rounded-md shadow-sm"
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
          className="relative flex items-center gap-4 p-4 sm:p-5 lg:p-6 h-full w-full"
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
