import { type Metadata } from 'next';
import Image from 'next/image';

import { PixelCat } from '@/components/background/pixel-cat';
import { PostLayout } from '@/components/post/post-layout';

export const metadata: Metadata = {
  title: 'About this webpage · Danyil Butov',
  description: '3rd iteration of my webpage',
};

export default function AboutPage() {
  return (
    <PostLayout
      title="About this webpage"
      subtitle="3rd iteration of my webpage"
    >
      <section>
        <h2>Iterations</h2>
        <p>
          I love autumn. Not only is it one of my favourite seasons, it is also
          when I update my personal webpage. Welcome to the third iteration.
        </p>
        <p>
          The first version, two years ago, was an interactive book built in
          Three.js. Last year’s was widget themed, where each entry had its own
          widget. Not gonna lie, I thought about skipping the rebuild this year
          because I loved the previous one so much, but forcing myself to start
          again is what makes me reflect on how I have changed as a developer.
        </p>
        <figure className="bleed mt-4">
          <Image
            src="/projects/personal-page.png"
            draggable={false}
            alt="The previous version of this site: a dark, widget-based layout with cards for work, books, and music"
            width={3024}
            height={1906}
            className="w-full rounded-md border border-black/5 shadow-[0_6px_18px_-5px_rgba(0,0,0,0.22)] dark:border-white/10"
          />
          <figcaption className="mt-2 text-xs text-neutral-500 dark:text-neutral-500">
            Last year’s webpage
          </figcaption>
        </figure>
      </section>
      <section>
        <h2>Design decisions</h2>
        <p>
          This time I went in a direction where the project demos are the point
          of the page and everything else is complementary to them. The design
          moved away from vibrant widgets: it is now an ASCII inspired
          background with a cat and a dynamic skyline at the top.
        </p>
        <figure className="mt-6 flex flex-col items-center [--pixel:8px]">
          <div aria-hidden="true" className="select-none">
            <PixelCat />
          </div>
          <figcaption className="mt-3 text-xs text-neutral-500 dark:text-neutral-500">
            The cat, who also sits on the treeline at the bottom of every page
          </figcaption>
        </figure>
        <p>
          In a way that reflects less product thinking and more systems
          thinking. Over this period I moved further into infrastructure and
          backend rather than pure frontend, and I wanted the design to show it.
          For inspiration I took the dinosaur game from Google Chrome and went
          in a minimalistic direction.
        </p>
      </section>
      <section>
        <h2>Now section</h2>
        <p>
          I also wanted the page to stay in sync with me. The problem with
          writing posts or shipping projects is that they are not something you
          publish every day, or even every month, so you can go through a lot as
          a person without any of it showing up on the page.
        </p>
        <p>
          For that reason, and inspired by my friend{' '}
          <a href="https://tomasmaillo.com/">Tomas Maillo</a>, I added a Now
          section. It is a separate view of the page with short updates on what
          has been happening, in coding and in life. This time I leaned into the
          hackathons I attended in second year.
        </p>
      </section>
      <section>
        <h2>Inspiration</h2>
        <p>
          The page draws on sites collected in{' '}
          <a href="https://minimal.gallery/">Minimal Gallery</a>, and on two in
          particular: <a href="https://javierlo.com/">Javier</a> and{' '}
          <a href="https://www.baothiento.com/">Bao To</a>.
        </p>
      </section>
    </PostLayout>
  );
}
