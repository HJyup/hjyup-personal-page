import Link from 'next/link';

import { PixelSvg, toRuns } from '@/components/pixel-sprite';
import { SkyLine } from '@/components/sky-line';
import { TreeLine } from '@/components/tree-line';
import { ArrowRightIcon } from '@/components/ui/arrow-right';

/**
 * The number is drawn on the same pixel grid as the trees and the NOW button,
 * seven rows tall with two columns of air between digits, and cast one pixel
 * down and right as a flat shadow. Nothing here moves: the sky and the wood
 * carry the motion, the number just sits in the clearing.
 */
const DIGITS = [
  '#...#..###..#...#',
  '#...#.#...#.#...#',
  '#...#.#...#.#...#',
  '#####.#...#.#####',
  '....#.#...#.....#',
  '....#.#...#.....#',
  '....#..###......#',
];

const RUNS = toRuns(DIGITS);

/** One extra row and column for the shadow to fall into. */
const CANVAS = Array.from({ length: DIGITS.length + 1 }, () =>
  '.'.repeat(DIGITS[0].length + 1),
);

export default function NotFound() {
  return (
    <div className="relative flex min-h-svh flex-col">
      <SkyLine />

      <main className="flex flex-1 flex-col items-center justify-center px-6 py-10 text-center">
        <h1 className="sr-only">404: page not found</h1>

        <div
          aria-hidden="true"
          className="select-none [--pixel:6px] sm:[--pixel:8px]"
        >
          <PixelSvg rows={CANVAS}>
            {RUNS.map(run => (
              <rect
                key={`shadow-${run.x}-${run.y}`}
                x={run.x + 1}
                y={run.y + 1}
                width={run.width}
                height={1}
                className="fill-neutral-200 dark:fill-neutral-800"
              />
            ))}
            {RUNS.map(run => (
              <rect
                key={`${run.x}-${run.y}`}
                x={run.x}
                y={run.y}
                width={run.width}
                height={1}
                className="fill-neutral-500 dark:fill-neutral-300"
              />
            ))}
          </PixelSvg>
        </div>

        <p className="mt-10 text-sm text-neutral-600 dark:text-neutral-400">
          This page wandered off into the trees.
        </p>

        <Link
          href="/"
          className="mt-4 inline-flex items-center gap-1.5 text-sm text-neutral-500 transition-colors hover:text-neutral-800 dark:text-neutral-500 dark:hover:text-neutral-200"
        >
          Take me home
          <ArrowRightIcon size={16} />
        </Link>
      </main>

      <TreeLine />
    </div>
  );
}
