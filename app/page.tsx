import { EditToggle } from '@/components/module/widgets-grid/edit-toggle';
import { WidgetGrid } from '@/components/module/widgets-grid/widget-grid';
import { ListLayout } from '@/components/ui/layout/list-layout';
import { BLOG } from '@/const/blog';
import { EXPERIENCE } from '@/const/experience';

export default function Page() {
  return (
    <div className="text-black flex flex-col pt-16 sm:pt-20 md:pt-24 justify-center px-4 sm:px-6 lg:px-8 mb-20">
      <div className="flex flex-col w-full items-center h-full">
        <div className="w-full max-w-6xl">
          <div id="about">
            <div className="text-muted-foreground text-lg sm:text-xl">
              Danyil Butov
            </div>
            <div className="text-lg sm:text-xl dark:text-zinc-300">
              Software Developer
            </div>
            <div className="text-muted-foreground text-xs sm:text-sm mt-8 sm:mt-12">
              About
            </div>
            <div className="text-base sm:text-lg lg:text-xl mt-3 xl:w-2/3 lg:w-3/4 md:w-5/6 w-full leading-relaxed dark:text-zinc-300">
              CS student at University of Edinburgh and software developer at
              Solidgate. Im passionate about building products that are not only
              functional but also beautiful and easy to use. This is my third
              iteration of my portfolio. Built with love and care.
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between w-full gap-6 lg:gap-8">
            <ListLayout title="Experience" items={EXPERIENCE} />
            <ListLayout title="Blog" items={BLOG} />
          </div>
        </div>
      </div>

      <WidgetGrid />

      <EditToggle />
    </div>
  );
}
