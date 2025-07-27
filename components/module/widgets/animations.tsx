import React from 'react';

import { BigWidgetLayout } from '@/components/ui/layout/widget-layouts';

export function AnimationsWidget({
  className = 'flex items-end justify-center',
}: {
  className?: string;
}) {
  return <BigWidgetLayout className={className}>hello</BigWidgetLayout>;
}
