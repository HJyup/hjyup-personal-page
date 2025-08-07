'use client';

import { forwardRef, ReactNode } from 'react';
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';

export const WidgetLayout = forwardRef<
  HTMLDivElement,
  {
    children: ReactNode;
    className?: string;
    isBackground?: boolean;
  } & HTMLMotionProps<'div'>
>(({ children, className = '', isBackground = true, ...motionProps }, ref) => {
  return (
    <motion.div
      ref={ref}
      className={`${isBackground ? 'bg-zinc-50 dark:bg-[hsl(0,0%,5%)]' : ''} h-[20rem] aspect-square rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 ${className}`}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
});

export const WithBackdrop = ({
  children,
  backdropCondition,
}: {
  children: ReactNode;
  backdropCondition: boolean;
}) => {
  return (
    <motion.div className="relative">
      <AnimatePresence mode="wait" initial={false}>
        {backdropCondition && (
          <motion.div
            key={`backdrop-${backdropCondition}`}
            className="absolute inset-0 bg-white/70 dark:bg-black/70 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: 'easeOut',
              delay: 0.1,
            }}
          />
        )}
      </AnimatePresence>
      {children}
    </motion.div>
  );
};

WidgetLayout.displayName = 'WidgetLayout';
