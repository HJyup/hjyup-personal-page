import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';

export const PostContentContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="space-y-8 sm:space-y-12">{children}</div>;
};

const PostsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="pt-16 sm:pt-20 md:pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-sm text-zinc-600 dark:text-zinc-400 flex items-center gap-2 mb-8">
          <Link
            href="/"
            className="flex items-center gap-2 hover:underline w-full"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
};

export default PostsLayout;
