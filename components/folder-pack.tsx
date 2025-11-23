import { LucideIcon, SparklesIcon } from 'lucide-react';
import { motion, Transition } from 'motion/react';

import {
  FolderBack as FolderBackBlue,
  FolderFront as FolderFrontBlue,
} from './folder-icons/blue';
import {
  FolderBack as FolderBackGreen,
  FolderFront as FolderFrontGreen,
} from './folder-icons/green';
import {
  FolderBack as FolderBackPurple,
  FolderFront as FolderFrontPurple,
} from './folder-icons/purple';

export const FOLDER_TRANSITION: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 20,
};

export const FOLDER_FRONT_VARIANTS = {
  closed: { rotateX: 0 },
  open: { rotateX: -20 },
};

const THEMES = {
  blue: {
    back: FolderBackBlue,
    front: FolderFrontBlue,
    accent: '#3FABE6',
  },
  green: {
    back: FolderBackGreen,
    front: FolderFrontGreen,
    accent: '#4ab588',
  },
  purple: {
    back: FolderBackPurple,
    front: FolderFrontPurple,
    accent: '#8b3fc0',
  },
};

type FolderPackProps = {
  color?: keyof typeof THEMES;
  title?: string;
  icon?: LucideIcon;
};

const FolderPack = ({
  color = 'blue',
  title,
  icon: Icon = SparklesIcon,
}: FolderPackProps) => {
  const { back: BackIcon, front: FrontIcon, accent } = THEMES[color];

  return (
    <div className="flex flex-col gap-3 items-center justify-center w-fit group">
      <motion.div
        className="relative w-[80px] h-[80px] cursor-pointer"
        initial="closed"
        whileHover="open"
      >
        <BackIcon className="w-full h-full shadow-xl rounded-xl absolute z-10" />

        <div
          className="
            absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2
            w-[90%] h-[50%] bg-zinc-50 z-10 rounded-sm group-hover:top-[50%] duration-200 shadow-lg
          "
        />

        <motion.div
          className="absolute bottom-0 left-0 w-full z-20"
          style={{ transformOrigin: 'bottom' }}
          variants={FOLDER_FRONT_VARIANTS}
          transition={FOLDER_TRANSITION}
        >
          <div className="relative w-full h-full">
            <FrontIcon className="w-full h-full" />

            <Icon
              className="
                absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                pointer-events-none h-7 w-7
              "
              style={{ color: accent }}
            />
          </div>
        </motion.div>
      </motion.div>

      {title && <div className="text-xs text-center">{title}</div>}
    </div>
  );
};

export default FolderPack;
