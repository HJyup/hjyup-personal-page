import type { Metadata } from 'next';

import { Body, Section, Text } from '@/components/ui/posts';

export const metadata: Metadata = {
  title: 'Animations & Retrospectives | Danyil Butov',
  description:
    "Reflections on Emil Kowalski's animation course and my own experiments with motion design. Insights, techniques, and lessons learned along the way.",
  keywords: [
    'animations',
    'motion design',
    'UI animations',
    'Framer Motion',
    'web design',
    'React',
    'UI/UX',
    'Emil Kowalski',
    'retrospective',
  ],
  twitter: {
    card: 'summary_large_image',
    title: 'Animations & Retrospectives | Danyil Butov',
    description:
      "Reflections on Emil Kowalski's animation course and my own experiments with motion design. Insights, techniques, and lessons learned along the way.",
    images: ['/posts/animations_light.png'],
  },
};

const AnimationsPage = () => {
  return (
    <>
      <Section>
        <h1 className="text-zinc-900 dark:text-zinc-50 text-base md:text-lg font-medium">
          Animations & Retrospectives
        </h1>
        <Text className="mt-4 text-zinc-700 dark:text-zinc-300">
          Reflections on Emil Kowalski's animation course and my own experiments
          with motion design.
        </Text>
      </Section>

      <Section>
        <Body>
          <Text>
            This post is still in the works. Trust me, it’s worth the wait!
          </Text>
        </Body>
      </Section>
    </>
  );
};

export default AnimationsPage;
