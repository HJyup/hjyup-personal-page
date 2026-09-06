import { type Metadata } from 'next';

import { PostLayout } from '@/components/post-layout';

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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </section>
      <section>
        <h2>Design Decisions</h2>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </section>
      <section>
        <h2>Now sections</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae
          justo eget magna fermentum iaculis. Amet consectetur adipiscing elit
          pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas.
        </p>
      </section>
      <section>
        <h2>Inspiration</h2>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </section>
    </PostLayout>
  );
}
