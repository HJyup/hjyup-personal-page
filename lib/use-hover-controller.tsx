'use client';

import { useCallback } from 'react';

import { useHoverCenter } from '@/lib/use-hover-center';
import { useWidgetMeasure } from '@/lib/use-widget-measure';
import type { WidgetId } from '@/types/widgets';

const DEFAULT_BOUNDS = {
  width: 0,
  height: 0,
  left: 0,
  top: 0,
  x: 0,
  y: 0,
  right: 0,
  bottom: 0,
};

export function useHoverController(opts?: {
  initial: WidgetId;
  delay: number;
}) {
  const { refs, bounds } = useWidgetMeasure();
  const { offsetX, offsetY, hoveredWidget, onHover } = useHoverCenter<WidgetId>(
    {
      containerBounds: bounds.container,
      initialWidget: opts?.initial,
      delay: opts?.delay,
    },
  );

  const getBounds = useCallback(
    (id: WidgetId) => bounds[id] ?? DEFAULT_BOUNDS,
    [bounds],
  );

  const hover = useCallback(
    (id: WidgetId) => () =>
      onHover({ widgetId: id, widgetBounds: getBounds(id) }),
    [getBounds, onHover],
  );

  const motion = {
    animate: { x: offsetX, y: offsetY },
    transition: { type: 'spring', stiffness: 300, damping: 30, mass: 0.8 },
  };

  return { refs, hover, hoveredWidget, motion, getBounds };
}
