import type { Metadata } from 'next';

import {
  Body,
  Heading,
  Link,
  Photo,
  Section,
  Text,
} from '@/components/ui/posts';

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
    <>
      <Section>
        <h1 className="text-zinc-900 dark:text-zinc-50 text-base md:text-lg font-medium">
          About this website
        </h1>
        <Text className="mt-4 text-zinc-700 dark:text-zinc-300">
          A fresh take on portfolio design, balancing minimalism with
          personality through widget-based interactions.
        </Text>
      </Section>

      <Section>
        <Heading>Iterations</Heading>
        <Body>
          <Text>
            I planned to redesign my portfolio once a year, but in my first year
            of university I ended up iterating twice. One version explored a
            highly interactive book format, but the complexity distracted from
            the content. Another went in the opposite direction and became too
            minimal.
          </Text>
          <Text>
            I also tried a more "playful" concept, but it felt like I was
            chasing an interesting look rather than something that truly
            represented me and my skills.
          </Text>
          <Photo
            lightSrc="/posts/prev-iter-2-dark.png"
            darkSrc="/posts/prev-iter-2-light.png"
            alt="Portfolio"
            width={1000}
            height={600}
            caption="This iteration nearly became my current portfolio"
          />
          <Text>
            These experiments taught me something important: great design
            balances clarity with character.
          </Text>
        </Body>
      </Section>

      <Section>
        <Heading>Why widgets?</Heading>
        <Body>
          <Text>
            While working on my laptop I noticed how elegantly widgets present
            information. They are modular, compact, and expressive. That sparked
            the idea: what if my entire portfolio worked like a widget layout?
          </Text>
        </Body>
      </Section>

      <Section>
        <Heading>Design decisions</Heading>
        <Body>
          <Text>
            I started by recreating widgets from scratch, beginning with the
            music widget. Each one had its own style and autonomy, independent
            of the interface.
          </Text>
          <Text>
            After feedback, I unified the background color to create cohesion
            and reduce visual noise, letting personality come through in the
            content and micro-interactions.
          </Text>
          <Text>
            The first iteration used a two-column layout with plenty of white
            space, which made the main page balanced and easy to scan. I placed
            the key widgets at the top and arranged supporting content below.
            Over time, I realised I wanted to combine a “CV” style text layout
            with highly interactive widgets that naturally drew attention.
          </Text>
          <Text>
            This became an interesting challenge: how to create a concise
            interface that merged two different design approaches. The result is
            the current version of the website, where widgets remain an
            important part of the design but work in support of the text.
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
    </>
  );
};

export default PortfolioPage;
