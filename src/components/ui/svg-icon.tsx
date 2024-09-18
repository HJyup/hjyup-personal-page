import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

export interface SvgIconProps {
  titleAccess?: string;
  color?: string;
  size?: 'inherit' | 'small' | 'normal' | 'large';
  onClick?: () => void;
}

const SIZE_CLASSES = {
  inherit: 'text-inherit',
  small: 'text-sm',
  normal: 'text-base',
  large: 'text-2xl',
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
}: {
  viewBox?: string;
  children: ReactNode;
} & SvgIconProps) => (
  <svg
    color={color}
    viewBox={viewBox}
    aria-hidden={titleAccess ? undefined : true}
    className={cn(
      'inline-block h-6 flex-shrink-0 fill-current user-select-none align-top',
      size && SIZE_CLASSES[size],
    )}
    onClick={onClick}
  >
    {children}
    {titleAccess && <title>{titleAccess}</title>}
  </svg>
);

export default SvgIcon;
