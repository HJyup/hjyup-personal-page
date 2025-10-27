'use client';

import React, { forwardRef, useState } from 'react';
import { FaBookOpen } from 'react-icons/fa';
import { FaSignature } from 'react-icons/fa6';
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import Image from 'next/image';

import { WidgetLayout } from '@/components/ui/layout/widget-layout';
import { BOOKS } from '@/const/books';

import LinkBlock from '../link-block';

interface BookImageProps {
  src: string;
  alt: string;
  title: string;
  author: string;
  id: string;
}

interface BookInfoProps {
  title: string;
  author: string;
  url: string;
}

const TRANSITION_CONFIG = {
  type: 'spring',
  duration: 0.3,
  bounce: 0,
};

const SPAN_VARIANTS = {
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -25 },
};

function BookImage({ src, alt, title, author }: BookImageProps) {
  return (
    <div className="relative w-32 h-[192px] md:w-24 md:h-[144px]">
      <Image
        src={src}
        alt={`${alt} - ${title} by ${author}`}
        fill
        priority
        sizes="(min-width: 768px) 96px, 128px"
        className="object-cover rounded-md shadow-lg"
        draggable={false}
      />
    </div>
  );
}

function BookInfo({ title, author, url }: BookInfoProps) {
  return (
    <div className="flex flex-col items-start text-left w-full min-w-0 flex-1">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-900 dark:text-neutral-100 text-base font-medium truncate w-full hover:underline flex items-center gap-1"
      >
        <LinkBlock>{title}</LinkBlock>
      </a>
      <p className="text-muted-foreground text-sm truncate w-full mb-3">
        {author}
      </p>
    </div>
  );
}

export const BooksWidget = forwardRef<
  HTMLDivElement,
  { className?: string } & HTMLMotionProps<'div'>
>(({ className, ...motionProps }, ref) => {
  const book = BOOKS[1];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <WidgetLayout
      ref={ref}
      className={`${className} h-full w-full relative flex flex-col justify-between overflow-hidden`}
      {...motionProps}
    >
      <FaBookOpen className="absolute top-4 right-4 md:top-5 md:right-5 lg:top-6 lg:right-6 w-5 h-5 text-neutral-500 dark:text-neutral-400 z-[2]" />

      <div className="items-center space-y-3">
        <BookImage
          src={book.imageUrl}
          alt={book.title}
          title={book.title}
          author={book.author}
          id={book.id}
        />
        <BookInfo
          title={book.title}
          author={book.author}
          url={book.amazonUrl}
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-neutral-200/50 dark:bg-[hsl(0,0%,15%)] h-10 px-5 rounded-full flex items-center font-medium justify-center gap-3 shadow-sm w-full z-[2] relative overflow-hidden hover:cursor-pointer"
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {isOpen ? (
            <motion.p
              key="close"
              variants={SPAN_VARIANTS}
              initial="initial"
              animate="animate"
              exit="initial"
              transition={TRANSITION_CONFIG}
              className="text-neutral-900 dark:text-neutral-50 flex items-center gap-2"
            >
              Close
            </motion.p>
          ) : (
            <motion.p
              key="thoughts"
              variants={SPAN_VARIANTS}
              initial="exit"
              animate="animate"
              exit="exit"
              transition={TRANSITION_CONFIG}
              className="text-neutral-900 dark:text-neutral-50 flex items-center gap-2"
            >
              <FaSignature className="w-5 h-5" /> Thoughts
            </motion.p>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence mode="popLayout" initial={false}>
        {isOpen && (
          <motion.div
            key={`thoughts-${isOpen}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={TRANSITION_CONFIG}
            className="absolute inset-0 bg-neutral-100 dark:bg-[hsl(0,0%,5%)] w-full h-full rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6"
          >
            <div className="flex items-center gap-2 font-medium mb-5">
              <FaSignature className="w-5 h-5" /> Thoughts
            </div>
            A glimpse into Apple's inner circle, Creative Selection offers a
            firsthand account of shaping iconic products during the final years
            of Steve Jobs’ leadership.
          </motion.div>
        )}
      </AnimatePresence>
    </WidgetLayout>
  );
});

BooksWidget.displayName = 'BooksWidget';
