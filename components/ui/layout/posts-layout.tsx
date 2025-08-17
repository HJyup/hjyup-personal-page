import { ReactNode } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import Link from 'next/link';

interface PostsLayoutProps {
  children: ReactNode;
  className?: string;
}

const BackLink = () => {
  return (
    <div className="text-xs md:text-sm text-zinc-700 dark:text-zinc-300 flex items-center gap-2 mb-8">
      <Link
        href="/"
        className="flex items-center gap-2 hover:underline underline-offset-2 w-full hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
      >
        <IoArrowBack className="w-3 h-3 md:w-4 md:h-4" />
        Back
      </Link>
    </div>
  );
};

export function PostsLayout({ children, className = '' }: PostsLayoutProps) {
  return (
    <div className="flex flex-col items-center bg-background min-h-screen">
      <div className="w-full flex flex-col items-center pt-14 pb-24 md:pt-16 md:pb-32 6 px-8 md:px-2">
        <div className={`w-full max-w-lg px-1 lg:px-0 ${className}`}>
          <BackLink />
          <div className="space-y-8 sm:space-y-12">{children}</div>
        </div>
      </div>
    </div>
  );
}
