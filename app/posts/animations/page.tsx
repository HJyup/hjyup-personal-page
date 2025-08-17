import { FaInfo } from 'react-icons/fa';
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
          <Text
            className="
    flex items-center gap-3 rounded-xl px-6 py-4 text-sm md:text-base
    border border-blue-300 bg-blue-50 text-blue-700
    dark:border-blue-800 dark:bg-blue-900/40 dark:text-blue-200
  "
          >
            This post is still in progress...
          </Text>
        </Body>
        <Section className="blur-[10px] select-none">
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
              space, which made the main page balanced and easy to scan. I
              placed the key widgets at the top and arranged supporting content
              below. Over time, I realised I wanted to combine a “CV” style text
              layout with highly interactive widgets that naturally drew
              attention.
            </Text>
            <Text>
              This became an interesting challenge: how to create a concise
              interface that merged two different design approaches. The result
              is the current version of the website, where widgets remain an
              important part of the design but work in support of the text.
            </Text>
          </Body>
        </Section>
      </Section>
    </>
  );
};

export default AnimationsPage;
