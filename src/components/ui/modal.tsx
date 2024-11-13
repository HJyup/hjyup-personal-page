import { ReactNode, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

import { useMobile } from '@/hook/use-mobile';
import { cn } from '@/lib/utils';

import { Button } from './button';

const modalAnimations = (isMobile: boolean) => ({
  backdrop: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: isMobile ? {} : { opacity: 0 },
  },
  content: {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: isMobile ? {} : { scale: 0.9, opacity: 0 },
    transition: isMobile ? {} : { type: 'spring', stiffness: 400, damping: 25 },
  },
});

const Modal = ({
  onClose,
  children,
}: {
  onClose: () => void;
  children: ReactNode;
}) => {
  const isMobile = useMobile();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={cn(
          'inset-0 bg-black/50 flex justify-center items-center z-10 overflow-y-auto overflow-hidden w-full dark:bg-black/60',
        )}
        onClick={onClose}
        {...modalAnimations(isMobile).backdrop}
      >
        <motion.div
          className={cn(
            'bg-background rounded-none lg:rounded-xl p-5 md:p-10 w-full flex flex-col shadow-lg overflow-y-auto lg:max-w-[50rem] lg:max-h-[60rem]',
            isMobile && 'min-h-dvh',
          )}
          onClick={e => e.stopPropagation()}
          {...modalAnimations(isMobile).content}
        >
          {isMobile && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-xs"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </Button>
          )}
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export { Modal };
