'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

import { Avatar, AvatarFallback, AvatarImage, Separator } from '../ui';

const Section = ({
  children,
  header,
}: {
  children: ReactNode;
  header?: string;
}) => {
  return (
    <div className="mb-3 mt-3">
      {header && <Section.Header>{header}</Section.Header>}
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
};

const SectionItem = ({
  logo,
  title,
  subtitle,
  badge,
  onClick,
  isHighlighted,
}: {
  logo?: string;
  title: string;
  subtitle: string;
  badge?: string;
  isHighlighted?: boolean;
  onClick?: () => void;
}) => {
  return (
    <motion.div
      className="flex gap-3 items-center py-1 px-2 rounded-lg cursor-pointer"
      whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 0, 0, 0.03)' }}
      whileTap={{ scale: 0.95 }}
      animate={
        isHighlighted
          ? { scale: 1.05, backgroundColor: 'rgba(0, 0, 0, 0.03)' }
          : {}
      }
      transition={{ type: 'spring', stiffness: 150 }}
      onClick={onClick}
    >
      <Avatar>
        {logo && <AvatarImage src={logo} />}
        <AvatarFallback>{title.slice(0, 2)}</AvatarFallback>
      </Avatar>
      <div className="flex-auto">
        <div className="flex items-center justify-between">
          <div>{title}</div>
          <div>
            {badge && <div className="pl-5 self-start text-xs">{badge}</div>}
          </div>
        </div>
        <div className="text-sm text-muted-foreground">{subtitle}</div>
      </div>
    </motion.div>
  );
};

const SectionHeader = ({ children }: { children: ReactNode }) => {
  return <div className="text-lg font-bold mb-5">{children}</div>;
};

const SectionSeparator = () => {
  return <Separator className="my-2" />;
};

Section.Item = SectionItem;
Section.Header = SectionHeader;
Section.Separator = SectionSeparator;

export { Section };
