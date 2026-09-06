import Image from 'next/image';

import { HoverList, type HoverRow } from '@/components/hover-list';

export type Project = {
  name: string;
  description: string;
  topic: string;
  url?: string;
  preview?: string;
  video?: string;
  icon?: string;
  iconId?: string;
  iconSize?: string;
};

export function ProjectList({ items }: { items: Project[] }) {
  const rows: HoverRow[] = items.map(project => ({
    id: project.name,
    href: project.url,
    className:
      'group relative block rounded-lg text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-8 focus-visible:ring-offset-background',
    cells: (
      <>
        <div className="mb-4 flex items-center gap-2.5">
          {project.icon && (
            <span
              id={project.iconId}
              className="size-6 shrink-0 bg-center bg-no-repeat dark:brightness-125"
              style={{
                backgroundImage: `url('${project.icon}')`,
                backgroundSize: project.iconSize ?? 'contain',
              }}
              aria-hidden="true"
            />
          )}
          <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">
            {project.name}
          </h3>
          <span className="ml-auto text-xs text-neutral-500">
            {project.topic}
          </span>
        </div>
        {(project.preview || project.video) && (
          <div className="overflow-hidden rounded-xl bg-neutral-100 p-5 sm:p-8 dark:bg-[color-mix(in_srgb,#262626_30%,hsl(var(--background)))]">
            {project.video ? (
              <video
                src={project.video}
                draggable={false}
                poster={project.preview}
                autoPlay
                loop
                muted
                playsInline
                aria-label={`${project.name} preview`}
                className="w-full rounded-md border border-black/5 shadow-[0_6px_18px_-5px_rgba(0,0,0,0.22)] dark:border-white/10"
              />
            ) : project.preview ? (
              <Image
                src={project.preview}
                draggable={false}
                alt={`${project.name} placeholder preview`}
                width={960}
                height={640}
                className="w-full rounded-md border border-black/5 shadow-[0_6px_18px_-5px_rgba(0,0,0,0.22)] dark:border-white/10"
              />
            ) : null}
          </div>
        )}
        <p className="mt-4 text-pretty leading-6 text-neutral-600 dark:text-neutral-400">
          {project.description}
        </p>
      </>
    ),
  }));

  return (
    <HoverList
      rows={rows}
      className="mt-8 space-y-12 sm:space-y-14"
      pad={{ x: 12, y: 12 }}
    />
  );
}
