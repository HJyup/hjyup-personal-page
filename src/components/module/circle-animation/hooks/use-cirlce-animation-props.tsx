import { useMemo } from 'react';

import { calculateFloatX, calculateFloatY } from '@/lib/utils';

import { Config, Particle } from '../types/types';

const PARTICLE_DRAG_RADIUS = 30;

const useParticlePositions = (config: Config) => {
  return useMemo(() => {
    const { numberOfParticles, radius, dotSize } = config;

    return Array.from({ length: numberOfParticles }, (_, index) => {
      const angle = (index / numberOfParticles) * Math.PI * 2;
      const positionX = Math.cos(angle) * radius;
      const positionY = Math.sin(angle) * radius;

      return {
        id: index,
        angle,
        x: positionX,
        y: positionY,
        size: dotSize,
        delay: index * 0.01,
        isDragging: false,
      };
    });
  }, [config]);
};

const useParticleMotion = (particles: Particle[]) => {
  return useMemo(() => {
    return {
      animation: (particleIndex: number) => {
        const particle = particles[particleIndex];
        const { angle, x, y, delay } = particle;

        const orbitRadius = 5 + Math.sin(angle * 3) * 4;
        const primaryPhase = particleIndex * 0.12;
        const secondaryPhase = particleIndex * 0.05 + Math.PI / 3;

        return {
          x: [
            x,
            x + calculateFloatX(orbitRadius, primaryPhase),
            x + calculateFloatX(orbitRadius, primaryPhase + 1.2),
            x + calculateFloatX(orbitRadius, primaryPhase + 2.4),
            x + calculateFloatX(orbitRadius, primaryPhase + 3.6),
            x + calculateFloatX(orbitRadius, secondaryPhase),
            x,
          ],
          y: [
            y,
            y + calculateFloatY(orbitRadius, primaryPhase),
            y + calculateFloatY(orbitRadius, primaryPhase + 1.5),
            y + calculateFloatY(orbitRadius, primaryPhase + 3),
            y + calculateFloatY(orbitRadius, primaryPhase + 4.5),
            y + calculateFloatY(orbitRadius, secondaryPhase),
            y,
          ],
          opacity: [0, 1, 0.95, 1, 0.9, 0.8, 0],
          transition: {
            duration: 12,
            ease: 'easeInOut',
            delay: delay * 3,
            repeat: Infinity,
            repeatType: 'loop' as const,
            repeatDelay: 0.7,
          },
        };
      },
      drag: {
        scale: 1.2,
        zIndex: 10,
      },
      dragBoundaries: (particleIndex: number) => {
        const { x, y } = particles[particleIndex];

        return {
          top: y - PARTICLE_DRAG_RADIUS,
          left: x - PARTICLE_DRAG_RADIUS,
          right: x + PARTICLE_DRAG_RADIUS,
          bottom: y + PARTICLE_DRAG_RADIUS,
        };
      },
    };
  }, [particles]);
};

const useCircleAnimation = (config: Config) => {
  const particles = useParticlePositions(config);
  const motionControls = useParticleMotion(particles);

  const handleParticleDragStart = (particleId: number) => {
    particles[particleId].isDragging = true;
  };

  const handleParticleDragEnd = (particleId: number) => {
    particles[particleId].isDragging = false;
  };

  return {
    particles,
    variants: motionControls,
    handleDragStart: handleParticleDragStart,
    handleDragEnd: handleParticleDragEnd,
  };
};

export { useCircleAnimation };
