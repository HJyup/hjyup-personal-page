'use client';

import React, { forwardRef, ReactNode } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import Link from 'next/link';

import { WidgetLayout } from '@/components/ui/layout/widget-layout';

type BlockProps = {
  name: string;
  index: string;
  href: string;
  children?: ReactNode;
  className?: string;
};

const Block = ({ name, index, href, children, className = '' }: BlockProps) => {
  return (
    <Link href={href}>
      <div
        className={`relative w-32 h-32 rounded-lg shadow-sm border bg-white dark:bg-neutral-950 border-gray-200 dark:border-neutral-900 hover:cursor-pointer hover:scale-105 duration-300 ${className}`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
        <div className="absolute bottom-2 left-2 flex flex-col text-xs text-black dark:text-white leading-tight">
          <span className="text-muted-foreground/45">{index}</span>
          <span>{name}</span>
        </div>
      </div>
    </Link>
  );
};

type Props = { className?: string } & React.HTMLAttributes<HTMLDivElement>;

export const GithubWidget = forwardRef<HTMLDivElement, Props>(
  ({ className = '' }, ref) => {
    return (
      <WidgetLayout ref={ref} className={className}>
        <div className="h-full w-full grid grid-cols-2 grid-rows-2 gap-0">
          <div className="flex items-start justify-start">
            <Block
              name="HackTheBurgh"
              className="rotate-2 hover:rotate-6 duration-300"
              index="01"
              href="https://hacktheburgh.com/"
            >
              <div className="text-2xl font-bold text-muted-foreground/35">
                HTB
              </div>
            </Block>
          </div>

          <div className="flex items-start justify-end">
            <Block
              name="Translatify"
              className="rotate-[-16deg] hover:rotate-0 duration-300"
              index="02"
              href="https://github.com/HJyup/translatify"
            >
              <div className="text-2xl font-bold text-muted-foreground/35">
                &lt;T&gt;
              </div>
            </Block>
          </div>

          <div className="flex items-end justify-start">
            <Block
              name="email-project"
              className="rotate-[16deg] hover:rotate-0 duration-300"
              index="03"
              href="https://github.com/compsoc-edinburgh/email"
            >
              <HiOutlineMail className="h-14 w-14 font-bold text-muted-foreground/35" />
            </Block>
          </div>

          <div className="flex items-end justify-end">
            <Block
              name="mlt-agents"
              className="rotate-[-8deg] hover:rotate-0 duration-300"
              index="04"
              href="https://github.com/HJyup/mtl-agents-preview"
            >
              <div className="text-2xl font-bold text-muted-foreground/35 bg-neutral-200/10 dark:bg-dark/10 p-1 rounded-full px-3">
                Hello
              </div>
            </Block>
          </div>
        </div>
      </WidgetLayout>
    );
  },
);

GithubWidget.displayName = 'GithubWidget';
