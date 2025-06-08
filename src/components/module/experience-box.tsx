'use client';

import { ReactNode } from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

interface ExperienceBoxProps {
  className?: string;
  backgroundColor: string;
  children: ReactNode;
  href: string;
}

const ExperienceBox = ({
  className,
  backgroundColor,
  children,
  href,
}: ExperienceBoxProps) => {
  return (
    <Link
      href={href}
      data-box
      className={cn(
        backgroundColor,
        'm-2 cursor-pointer transition-all hover:shadow-lg block',
        className,
      )}
    >
      {children}
    </Link>
  );
};

export const CompSocBox = ({ className }: { className?: string }) => (
  <ExperienceBox
    className={cn('flex', className)}
    backgroundColor="bg-red-400"
    href="https://comp-soc.com/"
  >
    <p className="text-red-800 font-semibold text-4xl tracking-tighter p-2">
      Comp-soc <span className="text-4xl font-extralight">committee</span>
    </p>
  </ExperienceBox>
);

export const SolidgateBox = ({ className }: { className?: string }) => (
  <ExperienceBox
    className={cn('grid grid-rows-2', className)}
    backgroundColor="bg-green-400"
    href="/solidgate"
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
    href="https://study.ed.ac.uk/programmes/undergraduate/66-artificial-intelligence-and-computer-science"
  >
    <p className="text-cyan-800 font-light text-5xl italic col-start-1 col-span-2">
      University of <span className="font-bold">Edinburgh</span>
    </p>
    <div className="col-start-3 text-cyan-600 flex flex-col text-xl justify-end items-end">
      <p className="font-light">2024-2028</p>
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
    href="https://hacktheburgh.com"
  >
    <p className="row-start-1 text-lime-800 text-lg p-2">
      Organisator of the Hackathon
    </p>
    <p className="text-lime-800 font-bold text-2xl text-end self-end row-start-2 p-2">
      HackTheBurgh XII
    </p>
  </ExperienceBox>
);

export const NasaSpaceAppsBox = ({ className }: { className?: string }) => (
  <ExperienceBox
    className={cn('flex flex-col justify-between p-4', className)}
    backgroundColor="bg-yellow-400"
    href="https://www.spaceappschallenge.org/"
  >
    <p className="text-yellow-800 font-bold text-2xl row-start-2 pr-2">
      Nasa Space Apps Challenge
    </p>
    <p className="text-yellow-700 text-lg text-start self-end">
      Built a model with a team to predict the likelihood of forest fires
    </p>
  </ExperienceBox>
);

export const ProjectShareBox = ({ className }: { className?: string }) => (
  <ExperienceBox
    className={cn('p-2 grid-cols-2 flex justify-around flex-col', className)}
    backgroundColor="bg-violet-400"
    href="https://projectshare.comp-soc.com/"
  >
    <p className="text-violet-800 font-bold text-3xl row-start-2 pr-2">
      Project share
    </p>
    <p className="text-violet-700 text-lg w-5/6">
      Vice president of the project share society. Rebuilt the website from
      scratch.
    </p>
  </ExperienceBox>
);

export default ExperienceBox;
