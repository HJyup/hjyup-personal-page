interface Particle {
  id: number;
  angle: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

interface Config {
  numberOfParticles: number;
  radius: number;
  dotSize: number;
}

const DEFAULT_CONFIG: Config = {
  numberOfParticles: 20,
  radius: 100,
  dotSize: 13,
};

export type { Config, Particle };
export { DEFAULT_CONFIG };
