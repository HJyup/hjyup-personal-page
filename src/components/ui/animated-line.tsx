import { cn } from '@/lib/utils';

const AnimatedLine = ({
  className,
  color = 'bg-zinc-500',
  position,
}: {
  className: string;
  color?: string;
  position: 'horizontal' | 'vertical';
}) => {
  return (
    <div
      className={cn(
        color,
        className,
        position === 'horizontal' ? 'h-[0.7px]' : 'w-[0.7px]',
      )}
    />
  );
};

export default AnimatedLine;
