import React from 'react';

export default function NotFound() {
  return (
    <div className="text-black flex flex-col pt-16 sm:pt-20 md:pt-24 justify-center px-4 sm:px-6 lg:px-8 mb-20">
      <div className="flex flex-col w-full items-center h-full">
        <div className="w-full max-w-6xl">
          <div className="text-center">
            <div className="text-muted-foreground text-lg sm:text-xl">404</div>
            <div className="text-lg sm:text-xl lg:text-2xl dark:text-zinc-300 mt-2">
              Page not found
            </div>
            <div className="text-muted-foreground text-sm sm:text-base mt-4 max-w-md mx-auto">
              The page you're looking for doesn't exist.
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <a
              href="/"
              className="text-sm sm:text-base text-muted-foreground hover:text-black dark:hover:text-zinc-300 transition-colors underline"
            >
              Return to homepage
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
