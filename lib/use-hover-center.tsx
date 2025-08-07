import { useCallback, useEffect, useRef, useState } from 'react';
import type { RectReadOnly } from 'react-use-measure';

import { createTimeout } from './timeout';

type Nullable<T> = T | null;

const DEFAULT_BOUNDS: RectReadOnly = {
  width: 0,
  height: 0,
  left: 0,
  top: 0,
  x: 0,
  y: 0,
  right: 0,
  bottom: 0,
};

type UseHoverCenterArgs<TWidget extends string> = {
  containerBounds: RectReadOnly;
  initialWidget?: Nullable<TWidget>;
  delay?: number;
};

export type HoverArgs<TWidget extends string> = {
  widgetId: TWidget;
  widgetBounds?: RectReadOnly;
};

export function useHoverCenter<TWidget extends string = string>({
  containerBounds,
  initialWidget = null,
  delay = 300,
}: UseHoverCenterArgs<TWidget>) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [hoveredWidget, setHoveredWidget] =
    useState<Nullable<TWidget>>(initialWidget);

  const timerRef = useRef(createTimeout());

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => timerRef.current.clear();
  }, []);

  const calculateCenterOffset = useCallback(
    (widgetBounds: RectReadOnly) => {
      if (
        !widgetBounds.width ||
        !widgetBounds.height ||
        !containerBounds.width ||
        !containerBounds.height
      ) {
        return { x: 0, y: 0 };
      }

      const containerCenterX = containerBounds.width / 2;
      const containerCenterY = containerBounds.height / 2;

      const widgetCenterX =
        widgetBounds.left - containerBounds.left + widgetBounds.width / 2;
      const widgetCenterY =
        widgetBounds.top - containerBounds.top + widgetBounds.height / 2;

      return {
        x: containerCenterX - widgetCenterX,
        y: containerCenterY - widgetCenterY,
      };
    },
    [containerBounds],
  );

  const onHover = useCallback(
    ({ widgetId, widgetBounds = DEFAULT_BOUNDS }: HoverArgs<TWidget>) => {
      timerRef.current.set(() => {
        const { x, y } = calculateCenterOffset(widgetBounds);
        setOffset({ x, y });
        setHoveredWidget(widgetId);
      }, delay);
    },
    [calculateCenterOffset, delay],
  );

  const cancelHover = useCallback(() => {
    timerRef.current.clear();
  }, []);

  return {
    offsetX: offset.x,
    offsetY: offset.y,
    hoveredWidget,

    onHover,
    cancelHover,

    setHoveredWidget,
    setOffset,
  };
}
