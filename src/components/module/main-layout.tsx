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
        'flex flex-col w-full min-h-dvh px-6 py-10 md:w-2/3 xl:w-1/3 md:px-10 md:py-16',
      )}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

export { MainLayout };
