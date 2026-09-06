'use client';

import { type ReactNode, useCallback, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from 'motion/react';

import { HoverSounds } from '@/components/hover-sounds';
import { anchorFor, type NowEntry, NowFeed } from '@/components/now-feed';
import { NowRuler } from '@/components/now-ruler';
import { NowToggle } from '@/components/now-toggle';
import { ProfileLinks } from '@/components/profile-links';

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

type View = 'home' | 'now';

type HomeViewProps = {
  /** The page proper — Work, Projects, Writing — rendered on the server. */
  children: ReactNode;
  entries: NowEntry[];
};

/**
 * Owns the one piece of state on the page: whether it is showing the page or
 * the Now feed. The two never overlap — the outgoing block lifts away first,
 * then the incoming one settles in, so the column never holds both at once.
 * Leaving is quicker than arriving, as it should be: the reader asked for
 * something else, so what they left should get out of the way.
 */
export function HomeView({ children, entries }: HomeViewProps) {
  const [view, setView] = useState<View>('home');
  const [activeId, setActiveId] = useState<string | null>(null);
  const reduce = useReducedMotion();

  const now = view === 'now';
  const lift = reduce ? 0 : 12;

  const block: Variants = {
    hidden: { opacity: 0, transform: `translateY(${lift}px)` },
    show: {
      opacity: 1,
      transform: 'translateY(0px)',
      transition: {
        duration: 0.3,
        ease: EASE_OUT,
        when: 'beforeChildren',
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      transform: `translateY(${-lift}px)`,
      transition: { duration: 0.18, ease: EASE_OUT },
    },
  };

  const toggle = () => {
    if (now) {
      setView('home');
    } else {
      setActiveId(entries[0]?.id ?? null);
      setView('now');
    }
  };

  const jump = (entry: NowEntry) => {
    setActiveId(entry.id);
    document.getElementById(anchorFor(entry))?.scrollIntoView({
      behavior: reduce ? 'auto' : 'smooth',
      block: 'start',
    });
  };

  const onActive = useCallback((id: string) => setActiveId(id), []);

  return (
    <>
      <nav
        aria-label="Personal links"
        className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-sm sm:mt-6 sm:gap-x-8"
      >
        <NowToggle pressed={now} onToggle={toggle} />
        <ProfileLinks />
        <HoverSounds />
      </nav>

      <AnimatePresence mode="wait" initial={false}>
        {now ? (
          <motion.div
            key="now"
            variants={block}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <NowFeed entries={entries} onActive={onActive} />
          </motion.div>
        ) : (
          <motion.div
            key="home"
            variants={block}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <NowRuler
        entries={entries}
        visible={now}
        activeId={activeId}
        onSelect={jump}
      />
    </>
  );
}
