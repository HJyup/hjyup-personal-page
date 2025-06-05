import { Sparkles } from 'lucide-react';

interface AskAiSectionProps {
  className?: string;
}

const AskAiSection = ({ className = '' }: AskAiSectionProps) => {
  return (
    <div
      className={`flex w-full h-full items-end justify-start flex-col gap-4 ${className}`}
    >
      <button
        className="ask-ai-btn bg-white text-black hover:text-blue-600 hover:bg-blue-50 transition-all px-6 py-3 rounded-lg shadow-lg hover:shadow-xl inline-flex items-center gap-3 text-lg font-semibold group z-10"
        disabled
      >
        <Sparkles className="h-5 w-5 group-hover:text-blue-600 transition-colors" />
        Ask AI about me
      </button>
      <div className="ask-ai-btn text-xs text-zinc-500 italic text-end pr-2">
        I’m still building this feature — but hey, now you’ve got a reason to{' '}
        <span className="underline decoration-blue-500 underline-offset-2 decoration-wavy">
          come back
        </span>
        .
      </div>
    </div>
  );
};

export default AskAiSection;
