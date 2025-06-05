'use client';

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
  className = '',
}: TypographyControlsProps) => {
  return (
    <div
      className={`format-buttons flex bg-white rounded-lg overflow-hidden shadow-lg h-fit mt-2 ${className}`}
    >
      <button
        onClick={() => onBoldChange(!isBold)}
        className={`text-4xl font-extrabold transition-all px-4 py-2 ${
          isBold
            ? 'text-blue-600 bg-blue-50'
            : 'text-zinc-400 hover:text-blue-500 hover:bg-blue-50'
        }`}
      >
        B
      </button>
      <div className="w-px h-8 bg-zinc-300 self-center" />
      <button
        onClick={() => onItalicChange(!isItalic)}
        className={`text-4xl italic transition-all px-5 py-2 ${
          isItalic
            ? 'text-blue-600 bg-blue-50'
            : 'text-zinc-400 hover:text-blue-500 hover:bg-blue-50'
        }`}
      >
        I
      </button>
      <div className="w-px h-8 bg-zinc-300 self-center" />
      <button
        onClick={() => onUnderlineChange(!isUnderline)}
        className={`text-4xl underline transition-all px-4 py-2 ${
          isUnderline
            ? 'text-blue-600 bg-blue-50'
            : 'text-zinc-400 hover:text-blue-500 hover:bg-blue-50'
        }`}
      >
        U
      </button>
    </div>
  );
};

export default TypographyControls;
