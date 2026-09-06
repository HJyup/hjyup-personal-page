import { type ReactNode } from 'react';

const frame =
  'bleed mt-6 rounded-xl border border-neutral-200/70 bg-neutral-50/70 p-4 sm:p-6 dark:border-neutral-800 dark:bg-neutral-900/40';

function Node({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-w-0 rounded-lg border border-neutral-200/80 bg-white px-3 py-2.5 dark:border-neutral-800 dark:bg-neutral-950">
      <div className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
        {title}
      </div>
      <div className="mt-1 text-xs leading-5 text-neutral-500 dark:text-neutral-400">
        {children}
      </div>
    </div>
  );
}

/** `inline` turns the connector sideways once the stages sit in a row. */
function Connector({
  children,
  inline = false,
}: {
  children?: ReactNode;
  inline?: boolean;
}) {
  return (
    <div
      className={`flex min-h-10 items-center justify-center gap-2 py-2 text-center text-[11px] leading-4 text-neutral-500 dark:text-neutral-400${
        inline
          ? ' md:min-h-0 md:max-w-[7rem] md:flex-col md:gap-1 md:self-center md:py-0'
          : ''
      }`}
    >
      <span
        aria-hidden="true"
        className="text-base text-blue-600 dark:text-blue-400"
      >
        <span className={inline ? 'md:hidden' : undefined}>↓</span>
        {inline ? <span className="hidden md:inline">→</span> : null}
      </span>
      {children}
    </div>
  );
}

export function ArchitectureDiagram() {
  return (
    <figure
      className={frame}
      aria-label="Patchdock architecture: terminal clients and MCP agents connect to one local daemon, which queues runs, streams snapshots, and manages Docker and Git"
    >
      <div className="grid gap-2 sm:grid-cols-2">
        <Node title="Terminal clients">
          dock · dock watch · multiple repositories
        </Node>
        <Node title="MCP">Terminal agents such as Codex or Claude Code</Node>
      </div>
      <Connector>
        HTTP over a Unix socket · SSE snapshots back to clients
      </Connector>
      <div className="rounded-xl border border-blue-600/20 bg-blue-50/40 p-3 sm:p-4 dark:border-blue-400/20 dark:bg-blue-400/5">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-1 text-xs">
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            Local daemon
          </span>
          <span className="text-neutral-500 dark:text-neutral-400">
            One process · file lock
          </span>
        </div>
        <Node title="Router → Service">
          Submit a task or follow the live state feed.
        </Node>
        <Connector />
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
          <Node title="Queue">
            Owns run state.
            <br />
            Starts and cancels runs.
          </Node>
          <span
            aria-label="Snapshots flow to the broker"
            className="text-blue-600 dark:text-blue-400"
          >
            →
          </span>
          <Node title="Broker">
            Latest snapshot.
            <br />
            Fans out to clients.
          </Node>
        </div>
        <Connector>Queue starts a pipeline for each run</Connector>
        <Node title="Run pipeline">
          Loads config, runs the stages, and publishes accepted changes.
        </Node>
      </div>
      <Connector>The pipeline manages</Connector>
      <div className="grid gap-2 sm:grid-cols-3">
        <Node title=".patchdock/">
          Config, Dockerfile, and agent definitions.
        </Node>
        <Node title="Docker Engine">A fresh container for each stage.</Node>
        <Node title="Git workspace">Temporary clone and published branch.</Node>
      </div>
    </figure>
  );
}

export function PipelineDiagram() {
  return (
    <figure
      className={`${frame} bleed-wide`}
      aria-label="Planner reads the repository, executor edits a clone, reviewer inspects the patch. Acceptance publishes a branch; rejection retries or ends the run."
    >
      <ol className="grid list-none md:grid-cols-[1fr_auto_1fr_auto_1fr] md:gap-2">
        <li className="contents">
          <Node title="Planner">Read-only /repo → validated plan</Node>
          <Connector inline>
            Clone the repository and lock the base commit
          </Connector>
        </li>
        <li className="contents">
          <Node title="Executor">
            Read-write /workspace → file changes and execution result
          </Node>
          <Connector inline>
            The host stages changes and extracts the diff
          </Connector>
        </li>
        <li className="contents">
          <Node title="Reviewer">
            Read-only /workspace → accept or reject with feedback
          </Node>
        </li>
      </ol>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border border-blue-600/20 bg-blue-50/60 p-3 dark:border-blue-400/20 dark:bg-blue-400/5">
          <div className="text-xs font-semibold text-blue-600 dark:text-blue-400">
            Accept → publish
          </div>
          <div className="mt-1 text-xs leading-5 text-neutral-600 dark:text-neutral-400">
            Create a branch and commit in the clone, then push back to the local
            repository.
          </div>
        </div>
        <div className="rounded-lg border border-neutral-200/80 p-3 dark:border-neutral-800">
          <div className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
            Reject ↩ executor
          </div>
          <div className="mt-1 text-xs leading-5 text-neutral-500 dark:text-neutral-400">
            Pass feedback to the next attempt. Stop as rejected when the retry
            limit is reached.
          </div>
        </div>
      </div>
    </figure>
  );
}
