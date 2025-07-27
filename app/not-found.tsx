import React from 'react';

export default function NotFound() {
  return (
    <div className="flex flex-col pt-16 sm:pt-20 md:pt-24 justify-center px-4 sm:px-6 lg:px-8 mb-20">
      <div className="flex flex-col w-full items-center h-full">
        <div className="w-full max-w-6xl">
          <div className="text-center">
            <div className="text-zinc-600 dark:text-zinc-400 text-lg sm:text-xl">404</div>
            <div className="text-xl sm:text-2xl lg:text-3xl text-zinc-900 dark:text-zinc-50 font-medium mt-2">
              Page not found
            </div>
            <div className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg mt-4 max-w-md mx-auto">
              The page you're looking for doesn't exist.
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <a
              href="/"
              className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors underline underline-offset-4"
            >
              Return to homepage
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
