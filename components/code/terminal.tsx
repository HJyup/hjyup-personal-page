import { CopyButton } from '@/components/copy-button';
import { highlightCode } from '@/lib/highlight-code';

type TerminalProps = { command: string };

/** Displays a command for copying; it never executes it. */
export async function Terminal({ command }: TerminalProps) {
  const { tokens } = await highlightCode(command, 'bash');

  return (
    <div className="snippet mt-4 flex items-start gap-3 rounded-xl border border-neutral-200/70 bg-white py-1.5 pl-4 pr-1.5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/60">
      <pre
        tabIndex={0}
        aria-label="Terminal command"
        className="min-w-0 flex-1 overflow-x-auto rounded-sm py-0 font-mono text-[12px] leading-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        <code>
          {tokens.map((line, index) => (
            <span key={index} className="block">
              <span
                aria-hidden="true"
                className="mr-3 inline-block w-3 select-none text-neutral-400 dark:text-neutral-500"
              >
                $
              </span>
              {line.map((token, tokenIndex) => (
                <span key={tokenIndex} style={{ color: token.color }}>
                  {token.content}
                </span>
              ))}
            </span>
          ))}
        </code>
      </pre>
      <CopyButton text={command} label="Copy command" />
    </div>
  );
}
