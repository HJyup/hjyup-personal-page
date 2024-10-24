import { useEffect } from 'react';
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';

import ANIMATED_TEXT from '@/const/animated-text';

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: 'linear',
      times: [0, 0.5, 0.5, 1],
    },
  },
};

const CursorBlinker = () => (
  <motion.div
    variants={cursorVariants}
    animate="blinking"
    className="inline-block h-5 w-[1px] translate-y-1 bg-slate-900"
  />
);

const AnimatedTextTransformer = () => {
  const textIndex = useMotionValue(0);
  const baseText = useTransform(
    textIndex,
    latest => ANIMATED_TEXT[latest] || '',
  );
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.round(latest));
  const displayText = useTransform(rounded, latest =>
    baseText.get().slice(0, latest),
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, 60, {
      type: 'tween',
      duration: 1,
      ease: 'easeIn',
      repeat: Infinity,
      repeatType: 'reverse',
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === ANIMATED_TEXT.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      },
    });
  }, [count, textIndex, updatedThisRound]);

  return <motion.span className="inline">{displayText}</motion.span>;
};

export const AnimatedText = () => (
  <motion.span
    variants={itemVariants}
    className="inline h-full w-full text-lg lg:text-2xl text-slate-900"
  >
    <AnimatedTextTransformer />
    <CursorBlinker />
  </motion.span>
);
