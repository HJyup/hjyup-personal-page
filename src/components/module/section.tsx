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
    {header && <Section.Header>{header}</Section.Header>}
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
    className: `flex gap-3 items-center py-2 px-2 rounded-lg cursor-pointer`,
    whileHover: { scale: 1.05, backgroundColor: 'rgba(0, 0, 0, 0.03)' },
    whileTap: { scale: 0.95 },
    transition: { type: 'spring', stiffness: 150 },
  };

  return sectionItem.href ? (
    <motion.a {...commonProps} href={sectionItem.href} target="_blank">
      <SectionItemContent sectionItem={sectionItem} />
    </motion.a>
  ) : (
    <motion.div {...commonProps} onClick={onClick}>
      <SectionItemContent sectionItem={sectionItem} />
    </motion.div>
  );
};

const SectionItemContent = ({
  sectionItem,
}: {
  sectionItem: SectionItemType;
}) => (
  <>
    <Avatar>
      {sectionItem.logo && <AvatarImage src={sectionItem.logo} />}
      <AvatarFallback>{sectionItem.title.slice(0, 2)}</AvatarFallback>
    </Avatar>
    <div className="flex-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {sectionItem.title}{' '}
          {sectionItem.href && <LinkIcon className="w-3 h-3" />}
        </div>
        {sectionItem.date && (
          <div className="pl-5 self-start text-xs">{sectionItem.date}</div>
        )}
      </div>
      <div className="text-sm text-muted-foreground">
        {sectionItem.subtitle}
      </div>
    </div>
  </>
);

const SectionHeader = ({ children }: { children: ReactNode }) => (
  <div className="text-lg font-bold mb-2">{children}</div>
);

const SectionSeparator = () => <Separator />;

Section.Item = SectionItem;
Section.Header = SectionHeader;
Section.Separator = SectionSeparator;

export { Section };
