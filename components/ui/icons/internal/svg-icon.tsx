import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

export interface SvgIconProps {
  titleAccess?: string;
  color?: string;
  size?: 'inherit' | 'small' | 'normal' | 'large';
  onClick?: () => void;
  className?: string;
}

const SIZE_CLASSES = {
  inherit: 'w-[1em] h-[1em] text-inherit',
  small: 'w-4 h-4',
  normal: 'w-6 h-6',
  large: 'w-8 h-8',
};

/**
 * Simple wrapper for Svg path
 *
 * References:
 * Code https://github.com/mui/material-ui/blob/master/packages/mui-material/src/SvgIcon/SvgIcon.js
 * Api https://mui.com/material-ui/api/svg-icon/
 */
const SvgIcon = ({
  children,
  color,
  titleAccess,
  size = 'normal',
  viewBox = '0 0 24 24',
  onClick = () => undefined,
  className,
}: {
  viewBox?: string;
  children: ReactNode;
} & SvgIconProps) => (
  <svg
    aria-hidden={titleAccess ? undefined : true}
    className={cn(
      'inline-block shrink-0 fill-current leading-none select-none align-top',
      SIZE_CLASSES[size],
      className,
    )}
    color={color}
    viewBox={viewBox}
    onClick={onClick}
  >
    {children}
    {titleAccess && <title>{titleAccess}</title>}
  </svg>
);

export default SvgIcon;
