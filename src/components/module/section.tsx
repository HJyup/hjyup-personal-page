'use client';

import { ReactNode } from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import { LinkIcon } from 'lucide-react';

import { EducationSection, ExperienceSection, ProjectSection } from '@/const';

import { Avatar, AvatarFallback, AvatarImage } from '../ui';

const UniversityItem = ({ item }: { item: EducationSection }) => {
  const Wrapper = item.href ? motion.a : motion.div;
  const wrapperProps = item.href ? { href: item.href, target: '_blank' } : {};

  return (
    <Wrapper
      className="flex gap-3 items-center py-2 px-2 rounded-lg cursor-pointer"
      whileHover={{
        scale: 1.05,
        backgroundColor:
          typeof window !== 'undefined' &&
          window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'rgba(0, 0, 0, 0.2)'
            : 'rgba(0, 0, 0, 0.03)',
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 150 }}
      {...wrapperProps}
    >
      <Avatar className="h-10 w-10 md:h-11 md:w-11">
        {item.logo && <AvatarImage src={item.logo} />}
        <AvatarFallback>{item.title.slice(0, 2)}</AvatarFallback>
      </Avatar>
      <div className="flex-auto">
        <div className="flex flex-row items-start md:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm md:text-base">
            {item.title}
            {item.href && <LinkIcon className="w-3 h-3" />}
          </div>
          {item.date && (
            <div className="pb-2 md:pb-0 pl-0 md:pl-5 self-start text-xs text-muted-foreground whitespace-nowrap">
              {item.date}
            </div>
          )}
        </div>
        <div className="text-xs text-muted-foreground md:text-sm">
          {item.subtitle}
        </div>
      </div>
    </Wrapper>
  );
};

const ProjectItem = ({ item }: { item: ProjectSection }) => {
  const Wrapper = item?.href ? motion.a : motion.div;
  const wrapperProps = item?.href ? { href: item.href, target: '_blank' } : {};

  return (
    <Wrapper
      className="cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 150 }}
      {...wrapperProps}
    >
      <div className="flex flex-col gap-2 bg-muted/50 p-3 rounded-lg w-full hover:bg-muted/70 transition-colors">
        <div className="flex items-center justify-between">
          <div className="text-sm flex items-center gap-2">
            {item.title}
            {item.href && <LinkIcon className="w-3 h-3" />}
          </div>
          {item.date && (
            <div className="text-xs text-muted-foreground">{item.date}</div>
          )}
        </div>
        <div className="text-xs text-muted-foreground">{item.subtitle}</div>
      </div>
    </Wrapper>
  );
};

const ExperienceItem = ({ item }: { item: ExperienceSection }) => {
  const Wrapper = item.href ? motion.a : motion.div;
  const wrapperProps = item.href ? { href: item.href, target: '_blank' } : {};

  return (
    <Wrapper
      className="flex gap-3 items-center py-2 px-2 rounded-lg cursor-pointer"
      whileHover={{
        scale: 1.05,
        backgroundColor:
          typeof window !== 'undefined' &&
          window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'rgba(0, 0, 0, 0.2)'
            : 'rgba(0, 0, 0, 0.03)',
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 150 }}
      {...wrapperProps}
    >
      <Avatar className="h-10 w-10 md:h-11 md:w-11">
        {item.logo && <AvatarImage src={item.logo} />}
        <AvatarFallback>{item.title.slice(0, 2)}</AvatarFallback>
      </Avatar>
      <div className="flex-auto">
        <div className="flex flex-row items-start md:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm md:text-base">
            {item.title}
            {item.href && <LinkIcon className="w-3 h-3" />}
          </div>
          {item.date && (
            <div className="pb-2 md:pb-0 pl-0 md:pl-5 self-start text-xs text-muted-foreground whitespace-nowrap">
              {item.date}
            </div>
          )}
        </div>
        <div className="text-xs text-muted-foreground md:text-sm">
          {item.subtitle}
        </div>
      </div>
    </Wrapper>
  );
};

const Section = ({
  children,
  header,
  isSeparator = true,
}: {
  children: ReactNode;
  header: string;
  isSeparator?: boolean;
  subheader?: string[];
}) => (
  <div className="mb-3 mt-3">
    <h2 className="text-xl font-semibold mb-5 mt-5">{header}</h2>
    <div className="flex flex-col gap-5">
      {React.Children.map(children, (child, index) => {
        if (index === React.Children.count(children) - 1 || !isSeparator) {
          return child;
        }
        return (
          <>
            {child}
            <hr className="border-muted" />
          </>
        );
      })}
    </div>
  </div>
);

const SubSection = ({
  children,
  header,
}: {
  children: ReactNode;
  header: string;
}) => (
  <>
    <h2 className="text-sm text-muted-foreground">{header}</h2>
    <div className="flex flex-col gap-5">
      {React.Children.map(children, (child, index) => {
        if (index === React.Children.count(children) - 1) {
          return child;
        }
        return (
          <>
            {child}
            <hr className="border-muted" />
          </>
        );
      })}
    </div>
  </>
);

export { ExperienceItem, ProjectItem, Section, SubSection, UniversityItem };
