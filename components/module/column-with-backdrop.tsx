import { ReactNode } from 'react';

import { WithBackdrop } from '@/components/ui/layout/widget-layout';
import { WidgetId } from '@/types/widgets';

type ColumnItem = {
  id: WidgetId;
  component: ReactNode;
};

interface ColumnWithBackdropProps {
  items: ColumnItem[];
  className?: string;
  hoveredWidget: WidgetId | null;
}

export function ColumnWithBackdrop({
  items,
  className,
  hoveredWidget,
}: ColumnWithBackdropProps) {
  return (
    <div className={`flex flex-col gap-6 ${className || ''}`}>
      {items.map(({ id, component }) => (
        <WithBackdrop key={id} backdropCondition={hoveredWidget !== id}>
          {component}
        </WithBackdrop>
      ))}
    </div>
  );
}
