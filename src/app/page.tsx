"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import { BookScene } from "@/components/modules/book-scene";
import { Controls } from "@/components/modules/controls";

export default function Page() {
  return (
    <main>
      <div className="h-screen">
        <Canvas shadows camera={{ position: [2, 1, 6], fov: 35 }}>
          <group position-x={0.9}>
            <Suspense fallback={null}>
              <BookScene />
            </Suspense>
          </group>
        </Canvas>
        <Controls />
      </div>
    </main>
  );
}
