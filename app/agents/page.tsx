import { type Metadata } from 'next';
import Image from 'next/image';

import { Code } from '@/components/code';
import {
  ArchitectureDiagram,
  PipelineDiagram,
} from '@/components/patchdock-diagrams';
import { PostLayout } from '@/components/post-layout';
import { Reference } from '@/components/reference';
import { Terminal } from '@/components/terminal';

const subtitle =
  'How I created infrastructure to run agents across repositories while limiting their control';

export const metadata: Metadata = {
  title: 'Autonomous agents · Danyil Butov',
  description: subtitle,
};

export default function AgentsPage() {
  return (
    <PostLayout title="Autonomous agents" subtitle={subtitle}>
      <section>
        <h2>Overview</h2>
        <p>
          Coding agents have become part of how many of us build software. As a
          student, I’m still sceptical about leaning on them too heavily, so I
          deliberately limited how much I used them. I started with tools like
          NotebookLM to support my learning, then began experimenting on my own
          projects.
        </p>
        <p>
          <span
            id="tactical-strategic-programming"
            aria-describedby="reference-tactical-strategic-programming"
          >
            John Ousterhout’s distinction between tactical and strategic
            programming
            <sup
              className="ml-0.5 text-[10px] text-neutral-400"
              aria-hidden="true"
            >
              1
            </sup>{' '}
          </span>{' '}
          helped me think about that balance. Tactical programming prioritises
          getting a feature or fix working quickly; strategic programming
          invests in a design that stays easy to change over time.
        </p>
        <Reference targetId="tactical-strategic-programming" number={1}>
          In{' '}
          <a href="https://www.amazon.co.uk/Philosophy-Software-Design-John-Ousterhout/dp/1732102201">
            A Philosophy of Software Design
          </a>
          , John Ousterhout explores the difference between tactical and
          strategic programming in more depth.
        </Reference>
        <p>
          That framing is what let me hand the tactical work over. Once I know
          what I want to build and have written the design down, the questions
          that actually matter (architecture, longevity, how this will need to
          change later) are already settled. What’s left is a sequence of small,
          well-scoped changes, and that is where current models do well. Some
          features still take shape gradually rather than arriving fully
          specified, but I kept hitting the same pattern: the change was clear
          in my head, and the only real cost was the time to type it out.
        </p>
        <p></p>
        <p>
          Reading about{' '}
          <a href="https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents">
            Stripe’s Minions
          </a>{' '}
          and trying <a href="https://jules.google/">Google Jules</a> made me
          wonder whether I could automate that class of task, leaving only my
          judgement on the finished code.
        </p>
        <p>
          That’s where the idea for Patchdock came from. What if each repository
          could define its own agents and execution environment, with clear
          limits? Different repositories have different needs, and a small
          project doesn’t need the most capable model for every task.
        </p>
        <p>
          The idea was to give those agents a fixed loop: plan, execute, review.
          If the reviewer requested changes, the executor would try again within
          a retry limit. Once accepted, the result would land on a separate
          branch for me to review.
        </p>
      </section>
      <section>
        <h2>Usage</h2>
        <p>
          Start with a running Docker Engine, then install the <code>dock</code>{' '}
          CLI through Homebrew:
        </p>
        <Terminal command="brew install HJyup/tap/patchdock" />
        <p>
          Setting up a repository, writing agent definitions, and the rest of
          the commands are covered in the{' '}
          <a href="https://github.com/HJyup/patchdock">Patchdock repository</a>.
        </p>
        <p>
          Each repository owns its own execution limits. Here is an example of{' '}
          <code>.patchdock/config.yml</code>:
        </p>
        <Code
          language="yaml"
          code={`stages:
  planner: planner.ts
  executor: executor.ts
  reviewer: reviewer.ts

container:
  timeout: 10m
  token_budget: 100000

retries:
  max: 3`}
        />
        <p>
          The timeout is a hard wall-clock limit for each stage.{' '}
          <span id="token-budget" aria-describedby="reference-token-budget">
            The token budget is advisory, passed to the agent in its context.
          </span>
          <sup
            className="ml-0.5 text-[10px] text-neutral-400"
            aria-hidden="true"
          >
            2
          </sup>{' '}
          The retry limit caps the executor and reviewer rounds. Configuration
          is loaded fresh for each run, so changes do not require a daemon
          restart.
        </p>
        <Reference targetId="token-budget" number={2}>
          Passed to the agent as <code>ctx.tokenBudget</code>. The host enforces
          the wall-clock timeout; the agent is asked to stay within its token
          budget.
        </Reference>
        <p>
          Running <code>dock</code> opens the task input. For a quick submission
          from the terminal, pass the task directly; the command prints a run ID
          and exits while the daemon continues the work.
        </p>
        <Terminal command={'dock "Fix failing test in reviewer schema sdk"'} />
        <p>
          All running pipelines can be seen through TUI using dock watch
          command.
        </p>
        <figure className="bleed mt-4">
          <Image
            src="/images/patchdock_usage.png"
            draggable={false}
            alt="The dock main window listing runs and their current progress"
            width={2326}
            height={1300}
            className="w-full rounded-md border border-black/5 shadow-[0_6px_18px_-5px_rgba(0,0,0,0.22)] dark:border-white/10"
          />
          <figcaption className="mt-2 text-xs text-neutral-500 dark:text-neutral-500">
            dock main window with current progress
          </figcaption>
        </figure>
      </section>
      <section>
        <h2>Architecture</h2>
        <p>
          The most interesting question came up when I added an MCP connector to
          Claude Code, so the main agent could spawn my pipelines. If several
          agents can start runs, where should the central state of those
          pipelines live? My idea of a run is different from Claude Code’s: I
          don’t want to keep a terminal open, and often I don’t need to watch
          what a pipeline does, only whether it finished. The answer came from
          learning Docker for this project. Anyone can start a container, but
          Docker runs a daemon process that manages them. What if I did the
          same?
        </p>
        <ArchitectureDiagram />
        <p>
          A single goroutine owns the run table. Submissions, cancellations, and
          pipeline updates arrive through a buffered channel as typed events.
          Serialising mutations in one place keeps the queue’s state management
          free of shared-state locking.
        </p>
        <p>
          The dashboard only shows changes as they happen; it keeps no history
          of a project. That is deliberate: for the way I use Patchdock, the
          dashboard should show the active state and nothing else. The log of
          each run lives in the <code>.patchdock/</code> folder of the
          repository it belongs to.
        </p>
        <p>
          Since I am not dealing with history and already have a broker, I
          settled on a single-snapshot channel. If nothing reads the process,
          the queue can produce a lot of snapshots, and{' '}
          <span id="channel-send" aria-describedby="reference-channel-send">
            by Go’s design, sending something to a channel requires someone to
            receive it
          </span>
          <sup
            className="ml-0.5 text-[10px] text-neutral-400"
            aria-hidden="true"
          >
            3
          </sup>
          . So when a new snapshot arrives, the queue drains the channel before
          placing it, which means the channel never holds more than one.
        </p>
        <Reference targetId="channel-send" number={3}>
          You can loosen this with a buffered channel, but if nothing reads from
          it you will eventually overflow it. This example covers the behaviour:{' '}
          <a href="https://gobyexample.com/channel-buffering">
            Go by Example: Channel Buffering
          </a>
          .
        </Reference>
      </section>
      <section>
        <h2>Run pipeline</h2>
        <p>
          Before planning begins, the daemon loads the repository configuration,
          opens an audit directory, resolves the configured credentials, and
          ensures the agent image exists. A missing image is built from the
          repository’s Dockerfile; later runs reuse its tag.
        </p>
        <PipelineDiagram />
        <p>
          Each stage is a TypeScript file with a default-exported SDK
          definition. Patchdock supplies <code>ctx</code> and the typed input.
          The context includes the run ID, assigned paths, token budget, attempt
          counters, and a logging function. The examples below use the built-in
          Codex adapter.
        </p>
        <p>
          <strong>Planner.</strong> In <code>.patchdock/planner.ts</code>, the
          agent receives the task and returns a plan with a non-empty{' '}
          <code>summary</code> and Markdown <code>body</code>. Its repository
          mount is read-only.
        </p>
        <Code
          language="typescript"
          code={`import { codex, definePlanner } from "@patchdock/sdk";

export default definePlanner({
  async run(ctx, input) {
    return codex(ctx, input);
  },
});`}
        />
        <p>
          <strong>Executor.</strong> Once the plan is valid, Patchdock makes a
          local Git clone and locks its base commit. The executor receives the
          plan and previous review feedback. It edits files beneath{' '}
          <code>ctx.paths.workspace</code> and returns a status with optional
          notes. It does not return a patch: the host stages the workspace and
          calculates the diff against the locked base.
        </p>
        <Code
          language="typescript"
          code={`import { codex, defineExecutor } from "@patchdock/sdk";

export default defineExecutor({
  async run(ctx, input) {
    ctx.log(
      \`Executor attempt \${ctx.attempt}/\${ctx.maxAttempts}\`,
    );

    if (input.reviews.length > 0) {
      ctx.log("Applying previous review feedback");
    }

    return codex(ctx, input);
  },
});`}
        />
        <p>
          <strong>Reviewer.</strong> The last agent inspects the plan, patch,
          execution history, and previous reviews from a read-only workspace. An
          accepted review can proceed to publishing. A rejection must include
          feedback, which becomes context for the next executor attempt.
        </p>
        <Code
          language="typescript"
          code={`import { codex, defineReviewer } from "@patchdock/sdk";

export default defineReviewer({
  async run(ctx, input) {
    return codex(ctx, input);
  },
});`}
        />
        <p>
          These definitions can use another model or custom logic instead of
          Codex, provided they return the stage’s required contract. Returning
          invalid data stops the stage; it is never passed to the next agent.
        </p>
        <p>
          Each stage runs in its own Docker container with its own mounts. The
          executor gets a copy of the repository with write access, while the
          planner sees the real repository read-only. A stage is defined by what
          it should do, and the mounts enforce that role. This matters when I
          test several models against the same stage, and more importantly
          because stages can be invoked on their own (over MCP you might call
          only the planner), so the container’s rules, rather than its place in
          the pipeline, are what limit it.
        </p>
        <p>
          Every workspace and cloned repository is removed when the pipeline
          ends, so nothing stale is left on the machine. If the reviewer rejects
          a run, I do not keep what it did at all. That is wasteful in tokens,
          but it means I do not spend time on branches the agent never finished
          itself.
        </p>
      </section>
      <section>
        <h2>Reflection</h2>
        <p>
          Ironically, a tool meant to automate small coding tasks became one of
          the hardest projects I’ve built. I had heard of many of the concepts
          involved, but managing live pipelines, building an event-driven queue,
          and writing my own small broker made me understand them differently.
          Connecting those ideas to what I already knew was difficult and
          incredibly rewarding.
        </p>
      </section>
      <section>
        <h2>Longevity</h2>
        <p>
          As for the project’s future, AI tooling changes quickly, but I still
          think Patchdock has a small niche. At the very least, it works really
          well at hackathons :). Models are moving towards defining the
          structure of subagents themselves. With{' '}
          <a href="https://code.claude.com/docs/en/workflows">
            Claude workflows
          </a>
          , for example, you can define your own pipeline of agents, while my
          project is opinionated and somewhat hard-coded to its structure. It is
          a double-edged sword at best.
        </p>
        <p>
          Additionally, the philosophy I was building on is that each stage only
          needs the most important parts: what to fix, what to remove. The
          content every agent gets is basically defined by its predecessor,
          which means that if the planner discovered something but did not leave
          it for the executor, the executor has to discover it again. That is
          not the best way of solving this problem.
        </p>
        <p>
          I still use it from time to time, whether at a hackathon or for a
          small, well-defined change where the main cost is implementation time:
          renaming variables, updating tests, or making a straightforward fix.
          It doesn’t need to solve every coding task to be useful to me.
        </p>
      </section>
    </PostLayout>
  );
}
