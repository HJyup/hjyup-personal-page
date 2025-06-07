'use client';

import { COMMON_CLASSES, CSS_CLASSES } from '@/const/css-classes';
import { cn } from '@/lib/utils';

interface TypographyControlsProps {
  isBold: boolean;
  isItalic: boolean;
  isUnderline: boolean;
  onBoldChange: (value: boolean) => void;
  onItalicChange: (value: boolean) => void;
  onUnderlineChange: (value: boolean) => void;
  className?: string;
}

const TypographyControls = ({
  isBold,
  isItalic,
  isUnderline,
  onBoldChange,
  onItalicChange,
  onUnderlineChange,
  className,
}: TypographyControlsProps) => {
  return (
    <div
      className={cn(
        CSS_CLASSES.FORMAT_BUTTONS,
        'flex bg-white rounded-lg overflow-hidden shadow-lg h-fit mt-2',
        className,
      )}
    >
      <button
        onClick={() => onBoldChange(!isBold)}
        className={cn(
          COMMON_CLASSES.TYPOGRAPHY_BUTTON.BASE,
          'font-extrabold',
          isBold
            ? COMMON_CLASSES.TYPOGRAPHY_BUTTON.ACTIVE
            : COMMON_CLASSES.TYPOGRAPHY_BUTTON.INACTIVE,
        )}
      >
        B
      </button>
      <div className="w-px h-8 bg-zinc-300 self-center" />
      <button
        onClick={() => onItalicChange(!isItalic)}
        className={cn(
          COMMON_CLASSES.TYPOGRAPHY_BUTTON.BASE,
          'italic px-5',
          isItalic
            ? COMMON_CLASSES.TYPOGRAPHY_BUTTON.ACTIVE
            : COMMON_CLASSES.TYPOGRAPHY_BUTTON.INACTIVE,
        )}
      >
        I
      </button>
      <div className="w-px h-8 bg-zinc-300 self-center" />
      <button
        onClick={() => onUnderlineChange(!isUnderline)}
        className={cn(
          COMMON_CLASSES.TYPOGRAPHY_BUTTON.BASE,
          'underline',
          isUnderline
            ? COMMON_CLASSES.TYPOGRAPHY_BUTTON.ACTIVE
            : COMMON_CLASSES.TYPOGRAPHY_BUTTON.INACTIVE,
        )}
      >
        U
      </button>
    </div>
  );
};

export default TypographyControls;
