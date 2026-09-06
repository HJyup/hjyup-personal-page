'use client';

import { useEffect } from 'react';
import { bind, setEnabled, setVolume } from 'cuelume';

export function HoverSounds() {
  useEffect(() => {
    setEnabled(true);
    setVolume(0.2);
    // Delegated listeners also cover links added after navigation.
    bind();
  }, []);

  return null;
}
