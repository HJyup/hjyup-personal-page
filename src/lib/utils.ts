import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function assertNever(value: never, message?: string): never {
  console.warn(message ?? `Unexpected value: ${value}`);
  return value;
}

export function calculateFloatX(baseRadius: number, phase: number) {
  return (
    Math.cos(phase) * baseRadius + Math.sin(phase * 2.3) * (baseRadius * 0.4)
  );
}

export function calculateFloatY(baseRadius: number, phase: number) {
  return (
    Math.sin(phase) * baseRadius + Math.cos(phase * 2.7) * (baseRadius * 0.5)
  );
}
