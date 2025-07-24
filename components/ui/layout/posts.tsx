import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';

const PostsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-xl mx-auto pt-16 sm:pt-20 md:pt-24 justify-center mb-20 space-y-8 sm:space-y-12 px-4 lg:px-0">
      <div className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 flex items-center gap-2 mb-8">
        <Link
          href="/"
          className="flex items-center gap-2 hover:underline w-full"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back
        </Link>
      </div>
      {children}
    </div>
  );
};

export default PostsLayout;
