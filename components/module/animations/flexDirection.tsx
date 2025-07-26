'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const FlexDirection = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div>
      <motion.div
        onClick={() => setIsClicked(!isClicked)}
        className="flex rounded-lg border border-gray-200 dark:border-zinc-900 w-full p-3 cursor-pointer dark:bg-zinc-950 bg-white"
        style={{
          justifyContent: isClicked ? 'flex-end' : 'flex-start',
        }}
      >
        <motion.div layout className="w-12 h-12 bg-blue-500 rounded-lg" />
      </motion.div>
      <p className="text-xs text-center text-zinc-500 dark:text-zinc-400 mt-2">
        Click to see how it works
      </p>
    </div>
  );
};

export default FlexDirection;
