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
        'flex flex-col w-full p-5 pt-6 md:w-2/3 xl:w-1/3 md:p-10 md:pt-16',
      )}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

export { MainLayout };
