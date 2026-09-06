import { HoverList, type HoverRow } from '@/components/hover-list';

export type Writing = {
  title: string;
  date: string;
  url?: string;
};

/**
 * `relative` is load-bearing: the block is absolutely positioned, so without it
 * these rows would be unpositioned and paint *underneath* the block rather than
 * over it. The grid rows get it from their own class for the same reason.
 */
const ROW = 'relative flex items-center text-sm';

export function WritingList({ items }: { items: Writing[] }) {
  const rows: HoverRow[] = items.map(writing => ({
    id: writing.title,
    href: writing.url,
    className: ROW,
    cells: (
      <>
        {/* Tells HoverList to wrap the title alone, not the whole row. */}
        <span
          data-hover-target=""
          className="shrink-0 text-neutral-800 dark:text-neutral-200"
        >
          {writing.title}
        </span>
        <span
          className="mx-4 h-px flex-1 bg-neutral-200 dark:bg-neutral-800"
          aria-hidden="true"
        />
        <span className="shrink-0 text-neutral-500 dark:text-neutral-500">
          {writing.date}
        </span>
      </>
    ),
  }));

  return (
    <HoverList
      rows={rows}
      className="mt-8 space-y-5"
      pad={{ x: 10, y: 6 }}
      trailingIcon={false}
    />
  );
}
