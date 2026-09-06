import type { ReactNode } from 'react';

type Shade = 'strong' | 'medium' | 'faint' | 'trunk';

export type SceneTone =
  | 'cat'
  | 'tree-far'
  | 'sun'
  | 'moon'
  | 'stars'
  | 'cloud'
  | 'cloud-small'
  | 'cloud-night';

/** Each sprite can tune these shared shades through its local scene palette. */
const SHADES: Record<Shade, string> = {
  strong: 'fill-scene-strong',
  medium: 'fill-scene-medium',
  faint: 'fill-scene-faint',
  trunk: 'fill-scene-trunk',
};

/**
 * Each character in a sprite grid is one square pixel, and `.` is a hole the
 * background shows through. `#` reads as near, `-` and `+` as mid, and
 * `*` and `o` as far off. `|` gives trunks and sun rays a separate shade.
 */
const GLYPHS: Record<string, Shade> = {
  '#': 'strong',
  '|': 'trunk',
  '+': 'medium',
  '-': 'medium',
  '*': 'faint',
  o: 'faint',
};

export type Run = { glyph: string; x: number; y: number; width: number };

/** Collapses each row into horizontal runs so a canopy is a handful of rects. */
export function toRuns(rows: string[]): Run[] {
  const runs: Run[] = [];

  rows.forEach((row, y) => {
    let x = 0;

    while (x < row.length) {
      const glyph = row[x];

      if (glyph === '.') {
        x += 1;
        continue;
      }

      let width = 1;
      while (row[x + width] === glyph) width += 1;

      runs.push({ glyph, x, y, width });
      x += width;
    }
  });

  return runs;
}

export function toRect({ glyph, x, y, width }: Run) {
  return (
    <rect
      key={`${x}-${y}`}
      x={x}
      y={y}
      width={width}
      height={1}
      className={SHADES[GLYPHS[glyph]]}
    />
  );
}

/** Sizes the canvas in whole pixels, so the art never lands on a half pixel. */
function spriteStyle(rows: string[]) {
  return {
    width: `calc(${rows[0].length} * var(--pixel))`,
    height: `calc(${rows.length} * var(--pixel))`,
  };
}

/**
 * The canvas for one sprite. One grid unit is one pixel, so a CSS
 * `translateX(1px)` on a group inside moves it exactly one pixel of art.
 * Overflow stays visible on purpose: a swaying canopy or a glancing eye that
 * crosses the edge of its grid must not be sliced off, or the sprite looks like
 * it is changing shape rather than moving.
 */
export function PixelSvg({
  rows,
  children,
  tone,
}: {
  rows: string[];
  children: ReactNode;
  tone?: SceneTone;
}) {
  return (
    <svg
      viewBox={`0 0 ${rows[0].length} ${rows.length}`}
      shapeRendering="crispEdges"
      data-scene={tone}
      className="block overflow-visible"
      style={spriteStyle(rows)}
    >
      {children}
    </svg>
  );
}
