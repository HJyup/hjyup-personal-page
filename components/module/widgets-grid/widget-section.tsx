'use client';

import { WidgetEditProvider } from '@/provider/widget-edit-provider';

import { EditToggle } from './edit-toggle';
import { WidgetGrid } from './widget-grid';

export function WidgetSection() {
  return (
    <WidgetEditProvider>
      <section aria-label="Interactive widgets showcase">
        <WidgetGrid />
      </section>
      <EditToggle />
    </WidgetEditProvider>
  );
}
