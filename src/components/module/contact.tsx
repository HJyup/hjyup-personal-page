import { ReactNode } from 'react';
import {
  FileIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
} from 'lucide-react';

import { LINKS } from '@/const';

import { LinkButton } from '../ui';

const ContactLayout = ({ children }: { children: ReactNode }) => (
  <div className="flex gap-2 mt-5 justify-start">{children}</div>
);

const Contact = () => {
  const linkButtons = [
    { href: LINKS.LINKEDIN, Icon: LinkedinIcon },
    { href: LINKS.GITHUB, Icon: GithubIcon },
    { href: LINKS.CV, Icon: FileIcon },
    { href: LINKS.MAIL, Icon: MailIcon },
    { href: LINKS.INSTAGRAM, Icon: InstagramIcon },
  ];

  return (
    <ContactLayout>
      {linkButtons.map(({ href, Icon }, index) => (
        <LinkButton key={index} size="icon" href={href} variant="outline">
          <Icon className="dark:text-muted-foreground" />
        </LinkButton>
      ))}
    </ContactLayout>
  );
};

export { Contact };
