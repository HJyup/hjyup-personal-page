'use client';

import { type ReactNode, useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'motion/react';

import { type RulerEntry, SectionRuler } from '@/components/section-ruler';
import { useReferenceLayout } from '@/lib/use-reference-layout';

/** Builds the article navigation from its actual section headings. */
export function PostBody({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useReferenceLayout(root);
  const [headings, setHeadings] = useState<RulerEntry[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const elements = Array.from(
      root.current?.querySelectorAll<HTMLElement>('h2, h3') ?? [],
    );
    const used = new Set<string>();
    const entries = elements.map((heading, index) => {
      const label = heading.textContent?.trim() ?? '';
      const slug = label
        .toLowerCase()
        .replace(/['’]/g, '')
        .replace(/[^\p{L}\p{N}]+/gu, '-')
        .replace(/^-|-$/g, '');
      const base = heading.id || slug || `section-${index + 1}`;
      let id = base;
      let suffix = 2;
      while (used.has(id)) id = `${base}-${suffix++}`;
      used.add(id);
      heading.id = id;
      heading.tabIndex = -1;
      return { id, label };
    });
    setHeadings(entries);

    const update = () => {
      const readingLine = window.innerHeight * 0.3;
      let current = elements[0];
      for (const heading of elements) {
        if (heading.getBoundingClientRect().top <= readingLine)
          current = heading;
      }
      if (
        window.scrollY > 0 &&
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 2
      ) {
        current = elements[elements.length - 1];
      }
      setActiveId(current?.id ?? null);
    };

    let frame = 0;
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [children]);

  const jump = (entry: RulerEntry) => {
    const heading = document.getElementById(entry.id);
    if (!heading) return;
    heading.focus({ preventScroll: true });
    heading.scrollIntoView({
      behavior: reduce ? 'auto' : 'smooth',
      block: 'start',
    });
    setActiveId(entry.id);
  };

  return (
    <>
      <div
        ref={root}
        className="relative mt-8 space-y-8 pb-12 text-sm leading-6 text-neutral-600 sm:mt-10 sm:space-y-10 sm:pb-16 dark:text-neutral-400 [&_a]:text-blue-600 [&_a]:underline [&_a]:decoration-blue-600/30 [&_a]:underline-offset-4 [&_a]:transition-colors hover:[&_a]:text-blue-800 focus-visible:[&_a]:outline-blue-500 dark:[&_a]:text-blue-400 dark:[&_a]:decoration-blue-400/30 dark:hover:[&_a]:text-blue-300 [&_h2]:scroll-mt-24 [&_h2]:text-sm [&_h2]:font-semibold [&_h2]:text-neutral-900 dark:[&_h2]:text-neutral-100 [&_h3]:scroll-mt-24 [&_h3]:text-sm [&_h3]:font-semibold [&_h3]:text-neutral-900 dark:[&_h3]:text-neutral-100 [&_p]:mt-4"
      >
        {children}
      </div>
      <SectionRuler
        entries={headings}
        visible={headings.length > 0}
        activeId={activeId}
        onSelect={jump}
        label="Article sections"
      />
    </>
  );
}
