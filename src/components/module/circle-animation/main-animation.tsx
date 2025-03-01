'use client';

import { DEFAULT_CONFIG } from './types/types';
import CircleAnimation from './circle-animation';

const MainAnimation: React.FC = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <CircleAnimation config={DEFAULT_CONFIG} />
    </div>
  );
};

export default MainAnimation;
