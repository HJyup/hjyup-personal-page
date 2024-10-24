import { useEffect } from 'react';
import { useTexture } from '@react-three/drei';

import { usePages } from '@/state/page';

const usePreloadTextures = () => {
  const pages = usePages();

  useEffect(() => {
    pages.forEach(page => {
      useTexture.preload(`/textures/${page.front}.jpg`);
      useTexture.preload(`/textures/${page.back}.jpg`);
    });
  }, [pages]);
};

export default usePreloadTextures;
