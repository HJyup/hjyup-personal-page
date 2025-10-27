import LinkBlock from '@/components/module/link-block';

export default function NotFound() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
      <div className="flex justify-end items-center w-full pt-14 md:py-16 px-8 md:px-24">
        <main className="flex flex-col max-w-xl justify-center min-h-[calc(100vh-8rem)]">
          <h1 className="text-neutral-900 dark:text-neutral-50 text-base md:text-lg font-medium">
            404
          </h1>

          <div className="text-xs md:text-base text-neutral-700 dark:text-neutral-300 mt-0.5 w-full">
            Page not found
          </div>

          <h2 className="text-xs mt-10 text-muted-foreground w-full">
            What happened?
          </h2>
          <p className="text-xs md:text-sm mt-4 w-full md:w-5/6 text-neutral-900 dark:text-neutral-50 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>

          <p className="text-xs md:text-sm mt-4 w-full md:w-5/6 text-neutral-900 dark:text-neutral-50 leading-relaxed">
            But while you&apos;re here, feel free to learn more about this
            website and how it was built!
          </p>

          <h2 className="text-xs mt-10 text-muted-foreground w-full">
            Navigate
          </h2>
          <div className="mt-4 flex flex-col gap-3">
            <a href="/" className="hover:underline">
              <LinkBlock>Return to homepage</LinkBlock>
            </a>
            <a href="/posts/about" className="hover:underline">
              <LinkBlock>Read my blog</LinkBlock>
            </a>
          </div>
        </main>
      </div>

      <div className="hidden md:block h-screen w-1/2 fixed right-0 overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-[50px] bg-gradient-to-r from-background to-transparent z-20" />
        <div className="flex items-center justify-center h-full text-muted-foreground">
          <div className="text-center max-w-sm px-8">
            <p className="text-xs leading-relaxed">
              This space is usually filled with interactive widgets on the main
              page. Navigate back to explore them!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
