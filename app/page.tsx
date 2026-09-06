import { PageShell } from '@/components/background/page-shell';
import { HomeView } from '@/components/home-view';
import { ProjectList } from '@/components/project-list';
import { WorkList } from '@/components/work-list';
import { WritingList } from '@/components/writing-list';
import { NOW } from '@/lib/data/now';
import { PROJECTS } from '@/lib/data/projects';
import { WORK } from '@/lib/data/work';
import { WRITINGS } from '@/lib/data/writing';

export default function Page() {
  return (
    <PageShell>
      <header>
        <h1 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
          Danyil Butov
        </h1>
        <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
          Software Engineer
        </p>
      </header>

      <section className="mt-8 sm:mt-10" aria-label="About">
        <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-400">
          <strong className="font-semibold text-neutral-800 dark:text-neutral-200">
            Passionate about building web applications that people genuinely
            enjoy using.
          </strong>{' '}
          Lately, I've been diving deeper into distributed systems and
          infrastructure while continuing to build and experiment with web
          technologies.
        </p>
      </section>

      <HomeView entries={NOW}>
        <section className="mt-12 sm:mt-16" aria-labelledby="work-title">
          <h2
            id="work-title"
            className="text-sm font-semibold text-neutral-900 dark:text-neutral-100"
          >
            Work{' '}
            <span className="font-normal text-neutral-500 dark:text-neutral-500">
              ({WORK.length})
            </span>
          </h2>
          <WorkList items={WORK} />
        </section>

        <section className="mt-16 sm:mt-20" aria-labelledby="projects-title">
          <h2
            id="projects-title"
            className="text-sm font-semibold text-neutral-900 dark:text-neutral-100"
          >
            Projects{' '}
            <span className="font-normal text-neutral-500 dark:text-neutral-500">
              ({PROJECTS.length})
            </span>
          </h2>
          <ProjectList items={PROJECTS} />
        </section>

        <section className="mt-16 sm:mt-20" aria-labelledby="writing-title">
          <h2
            id="writing-title"
            className="text-sm font-semibold text-neutral-900 dark:text-neutral-100"
          >
            Writing{' '}
            <span className="font-normal text-neutral-500 dark:text-neutral-500">
              ({WRITINGS.length})
            </span>
          </h2>
          <WritingList items={WRITINGS} />
        </section>
      </HomeView>
    </PageShell>
  );
}
