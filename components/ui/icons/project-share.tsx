import SvgIcon from './internal/svg-icon';

export interface ProjectShareIconProps {
  className?: string;
  size?: 'inherit' | 'small' | 'normal' | 'large';
  isEditMode?: boolean;
}

export function ProjectShare({
  className,
  size,
  isEditMode,
}: ProjectShareIconProps) {
  return (
    <SvgIcon className={className} size={size} viewBox="0 0 134 90">
      <path
        d="M26.8003 8.93335H125.067V71.4667H116.134V80.4H26.8003V62.5333H17.8669V44.6667H8.93359V35.7333H26.8003V8.93335Z"
        fill="none"
      />
      <path
        d="M134 17.8667H125.066V71.4667H116.133V80.4H26.7998V89.3334H134V17.8667Z"
        fill="currentColor"
        className={`transition-colors duration-300 text-zinc-800 dark:text-white ${!isEditMode ? 'group-hover:text-violet-600' : ''}`}
      />
      <rect
        width="8.93333"
        height="17.8667"
        transform="matrix(-1 0 0 1 116.134 53.6002)"
        fill="currentColor"
        className={`transition-colors duration-300 text-zinc-800 dark:text-white ${!isEditMode ? 'group-hover:text-violet-600' : ''}`}
      />
      <rect
        width="8.93333"
        height="17.8667"
        transform="matrix(-1 0 0 1 107.201 35.7334)"
        fill="currentColor"
        className={`transition-colors duration-300 text-zinc-800 dark:text-white ${!isEditMode ? 'group-hover:text-violet-600' : ''}`}
      />
      <rect
        width="8.93333"
        height="17.8667"
        transform="matrix(-1 0 0 1 26.7998 62.5333)"
        fill="currentColor"
        className={`transition-colors duration-300 text-zinc-800 dark:text-white ${!isEditMode ? 'group-hover:text-violet-600' : ''}`}
      />
      <rect
        width="8.93333"
        height="17.8667"
        transform="matrix(-1 0 0 1 17.8667 44.6667)"
        fill="currentColor"
        className={`transition-colors duration-300 text-zinc-800 dark:text-white ${!isEditMode ? 'group-hover:text-violet-600' : ''}`}
      />
      <path
        d="M26.8 8.93335H17.8667V26.8H0V44.6667H8.93333V35.7333H98.2667V26.8H26.8V8.93335Z"
        fill="currentColor"
        className={`transition-colors duration-300 text-zinc-800 dark:text-white ${!isEditMode ? 'group-hover:text-violet-600' : ''}`}
      />
      <rect
        width="62.5333"
        height="8.93333"
        transform="matrix(-1 0 0 1 125.067 8.93335)"
        fill="currentColor"
        className={`transition-colors duration-300 text-zinc-800 dark:text-white ${!isEditMode ? 'group-hover:text-violet-600' : ''}`}
      />
      <rect
        width="35.7333"
        height="8.93333"
        transform="matrix(-1 0 0 1 62.5337 0)"
        fill="currentColor"
        className={`transition-colors duration-300 text-zinc-800 dark:text-white ${!isEditMode ? 'group-hover:text-violet-600' : ''}`}
      />
    </SvgIcon>
  );
}

export default ProjectShare;
