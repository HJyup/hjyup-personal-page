'use client';

import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface ExperienceBoxProps {
  className?: string;
  backgroundColor: string;
  children: ReactNode;
  onClick?: () => void;
}

const ExperienceBox = ({
  className,
  backgroundColor,
  children,
  onClick,
}: ExperienceBoxProps) => {
  return (
    <div
      data-box
      className={cn(
        backgroundColor,
        'm-2 cursor-pointer transition-all hover:shadow-lg',
        className,
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const CompSocBox = ({ className }: { className?: string }) => (
  <ExperienceBox
    className={cn('flex', className)}
    backgroundColor="bg-violet-400"
  >
    <p className="text-violet-800 font-semibold text-5xl tracking-tighter p-2">
      Comp-soc <span className="text-4xl font-extralight">committee</span>
    </p>
  </ExperienceBox>
);

export const SolidgateBox = ({ className }: { className?: string }) => (
  <ExperienceBox
    className={cn('grid grid-rows-2', className)}
    backgroundColor="bg-green-400"
  >
    <p className="text-green-700 font-light text-md self-start p-2">
      software developer at
    </p>
    <p className="text-green-800 font-semibold text-5xl tracking-tighter p-2 text-end">
      Solidgate
    </p>
  </ExperienceBox>
);

export const UniversityBox = ({ className }: { className?: string }) => (
  <ExperienceBox
    className={cn('grid grid-cols-3 p-2', className)}
    backgroundColor="bg-cyan-400"
  >
    <p className="text-cyan-800 font-light text-5xl italic col-start-1 col-span-2">
      University of <span className="font-bold">Edinburgh</span>
    </p>
    <div className="col-start-3 text-cyan-600 flex flex-col text-xl justify-end items-end">
      <p className="underline font-light">2024-2028</p>
      <p className="text-sm text-end">
        BSc Computer Science & Artificial Intelligence
      </p>
    </div>
  </ExperienceBox>
);

export const HackathonBox = ({ className }: { className?: string }) => (
  <ExperienceBox
    className={cn('grid grid-rows-2', className)}
    backgroundColor="bg-lime-400"
  >
    <p className="row-start-1 text-lime-800 text-xl p-2">
      Organisator of the Hackathon
    </p>
    <p className="text-lime-800 font-bold text-2xl text-end self-end row-start-2 pr-2">
      HackTheBurgh XI
    </p>
  </ExperienceBox>
);

export const EmptyBox = ({ className }: { className?: string }) => (
  <ExperienceBox
    className={cn('flex flex-col p-4', className)}
    backgroundColor="bg-yellow-400"
  >
    <p className="text-yellow-800 font-bold text-2xl text-end self-end row-start-2 pr-2">
      Placeholder
    </p>
  </ExperienceBox>
);

export const RedBox = ({ className }: { className?: string }) => (
  <ExperienceBox
    className={cn('p-2 grid-cols-2', className)}
    backgroundColor="bg-red-400"
  >
    <p className="text-red-800 font-bold text-2xl text-end self-end row-start-2 pr-2">
      Placeholder
    </p>
  </ExperienceBox>
);

export default ExperienceBox;
