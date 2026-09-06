'use client';

import { type NowEntry } from '@/components/now-feed';
import { SectionRuler } from '@/components/section-ruler';

type NowRulerProps = {
  entries: NowEntry[];
  visible: boolean;
  activeId: string | null;
  onSelect: (entry: NowEntry) => void;
};

export function NowRuler({ entries, ...props }: NowRulerProps) {
  return (
    <SectionRuler
      {...props}
      label="Jump to a moment"
      entries={entries.map(entry => ({
        ...entry,
        label: entry.date,
        detail: entry.subtitle,
      }))}
    />
  );
}
