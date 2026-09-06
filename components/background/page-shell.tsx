import { type ReactNode } from 'react';

import { SkyLine } from '@/components/background/sky-line';
import { TreeLine } from '@/components/background/tree-line';

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-svh flex-col">
      <SkyLine />
      <main className="flex-1 px-6 py-10 sm:px-10 sm:py-12 lg:py-16">
        <div className="mx-auto w-full max-w-xl">{children}</div>
      </main>
      <TreeLine />
    </div>
  );
}
