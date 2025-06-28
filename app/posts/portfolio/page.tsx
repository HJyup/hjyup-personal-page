'use client';

import Image from 'next/image';

import { MusicWidget } from '@/components/module/widgets/music';
import PostsLayout, {
  PostContentContainer,
} from '@/components/ui/layout/posts';

const PortfolioPage = () => {
  return (
    <PostsLayout>
      <PostContentContainer>
        <Image
          src="/posts/portfolio_dark.png"
          draggable={false}
          className="rounded-2xl shadow-sm w-full hidden dark:block"
          alt="Portfolio showcase"
          width={1000}
          height={600}
          priority
        />
        <Image
          src="/posts/portfolio_light.png"
          draggable={false}
          className="rounded-2xl shadow-sm w-full block dark:hidden"
          alt="Portfolio showcase"
          width={1000}
          height={600}
          priority
        />

        <section>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-zinc-900 dark:text-white mb-6">
            About this website
          </h1>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-zinc-600 dark:text-zinc-400 lg:w-3/4">
            A fresh take on portfolio design. Balancing minimalism with
            personality using widget-based interactions.
          </p>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-zinc-900 dark:text-white mb-8">
            The journey
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <span className="text-xl sm:text-2xl lg:text-3xl text-zinc-300 dark:text-zinc-700 mt-1 flex-shrink-0">
                1
              </span>
              <div className="space-y-4">
                <h3 className="text-base sm:text-lg lg:text-xl font-medium text-zinc-800 dark:text-zinc-200">
                  Previous iterations
                </h3>
                <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  I originally planned to redesign my portfolio once a year. But
                  in my first year of university, I did it twice. One version
                  was an over-engineered interactive book; the other was so
                  minimal it lacked identity. Neither felt right.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <span className="text-xl sm:text-2xl lg:text-3xl text-zinc-300 dark:text-zinc-700 mt-1 flex-shrink-0">
                2
              </span>
              <div className="space-y-4">
                <h3 className="text-base sm:text-lg lg:text-xl font-medium text-zinc-800 dark:text-zinc-200">
                  Finding direction
                </h3>
                <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  This version was more deliberate. I wanted something clean and
                  structured but also personal and expressive. It became the
                  foundation for everything that followed.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-zinc-900 dark:text-white mb-8">
            Why widgets?
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
            While working on my laptop, I just payed close attention to how
            widgets present information. They are modular, compact, and
            expressive. That sparked the idea: what if my entire portfolio
            worked like a widget layout? Perfect for showcasing projects and
            other pieces of my life.
          </p>
          <MusicWidget className="!mx-0" />
        </section>

        <section>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-zinc-900 dark:text-white mb-8">
            Why it works
          </h2>
          <div className="space-y-6">
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              It felt very interactive, expressive, and scalable.
            </p>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              I wanted this page to blend my experience as a developer with my
              actual life - what music I love, what photos I take (because I
              really enjoy photography), and of course, the projects I build. I
              think I found a solid balance between personal and professional,
              and I'm genuinely proud of how it turned out.
            </p>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              The widget system also allows for dynamic interactions—you can
              actually edit and rearrange them in real-time.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-zinc-900 dark:text-white mb-8">
            Main principles
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg lg:text-xl font-medium text-zinc-800 dark:text-zinc-200">
                Atomic thinking
              </h3>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Each widget is a reusable component with its own
                purpose—projects, music, photography, personal elements.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg lg:text-xl font-medium text-zinc-800 dark:text-zinc-200">
                Personal + Professional
              </h3>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Blending developer experience with life—music I love, photos I
                capture, projects I build.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-zinc-900 dark:text-white mb-8">
            What makes it work
          </h2>
          <div>
            <div className="py-4 border-b border-zinc-200 dark:border-zinc-800">
              <div className="flex justify-between items-center gap-4">
                <span className="text-base sm:text-lg text-zinc-800 dark:text-zinc-200">
                  Modular architecture
                </span>
                <span className="text-sm text-zinc-500 flex-shrink-0">
                  Scalable & maintainable
                </span>
              </div>
            </div>
            <div className="py-4 border-b border-zinc-200 dark:border-zinc-800">
              <div className="flex justify-between items-center gap-4">
                <span className="text-base sm:text-lg text-zinc-800 dark:text-zinc-200">
                  Interactive components
                </span>
                <span className="text-sm text-zinc-500 flex-shrink-0">
                  Atomic & reusable
                </span>
              </div>
            </div>
            <div className="py-4 border-b border-zinc-200 dark:border-zinc-800">
              <div className="flex justify-between items-center gap-4">
                <span className="text-base sm:text-lg text-zinc-800 dark:text-zinc-200">
                  Visual hierarchy
                </span>
                <span className="text-sm text-zinc-500 flex-shrink-0">
                  Clear information flow
                </span>
              </div>
            </div>
            <div className="py-4">
              <div className="flex justify-between items-center gap-4">
                <span className="text-base sm:text-lg text-zinc-800 dark:text-zinc-200">
                  Personality integration
                </span>
                <span className="text-sm text-zinc-500 flex-shrink-0">
                  Authentic & expressive
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-12">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-zinc-900 dark:text-white mb-6">
            What's next
          </h2>
          <p className="text-base sm:text-lg text-zinc-500 dark:text-zinc-500">
            I’m actively building new widgets and refining their interactivity.
            As more features are added, I’m also exploring better UX patterns to
            make everything feel intuitive and engaging. It’s a fun process.
            Check back soon for updates!
          </p>
        </section>
      </PostContentContainer>
    </PostsLayout>
  );
};

export default PortfolioPage;
