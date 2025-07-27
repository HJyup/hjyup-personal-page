import { IoArrowBack } from 'react-icons/io5';
import Link from 'next/link';

interface PostsLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function PostsLayout({ children, className = '' }: PostsLayoutProps) {
  return (
    <div className="flex flex-col items-center bg-background min-h-screen">
      <div className="w-full flex flex-col items-center">
        <div className={`w-full max-w-xl px-1 lg:px-0 ${className}`}>
          <div className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 flex items-center gap-2 mb-8">
            <Link
              href="/"
              className="flex items-center gap-2 hover:underline w-full"
            >
              <IoArrowBack className="w-4 h-4" />
              Back
            </Link>
          </div>

          <div className="space-y-8 sm:space-y-12">{children}</div>
        </div>
      </div>
    </div>
  );
}
