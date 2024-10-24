import { MoonIcon, SunIcon } from 'lucide-react';

import { GITHUB_LINK, LINKEDIN_LINK } from '@/const/links';

const Header = () => {
  const currentTime = new Date();
  const isMorning = currentTime.getHours() < 12;
  const isAfternoon =
    currentTime.getHours() >= 12 && currentTime.getHours() < 18;
  const isEvening = currentTime.getHours() >= 18;

  const greeting = isMorning
    ? 'Good morning'
    : isAfternoon
      ? 'Good afternoon'
      : 'Good evening';
  const greetingIcon = isEvening ? (
    <MoonIcon className="inline w-4 h-4" />
  ) : (
    <SunIcon className="inline w-4 h-4" />
  );

  return (
    <div className="flex justify-between m-10">
      <div className="pointer-events-auto text-sm md:text-md">
        {greeting} {greetingIcon}
      </div>
      <div className="flex gap-2">
        <a
          className="pointer-events-auto text-sm md:text-md"
          href={GITHUB_LINK}
        >
          Github
        </a>
        <p>|</p>
        <a
          className="pointer-events-auto text-sm md:text-md"
          href={LINKEDIN_LINK}
        >
          Linkedin
        </a>
      </div>
    </div>
  );
};

export default Header;
