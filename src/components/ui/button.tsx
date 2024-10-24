import { ButtonHTMLAttributes, ReactNode } from 'react';

import { cn } from '@/utils/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({
  children,
  onClick,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn('px-4 py-3 md:text-lg text-md', className)}
      onClick={onClick}
      {...props}
    >
      <p>{children}</p>
    </button>
  );
};
