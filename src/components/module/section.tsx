'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { LinkIcon } from 'lucide-react';

import { SectionItemType } from '@/const/sections';

import { Avatar, AvatarFallback, AvatarImage, Separator } from '../ui';

const Section = ({
  children,
  header,
}: {
  children: ReactNode;
  header?: string;
}) => (
  <div className="mb-3 mt-3">
    {header && <SectionHeader>{header}</SectionHeader>}
    <div className="flex flex-col gap-3">{children}</div>
  </div>
);

const SectionItem = ({
  sectionItem,
  onClick,
}: {
  sectionItem: SectionItemType;
  onClick?: () => void;
}) => {
  const commonProps = {
    className: 'flex gap-3 items-center py-2 px-2 rounded-lg cursor-pointer',
    whileHover: {
      scale: 1.05,
      backgroundColor: window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'rgba(0, 0, 0, 0.2)'
        : 'rgba(0, 0, 0, 0.03)',
    },
    whileTap: { scale: 0.95 },
    transition: { type: 'spring', stiffness: 150 },
  };

  const Wrapper = sectionItem.href ? motion.a : motion.div;
  const wrapperProps = sectionItem.href
    ? { href: sectionItem.href, target: '_blank' }
    : { onClick };

  return (
    <Wrapper {...commonProps} {...wrapperProps}>
      <SectionItemContent sectionItem={sectionItem} />
    </Wrapper>
  );
};

const SectionItemContent = ({
  sectionItem,
}: {
  sectionItem: SectionItemType;
}) => (
  <>
    <Avatar className="h-10 w-10 md:h-12 md:w-12">
      {sectionItem.logo && <AvatarImage src={sectionItem.logo} />}
      <AvatarFallback>{sectionItem.title.slice(0, 2)}</AvatarFallback>
    </Avatar>
    <div className="flex-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between">
        <div className="flex items-center gap-2 text-sm md:text-base">
          {sectionItem.title}{' '}
          {sectionItem.href && <LinkIcon className="w-3 h-3" />}
        </div>
        {sectionItem.date && (
          <div className="pb-2 md:pb-0 pl-0 md:pl-5 self-start text-xs text-muted-foreground">
            {sectionItem.date}
          </div>
        )}
      </div>
      <div className="text-xs text-muted-foreground md:text-sm">
        {sectionItem.subtitle}
      </div>
    </div>
  </>
);

const SectionHeader = ({ children }: { children: ReactNode }) => (
  <div className="text-md font-bold mb-2 md:text-lg">{children}</div>
);

const SectionSeparator = () => <Separator />;

Section.Item = SectionItem;
Section.Header = SectionHeader;
Section.Separator = SectionSeparator;

export { Section };
