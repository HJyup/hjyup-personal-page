import { IoArrowBack } from 'react-icons/io5';
import Link from 'next/link';

import { Footer } from './footer';

interface PostsLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function PostsLayout({ children, className = '' }: PostsLayoutProps) {
  return (
    <div className="flex flex-col items-center bg-background min-h-screen">
      <div className="w-full flex flex-col items-center">
        <div className={`w-full max-w-xl px-1 lg:px-0 ${className}`}>
          <div className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 flex items-center gap-2 mb-8">
            <Link
              href="/"
              className="flex items-center gap-2 hover:underline underline-offset-2 w-full hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            >
              <IoArrowBack className="w-4 h-4" />
              Back
            </Link>
          </div>

          <div className="space-y-8 sm:space-y-12">{children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
