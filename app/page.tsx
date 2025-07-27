import { WidgetGrid } from '@/components/module/widgets/widget-grid';
import { ListLayout } from '@/components/ui/layout/list-layout';
import { BLOG } from '@/const/blog';
import { EXPERIENCE } from '@/const/experience';

export default function Page() {
  return (
    <>
      <header id="about" className="pb-12 lg:pb-16">
        <h1 className="text-muted-foreground text-base sm:text-lg">
          Danyil Butov
        </h1>
        <p className="text-base sm:text-lg dark:text-zinc-300">
          Software Developer
        </p>
        <h2 className="text-muted-foreground text-xs sm:text-sm mt-8 sm:mt-12">
          About
        </h2>
        <p className="text-sm sm:text-base lg:text-lg mt-3 lg:w-3/4 md:w-5/6 w-full dark:text-zinc-300">
          CS student at University of Edinburgh and Software Developer at
          Solidgate. I'm passionate about building products that are not only
          functional but also beautiful and easy to use. This is my third
          iteration of my portfolio.
        </p>
      </header>

      <main className="flex flex-col lg:flex-row lg:justify-between w-full gap-6 lg:gap-8 mb-12 lg:mb-16">
        <ListLayout
          id="experience-heading"
          title="Experience"
          items={EXPERIENCE}
        />
        <ListLayout id="blog-heading" title="Posts" items={BLOG} />
      </main>

      <section aria-label="Interactive widgets showcase" className="mt-8">
        <WidgetGrid />
      </section>
    </>
  );
}
