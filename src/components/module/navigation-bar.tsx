import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';

import { LINKS } from '@/const/links';

import { LinkButton } from '../ui';

const NavigationBar = () => {
  const linkButtons = [
    { href: LINKS.LINKEDIN, Icon: LinkedinIcon },
    { href: LINKS.GITHUB, Icon: GithubIcon },
    { href: LINKS.MAIL, Icon: MailIcon },
  ];

  return (
    <nav className="flex justify-between items-center fixed top-0 w-full px-6 py-2 bg-background/80 backdrop-blur-md border-white/10 z-10">
      <a
        href="https://danyilbutov.com"
        className="text-xs md:text-sm font-bold hover:underline"
      >
        danyilbutov<span className="text-muted-foreground">.com</span>
      </a>
      <div className="flex gap-1 md:gap-2">
        {linkButtons.map(({ href, Icon }, index) => (
          <LinkButton key={index} size="icon" href={href} variant="ghost">
            <Icon className="dark:text-muted-foreground" size={16} />
          </LinkButton>
        ))}
      </div>
    </nav>
  );
};

export default NavigationBar;
