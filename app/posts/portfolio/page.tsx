import { ReactNode } from 'react';
import type { Metadata } from 'next';

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
interface SectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const Section = ({ title, children, className = '' }: SectionProps) => {
  return (
    <section className={className}>
      <h2 className="text-muted-foreground text-xs sm:text-sm mt-12 sm:mt-16">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
};

interface TextProps {
  children: ReactNode;
  className?: string;
}

const Text = ({ children, className = '' }: TextProps) => {
  return (
    <p
      className={`text-sm md:text-base dark:text-zinc-300 leading-7 sm:leading-8 max-w-3xl ${className}`}
    >
      {children}
    </p>
  );
};

interface SubsectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const Subsection = ({ title, children, className = '' }: SubsectionProps) => {
  return (
    <div className={className}>
      <h3 className="text-sm md:text-base font-medium dark:text-zinc-300 mb-3">
        {title}
      </h3>
      {children}
    </div>
  );
};

interface ContentGroupProps {
  children: ReactNode;
  spacing?: 'tight' | 'normal' | 'loose';
}

const ContentGroup = ({ children, spacing = 'normal' }: ContentGroupProps) => {
  const spacingClasses = {
    tight: 'space-y-4',
    normal: 'space-y-6',
    loose: 'space-y-8',
  };

  return <div className={spacingClasses[spacing]}>{children}</div>;
};

const PortfolioPage = () => {
  return (
    <PostsLayout>
      <section>
        <h1 className="text-muted-foreground text-base sm:text-lg">
          About this website
        </h1>
        <Text className="mt-4">
          A fresh take on portfolio design. Balancing minimalism with
          personality using widget-based interactions.
        </Text>
      </section>

      <Section title="The journey">
        <ContentGroup spacing="loose">
          <Subsection title="Previous iterations">
            <Text>
              I originally planned to redesign my portfolio once a year. But in
              my first year of university, I did it twice. One version was an
              over-engineered interactive book; the other was so minimal it
              lacked identity. Neither felt right.
            </Text>
          </Subsection>

          <Subsection title="Finding direction">
            <Text>
              This version was more deliberate. I wanted something clean and
              structured but also personal and expressive. It became the
              foundation for everything that followed.
            </Text>
          </Subsection>
        </ContentGroup>
      </Section>

      <Section title="Why widgets?">
        <Text>
          While working on my laptop, I just payed close attention to how
          widgets present information. They are modular, compact, and
          expressive. That sparked the idea: what if my entire portfolio worked
          like a widget layout? Perfect for showcasing projects and other pieces
          of my life.
        </Text>
        <MusicWidget className="mt-6" />
      </Section>

      <Section title="Why it works">
        <ContentGroup>
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
        </ContentGroup>
      </Section>

      <Section title="Main principles">
        <ContentGroup>
          <Subsection title="Atomic thinking">
            <Text>
              Each widget is a reusable component with its own purpose—projects,
              music, photography, personal elements.
            </Text>
          </Subsection>
          <Subsection title="Personal + Professional">
            <Text>
              Blending developer experience with life—music I love, photos I
              capture, projects I build.
            </Text>
          </Subsection>
        </ContentGroup>
      </Section>

      <Section title="What's next">
        <Text>
          I'm actively building new widgets and refining their interactivity. As
          more features are added, I'm also exploring better UX patterns to make
          everything feel intuitive and engaging. It's a fun process. Check back
          soon for updates!
        </Text>
      </Section>
    </PostsLayout>
  );
};

export default PortfolioPage;
