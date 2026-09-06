import { type ReactNode } from 'react';
import Link from 'next/link';

import { PageShell } from '@/components/background/page-shell';
import { PostBody } from '@/components/post/post-body';

type PostLayoutProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

export function PostLayout({ title, subtitle, children }: PostLayoutProps) {
  return (
    <PageShell>
      <nav aria-label="Back to main page">
        <Link
          href="/"
          className="-my-3 inline-flex items-center gap-2 rounded-sm py-3 text-sm text-neutral-500 transition-colors hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4 focus-visible:ring-offset-background dark:hover:text-neutral-100"
        >
          <span aria-hidden="true">←</span>
          Back
        </Link>
      </nav>
      <article className="mt-8 sm:mt-10">
        <header>
          <h1 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
            {title}
          </h1>
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
            {subtitle}
          </p>
        </header>
        <PostBody>{children}</PostBody>
      </article>
    </PageShell>
  );
}
