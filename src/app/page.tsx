'use client';

import React from 'react';
import { motion } from 'framer-motion';

import Signature from '@/components/module/new-ui/signature';

const HeroSection = () => (
  <motion.div
    // @ts-expect-error - Framer Motion types are not compatible with Next.js 15
    className="w-full h-screen flex justify-center bg-zinc-50"
  >
    <div className="h-screen xl:w-1/3 lg:w-2/3 md:w-3/4 w-full px-5 flex flex-col justify-center relative">
      <div className="text-sm text-zinc-800 font-light text-left">
        I'm currently rebuilding this site from the ground up. Aiming for
        something cleaner and more interactive.
      </div>
      <div className="text-sm text-zinc-800 font-light pt-16 md:pt-12 flex items-center justify-between">
        <div>
          <div>16 Jun, 2025</div>
          <div>Edinburgh, UK</div>
        </div>
        <Signature />
      </div>
    </div>
  </motion.div>
);

export default function Page() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <HeroSection />
    </main>
  );
}
