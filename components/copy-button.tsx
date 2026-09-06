'use client';

import { useEffect, useRef, useState } from 'react';

export function CopyButton({
  text,
  label = 'Copy code',
}: {
  text: string;
  label?: string;
}) {
  const [status, setStatus] = useState<'idle' | 'copied' | 'error'>('idle');
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(text);
      setStatus('copied');
    } catch {
      setStatus('error');
    }
    timer.current = setTimeout(() => setStatus('idle'), 2000);
  };

  const message =
    status === 'copied'
      ? 'Copied'
      : status === 'error'
        ? 'Could not copy. Select the text to copy.'
        : label;

  return (
    <>
      <button
        type="button"
        onClick={copy}
        aria-label={message}
        title={message}
        className="flex size-6 shrink-0 items-center justify-center rounded-md text-neutral-400 transition-colors hover:bg-blue-50 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 motion-reduce:transition-none dark:text-neutral-500 dark:hover:bg-blue-400/10 dark:hover:text-blue-400"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {status === 'copied' ? (
            <path d="m5 12 4 4L19 6" />
          ) : (
            <>
              <rect x="8" y="8" width="12" height="12" rx="2" />
              <path d="M16 4H6a2 2 0 0 0-2 2v10" />
            </>
          )}
        </svg>
      </button>
      <span role="status" className="sr-only">
        {status === 'idle' ? '' : message}
      </span>
    </>
  );
}
