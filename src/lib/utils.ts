import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Type-safe exhaustiveness check that warns in runtime but errors in compile time
 * @param value - The value that should be of type never
 * @param message - Optional message to display in the warning
 */
export function assertNever(value: never, message?: string): never {
  console.warn(message ?? `Unexpected value: ${value}`);
  return value;
}

const calculateFloatX = (baseRadius: number, phase: number) =>
  Math.cos(phase) * baseRadius + Math.sin(phase * 2.3) * (baseRadius * 0.4);

const calculateFloatY = (baseRadius: number, phase: number) =>
  Math.sin(phase) * baseRadius + Math.cos(phase * 2.7) * (baseRadius * 0.5);

export { calculateFloatX, calculateFloatY };
