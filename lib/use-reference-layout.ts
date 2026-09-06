'use client';

import { type RefObject, useLayoutEffect } from 'react';

/** The first character's rectangle gives the actual line, including an inline
 * anchor in the middle of a paragraph that wraps at different screen widths.
 */
function firstTextRect(element: HTMLElement) {
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
  let text = walker.nextNode();
  while (text) {
    const offset = text.textContent?.search(/\S/) ?? -1;
    if (offset >= 0) {
      const range = document.createRange();
      range.setStart(text, offset);
      range.setEnd(text, offset + 1);
      return range.getBoundingClientRect();
    }
    text = walker.nextNode();
  }
  return element.getBoundingClientRect();
}

export function useReferenceLayout(root: RefObject<HTMLDivElement | null>) {
  useLayoutEffect(() => {
    const article = root.current;
    if (!article) return;

    const wide = window.matchMedia('(min-width: 1280px)');
    let frame = 0;
    let disposed = false;

    const layout = () => {
      if (disposed) return;
      const notes = Array.from(
        article.querySelectorAll<HTMLElement>('[data-reference-for]'),
      );

      if (!wide.matches) {
        notes.forEach(note => note.removeAttribute('data-positioned'));
        return;
      }

      const articleBox = article.getBoundingClientRect();
      const measurements = notes
        .flatMap(note => {
          const anchor = document.getElementById(
            note.dataset.referenceFor ?? '',
          );
          if (!anchor || !article.contains(anchor)) {
            // A missing target remains readable at the component's own location.
            note.removeAttribute('data-positioned');
            return [];
          }
          note.dataset.positioned = 'true';
          const parent = note.offsetParent;
          if (!(parent instanceof HTMLElement)) return [];
          const parentBox = parent.getBoundingClientRect();
          const noteBox = note.getBoundingClientRect();
          const textInset = firstTextRect(note).top - noteBox.top;
          return [
            {
              note,
              top: firstTextRect(anchor).top - articleBox.top - textInset,
              height: noteBox.height,
              parentTop: parentBox.top - articleBox.top + parent.clientTop,
              left: articleBox.right + 32 - parentBox.left - parent.clientLeft,
            },
          ];
        })
        .sort((a, b) => a.top - b.top);

      let bottom = -Infinity;
      for (const item of measurements) {
        const top = Math.max(item.top, bottom + 12);
        item.note.style.setProperty(
          '--reference-top',
          `${top - item.parentTop}px`,
        );
        item.note.style.setProperty('--reference-left', `${item.left}px`);
        bottom = top + item.height;
      }
    };

    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(layout);
    };
    const resize = new ResizeObserver(schedule);
    const observe = () => {
      resize.disconnect();
      resize.observe(article);
      article
        .querySelectorAll<HTMLElement>('[data-reference-for]')
        .forEach(note => {
          resize.observe(note);
          const target = document.getElementById(
            note.dataset.referenceFor ?? '',
          );
          if (target && article.contains(target)) resize.observe(target);
        });
    };
    const mutations = new MutationObserver(() => {
      observe();
      schedule();
    });
    mutations.observe(article, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: ['id', 'data-reference-for'],
    });
    observe();
    layout();
    window.addEventListener('resize', schedule);
    article.addEventListener('load', schedule, true);
    document.fonts.ready.then(() => {
      if (!disposed) schedule();
    });

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      resize.disconnect();
      mutations.disconnect();
      window.removeEventListener('resize', schedule);
      article.removeEventListener('load', schedule, true);
    };
  }, [root]);
}
