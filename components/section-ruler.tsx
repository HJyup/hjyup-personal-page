'use client';

import {
  type FocusEvent,
  type MouseEvent,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import {
  AnimatePresence,
  motion,
  type MotionValue,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'motion/react';

const EASE_OUT = [0.23, 1, 0.32, 1] as const;
const TRAVEL = { type: 'spring', bounce: 0.18, duration: 0.45 } as const;
const SNAP = { duration: 0 } as const;

/**
 * The rail is a fixed grid: every bar is `BAR` tall and the centres sit
 * `PITCH` apart, so a bar's position is arithmetic rather than measurement.
 * That is what lets the stretch be driven straight off the pointer.
 */
const BAR = 2;
const PITCH = 14;
/** At rest a bar is `REST` long; the one under the pointer grows past twice that. */
const REST = 14;
const GAIN = 1.5;
/** Bars within this many pitches of the pointer grow, less the further off. */
const REACH = 1.7;

const centreOf = (position: number) => position * PITCH + BAR / 2;

export type RulerEntry = {
  id: string;
  label: string;
  detail?: string;
};

type SectionRulerProps<T extends RulerEntry> = {
  entries: T[];
  visible: boolean;
  activeId: string | null;
  onSelect: (entry: T) => void;
  label: string;
};

/**
 * A rail of short bars down the left gutter, one per entry, oldest at the
 * bottom; the entry being read is inked. Under the pointer the bars swell
 * outward — the nearest most, its neighbours less — and a card for the nearest
 * entry sits beside them. Anywhere on the rail counts: hovering a gap picks the
 * closest entry, and clicking scrolls to it.
 */
export function SectionRuler<T extends RulerEntry>({
  entries,
  visible,
  activeId,
  onSelect,
  label,
}: SectionRulerProps<T>) {
  const reduce = useReducedMotion();
  // Pointer height along the rail and whether it is on the rail at all. Both
  // are motion values, so a moving mouse never re-renders the component: each
  // bar derives its own stretch from them.
  const pointer = useMotionValue(0);
  const engaged = useMotionValue(0);

  const [hovered, setHovered] = useState<number | null>(null);
  const [cardY, setCardY] = useState(0);

  const nav = useRef<HTMLElement | null>(null);
  const rail = useRef<HTMLUListElement | null>(null);

  /** Anywhere on the rail belongs to a post: the pointer picks the nearest. */
  const nearestEntry = (y: number) =>
    Math.min(entries.length - 1, Math.max(0, Math.round(y / PITCH)));

  const railY = (clientY: number) => {
    const box = rail.current?.getBoundingClientRect();
    return box ? clientY - box.top - 12 : 0;
  };

  const move = (event: MouseEvent) => {
    const y = railY(event.clientY);
    pointer.set(y);
    engaged.set(1);
    const next = nearestEntry(y);
    if (next !== hovered) setHovered(next);
  };

  const leave = () => {
    engaged.set(0);
    setHovered(null);
  };

  const focus = (event: FocusEvent<HTMLButtonElement>, index: number) => {
    pointer.set(railY(event.currentTarget.getBoundingClientRect().top + 1));
    engaged.set(1);
    setHovered(index);
  };

  // The card is one element that travels between bars, as the hover block on
  // the lists does: a fresh card per bar would replay its entrance on every
  // move. It jumps into place while hidden and springs once it is shown.
  useLayoutEffect(() => {
    if (hovered === null) return;
    setCardY(centreOf(hovered));
  }, [hovered]);

  const showing = hovered !== null;
  const wasShowing = useRef(false);
  const reposition = wasShowing.current ? TRAVEL : SNAP;
  useEffect(() => {
    wasShowing.current = showing;
  }, [showing]);

  const hoveredEntry = hovered === null ? null : entries[hovered];

  return (
    <div className="pointer-events-none fixed inset-y-0 z-10 left-0 hidden w-24 lg:block xl:w-32">
      <AnimatePresence>
        {visible ? (
          <motion.nav
            ref={nav}
            aria-label={label}
            className="pointer-events-auto absolute left-8 top-1/2 xl:left-12"
            initial={{
              opacity: 0,
              transform: `translate(${reduce ? 0 : -8}px, -50%)`,
            }}
            animate={{
              opacity: 1,
              transform: 'translate(0px, -50%)',
              transition: { duration: 0.3, ease: EASE_OUT, delay: 0.15 },
            }}
            exit={{
              opacity: 0,
              transform: `translate(${reduce ? 0 : -8}px, -50%)`,
              transition: { duration: 0.15, ease: EASE_OUT },
            }}
          >
            {/* The rail bleeds a little above, below and to the right of the
                bars so the pointer does not have to land on a 2px line. */}
            <ul
              ref={rail}
              className="-my-3 flex w-16 flex-col py-3"
              style={{ gap: PITCH - BAR }}
              onMouseMove={move}
              onMouseLeave={leave}
              onClick={event =>
                onSelect(entries[nearestEntry(railY(event.clientY))])
              }
            >
              {entries.map((entry, index) => (
                <li key={entry.id}>
                  <button
                    type="button"
                    aria-label={entry.label}
                    aria-current={entry.id === activeId ? 'true' : undefined}
                    className="block rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:focus-visible:ring-neutral-600"
                    onFocus={event => focus(event, index)}
                    onBlur={leave}
                    onClick={event => {
                      // The rail's own click would pick by pointer height,
                      // which a keyboard press does not have.
                      event.stopPropagation();
                      onSelect(entry);
                    }}
                  >
                    <Bar
                      position={index}
                      pointer={pointer}
                      engaged={engaged}
                      inked={entry.id === activeId || hovered === index}
                      still={Boolean(reduce)}
                    />
                  </button>
                </li>
              ))}
            </ul>

            {/* Card: outer element travels, inner element fades and settles. */}
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute left-16 top-0 w-max max-w-[19rem]"
              initial={false}
              animate={{
                transform: `translateY(${cardY}px) translateY(-50%)`,
              }}
              transition={reposition}
            >
              <motion.div
                className="origin-left rounded-xl bg-white px-3.5 py-2.5 shadow-lg shadow-neutral-900/5 ring-1 ring-neutral-200 dark:bg-neutral-800 dark:shadow-black/40 dark:ring-neutral-700/60"
                initial={false}
                animate={{
                  opacity: showing ? 1 : 0,
                  transform: showing ? 'scale(1)' : 'scale(0.97)',
                }}
                transition={{ duration: 0.15, ease: EASE_OUT }}
              >
                {hoveredEntry ? (
                  <>
                    <p className="truncate text-sm font-semibold text-neutral-900 dark:text-neutral-50">
                      {hoveredEntry.label}
                    </p>
                    {hoveredEntry.detail ? (
                      <p className="truncate text-sm text-neutral-500 dark:text-neutral-400">
                        {hoveredEntry.detail}
                      </p>
                    ) : null}
                  </>
                ) : null}
              </motion.div>
            </motion.div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

type BarProps = {
  position: number;
  pointer: MotionValue<number>;
  engaged: MotionValue<number>;
  inked: boolean;
  /** Reduced motion: bars keep their colour change and skip the stretch. */
  still: boolean;
};

function Bar({ position, pointer, engaged, inked, still }: BarProps) {
  // How much this bar grows: full gain under the pointer, tapering to nothing
  // `REACH` pitches away, and scaled by whether the pointer is on the rail at
  // all so the whole rail relaxes together when it leaves.
  const target = useTransform([pointer, engaged], ([y, on]) => {
    if (still) return 1;
    const distance = Math.abs((y as number) - centreOf(position)) / PITCH;
    return 1 + GAIN * (on as number) * Math.max(0, 1 - distance / REACH);
  });
  const scaleX = useSpring(target, { stiffness: 420, damping: 32 });

  return (
    <motion.span
      className={`block origin-left rounded-full transition-colors duration-150 ${
        inked
          ? 'bg-neutral-900 dark:bg-neutral-100'
          : 'bg-neutral-300 dark:bg-neutral-700'
      }`}
      style={{ height: BAR, width: REST, scaleX }}
    />
  );
}
