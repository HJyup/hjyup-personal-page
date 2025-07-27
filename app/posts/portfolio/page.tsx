import type { Metadata } from 'next';

import FlexDirection from '@/components/module/animations/flexDirection';
import {
  Body,
  Heading,
  Link,
  Photo,
  Section,
  Text,
} from '@/components/module/posts';
import { MusicWidget } from '@/components/module/widgets/music';
import { PostsLayout } from '@/components/ui/layout/posts-layout';

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
        <Body>
          <Text>
            I originally planned to redesign my portfolio once a year, but in my
            first year of university, I iterated on it twice. One version
            experimented with a highly interactive book, but the complexity
            overshadowed the actual content. Another version went in the
            opposite direction — overly minimal.
          </Text>
          <Text>
            I also tried a more "playful" concept, but it felt like I was
            chasing a cool design rather than creating something that
            represented me and my skills.
          </Text>
          <Photo
            lightSrc="/posts/prev-page-dark.png"
            darkSrc="/posts/prev-page-white.png"
            alt="Portfolio"
            width={1000}
            height={600}
            caption="This iteration nearly became my current portfolio"
          />
          <Text>
            These iterations taught me a simple truth: great design balances
            clarity with character. This version is built on that principle. A
            flexible, purposeful framework that feels like me.
          </Text>
        </Body>
      </Section>

      <Section>
        <Heading>Why widgets?</Heading>
        <Body>
          <Text>
            While working on my laptop, I noticed how elegantly widgets present
            information. They're modular, compact, and expressive, which sparked
            the idea: what if my entire portfolio felt like a widget layout?
          </Text>
          <Text>
            This approach became the perfect way to showcase projects and
            glimpses of my life. Concise and interactive.
          </Text>
          <MusicWidget className="mt-6" />
        </Body>
      </Section>

      <Section>
        <Heading>Design decisions</Heading>
        <Body>
          <Text>
            I began by recreating widgets from scratch, starting with the music
            widget. I liked how each widget had its own style and autonomy,
            independent of the interface.
          </Text>
          <Text>
            After feedback, I unified the background color to bring visual
            cohesion and reduce visual noise while letting personality shine
            through content and microinteractions.
          </Text>
          <Text>
            The two-column layout, with ample white space, makes the main page
            more balanced and easy to scan. I prioritised key widgets at the
            top, arranging supporting content beneath.
          </Text>
          <Text>
            The Posts section draws inspiration from various pages on{' '}
            <Link href="https://minimal.gallery/tag/personal/page/1/">
              Minimal Gallery
            </Link>{' '}
            and from my friend{' '}
            <Link href="https://tomasmaillo.com/">Tomas Maillo</Link> , both of
            which emphasise minimal yet visually engaging layouts.
          </Text>
        </Body>
      </Section>

      <Section>
        <Heading>Tech behind it</Heading>
        <Body>
          <Text>
            I built this project with Next.js and Tailwind CSS. A flexible stack
            with strong SEO control and room for future database-driven
            features.
          </Text>
          <Text>
            For interactivity, I used Framer Motion, a powerful library for
            smooth animations. Its layout transitions are unmatched. For anyone
            interested in how it works under the hood, I recommend{' '}
            <Link href="https://www.nan.fyi/magic-motion">
              Nanda Syahrasyad's blog
            </Link>
            .
          </Text>
          <FlexDirection />
        </Body>
      </Section>

      <Section>
        <Heading>What's next</Heading>
        <Body>
          <Text>
            I'm actively building new widgets, refining interactivity, and
            exploring better UX patterns to make the site more intuitive and
            engaging.
          </Text>
          <Text>Check back soon for updates!</Text>
        </Body>
      </Section>
    </PostsLayout>
  );
};

export default PortfolioPage;
