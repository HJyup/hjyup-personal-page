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
      className={cn(className, 'flex flex-col w-1/3 p-10 pt-16')}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

export { MainLayout };
