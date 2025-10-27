import { forwardRef, ReactNode } from 'react';
import { HTMLMotionProps } from 'framer-motion';

import { WidgetLayout } from '@/components/ui/layout/widget-layout';

import LinkBlock from '../../link-block';

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
        <a href={link} className="hover:underline hover:cursor-pointer">
          <LinkBlock>{title}</LinkBlock>
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
