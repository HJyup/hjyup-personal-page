'use client';

import { About, Blog, Experience } from '@/components/module';
import { EditToggle, WidgetGrid } from '@/components/module/widgets';
import { WidgetEditProvider } from '@/provider/widget-edit-provider';

export default function Page() {
  return (
    <WidgetEditProvider>
      <div className="text-black flex flex-col pt-16 sm:pt-20 md:pt-24 justify-center px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex flex-col w-full items-center h-full">
          <div className="w-full max-w-6xl">
            <About />
            <div className="flex flex-col lg:flex-row lg:justify-between w-full gap-6 lg:gap-8">
              <Experience />
              <Blog />
            </div>
          </div>
        </div>

        <WidgetGrid />

        <EditToggle />
      </div>
    </WidgetEditProvider>
  );
}
