interface Particle {
  id: number;
  angle: number;
  finalX: number;
  finalY: number;
  initialX: number;
  initialY: number;
  size: number;
  delay: number;
}

interface AnimationConfig {
  duration: number;
  ease?: string | number[];
  times?: number[];
}

interface Config {
  numberOfParticles: number;
  radius: number;
  dotSize: number;
}

const DEFAULT_CONFIG: Config = {
  numberOfParticles: 20,
  radius: 120,
  dotSize: 15,
};

export type { AnimationConfig, Config, Particle };
export { DEFAULT_CONFIG };
