import type { CSSProperties } from 'react';

import {
  PixelSvg,
  type SceneTone,
  toRect,
  toRuns,
} from '@/components/pixel-sprite';

/**
 * Glyphs pick a shade and, for a few, a behaviour: `#` is the still, bright
 * stuff (moon, sun disc, near stars), `-`/`*` twinkle as one, and `|` is a sun
 * ray — rays shimmer in two alternating sets so the sun never blinks whole.
 * Motion that carries a whole sprite (cloud drift, the shooting star) lives on
 * the wrapper instead, so the art inside is never sliced by its own canvas.
 * Shades come from the shared map, so the sky is cut from the same cloth as
 * the treeline.
 */
const TWINKLES = new Set(['-', '*']);
const RAYS = new Set(['|']);

const SPRITES = {
  moon: [
    '...####....',
    '..###......',
    '.###.......',
    '.###.......',
    '###........',
    '###........',
    '###........',
    '.###.......',
    '.###.......',
    '..###......',
    '...####....',
  ],
  sun: [
    '.....|.....',
    '..|.....|..',
    '....###....',
    '...#####...',
    '..#######..',
    '|.#######.|',
    '..#######..',
    '...#####...',
    '....###....',
    '..|.....|..',
    '.....|.....',
  ],
  cloud: [
    '...++....++..',
    '..++++..++++.',
    '.++++++++++++',
    '+++++++++++++',
    '.+++++++++++.',
  ],
  cloudSmall: ['..++..++.', '.+++++++.', '+++++++++', '.+++++++.'],
  /** Same shape as the small cloud, a tier fainter: a wisp for the night sky. */
  cloudNight: ['..oo..oo.', '.ooooooo.', 'ooooooooo', '.ooooooo.'],
  starBright: ['.#.', '###', '.#.'],
  star: ['.-.', '---', '.-.'],
  spark: ['#'],
  speck: ['*'],
  /** Head bottom-left, tail trailing up and right — it flies down and left. */
  meteor: ['..*', '.-.', '#..'],
} satisfies Record<string, string[]>;

type SpriteName = keyof typeof SPRITES;

const TONES: Record<SpriteName, SceneTone> = {
  moon: 'moon',
  sun: 'sun',
  cloud: 'cloud',
  cloudSmall: 'cloud-small',
  cloudNight: 'cloud-night',
  starBright: 'stars',
  star: 'stars',
  spark: 'stars',
  speck: 'stars',
  meteor: 'stars',
};

/** `x` is a percentage of the gutter, `y` of the band — both keep their shape. */
type FixedItem = { kind?: 'fixed'; x: number; y: number; sprite: SpriteName };

/**
 * A drifter crosses its gutter right to left, from fully hidden to fully
 * hidden, so the loop point is never on screen. `period` is one crossing in
 * seconds; `offset` is how far through it the cloud already is on first paint,
 * so the sky is never empty at load and no two clouds set off together.
 */
type DriftItem = {
  kind: 'drift';
  y: number;
  sprite: SpriteName;
  period: number;
  offset: number;
};

/**
 * A meteor waits, then streaks once. `period` is the wait between streaks and
 * `offset` staggers the first one, so it does not fire the moment the page
 * loads.
 */
type MeteorItem = {
  kind: 'meteor';
  x: number;
  y: number;
  period: number;
  offset: number;
};

type SkyItem = FixedItem | DriftItem | MeteorItem;

const NIGHT_LEFT: SkyItem[] = [
  { x: 30, y: 24, sprite: 'starBright' },
  { x: 66, y: 46, sprite: 'star' },
  { x: 14, y: 64, sprite: 'speck' },
  { x: 80, y: 18, sprite: 'speck' },
  { x: 46, y: 78, sprite: 'star' },
  { x: 90, y: 62, sprite: 'spark' },
  { kind: 'drift', y: 40, sprite: 'cloudNight', period: 260, offset: 0.62 },
  { kind: 'meteor', x: 72, y: 26, period: 43, offset: 0.55 },
];

const NIGHT_RIGHT: SkyItem[] = [
  { x: 46, y: 30, sprite: 'moon' },
  { x: 14, y: 58, sprite: 'starBright' },
  { x: 78, y: 72, sprite: 'star' },
  { x: 26, y: 18, sprite: 'speck' },
  { x: 88, y: 38, sprite: 'spark' },
  { x: 58, y: 84, sprite: 'speck' },
  { kind: 'drift', y: 34, sprite: 'cloudNight', period: 300, offset: 0.18 },
];

const DAY_LEFT: SkyItem[] = [
  { kind: 'drift', y: 34, sprite: 'cloud', period: 170, offset: 0.35 },
  { kind: 'drift', y: 70, sprite: 'cloudSmall', period: 130, offset: 0.78 },
];

const DAY_RIGHT: SkyItem[] = [
  { x: 48, y: 28, sprite: 'sun' },
  { kind: 'drift', y: 74, sprite: 'cloud', period: 190, offset: 0.6 },
  { kind: 'drift', y: 50, sprite: 'cloudSmall', period: 150, offset: 0.12 },
];

function Sprite({
  rows,
  index,
  tone,
}: {
  rows: string[];
  index: number;
  tone: SceneTone;
}) {
  const runs = toRuns(rows);
  const still = runs.filter(
    run => !TWINKLES.has(run.glyph) && !RAYS.has(run.glyph),
  );
  const twinkling = runs.filter(run => TWINKLES.has(run.glyph));
  const rays = runs.filter(run => RAYS.has(run.glyph));
  const duration = 3.6 + (index % 5) * 0.9;
  const delay = -(index % 7) * 0.7;

  return (
    <PixelSvg rows={rows} tone={tone}>
      <g>{still.map(toRect)}</g>
      {twinkling.length > 0 && (
        <g
          className="animate-pixel-twinkle"
          style={{
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
          }}
        >
          {twinkling.map(toRect)}
        </g>
      )}
      {/* Rays run in two sets half a period apart, so while one set dims the
          other is at full strength and the sun reads as shimmering. */}
      {[0, 1].map(phase => {
        const set = rays.filter((_, i) => i % 2 === phase);
        if (set.length === 0) return null;
        return (
          <g
            key={phase}
            className="animate-pixel-twinkle"
            style={{
              animationDuration: `${duration}s`,
              animationDelay: `${delay - (phase * duration) / 2}s`,
            }}
          >
            {set.map(toRect)}
          </g>
        );
      })}
    </PixelSvg>
  );
}

function Fixed({ item, index }: { item: FixedItem; index: number }) {
  return (
    <div
      className="absolute"
      style={{
        left: `${item.x}%`,
        top: `${item.y}%`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Sprite
        rows={SPRITES[item.sprite]}
        index={index}
        tone={TONES[item.sprite]}
      />
    </div>
  );
}

function Drifter({ item }: { item: DriftItem }) {
  const rows = SPRITES[item.sprite];

  return (
    // The track spans the gutter and slides left by its own width plus one
    // cloud, carrying the cloud from just past the right edge to just past the
    // left. Percentages resolve against the track, so no gutter width is ever
    // hard-coded.
    <div
      className="animate-pixel-drift absolute inset-y-0 left-0 w-full"
      style={
        {
          '--sprite-width': `calc(${rows[0].length} * var(--pixel))`,
          animationDuration: `${item.period}s`,
          animationDelay: `-${item.period * item.offset}s`,
        } as CSSProperties
      }
    >
      <div
        className="absolute left-full"
        style={{ top: `${item.y}%`, transform: 'translateY(-50%)' }}
      >
        <PixelSvg rows={rows} tone={TONES[item.sprite]}>
          {toRuns(rows).map(toRect)}
        </PixelSvg>
      </div>
    </div>
  );
}

function Meteor({ item }: { item: MeteorItem }) {
  const rows = SPRITES.meteor;

  return (
    <div
      className="animate-pixel-shoot absolute opacity-0"
      style={{
        left: `${item.x}%`,
        top: `${item.y}%`,
        animationDuration: `${item.period}s`,
        animationDelay: `-${item.period * item.offset}s`,
      }}
    >
      <PixelSvg rows={rows} tone="stars">
        {toRuns(rows).map(toRect)}
      </PixelSvg>
    </div>
  );
}

function Constellation({
  items,
  visibility,
}: {
  items: SkyItem[];
  visibility: string;
}) {
  return (
    <>
      {items.map((item, index) => {
        const key = `${item.kind ?? 'fixed'}-${index}`;

        return (
          <div key={key} className={`absolute inset-0 ${visibility}`}>
            {item.kind === 'drift' ? (
              <Drifter item={item} />
            ) : item.kind === 'meteor' ? (
              <Meteor item={item} />
            ) : (
              <Fixed item={item} index={index} />
            )}
          </div>
        );
      })}
    </>
  );
}

export function SkyLine() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 hidden h-[clamp(150px,20vh,260px)] select-none [--pixel:4px] lg:block"
    >
      {/* Both gutters stop short of a 2xl-wide lane down the middle, so nothing
          ever lands behind the text column — and clip, so nothing drifts in. */}
      <div className="absolute inset-y-0 left-0 right-[calc(50%_+_336px)] overflow-hidden">
        <Constellation items={NIGHT_LEFT} visibility="hidden dark:block" />
        <Constellation items={DAY_LEFT} visibility="block dark:hidden" />
      </div>
      <div className="absolute inset-y-0 left-[calc(50%_+_336px)] right-0 overflow-hidden">
        <Constellation items={NIGHT_RIGHT} visibility="hidden dark:block" />
        <Constellation items={DAY_RIGHT} visibility="block dark:hidden" />
      </div>
    </div>
  );
}
