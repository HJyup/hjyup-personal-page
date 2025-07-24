import { ReactNode } from 'react';

export default function PostsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-screen min-h-screen flex justify-center">
      <div className="lg:w-4/6 w-full mb-20">
        {children}{' '}
        <section>
          <p className="text-muted-foreground text-xs md:text-sm text-center mt-16">
            Built with love and care.
          </p>
        </section>
      </div>
    </div>
  );
}
