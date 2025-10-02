import useMeasure, { RectReadOnly } from 'react-use-measure';

import { WidgetId } from '@/types/widgets';

type Nullable<T> = T | null;

interface WidgetMeasureReturn {
  refs: Record<WidgetId, (element: Nullable<HTMLElement>) => void>;
  bounds: Record<WidgetId, RectReadOnly>;
}

// TODO: Refactor to use useMultiMeasure
export const useWidgetMeasure = (): WidgetMeasureReturn => {
  const [solidgateRef, solidgateBounds] = useMeasure();
  const [aboutRef, aboutBounds] = useMeasure();
  const [githubRef, githubBounds] = useMeasure();
  const [emailRef, emailBounds] = useMeasure();
  const [animationsRef, animationsBounds] = useMeasure();
  const [containerRef, containerBounds] = useMeasure();
  const [booksRef] = useMeasure();
  const [musicRef, musicBounds] = useMeasure();
  const [projectShareRef, projectShareBounds] = useMeasure();
  const [compSocRef, compSocBounds] = useMeasure();

  const refs: Record<WidgetId, (element: Nullable<HTMLElement>) => void> = {
    solidgate: solidgateRef,
    about: aboutRef,
    github: githubRef,
    email: emailRef,
    animations: animationsRef,
    container: containerRef,
    'comp-soc': compSocRef,
    'project-share': projectShareRef,
    books: booksRef,
    tools: booksRef,
    music: musicRef,
  };

  const bounds: Record<WidgetId, RectReadOnly> = {
    solidgate: solidgateBounds,
    about: aboutBounds,
    github: githubBounds,
    email: emailBounds,
    animations: animationsBounds,
    container: containerBounds,
    'comp-soc': compSocBounds,
    'project-share': projectShareBounds,
    books: {
      width: 0,
      height: 0,
      left: 0,
      top: 0,
      x: 0,
      y: 0,
      right: 0,
      bottom: 0,
    },
    music: musicBounds,
    tools: aboutBounds,
  };

  return { refs, bounds };
};
