import { ReactNode } from 'react';
import { motion, MotionProps } from 'framer-motion';

import { cn } from '@/lib/utils';

interface MainLayoutProps extends MotionProps {
  children: ReactNode;
  className?: string;
}

const MainLayout = ({
  children,
  className,
  ...motionProps
}: MainLayoutProps) => {
  return (
    <motion.div
      className={cn(
        className,
        'flex flex-col justify-center w-1/3 overflow-y-auto p-5 overflow-x-hidden',
      )}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

export { MainLayout };
