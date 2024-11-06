import { ReactNode } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';

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
}: {
  logo: string;
  title: string;
  subtitle: string;
  badge: string;
}) => {
  return (
    <div className="flex gap-3 items-center mt-3">
      <Avatar>
        <AvatarImage src={logo} />
        <AvatarFallback>{title.slice(0, 2)}</AvatarFallback>
      </Avatar>
      <div className="flex-auto">
        <div className="font-bold">{title}</div>
        <div className="text-sm text-muted-foreground">{subtitle}</div>
      </div>
      <div className="pl-5 self-start">
        <Badge variant="outline">{badge}</Badge>
      </div>
    </div>
  );
};

const SectionHeader = ({ children }: { children: ReactNode }) => {
  return <div className="text-lg font-bold">{children}</div>;
};

const SectionSeparator = () => {
  return <Separator />;
};

Section.Item = SectionItem;
Section.Header = SectionHeader;
Section.Separator = SectionSeparator;

export { Section };
