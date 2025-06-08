import { Sparkles } from 'lucide-react';

interface AskAiSectionProps {
  className?: string;
}

const AskAiSection = ({ className }: AskAiSectionProps) => {
  return (
    <div
      className={`flex w-full h-full items-end justify-start flex-col gap-4 text-sm md:text-base ${className}`}
    >
      <button
        className="w-[90%] md:w-auto ask-ai-btn bg-white text-black hover:text-blue-600 hover:bg-blue-50 transition-all px-6 py-3 rounded-lg shadow-lg hover:shadow-xl flex justify-center items-center gap-3 text-lg font-semibold group z-10 mx-auto"
        disabled
      >
        <Sparkles className="h-5 w-5 group-hover:text-blue-600 transition-colors" />
        <p>Ask AI about me</p>
      </button>
      <div className="ask-ai-btn text-xs text-zinc-500 italic text-center md:text-end pr-2">
        I’m still building this{' '}
        <span className="underline decoration-blue-500 underline-offset-2 decoration-wavy">
          feature
        </span>{' '}
        - but hey, now you’ve got a reason to come back .
      </div>
    </div>
  );
};

export default AskAiSection;
