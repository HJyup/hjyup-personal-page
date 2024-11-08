import { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Modal = ({
  onClose,
  children,
}: {
  onClose: () => void;
  children: ReactNode;
}) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-10"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-xl p-10 max-w-[50rem] w-full max-h-[60rem] flex flex-col shadow-lg overflow-y-auto"
        onClick={e => e.stopPropagation()}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
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
