'use client';

import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { wrap } from 'popmotion';

import { cn } from '@/lib/utils';

const variants = {
  enter: (direction: number) => ({
    zIndex: 1,
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 2,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 1,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) =>
  Math.abs(offset) * velocity;

const ImageBlock = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);

  const paginate = useCallback(
    (newDirection: number) => {
      setPage([page + newDirection, newDirection]);
    },
    [page],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 3000);
    return () => clearInterval(interval);
  }, [paginate]);

  return (
    <div className={cn('relative w-full h-[360px] overflow-hidden', className)}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          className="w-full h-full absolute"
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
    </div>
  );
};

export { ImageBlock };
