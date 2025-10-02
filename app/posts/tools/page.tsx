import { ReactNode } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';

import { Body, Heading, Section, Text } from '@/components/ui/posts';

const LogoBlock = ({
  title,
  subtitle,
  icon,
  gradientClass,
}: {
  title: string;
  subtitle: string;
  icon: ReactNode;
  gradientClass: string;
}) => {
  return (
    <div className="flex items-center gap-3 rounded-lg p-4">
      <div className="relative w-8 h-8 rounded-md flex items-center justify-center bg-neutral-100 dark:bg-neutral-950 shadow-sm">
        <div
          className={`absolute inset-0 rounded-md opacity-40 blur-md ${gradientClass}`}
        />
        <div className="relative z-10">{icon}</div>
      </div>
      <div>
        <h3 className="text-sm font-medium">{title}</h3>
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export const metadata: Metadata = {
  title: 'What I use | Danyil Butov',
  description:
    'Things I use every day from tech to productivity. Learn about the journey and principles behind this website.',
  keywords: [
    'tech',
    'productivity',
    'tools',
    'web design',
    'UI/UX',
    'software developer',
    'developer',
    'developer tools',
    'developer productivity',
  ],
  openGraph: {
    title: 'What I use | Danyil Butov',
    description:
      'Things I use every day from tech to productivity. Learn about the journey and principles behind this website.',
    images: [
      {
        url: '/posts/tools_light.png',
        width: 1000,
        height: 600,
        alt: 'Tools showcase',
      },
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What I use | Danyil Butov',
    description:
      'Things I use every day from tech to productivity. Learn about the journey and principles behind this website.',
    images: ['/posts/tools_light.png'],
  },
};

const ToolsPage = () => {
  return (
    <>
      <Section>
        <h1 className="text-neutral-900 dark:text-neutral-50 text-base md:text-lg font-medium">
          What I use
        </h1>
        <Text className="mt-4 text-neutral-700 dark:text-neutral-300">
          Things I use every day from tech to productivity.
        </Text>
      </Section>

      <Section>
        <Heading>Tech</Heading>
        <Body>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="space-y-4">
              <LogoBlock
                title="Figma"
                subtitle="Design"
                gradientClass="bg-gradient-to-r from-pink-500 to-blue-500"
                icon={
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
                    alt="Figma"
                    width={16}
                    height={16}
                  />
                }
              />
            </div>
            <div className="space-y-4">
              <LogoBlock
                title="WebStorm"
                subtitle="Code editor"
                gradientClass="bg-gradient-to-r from-pink-400 to-yellow-500"
                icon={
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/0/08/JetBrains_beam_logo.svg/2048px-JetBrains_beam_logo.svg.png"
                    alt="WebStorm"
                    width={24}
                    height={24}
                  />
                }
              />
            </div>
          </div>
          <Text>
            While I often use Cursor and other tools, Figma and WebStorm remain
            my primary tools for UI/UX design and development.
          </Text>
          <Text>
            WebStorm is still unmatched for me. It’s fast, feature-rich, and
            perfect for larger projects at work. I still open Cursor when I need
            quick prototyping or experiments, but WebStorm keeps me the most
            productive day to day.
          </Text>
          <Text>
            Figma might feel like the obvious choice, but there’s a reason:
            almost every prototype or idea I explore starts there. It’s
            flexible, intuitive, and still the smoothest way for me to test and
            iterate on design ideas.
          </Text>
        </Body>
      </Section>

      <Section>
        <Heading>Productivity</Heading>
        <Body>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="space-y-4">
              <LogoBlock
                title="Things"
                subtitle="Todo list"
                gradientClass="bg-gradient-to-r from-blue-500 to-blue-300"
                icon={
                  <Image
                    src="https://cdn.jim-nielsen.com/macos/512/things-3-2017-05-19.png?rf=1024"
                    alt="Things"
                    width={24}
                    height={24}
                  />
                }
              />
              <LogoBlock
                title="Notion Calendar"
                subtitle="Calendar"
                gradientClass="bg-gradient-to-r from-neutral-400 to-neutral-600"
                icon={
                  <Image
                    src="https://cdn.sanity.io/images/uh6jeocs/production/bcb7ae7467166ae8b64fc37bbd5def7b2e1b5d11-2001x2084.png"
                    alt="Notion Calendar"
                    width={24}
                    height={24}
                  />
                }
              />
            </div>
            <div className="space-y-4">
              <LogoBlock
                title="Spark"
                subtitle="Email"
                gradientClass="bg-gradient-to-r from-blue-400 to-yellow-400"
                icon={
                  <Image
                    src="https://s3-eu-west-1.amazonaws.com/tpd/logos/658ffce79901cd13e0cafb23/0x0.png"
                    alt="Spark"
                    width={24}
                    height={24}
                  />
                }
              />
              <LogoBlock
                title="Linear"
                subtitle="Project management"
                gradientClass="bg-gradient-to-r from-violet-500 to-indigo-500"
                icon={
                  <Image
                    src="https://assets-global.website-files.com/5f15081919fdf673994ab5fd/6417e9db62883903b13efe0b_Linear%20Logo.svg"
                    alt="Linear"
                    width={24}
                    height={24}
                  />
                }
              />
            </div>
          </div>
          <Text>
            Things is the pinnacle of what a to-do list should be. It's insanely
            simple yet powerful, keeping me on top of everything. Whether it’s
            projects or small tasks, everything lives in Things. I highly
            recommend it.
          </Text>
          <Text>
            Most productivity tools that I've mentioned have plenty of
            competitors that do basically the same thing. But we live in a time
            where many can build the same apps — what stands out is the design.
            And these four apps are truly top-notch.
          </Text>
        </Body>
      </Section>

      <Section>
        <Heading>Other</Heading>
        <Body>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="space-y-4">
              <LogoBlock
                title="Retro"
                subtitle="Social media"
                gradientClass="bg-gradient-to-r from-neutral-400 to-neutral-700"
                icon={
                  <Image
                    src="/retro.png"
                    alt="Retro"
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                }
              />
              <LogoBlock
                title="Apple Music"
                subtitle="Music"
                gradientClass="bg-gradient-to-r from-red-400 to-red-600"
                icon={
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Apple_Music_icon.svg/2048px-Apple_Music_icon.svg.png"
                    alt="Apple Music"
                    width={24}
                    height={24}
                  />
                }
              />
              <LogoBlock
                title="Journal"
                subtitle="Health"
                gradientClass="bg-gradient-to-r from-pink-400 to-violet-500"
                icon={
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Apple_Journal_-_App_Icon_-_iOS17.png/250px-Apple_Journal_-_App_Icon_-_iOS17.png"
                    alt="Journal"
                    width={24}
                    height={24}
                  />
                }
              />
            </div>
            <div className="space-y-4">
              <LogoBlock
                title="Bevel"
                subtitle="Health"
                gradientClass="bg-gradient-to-r from-neutral-300 to-neutral-600"
                icon={
                  <Image
                    src="/bevel.png"
                    alt="Bevel"
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                }
              />
              <LogoBlock
                title="Monobank"
                subtitle="Finance"
                gradientClass="bg-gradient-to-r from-neutral-400 to-neutral-800"
                icon={
                  <Image
                    src="/mono.png"
                    alt="Monobank"
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                }
              />
            </div>
          </div>
          <Text>
            Retro is an incredibly simple way to stay connected with friends
            while avoiding all the distractions of traditional social media. I
            highly recommend it. Plus, you can even turn your photos into free
            posters. I have dozens hanging around my room.
          </Text>
        </Body>
      </Section>
    </>
  );
};

export default ToolsPage;
