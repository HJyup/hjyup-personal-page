'use client';

import { useRef } from 'react';
import { useReducedMotion } from 'motion/react';

import { ClockIcon, type ClockIconHandle } from '@/components/ui/clock';

type NowToggleProps = {
  pressed: boolean;
  onToggle: () => void;
};

export function NowToggle({ pressed, onToggle }: NowToggleProps) {
  const clock = useRef<ClockIconHandle>(null);
  const reduce = useReducedMotion();
  const handleClick = () => {
    if (!reduce) clock.current?.startAnimation();
    onToggle();
  };

  return (
    <button
      type="button"
      aria-label="Now: what I am up to"
      aria-pressed={pressed}
      onClick={handleClick}
      className="profile-link"
    >
      <span>Now</span>
      <span className="profile-link-icon" aria-hidden="true">
        <ClockIcon ref={clock} size={12} />
      </span>
    </button>
  );
}
