import { HoverList, type HoverRow } from '@/components/hover-list';

export type WorkItem = {
  company: string;
  role: string;
  team: string;
  date: string;
  icon: string;
  url?: string;
};

export function WorkList({ items }: { items: WorkItem[] }) {
  const rows: HoverRow[] = items.map(item => ({
    id: item.company,
    href: item.url,
    cells: (
      <>
        <span
          className="row-start-1 -mt-0.5 size-6 bg-neutral-500 [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain] dark:bg-neutral-400"
          style={{
            maskImage: `url('${item.icon}')`,
            WebkitMaskImage: `url('${item.icon}')`,
          }}
          aria-hidden="true"
        />
        <span className="col-start-2 row-start-1 font-semibold text-neutral-800 dark:text-neutral-200">
          {item.company}
        </span>
        <div className="col-span-2 col-start-2 row-start-2 sm:col-span-1 sm:col-start-3 sm:row-start-1">
          <p className="text-neutral-800 dark:text-neutral-200">{item.role}</p>
          <p className="text-neutral-500 dark:text-neutral-500">{item.team}</p>
        </div>
        <span className="col-start-3 row-start-1 whitespace-nowrap text-right text-sm text-neutral-500 dark:text-neutral-500 sm:col-start-4">
          {item.date}
        </span>
      </>
    ),
  }));

  return <HoverList rows={rows} />;
}
