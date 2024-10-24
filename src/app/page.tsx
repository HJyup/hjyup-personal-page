'use client';

import { Suspense } from 'react';
import { Float } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { Book } from '@/components/modules/book';
import { Controls } from '@/components/modules/controls';
import useWindowSize from '@/hooks/use-window-size';

export default function Page() {
  const size = useWindowSize();
  const fov =
    size.width && size.width <= 1150 ? (size.width >= 750 ? 55 : 85) : 35;

  return (
    <main>
      <div className="h-screen flex justify-center items-center">
        <Canvas
          shadows
          camera={{
            position: [2, 1, 6],
            fov: fov,
          }}
        >
          <group position-x={0.9}>
            <Suspense fallback={null}>
              <Float
                rotation-x={-Math.PI / 4}
                floatIntensity={1}
                speed={0.5}
                rotationIntensity={1}
              >
                <Book />
              </Float>
              <directionalLight
                position={[2, 5, 2]}
                intensity={2.5}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                shadow-bias={-0.0001}
              />
              <ambientLight intensity={0.5} />
              <mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
                <planeGeometry args={[100, 100]} />
                <shadowMaterial transparent opacity={0.2} />
              </mesh>
            </Suspense>
          </group>
        </Canvas>
        <Controls />
      </div>
    </main>
  );
}
