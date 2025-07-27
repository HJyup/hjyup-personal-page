import { WidgetGrid } from '@/components/module/widgets/widget-grid';
import { Footer } from '@/components/ui/layout/footer';
import { ListLayout } from '@/components/ui/layout/list-layout';
import { BLOG } from '@/const/blog';
import { EXPERIENCE } from '@/const/experience';

export default function Page() {
  return (
    <>
      <header id="about" className="pb-16 lg:pb-20">
        <div className="flex justify-between">
          <h1 className="text-zinc-700 dark:text-zinc-300 text-base sm:text-lg">
            Danyil Butov
          </h1>
        </div>
        <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300">
          Software Developer
        </p>
        <h2 className="text-sm mt-12 sm:mt-16 text-zinc-900 dark:text-zinc-50">
          About
        </h2>
        <p className="text-sm sm:text-base lg:text-lg mt-4 lg:w-3/4 md:w-5/6 w-full text-zinc-700 dark:text-zinc-300">
          CS student at University of Edinburgh and Software Developer at
          Solidgate. I'm passionate about building products that are not only
          functional but also beautiful and easy to use. This is my third
          iteration of my portfolio.
        </p>
      </header>

      <main className="flex flex-col lg:flex-row w-full gap-8 lg:gap-12 mb-16 lg:mb-20">
        <ListLayout
          id="experience-heading"
          title="Experience"
          items={EXPERIENCE}
        />
        <ListLayout id="blog-heading" title="Posts" items={BLOG} />
      </main>

      <section aria-label="Interactive widgets showcase" className="mt-12">
        <WidgetGrid />
      </section>
      <Footer />
    </>
  );
}
