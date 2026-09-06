'use client';

import {
  type ReactNode,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

import {
  ArrowRightIcon,
  type ArrowRightIconHandle,
} from '@/components/ui/arrow-right';
import {
  ExternalLinkIcon,
  type ExternalLinkIconHandle,
} from '@/components/ui/external-link';

export type HoverRow = {
  /** Stable identity, also the React key. */
  id: string;
  /**
   * Omitted for rows that are not links, which do not highlight — a block
   * under something unclickable promises a page that is not there. A path
   * routes in place behind the arrow; anything else is off-site, and opens in
   * a new tab behind the outbound icon.
   */
  href?: string;
  /** Defaults to the grid shared by Work and Projects. */
  className?: string;
  cells: ReactNode;
};

type HoverListProps = {
  rows: HoverRow[];
  /** Container classes, which in practice means the list's vertical rhythm. */
  className?: string;
  /** How far the block bleeds past whatever it is measuring. */
  pad?: { x: number; y: number };
  /**
   * Work and Projects park an icon in the right margin. Writing has a date
   * sitting there already, and a block hugging the title on the far left would
   * have nothing to do with an icon floating past the date.
   */
  trailingIcon?: boolean;
};

/**
 * A row may mark one descendant `data-hover-target` to have the block wrap that
 * instead of the whole row — Writing puts it on the title so the block ignores
 * the leader line and the date. Deliberately a plain attribute rather than an
 * exported constant: this module is `'use client'`, so a server component
 * importing a value from it would get a client reference, not the value.
 */
const TARGET = '[data-hover-target]';

/** Both icons happen to expose the same imperative handle. */
type IconHandle = ArrowRightIconHandle | ExternalLinkIconHandle;

type Box = { x: number; y: number; width: number; height: number };

const GRID_ROW =
  'relative grid grid-cols-[1.5rem_minmax(0,1fr)_7rem] gap-x-3 gap-y-1 text-sm sm:grid-cols-[1.5rem_7rem_minmax(0,1fr)_7rem]';

const TRAVEL = { type: 'spring', bounce: 0.18, duration: 0.45 } as const;
const SNAP = { duration: 0 } as const;

const isInternal = (href: string) => href.startsWith('/');

export function HoverList({
  rows,
  className = 'mt-8 space-y-7',
  pad = { x: 16, y: 12 },
  trailingIcon = true,
}: HoverListProps) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [box, setBox] = useState<Box | null>(null);

  const frame = useRef<HTMLDivElement | null>(null);
  const nodes = useRef<(HTMLElement | null)[]>([]);
  const icons = useRef<(IconHandle | null)[]>([]);

  const visible = hovered !== null;

  /**
   * The block is mounted once and moved, rather than mounted inside whichever
   * row is hovered. Per-row mounting is what motion's layoutId normally wants,
   * but travelling between rows is an unmount plus a mount, so any enter
   * animation replays mid-travel and the block flickers. Owning it here keeps
   * opacity completely independent of position.
   *
   * Measured off bounding rects rather than offsetTop/offsetLeft because the
   * hover target may be nested inside a positioned row, which would put it on a
   * different offsetParent from the row itself.
   */
  useLayoutEffect(() => {
    if (hovered === null) return;
    const row = nodes.current[hovered];
    const container = frame.current;
    if (!row || !container) return;

    const target = row.querySelector(TARGET) ?? row;
    const a = target.getBoundingClientRect();
    const b = container.getBoundingClientRect();

    setBox({
      x: a.left - b.left - pad.x,
      y: a.top - b.top - pad.y,
      width: a.width + pad.x * 2,
      height: a.height + pad.y * 2,
    });
  }, [hovered, pad.x, pad.y]);

  /** While the block is invisible there is nothing to travel, so it jumps. */
  const wasVisible = useRef(false);
  const reposition = wasVisible.current ? TRAVEL : SNAP;
  useEffect(() => {
    wasVisible.current = visible;
  }, [visible]);

  const enter = (index: number) => {
    setHovered(index);
    icons.current[index]?.startAnimation();
  };

  const leave = () => {
    if (hovered !== null) icons.current[hovered]?.stopAnimation();
    setHovered(null);
  };

  return (
    <div ref={frame} className={`relative ${className}`} onMouseLeave={leave}>
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 rounded-xl bg-neutral-200/40 dark:bg-neutral-800/30"
        initial={false}
        animate={{
          opacity: visible ? 1 : 0,
          x: box?.x ?? 0,
          y: box?.y ?? 0,
          width: box?.width ?? 0,
          height: box?.height ?? 0,
        }}
        transition={{
          x: reposition,
          y: reposition,
          width: reposition,
          height: reposition,
          opacity: { duration: 0.18, ease: 'easeOut' },
        }}
      />

      {rows.map((row, index) => {
        const ref = (el: HTMLElement | null) => {
          nodes.current[index] = el;
        };

        const handle = (icon: IconHandle | null) => {
          icons.current[index] = icon;
        };

        // Moving onto an unlinked row has to clear the block, not leave it
        // parked on the row the pointer came from.
        if (!row.href) {
          return (
            <div
              key={row.id}
              ref={ref}
              className={row.className ?? GRID_ROW}
              onMouseEnter={leave}
            >
              {row.cells}
            </div>
          );
        }

        const internal = isInternal(row.href);

        const content = (
          <>
            {row.cells}
            {trailingIcon ? (
              <RowIcon active={hovered === index}>
                {internal ? (
                  <ArrowRightIcon ref={handle} size={18} />
                ) : (
                  <ExternalLinkIcon ref={handle} size={18} />
                )}
              </RowIcon>
            ) : null}
          </>
        );

        const hooks = {
          'data-cuelume-hover': 'press',
          className: row.className ?? GRID_ROW,
          onMouseEnter: () => enter(index),
          onFocus: () => enter(index),
          onBlur: leave,
        };

        return internal ? (
          <Link key={row.id} ref={ref} href={row.href} {...hooks}>
            {content}
          </Link>
        ) : (
          <a
            key={row.id}
            ref={ref}
            href={row.href}
            target="_blank"
            rel="noopener noreferrer"
            {...hooks}
          >
            {content}
          </a>
        );
      })}
    </div>
  );
}

function RowIcon({
  active,
  children,
}: {
  active: boolean;
  children: ReactNode;
}) {
  return (
    // Outside the row's grid so it never reflows the columns, and only from md
    // up: the block already bleeds 1rem past the row, which at sm leaves 24px
    // of page beside it — too little to clear an 18px icon without it touching
    // the viewport edge.
    <span className="pointer-events-none absolute left-full top-1/2 hidden -translate-y-1/2 text-neutral-400 dark:text-neutral-500 md:block">
      <motion.span
        className="block"
        initial={false}
        animate={{ opacity: active ? 1 : 0, x: active ? 26 : 16 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        {children}
      </motion.span>
    </span>
  );
}
