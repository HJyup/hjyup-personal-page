import { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

import { cn } from '@/lib/utils';

import { SectionDetails } from '../module';

import { Button } from './button';

const modalAnimations = (isMobile: boolean) => ({
  backdrop: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  content: {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: isMobile ? {} : { scale: 0.9, opacity: 0 },
    transition: { type: 'spring', stiffness: 400, damping: 25 },
  },
});

const Modal = ({
  onClose,
  children,
  isMobile,
}: {
  onClose: () => void;
  children: ReactNode;
  isMobile: boolean;
}) => {
  return (
    <motion.div
      className={cn(
        'inset-0 bg-black/50 flex justify-center items-center z-10 overflow-y-auto lg:mx-2 overflow-hidden w-full',
        !isMobile && 'fixed',
      )}
      onClick={onClose}
      {...modalAnimations(isMobile).backdrop}
    >
      <motion.div
        className={cn(
          'bg-background rounded-none lg:rounded-xl p-5 md:p-10 w-full flex flex-col shadow-lg overflow-y-auto lg:max-w-[50rem] lg:max-h-[60rem]',
          isMobile && 'min-h-screen',
        )}
        onClick={e => e.stopPropagation()}
        {...modalAnimations(isMobile).content}
      >
        {isMobile && (
          <SectionDetails.Wrapper>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <ArrowLeft className="w-4 h-4" /> Back
            </Button>
          </SectionDetails.Wrapper>
        )}
        {children}
      </motion.div>
    </motion.div>
  );
};

const ModalWrapper = ({
  children,
  isOpen,
}: {
  children: ReactNode;
  isOpen: boolean;
}) => {
  return <AnimatePresence mode="wait">{isOpen && children}</AnimatePresence>;
};

Modal.Wrapper = ModalWrapper;

export { Modal };
