import { ReactNode } from 'react';
import { GithubIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';

import { LinkButton } from '../ui/link-button';

const ContactLayout = ({ children }: { children: ReactNode }) => {
  return <div className="flex gap-2 mt-5">{children}</div>;
};

const Contact = () => {
  return (
    <Contact.Layout>
      <LinkButton
        href="https://www.instagram.com/danyilbutov/"
        size="icon"
        variant="outline"
      >
        <InstagramIcon />
      </LinkButton>
      <LinkButton
        href="https://www.instagram.com/danyilbutov/"
        size="icon"
        variant="outline"
      >
        <LinkedinIcon />
      </LinkButton>
      <LinkButton
        href="https://www.instagram.com/danyilbutov/"
        size="icon"
        variant="outline"
      >
        <GithubIcon />
      </LinkButton>
    </Contact.Layout>
  );
};

Contact.Layout = ContactLayout;

export { Contact };
