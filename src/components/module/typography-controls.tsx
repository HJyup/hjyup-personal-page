'use client';

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
        'format-buttons',
        'flex bg-white rounded-lg overflow-hidden shadow-lg h-fit mt-2',
        className,
      )}
    >
      <button
        onClick={() => onBoldChange(!isBold)}
        className={cn(
          'text-4xl transition-all px-4 py-2',
          'font-extrabold',
          isBold
            ? 'text-blue-600 bg-blue-50'
            : 'text-zinc-400 hover:text-blue-500 hover:bg-blue-50',
        )}
      >
        B
      </button>
      <div className="w-px h-8 bg-zinc-300 self-center" />
      <button
        onClick={() => onItalicChange(!isItalic)}
        className={cn(
          'text-4xl transition-all px-4 py-2',
          'italic px-5',
          isItalic
            ? 'text-blue-600 bg-blue-50'
            : 'text-zinc-400 hover:text-blue-500 hover:bg-blue-50',
        )}
      >
        I
      </button>
      <div className="w-px h-8 bg-zinc-300 self-center" />
      <button
        onClick={() => onUnderlineChange(!isUnderline)}
        className={cn(
          'text-4xl transition-all px-4 py-2',
          'underline',
          isUnderline
            ? 'text-blue-600 bg-blue-50'
            : 'text-zinc-400 hover:text-blue-500 hover:bg-blue-50',
        )}
      >
        U
      </button>
    </div>
  );
};

export default TypographyControls;
