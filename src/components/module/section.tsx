'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

import { Avatar, AvatarFallback, AvatarImage, Badge, Separator } from '../ui';

const Section = ({
  children,
  header,
}: {
  children: ReactNode;
  header?: string;
}) => {
  return (
    <div className="mb-5 mt-5">
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
}: {
  logo?: string;
  title: string;
  subtitle: string;
  badge?: string;
  onClick?: () => void;
}) => {
  return (
    <motion.div
      className="flex gap-3 items-center p-2 rounded-lg cursor-pointer"
      whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 0, 0, 0.03)' }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 150 }}
      onClick={onClick}
    >
      <Avatar>
        {logo && <AvatarImage src={logo} />}
        <AvatarFallback>{title.slice(0, 2)}</AvatarFallback>
      </Avatar>
      <div className="flex-auto">
        <div>{title}</div>
        <div className="text-sm text-muted-foreground">{subtitle}</div>
      </div>
      {badge && (
        <div className="pl-5 self-start">
          <Badge variant="outline">{badge}</Badge>
        </div>
      )}
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
