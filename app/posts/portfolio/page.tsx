import type { Metadata } from 'next';
import Image from 'next/image';

import { MusicWidget } from '@/components/module/widgets/music';
import PostsLayout from '@/components/ui/layout/posts';

export const metadata: Metadata = {
  title: 'About This Website | Danyil Butov',
  description:
    'A fresh take on portfolio design. Balancing minimalism with personality using widget-based interactions. Learn about the journey and principles behind this website.',
  keywords: [
    'portfolio',
    'web design',
    'Next.js',
    'React',
    'widgets',
    'UI/UX',
    'software developer',
  ],
  openGraph: {
    title: 'About This Website | Danyil Butov',
    description:
      'A fresh take on portfolio design. Balancing minimalism with personality using widget-based interactions.',
    images: [
      {
        url: '/posts/portfolio_light.png',
        width: 1000,
        height: 600,
        alt: 'Portfolio showcase',
      },
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About This Website | Danyil Butov',
    description:
      'A fresh take on portfolio design. Balancing minimalism with personality using widget-based interactions.',
    images: ['/posts/portfolio_light.png'],
  },
};

// Reusable Components
const Text = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p
    className={`text-sm sm:text-base dark:text-zinc-300 leading-relaxed ${className}`}
  >
    {children}
  </p>
);

const Heading = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h2
    className={`text-muted-foreground text-xs sm:text-sm mt-12 sm:mt-16 ${className}`}
  >
    {children}
  </h2>
);

const Section = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => <section className={className}>{children}</section>;

const PortfolioPage = () => {
  return (
    <PostsLayout>
      <Section>
        <h1 className="text-muted-foreground text-base sm:text-lg">
          About this website
        </h1>
        <Text className="mt-4">
          A fresh take on portfolio design. Balancing minimalism with
          personality using widget-based interactions.
        </Text>
      </Section>

      <Section>
        <Heading>The journey</Heading>
        <div className="mt-6 space-y-8">
          <Text>
            I originally planned to redesign my portfolio once a year. But in my
            first year of university, I did it twice. One version was an
            over-engineered interactive book; the other was so minimal it lacked
            identity. Neither felt right.
          </Text>
          <Text>
            Before this concept, I explored a "playful" portfolio but it didn't
            feel like me.
          </Text>
          <div>
            <Image
              className="rounded-lg border border-gray-200 dark:border-zinc-900 hidden dark:block"
              src="/posts/prev-page-dark.png"
              alt="Portfolio"
              width={1000}
              height={600}
            />
            <Image
              className="rounded-lg border border-gray-200 dark:border-zinc-900 block dark:hidden"
              src="/posts/prev-page-white.png"
              alt="Portfolio"
              width={1000}
              height={600}
            />
            <p className="text-xs text-center text-zinc-500 dark:text-zinc-400">
              This was almost my current portfolio
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <Heading>Why widgets?</Heading>
        <div className="mt-6 space-y-8">
          <Text>
            While working on my laptop, I just paid close attention to how
            widgets present information.
          </Text>
          <Text>
            They are modular, compact, and expressive. That sparked the idea:
            what if my entire portfolio worked like a widget layout? Perfect for
            showcasing projects and other pieces of my life.
          </Text>
          <MusicWidget className="mt-6" />
        </div>
      </Section>

      <Section>
        <Heading>Why it works</Heading>
        <div className="mt-6 space-y-6">
          <Text>It felt very interactive, expressive, and scalable.</Text>
          <Text>
            I wanted this page to blend my experience as a developer with my
            actual life - what music I love, what photos I take (because I
            really enjoy photography), and of course, the projects I build. I
            think I found a solid balance between personal and professional, and
            I'm genuinely proud of how it turned out.
          </Text>
          <Text>
            The widget system also allows for dynamic interactions—you can
            actually edit and rearrange them in real-time.
          </Text>
        </div>
      </Section>

      <Section>
        <Heading>What's next</Heading>
        <div className="mt-6 space-y-8">
          <Text>
            I'm actively building new widgets and refining their interactivity.
            As more features are added, I'm also exploring better UX patterns to
            make everything feel intuitive and engaging. It's a fun process.
          </Text>
          <Text>Check back soon for updates!</Text>
        </div>
      </Section>
    </PostsLayout>
  );
};

export default PortfolioPage;
