import { GoArrowUpRight } from 'react-icons/go';

import { cn } from '@/lib/utils';

const LinkBlock = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('flex items-start gap-1', className)}>
      {children}
      <GoArrowUpRight className="w-2.5 h-2.5 md:w-3 md:h-3 md:mt-[0.2rem]" />
    </div>
  );
};

export default LinkBlock;
