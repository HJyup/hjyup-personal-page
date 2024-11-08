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

const ContactLayout = ({ children }: { children: ReactNode }) => {
  return <div className="flex gap-2 mt-5">{children}</div>;
};

const Contact = () => {
  return (
    <Contact.Layout>
      <LinkButton href={LINKS.LINKEDIN} size="icon" variant="outline">
        <LinkedinIcon />
      </LinkButton>
      <LinkButton href={LINKS.GITHUB} size="icon" variant="outline">
        <GithubIcon />
      </LinkButton>
      <LinkButton href={LINKS.CV} size="icon" variant="outline">
        <FileIcon />
      </LinkButton>
      <LinkButton href={LINKS.MAIL} size="icon" variant="outline">
        <MailIcon />
      </LinkButton>
      <LinkButton href={LINKS.INSTAGRAM} size="icon" variant="outline">
        <InstagramIcon />
      </LinkButton>
    </Contact.Layout>
  );
};

Contact.Layout = ContactLayout;

export { Contact };
