import { type ReactNode } from 'react';

export type ReferenceProps = {
  /** ID on the word, sentence, or paragraph this note belongs to. */
  targetId: string;
  number?: number | string;
  children: ReactNode;
};

/** Place after the referenced paragraph, inside PostLayout / PostBody.
 * Wide screens move the note into the margin; narrow screens keep it inline.
 */
export function Reference({ targetId, number, children }: ReferenceProps) {
  return (
    <aside
      id={`reference-${targetId}`}
      role="note"
      aria-label={number === undefined ? 'Reference' : `Reference ${number}`}
      data-reference-for={targetId}
      className="post-reference"
    >
      {number !== undefined && (
        <span className="mr-1.5 text-neutral-400/70 dark:text-neutral-600">
          {number}.
        </span>
      )}
      {children}
    </aside>
  );
}
