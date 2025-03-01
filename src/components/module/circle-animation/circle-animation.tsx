import { memo } from 'react';
import { motion } from 'framer-motion';

import { useCircleAnimation } from './hooks/use-cirlce-animation-props';
import { Config } from './types/types';

const Particle = memo(
  ({
    particle,
    variants,
    index,
    onDragStart,
    onDragEnd,
  }: {
    particle: ReturnType<typeof useCircleAnimation>['particles'][0];
    variants: ReturnType<typeof useCircleAnimation>['variants'];
    index: number;
    onDragStart: () => void;
    onDragEnd: () => void;
  }) => (
    <motion.div
      className="absolute rounded-full dark:bg-white bg-black"
      style={{
        width: `${particle.size}px`,
        height: `${particle.size}px`,
        left: '50%',
        top: '50%',
        marginLeft: `-${particle.size / 2}px`,
        marginTop: `-${particle.size / 2}px`,
      }}
      animate={variants.animation(index)}
      drag={true}
      dragConstraints={variants.dragConstraints(index)}
      whileDrag="drag"
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      custom={index}
    />
  ),
);

Particle.displayName = 'Particle';

interface CircleAnimationProps {
  config: Config;
}

const CircleAnimation = ({ config }: CircleAnimationProps) => {
  const { particles, variants, handleDragStart, handleDragEnd } =
    useCircleAnimation(config);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div
        className="relative"
        style={{
          width: `${config.radius * 2 + 20}px`,
          height: `${config.radius * 2 + 20}px`,
        }}
      >
        {particles.map((particle, i) => (
          <Particle
            key={particle.id}
            particle={particle}
            variants={variants}
            index={i}
            onDragStart={() => handleDragStart(particle.id)}
            onDragEnd={() => handleDragEnd(particle.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CircleAnimation;
