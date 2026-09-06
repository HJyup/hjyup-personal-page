'use client';

import { useEffect, useRef } from 'react';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import Image from 'next/image';

import { AutoplayVideo } from '@/components/autoplay-video';

type NowMedia = {
  src: string;
  /** Describes the still, or the clip, for anyone who cannot see it. */
  alt: string;
  /** Clips play muted on a loop, with no controls and no sound. */
  video?: boolean;
};

export type NowEntry = {
  /** Stable identity, also the scroll target (`#now-<id>`). */
  id: string;
  /** The heading of the entry — a moment, not a title. */
  date: string;
  subtitle: string;
  description: string;
  photos?: NowMedia[];
};

export const anchorFor = (entry: NowEntry) => `now-${entry.id}`;

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

type NowFeedProps = {
  entries: NowEntry[];
  /** Fires with the entry sitting in the reading band as the page scrolls. */
  onActive: (id: string) => void;
};

export function NowFeed({ entries, onActive }: NowFeedProps) {
  const reduce = useReducedMotion();
  const list = useRef<HTMLDivElement | null>(null);

  // Entries are staggered in beneath the parent's own fade, which the
  // orchestrator drives through these same variant names. Reduced motion
  // keeps the fade and drops the lift.
  const item: Variants = {
    hidden: {
      opacity: 0,
      transform: `translateY(${reduce ? 0 : 12}px)`,
    },
    show: {
      opacity: 1,
      transform: 'translateY(0px)',
      transition: { duration: 0.3, ease: EASE_OUT },
    },
  };

  useEffect(() => {
    const root = list.current;
    if (!root) return;

    // A thin band a third of the way down the viewport; whichever entry
    // crosses it is the one being read. Nothing in the band means the last
    // answer stands, so the ruler never blanks between entries. The list's
    // trailing padding is what lets the final entry reach the band at all —
    // without it the page runs out of scroll first and the last bar never
    // lights.
    const observer = new IntersectionObserver(
      hits => {
        const first = hits
          .filter(hit => hit.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          )[0];
        if (first) onActive(first.target.id.replace(/^now-/, ''));
      },
      { rootMargin: '-30% 0px -62% 0px' },
    );

    root.querySelectorAll('article').forEach(node => observer.observe(node));

    // The last entry sits too low to ever cross the band — the page runs out
    // of scroll first. Rather than padding the feed out with empty space until
    // it can, reaching the bottom simply counts as having read it.
    const last = entries[entries.length - 1]?.id;
    const onScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (bottom && last) onActive(last);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, [entries, onActive]);

  const toTop = () =>
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });

  return (
    <>
      <div ref={list} className="mt-12 space-y-20 sm:mt-16 sm:space-y-28">
        {entries.map(entry => (
          <motion.article
            key={entry.id}
            id={anchorFor(entry)}
            variants={item}
            className="scroll-mt-24"
          >
            <h2 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              {entry.date}
            </h2>
            <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-500">
              {entry.subtitle}
            </p>
            <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
              {entry.description}
            </p>
            {entry.photos && entry.photos.length > 0 ? (
              <Photos photos={entry.photos} />
            ) : null}
          </motion.article>
        ))}
      </div>

      {/* Sits outside the observed list, so it is an ending rather than an
          entry the ruler can point at. */}
      <motion.div variants={item} className="mt-16 pb-20 sm:mt-20 sm:pb-24">
        <p className="text-sm text-neutral-500 dark:text-neutral-500">
          That is everything. I have not written that much yet, unfortunately
          <span aria-hidden="true"> :)</span>
        </p>
        <button
          type="button"
          onClick={toTop}
          className="mt-3 inline-flex items-center gap-1.5 rounded-sm text-sm text-neutral-500 transition-colors duration-150 hover:text-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus-visible:ring-neutral-600"
        >
          <span aria-hidden="true">&uarr;</span>
          Back to top
        </button>
      </motion.div>
    </>
  );
}

function Photos({ photos }: { photos: NowMedia[] }) {
  const reduce = useReducedMotion();
  const [first] = photos;

  // A lone photo has nothing to scroll past, so it keeps the column width.
  if (photos.length === 1 && first) {
    return (
      <div className="relative mt-4 aspect-[16/9] overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-900">
        <Media
          media={first}
          reduce={reduce}
          sizes="(min-width: 640px) 576px, 100vw"
        />
      </div>
    );
  }

  // The strip starts on the text column and runs to the edge of the window, so
  // what is off-screen slides away rather than stopping at a boundary.
  return (
    <div
      tabIndex={0}
      role="group"
      aria-label="Photos"
      className="bleed-r scrollbar-hide mt-4 flex snap-x gap-2 overflow-x-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-4 focus-visible:ring-offset-background dark:focus-visible:ring-neutral-600"
    >
      {photos.map(photo => (
        <div
          key={photo.src}
          className="relative aspect-[3/4] w-[260px] shrink-0 snap-start overflow-hidden rounded-lg bg-neutral-100 sm:w-[288px] dark:bg-neutral-900"
        >
          <Media media={photo} reduce={reduce} sizes="288px" />
        </div>
      ))}
    </div>
  );
}

function Media({
  media,
  reduce,
  sizes,
}: {
  media: NowMedia;
  reduce: boolean | null;
  sizes: string;
}) {
  if (media.video) {
    // Silent, looping, and decorative. Reduced motion gets controls instead of
    // a clip that starts moving on its own.
    return (
      <AutoplayVideo
        label={media.alt}
        controls={Boolean(reduce)}
        className="h-full w-full object-cover"
      >
        {/* Declared rather than left to the extension: a .MOV holding H.264 is
            served as video/quicktime, which some browsers refuse outright. */}
        <source
          src={media.src}
          type={media.src.endsWith('.webm') ? 'video/webm' : 'video/mp4'}
        />
      </AutoplayVideo>
    );
  }

  return (
    <Image
      src={media.src}
      alt={media.alt}
      draggable={false}
      fill
      sizes={sizes}
      className="object-cover"
      unoptimized={media.src.endsWith('.svg')}
    />
  );
}
