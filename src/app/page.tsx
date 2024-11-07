'use client';

import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { wrap } from 'popmotion';

import { Contact, MainHeader, MainLayout, Section } from '@/components/module';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Separator,
} from '@/components/ui';
import { SECTIONS } from '@/const';

const MAIN_LAYOUT_ANIMATION = (toggle: boolean) => ({
  main: toggle
    ? {
        x: '0vw',
        scale: 0.95,
        transition: { duration: 0.2, ease: 'easeInOut' },
      }
    : {
        x: '+25vw',
        scale: 1,
        transition: { duration: 0.2, ease: 'easeInOut' },
      },
  details: toggle
    ? {
        x: '0vw',
        scale: 1,
        opacity: 1,
        transition: {
          x: { duration: 0.2, ease: 'easeInOut' },
          scale: { duration: 0.2, ease: 'easeInOut' },
          opacity: { duration: 0.1, ease: 'easeInOut' },
        },
      }
    : {
        x: '100vw',
        scale: 0.95,
        opacity: 0,
        transition: {
          x: { duration: 0.2, ease: 'easeInOut' },
          scale: { duration: 0.2, ease: 'easeInOut' },
          opacity: { duration: 0.1, ease: 'easeInOut' },
        },
      },
});

const variants = {
  enter: (direction: number) => ({
    zIndex: 1,
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 2,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 1,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const images = [
  'https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png',
  'https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png',
  'https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png',
];

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) =>
  Math.abs(offset) * velocity;

export default function Page() {
  const [testButtonClicked, setTestButtonClicked] = useState('');
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);

  const handleTestButtonClick = useCallback((title: string) => {
    setTestButtonClicked(prevTitle => (prevTitle === title ? '' : title));
  }, []);

  const paginate = useCallback(
    (newDirection: number) => {
      setPage([page + newDirection, newDirection]);
    },
    [page],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 3000);
    return () => clearInterval(interval);
  }, [paginate]);

  return (
    <>
      <MainLayout
        initial={{ x: '+25vw' }}
        animate={MAIN_LAYOUT_ANIMATION(testButtonClicked !== '').main}
        className="h-screen"
      >
        <MainHeader />
        <Contact />
        {SECTIONS.map(section => (
          <Section key={section.header} header={section.header}>
            {section.items.map((item, index) => (
              <div key={item.title}>
                <Section.Item
                  logo={item.logo}
                  title={item.title}
                  subtitle={item.subtitle}
                  badge={item.badge}
                  onClick={() => handleTestButtonClick(item.title)}
                  isHighlighted={testButtonClicked === item.title}
                />
                {index < section.items.length - 1 && <Section.Separator />}
              </div>
            ))}
          </Section>
        ))}
      </MainLayout>

      <MainLayout
        initial={{ x: '100vw' }}
        animate={MAIN_LAYOUT_ANIMATION(testButtonClicked !== '').details}
      >
        <div className={'flex gap-3 items-center py-1 px-2 rounded-lg'}>
          <Avatar className="h-12 w-12">
            <AvatarImage src="https://cdn-1.webcatalog.io/catalog/solidgate/solidgate-icon.png?v=1714781239646" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <div className="flex-auto">
            <div className="flex items-center justify-between">
              <div>Solidgate</div>
            </div>
            <div className="text-md text-muted-foreground">
              Fintech payment processing platform that helps businesses accept
              online payments across 150+ countries
            </div>
          </div>
        </div>
        <Separator className="my-5" />
        <div className="py-1 px-2">
          <div className="text-md">TECH</div>
          <div className="flex gap-1 my-2">
            <Badge variant="outline">React</Badge>
            <Badge variant="outline">Typescript</Badge>
            <Badge variant="outline">Golang</Badge>
            <Badge variant="outline">Buf Schema Registry</Badge>
            <Badge variant="outline">i18n</Badge>
            <Badge variant="outline">SCSS</Badge>
          </div>
        </div>
        <div className="relative w-full h-[30vh] my-2 overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={page}
              src={images[imageIndex]}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              style={{ position: 'absolute', width: '100%', height: '100%' }}
            />
          </AnimatePresence>
        </div>
      </MainLayout>
    </>
  );
}
