import { memo } from 'react';
import { motion } from 'framer-motion';

import { useCircleAnimation } from './hooks/use-cirlce-animation-props';
import { Config, Particle as ParticleType } from './types/types';

interface ParticleProps {
  particle: ParticleType;
  variants: ReturnType<typeof useCircleAnimation>['variants'];
  index: number;
  onDragStart: () => void;
  onDragEnd: () => void;
}

const Particle = memo(
  ({ particle, variants, index, onDragStart, onDragEnd }: ParticleProps) => {
    const particleSize = particle.size;
    const offset = particleSize / 2;

    return (
      <motion.div
        className="absolute rounded-full dark:bg-white bg-black"
        style={{
          width: `${particleSize}px`,
          height: `${particleSize}px`,
          left: '50%',
          top: '50%',
          marginLeft: `-${offset}px`,
          marginTop: `-${offset}px`,
        }}
        animate={variants.animation(index)}
        drag
        dragConstraints={variants.dragBoundaries(index)}
        whileDrag={variants.drag}
        whileHover={{
          scale: 1.2,
        }}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      />
    );
  },
);

Particle.displayName = 'Particle';

interface CircleAnimationProps {
  config: Config;
}

const CircleAnimation = ({ config }: CircleAnimationProps) => {
  const { particles, variants, handleDragStart, handleDragEnd } =
    useCircleAnimation(config);
  const containerSize = config.radius * 2 + 20;

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div
        className="relative"
        style={{
          width: `${containerSize}px`,
          height: `${containerSize}px`,
        }}
      >
        {particles.map((particle, index) => (
          <Particle
            key={particle.id}
            particle={particle}
            variants={variants}
            index={index}
            onDragStart={() => handleDragStart(particle.id)}
            onDragEnd={() => handleDragEnd(particle.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CircleAnimation;
