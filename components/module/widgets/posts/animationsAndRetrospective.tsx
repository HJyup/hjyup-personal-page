'use client';

import { forwardRef } from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';

import PostWidgetLayout from './post-widget-layout';

function OverlappingSquares() {
  const colors = [
    'bg-blue-400',
    'bg-blue-500',
    'bg-blue-600',
    'bg-blue-700',
    'bg-blue-800',
  ];

  return (
    <div>
      <div className="relative flex justify-center">
        {colors.map((cls, i) => (
          <motion.div
            key={i}
            style={{ zIndex: i + 1 }}
            className={`w-36 h-36 rounded-xl shadow-md ${cls} ${
              i < colors.length - 1 ? '-mr-[5.5rem]' : ''
            }`}
            whileHover={{ y: -20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          />
        ))}
      </div>
    </div>
  );
}

const AnimationsAndRetrospectives = forwardRef<
  HTMLDivElement,
  { className?: string } & HTMLMotionProps<'div'>
>(({ className, ...motionProps }, ref) => (
  <PostWidgetLayout
    ref={ref}
    link="posts/animations"
    className={`relative overflow-hidden flex flex-col justify-between ${className}`}
    title="Animations"
    description="How to build animations that feel better."
    {...motionProps}
  >
    <OverlappingSquares />
  </PostWidgetLayout>
));

AnimationsAndRetrospectives.displayName = 'AnimationsAndRetrospectives';

export default AnimationsAndRetrospectives;
