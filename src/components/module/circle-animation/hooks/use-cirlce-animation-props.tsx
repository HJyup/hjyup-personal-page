import { useMemo } from 'react';

import { Config, Particle } from '../types/types';

const useParticleGenerator = (config: Config) => {
  return useMemo(() => {
    const { numberOfParticles, radius, dotSize } = config;

    return Array.from({ length: numberOfParticles }, (_, i) => {
      const angle = (i / numberOfParticles) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      const randomOffsetMagnitude = Math.random() * 400 + 200;
      const randomAngle = Math.random() * Math.PI * 2;
      const randomX = Math.cos(randomAngle) * randomOffsetMagnitude;
      const randomY = Math.sin(randomAngle) * randomOffsetMagnitude;

      const sizeVariation = 0.8 + Math.random() * 0.4;

      return {
        id: i,
        angle,
        finalX: x,
        finalY: y,
        initialX: randomX,
        initialY: randomY,
        size: dotSize * sizeVariation,
        delay: i * 0.01,
      };
    });
  }, [config]);
};

const useAnimationVariants = (particles: Particle[]) => {
  return useMemo(() => {
    return {
      animation: (i: number) => {
        const particle = particles[i];
        const angle = particle.angle;
        const delay = particle.delay * 4;

        const baseFloatRadius = 5 + Math.sin(angle * 3) * 4;
        const phaseShift = i * 0.12;
        const secondaryPhaseShift = i * 0.05 + Math.PI / 3;

        const floatX = (phase: number) =>
          Math.cos(phase) * baseFloatRadius +
          Math.sin(phase * 2.3) * (baseFloatRadius * 0.4);

        const floatY = (phase: number) =>
          Math.sin(phase) * baseFloatRadius +
          Math.cos(phase * 2.7) * (baseFloatRadius * 0.5);

        return {
          x: [
            particle.initialX,
            particle.initialX * 0.6 + particle.finalX * 0.4,
            particle.finalX,
            particle.finalX + floatX(phaseShift),
            particle.finalX + floatX(phaseShift + 1.2),
            particle.finalX + floatX(phaseShift + 2.4),
            particle.finalX + floatX(phaseShift + 3.6),
            particle.finalX + floatX(secondaryPhaseShift),
            particle.finalX * 0.8 + particle.initialX * 0.2,
            particle.initialX,
          ],
          y: [
            particle.initialY,
            particle.initialY * 0.6 + particle.finalY * 0.4,
            particle.finalY,
            particle.finalY + floatY(phaseShift),
            particle.finalY + floatY(phaseShift + 1.5),
            particle.finalY + floatY(phaseShift + 3),
            particle.finalY + floatY(phaseShift + 4.5),
            particle.finalY + floatY(secondaryPhaseShift),
            particle.finalY * 0.8 + particle.initialY * 0.2,
            particle.initialY,
          ],
          opacity: [0, 0.4, 0.9, 1, 0.95, 1, 0.9, 0.8, 0.5, 0],
          scale: [0, 1.2, 1, 1.05, 0.97, 1.03, 0.98, 0.9, 0.7, 0],
          transition: {
            duration: 12,
            ease: 'easeInOut',
            delay,
            repeat: Infinity,
            repeatType: 'loop' as const,
            repeatDelay: 0.3,
          },
        };
      },
    };
  }, [particles]);
};

const useCircleAnimation = (config: Config) => {
  const particles = useParticleGenerator(config);
  const variants = useAnimationVariants(particles);

  return { particles, variants };
};

export { useCircleAnimation };
