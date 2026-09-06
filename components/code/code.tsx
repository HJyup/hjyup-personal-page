import { type BundledLanguage } from 'shiki';

import { CopyButton } from '@/components/copy-button';
import { highlightCode } from '@/lib/highlight-code';

export type CodeProps = {
  code: string;
  language?: BundledLanguage | 'text';
  /** First visible line number, useful for excerpts. */
  startLine?: number;
};

/** Server-rendered highlighting; only the copy button ships interactive code. */
export async function Code({
  code,
  language = 'text',
  startLine = 1,
}: CodeProps) {
  const { tokens } = await highlightCode(code, language);

  return (
    <div className="snippet relative mt-4 rounded-xl border border-neutral-200/70 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900/60">
      <div className="absolute right-1.5 top-4 z-10 rounded-md bg-white dark:bg-neutral-900">
        <CopyButton text={code} />
      </div>
      <pre
        tabIndex={0}
        aria-label={`${language} code`}
        className="-translate-y-px overflow-x-auto rounded-xl py-5 pr-14 font-mono text-[12px] leading-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        <code className="block min-w-max">
          {tokens.map((line, index) => (
            <span key={index} className="block min-h-6">
              <span
                aria-hidden="true"
                className="inline-block w-12 select-none pr-4 text-right text-neutral-400 dark:text-neutral-600"
              >
                {startLine + index}
              </span>
              {line.map((token, tokenIndex) => (
                <span key={tokenIndex} style={{ color: token.color }}>
                  {token.content}
                </span>
              ))}
              {index < tokens.length - 1 ? '\n' : null}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}
