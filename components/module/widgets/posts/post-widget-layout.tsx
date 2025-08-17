import { forwardRef, ReactNode } from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { HTMLMotionProps } from 'framer-motion';

import { WidgetLayout } from '@/components/ui/layout/widget-layout';

const PostWidgetLayout = forwardRef<
  HTMLDivElement,
  {
    children: ReactNode;
    className?: string;
    link: string;
    title: string;
    description: string;
  } & HTMLMotionProps<'div'>
>(({ children, className, title, description, link, ...motionProps }, ref) => {
  return (
    <WidgetLayout ref={ref} className={className} {...motionProps}>
      <div>
        <a
          href={link}
          className="text-neutral-900 dark:text-neutral-50 text-lg font-medium flex items-center gap-2 hover:underline hover:cursor-pointer"
        >
          {title} <GoArrowUpRight className="w-3 h-3 md:w-4 md:h-4" />
        </a>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm mt-1">
          {description}
        </p>
      </div>
      {children}
    </WidgetLayout>
  );
});

PostWidgetLayout.displayName = 'PostWidgetLayout';

export default PostWidgetLayout;
