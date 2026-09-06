import { PixelSvg, toRect, toRuns } from '@/components/background/pixel-sprite';

/**
 * The cat is a solid silhouette and the eyes are painted back on in the page
 * colour, rather than left as holes in the grid. That is what lets it glance
 * around: the eye pair is its own group, so it can slide a pixel left or right
 * without the head being redrawn for every direction. Painting them in the
 * background colour also means they invert with the theme for free — and
 * hiding them for a moment is a blink, since the silhouette underneath is
 * already a closed-eyed face.
 *
 * The tail tip is drawn with `|` (the cat palette matches it to `#`) purely so it can be picked
 * out as its own group: nudged one pixel right it lines up over the rest of the
 * tail, so the curled tail straightens and curls back — a flick.
 */
const EYE_FILL = 'fill-[hsl(var(--background))]';
const TAIL_TIP = '|';

const CAT = [
  '..#....#...',
  '.###..###..',
  '.########..',
  '.########..',
  '.########..',
  '..######...',
  '..######.|.',
  '.########.#',
  '.########.#',
  '.#########.',
];

/** Head spans cols 1–8, so a one-pixel glance either way stays on the face. */
const EYES = [3, 6];
const EYE_ROW = 3;

export function PixelCat() {
  const runs = toRuns(CAT);
  const body = runs.filter(run => run.glyph !== TAIL_TIP);
  const tailTip = runs.filter(run => run.glyph === TAIL_TIP);

  return (
    <PixelSvg rows={CAT} tone="cat">
      <g>{body.map(toRect)}</g>
      <g className="animate-pixel-flick" style={{ animationDuration: '11s' }}>
        {tailTip.map(toRect)}
      </g>
      {/* Outer group blinks, inner group glances (the treeline's sway: centre,
          right, centre, left). Different periods, so the two rarely line up. */}
      <g className="animate-pixel-blink" style={{ animationDuration: '6.5s' }}>
        <g className="animate-pixel-sway" style={{ animationDuration: '5s' }}>
          {EYES.map(x => (
            <rect
              key={x}
              x={x}
              y={EYE_ROW}
              width={1}
              height={1}
              className={EYE_FILL}
            />
          ))}
        </g>
      </g>
    </PixelSvg>
  );
}
