import { PixelCat } from '@/components/background/pixel-cat';
import {
  PixelSvg,
  type SceneTone,
  toRect,
  toRuns,
} from '@/components/background/pixel-sprite';

/** A plant moves as one connected silhouette; rocks and pebbles stay still. */
const SWAYS = new Set(['#', '*']);

// Trees use one shade from canopy to roots; depth comes from each tree’s tone.
const SPRITES = {
  bareTree: [
    '.#.......#.',
    '.#.#...#.#.',
    '.#.#...#.#.',
    '.#.#.#.#.#.',
    '.###.#.###.',
    '...#.#.#...',
    '...#####...',
    '.....#.....',
    '.....#.....',
    '.....#.....',
    '.....#.....',
    '.....#.....',
  ],
  bareSapling: [
    '.#...#.',
    '.#.#.#.',
    '.#.#.#.',
    '.#####.',
    '...#...',
    '...#...',
    '...#...',
    '...#...',
  ],
  leafyTree: [
    '...#####...',
    '..#######..',
    '.#########.',
    '###########',
    '###########',
    '.#########.',
    '..#######..',
    '...#####...',
    '.....#.....',
    '.....#.....',
    '.....#.....',
    '.....#.....',
    '....###....',
  ],
  leafySmall: [
    '..###..',
    '.#####.',
    '#######',
    '#######',
    '.#####.',
    '..###..',
    '...#...',
    '...#...',
    '...#...',
  ],
  bushyTree: [
    '....#####....',
    '..#########..',
    '.###########.',
    '#############',
    '#############',
    '#############',
    '.###########.',
    '..#########..',
    '....#####....',
    '......#......',
    '......#......',
    '......#......',
    '......#......',
    '.....###.....',
  ],
  sprout: ['*.*', '.*.', '.*.', '.*.'],
  sproutTall: ['*...*', '.*.*.', '..*..', '..*..', '..*..', '..*..'],
  rock: ['.--.', '----', '----', '.--.'],
  rockLarge: ['..-..', '.---.', '-----', '.---.', '..-..'],
  pebble: ['.o.', 'ooo', '.o.'],
} satisfies Record<string, string[]>;

type SpriteName = keyof typeof SPRITES;

/**
 * `at` is a percentage of the page width, so the treeline keeps its shape at
 * any size. `from` is the narrowest breakpoint with room for that plant — on
 * small screens the wood thins out instead of piling up on itself.
 */
const SCENE: { at: number; sprite: SpriteName; from?: 'sm' | 'lg' }[] = [
  { at: 15.0, sprite: 'bushyTree' },
  { at: 3.3, sprite: 'bareTree' },
  { at: 5.4, sprite: 'rock', from: 'lg' },
  { at: 10.4, sprite: 'rockLarge', from: 'lg' },
  { at: 21, sprite: 'sprout' },
  { at: 24.5, sprite: 'pebble', from: 'lg' },
  { at: 26.4, sprite: 'bareTree', from: 'lg' },
  { at: 36.8, sprite: 'leafyTree' },
  { at: 42.8, sprite: 'sprout', from: 'sm' },
  { at: 44.5, sprite: 'sproutTall', from: 'lg' },
  { at: 46.7, sprite: 'pebble', from: 'lg' },
  { at: 62.5, sprite: 'leafySmall' },
  { at: 70.3, sprite: 'sprout' },
  { at: 80.7, sprite: 'pebble', from: 'lg' },
  { at: 82.8, sprite: 'bareSapling', from: 'sm' },
  { at: 86.4, sprite: 'pebble', from: 'lg' },
  { at: 90.8, sprite: 'bushyTree' },
  { at: 94.9, sprite: 'rock', from: 'lg' },
];

const VISIBILITY = {
  sm: 'hidden sm:block',
  lg: 'hidden lg:block',
} as const;

function Sprite({
  rows,
  index,
  tone,
}: {
  rows: string[];
  index: number;
  tone?: SceneTone;
}) {
  const runs = toRuns(rows);
  const swaying = runs.filter(run => SWAYS.has(run.glyph));
  const still = runs.filter(run => !SWAYS.has(run.glyph));

  // A slow, shallow bend keeps the canopy attached to its trunk and the
  // roots planted. Each tree has its own period and starts partway through.
  const duration = 9 + (index % 5) * 1.4;
  const delay = -(index % 7) * 1.7;

  return (
    <PixelSvg rows={rows} tone={tone}>
      <g>{still.map(toRect)}</g>
      {swaying.length > 0 && (
        <g
          className="animate-tree-sway"
          style={{
            transformBox: 'view-box',
            transformOrigin: '50% 100%',
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
          }}
        >
          {swaying.map(toRect)}
        </g>
      )}
    </PixelSvg>
  );
}

export function TreeLine() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative h-24 w-full select-none overflow-hidden [--ground:0.75rem] [--pixel:3px] sm:h-28 sm:[--ground:1rem] sm:[--pixel:4px]"
    >
      <div className="absolute inset-x-0 bottom-[var(--ground)] h-px bg-scene-ground" />
      {/* The one inhabitant of the scene, in the clearing between the copses. */}
      <div
        className="absolute bottom-[calc(var(--ground)+1px)]"
        style={{ left: '53%', transform: 'translateX(-50%)' }}
      >
        <PixelCat />
      </div>

      {SCENE.map(({ at, sprite, from }, index) => (
        <div
          key={`${sprite}-${at}`}
          className={`absolute bottom-[calc(var(--ground)+1px)] ${
            from ? VISIBILITY[from] : 'block'
          }`}
          style={{ left: `${at}%`, transform: 'translateX(-50%)' }}
        >
          <Sprite
            rows={SPRITES[sprite]}
            index={index}
            tone={
              sprite === 'bareTree' ||
              sprite === 'bareSapling' ||
              sprite === 'leafySmall'
                ? 'tree-far'
                : undefined
            }
          />
        </div>
      ))}
    </div>
  );
}
