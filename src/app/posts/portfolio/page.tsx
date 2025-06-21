'use client';

import { ArrowLeftIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { MusicCard } from '@/components/module/cards';

const PortfolioPage = () => {
  return (
    <div className="text-black flex flex-col pt-16 sm:pt-20 md:pt-24 justify-center px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col w-full items-center h-full">
        <div className="w-full max-w-6xl">
          <div className="text-sm text-zinc-600 dark:text-zinc-400 font-light flex items-center gap-2 mb-5">
            <Link href="/" className="flex items-center gap-2 hover:underline">
              <ArrowLeftIcon className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
          <div className="mb-8 sm:mb-12 lg:mb-16">
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
          </div>

          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            <section className="space-y-6 sm:space-y-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl text-zinc-900 dark:text-white">
                About this website
              </h1>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-zinc-600 dark:text-zinc-400 xl:w-2/3 lg:w-3/4 md:w-5/6 w-full">
                A current approach to portfolio design, balancing minimalism
                with personality through widget-based interactions.
              </p>
            </section>

            <section className="space-y-8 sm:space-y-10">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-zinc-900 dark:text-white">
                The journey
              </h2>
              <div className="space-y-8 sm:space-y-10">
                <div className="flex gap-4 sm:gap-6 lg:gap-8">
                  <span className="text-xl sm:text-2xl lg:text-3xl text-zinc-300 dark:text-zinc-700 mt-1 flex-shrink-0">
                    01
                  </span>
                  <div className="flex-1 space-y-3 sm:space-y-4 min-w-0">
                    <h3 className="text-base sm:text-lg lg:text-xl font-medium text-zinc-800 dark:text-zinc-200">
                      Initial iterations
                    </h3>
                    <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      Two redesigns in my first year—one overly complex
                      interactive book, another so minimal it felt generic. Both
                      missed the mark.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 sm:gap-6 lg:gap-8">
                  <span className="text-xl sm:text-2xl lg:text-3xl text-zinc-300 dark:text-zinc-700 mt-1 flex-shrink-0">
                    02
                  </span>
                  <div className="flex-1 space-y-3 sm:space-y-4 min-w-0">
                    <h3 className="text-base sm:text-lg lg:text-xl font-medium text-zinc-800 dark:text-zinc-200">
                      Finding balance
                    </h3>
                    <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      The challenge: create something clean and clear while
                      maintaining personality. Pure minimalism can become
                      invisible.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-8 sm:space-y-10">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-zinc-900 dark:text-white">
                Why widgets?
              </h2>
              <div className="space-y-6 sm:space-y-8">
                <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  I started looking for a balance: clean and simple, but still
                  me. One day, while working on my laptop, I paid closer
                  attention to the widgets on my desktop. That's when the idea
                  hit me — what if I used widgets as the core layout of my
                  portfolio?
                </p>
                <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Widgets felt like the perfect design element: compact,
                  expressive, and modular. They gave me a way to present
                  projects, music, photos, and personal elements in a clear,
                  structured layout while still leaving room for personality in
                  each tile.
                </p>
              </div>
              <div className="flex flex-col justify-center gap-4">
                <div className="lg:w-2/3 w-full">
                  <MusicCard />
                </div>
              </div>
            </section>

            <section className="space-y-8 sm:space-y-10">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-zinc-900 dark:text-white">
                Why it works
              </h2>
              <div className="space-y-6 sm:space-y-8">
                <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  This pushed me to think of interactions as atomic, reusable
                  components. That mindset shaped the entire layout - something
                  interactive, expressive, and scalable.
                </p>
                <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  I wanted this page to blend my experience as a developer with
                  my actual life - what music I love, what photos I take
                  (because I really enjoy photography), and of course, the
                  projects I build. I think I found a solid balance between
                  personal and professional, and I'm genuinely proud of how it
                  turned out.
                </p>
                <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  The widget system also allows for dynamic interactions—you can
                  actually edit and rearrange them in real-time. This isn't just
                  aesthetic; it reflects how I think about user interfaces:
                  flexible, intuitive, and empowering.
                </p>
              </div>
            </section>

            <section className="space-y-8 sm:space-y-10">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-zinc-900 dark:text-white">
                Design philosophy
              </h2>
              <div className="grid gap-8 sm:gap-10 md:grid-cols-2">
                <div className="space-y-4 sm:space-y-5">
                  <h3 className="text-base sm:text-lg lg:text-xl font-medium text-zinc-800 dark:text-zinc-200">
                    Atomic thinking
                  </h3>
                  <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Each widget is a reusable component with its own
                    purpose—projects, music, photography, personal elements.
                  </p>
                </div>
                <div className="space-y-4 sm:space-y-5">
                  <h3 className="text-base sm:text-lg lg:text-xl font-medium text-zinc-800 dark:text-zinc-200">
                    Personal + Professional
                  </h3>
                  <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Blending developer experience with life—music I love, photos
                    I capture, projects I build.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-8 sm:space-y-10">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-zinc-900 dark:text-white">
                What makes it work
              </h2>
              <div className="space-y-0">
                <div className="py-4 sm:py-5 border-b border-zinc-200 dark:border-zinc-800">
                  <div className="flex justify-between items-center gap-4">
                    <span className="text-base sm:text-lg text-zinc-800 dark:text-zinc-200">
                      Modular architecture
                    </span>
                    <span className="text-sm text-zinc-500 dark:text-zinc-500 flex-shrink-0">
                      Scalable & maintainable
                    </span>
                  </div>
                </div>
                <div className="py-4 sm:py-5 border-b border-zinc-200 dark:border-zinc-800">
                  <div className="flex justify-between items-center gap-4">
                    <span className="text-base sm:text-lg text-zinc-800 dark:text-zinc-200">
                      Interactive components
                    </span>
                    <span className="text-sm text-zinc-500 dark:text-zinc-500 flex-shrink-0">
                      Atomic & reusable
                    </span>
                  </div>
                </div>
                <div className="py-4 sm:py-5 border-b border-zinc-200 dark:border-zinc-800">
                  <div className="flex justify-between items-center gap-4">
                    <span className="text-base sm:text-lg text-zinc-800 dark:text-zinc-200">
                      Visual hierarchy
                    </span>
                    <span className="text-sm text-zinc-500 dark:text-zinc-500 flex-shrink-0">
                      Clear information flow
                    </span>
                  </div>
                </div>
                <div className="py-4 sm:py-5">
                  <div className="flex justify-between items-center gap-4">
                    <span className="text-base sm:text-lg text-zinc-800 dark:text-zinc-200">
                      Personality integration
                    </span>
                    <span className="text-sm text-zinc-500 dark:text-zinc-500 flex-shrink-0">
                      Authentic & expressive
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-6 sm:space-y-8 pb-12 sm:pb-16 lg:pb-20">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-zinc-900 dark:text-white">
                What's next
              </h2>
              <p className="text-base sm:text-lg text-zinc-500 dark:text-zinc-500">
                I'm still exploring ideas around how minimalistic design can
                coexist with rich, layered components — and how to express
                hierarchy between modules without breaking visual simplicity.
                You'll see more of that in future widgets.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
