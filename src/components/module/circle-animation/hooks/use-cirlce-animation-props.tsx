import { useMemo } from 'react';

import { calculateFloatX, calculateFloatY } from '@/lib/utils';

import { Config, Particle } from '../types/types';

const DRAG_CONSTRAINT_RADIUS = 30;

const useParticleGenerator = (config: Config) => {
  return useMemo(() => {
    const { numberOfParticles, radius, dotSize } = config;

    return Array.from({ length: numberOfParticles }, (_, i) => {
      const angle = (i / numberOfParticles) * Math.PI * 2;
      const finalX = Math.cos(angle) * radius;
      const finalY = Math.sin(angle) * radius;

      const randomOffsetMagnitude = Math.random() * 400 + 200;
      const randomAngle = Math.random() * Math.PI * 2;
      const initialX = Math.cos(randomAngle) * randomOffsetMagnitude;
      const initialY = Math.sin(randomAngle) * randomOffsetMagnitude;

      return {
        id: i,
        angle,
        finalX,
        finalY,
        initialX,
        initialY,
        size: dotSize,
        delay: i * 0.01,
        isDragging: false,
      };
    });
  }, [config]);
};

const useAnimationVariants = (particles: Particle[]) => {
  return useMemo(() => {
    return {
      animation: (i: number) => {
        const particle = particles[i];
        const { angle, initialX, initialY, finalX, finalY, delay } = particle;

        const baseFloatRadius = 5 + Math.sin(angle * 3) * 4;
        const phaseShift = i * 0.12;
        const secondaryPhaseShift = i * 0.05 + Math.PI / 3;
        const exitY = initialY + 300 + Math.random() * 200;

        return {
          x: [
            initialX,
            initialX * 0.6 + finalX * 0.4,
            finalX,
            finalX + calculateFloatX(baseFloatRadius, phaseShift),
            finalX + calculateFloatX(baseFloatRadius, phaseShift + 1.2),
            finalX + calculateFloatX(baseFloatRadius, phaseShift + 2.4),
            finalX + calculateFloatX(baseFloatRadius, phaseShift + 3.6),
            finalX + calculateFloatX(baseFloatRadius, secondaryPhaseShift),
            finalX * 0.7 + initialX * 0.3 + Math.random() * 20 - 10,
            initialX,
          ],
          y: [
            initialY,
            initialY * 0.6 + finalY * 0.4,
            finalY,
            finalY + calculateFloatY(baseFloatRadius, phaseShift),
            finalY + calculateFloatY(baseFloatRadius, phaseShift + 1.5),
            finalY + calculateFloatY(baseFloatRadius, phaseShift + 3),
            finalY + calculateFloatY(baseFloatRadius, phaseShift + 4.5),
            finalY + calculateFloatY(baseFloatRadius, secondaryPhaseShift),
            finalY + 100 + Math.random() * 50,
            exitY,
          ],
          opacity: [0, 0.4, 0.9, 1, 0.95, 1, 0.9, 0.8, 0.5, 0],
          scale: [0, 1.2, 1, 1.05, 0.97, 1.03, 0.98, 0.9, 0.7, 0],
          transition: {
            duration: 12,
            ease: 'easeInOut',
            delay: delay * 4,
            repeat: Infinity,
            repeatType: 'loop' as const,
            repeatDelay: 0.3,
          },
        };
      },
      drag: {
        scale: 1.2,
        zIndex: 10,
      },
      dragConstraints: (i: number) => {
        const { finalX, finalY } = particles[i];

        return {
          top: finalY - DRAG_CONSTRAINT_RADIUS,
          left: finalX - DRAG_CONSTRAINT_RADIUS,
          right: finalX + DRAG_CONSTRAINT_RADIUS,
          bottom: finalY + DRAG_CONSTRAINT_RADIUS,
        };
      },
    };
  }, [particles]);
};

const useCircleAnimation = (config: Config) => {
  const particles = useParticleGenerator(config);
  const variants = useAnimationVariants(particles);

  const handleDragStart = (id: number) => {
    particles[id].isDragging = true;
  };

  const handleDragEnd = (id: number) => {
    particles[id].isDragging = false;
  };

  return {
    particles,
    variants,
    handleDragStart,
    handleDragEnd,
  };
};

export { useCircleAnimation };
