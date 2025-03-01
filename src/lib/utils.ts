import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const calculateFloatX = (baseRadius: number, phase: number) =>
  Math.cos(phase) * baseRadius + Math.sin(phase * 2.3) * (baseRadius * 0.4);

const calculateFloatY = (baseRadius: number, phase: number) =>
  Math.sin(phase) * baseRadius + Math.cos(phase * 2.7) * (baseRadius * 0.5);

export { calculateFloatX, calculateFloatY };
