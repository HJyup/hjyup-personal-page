import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';

import { MediumWidgetLayout } from '@/components/ui/layout/widget-layouts';

interface ContactContainerProps {
  ariaLabel: string;
  imageSrc: string;
  name: string;
  subtitle: string;
}

interface ContactWidgetProps {
  className?: string;
}

function ContactContainer({
  ariaLabel,
  imageSrc,
  name,
  subtitle,
}: ContactContainerProps) {
  return (
    <div className="flex-1 min-w-0 max-w-none sm:max-w-xs h-full bg-zinc-100 dark:bg-[hsl(0,0%,10%)] rounded-xl sm:rounded-2xl lg:rounded-3xl px-3 sm:px-4 py-4 sm:py-6 flex flex-col justify-between">
      <div className="flex items-center gap-2 sm:gap-3 pr-12 sm:pr-14">
        <Image
          className="rounded-full flex-shrink-0"
          src={imageSrc}
          alt={ariaLabel}
          height={40}
          width={40}
          sizes="(max-width: 640px) 40px, 45px"
          style={{
            width: 'auto',
            height: 'auto',
            maxWidth: '40px',
            maxHeight: '40px',
          }}
        />
        <div className="flex flex-col min-w-0">
          <p className="text-sm sm:text-base text-zinc-900 dark:text-zinc-300 font-medium truncate">
            {name}
          </p>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 truncate">
            {subtitle}
          </p>
        </div>
      </div>

      <a
        href="#"
        className="flex items-center justify-center gap-2 text-sm sm:text-base text-zinc-900 dark:text-zinc-300 w-full rounded-lg sm:rounded-full border border-gray-300 dark:border-zinc-700 py-2.5 sm:py-2 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors duration-200 ease motion-reduce:transition-none min-h-[44px] sm:min-h-0"
        role="button"
        aria-label={ariaLabel}
      >
        <span className="truncate">View Profile</span>
        <ArrowRightIcon className="w-4 h-4 transition-transform duration-200 ease-out-quad motion-reduce:transition-none motion-reduce:transform-none group-hover:translate-x-1 flex-shrink-0" />
      </a>
    </div>
  );
}

export function ContactWidget({ className = '' }: ContactWidgetProps) {
  return (
    <MediumWidgetLayout className={className} isBackground={false}>
      <div
        className="h-full flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2 sm:gap-3 lg:gap-4 p-2 sm:p-0"
        role="region"
        aria-label="Social media contacts"
      >
        <ContactContainer
          ariaLabel="Visit LinkedIn profile"
          imageSrc="https://media.licdn.com/dms/image/v2/D4D03AQHjFZlSHxR4tw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725394099325?e=1757548800&v=beta&t=wzUo41dzWBkjIwa8RD-xrd3jN18uMbNdOXr88--wH8c"
          name="Danyil Butov"
          subtitle="Software Engineer"
        />

        <ContactContainer
          ariaLabel="Visit Instagram profile"
          imageSrc="https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-19/403987832_880555189988543_4881133766046872049_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=111&_nc_oc=Q6cZ2QFIsXt2d4l_SARRfVZ2LTwmmkJkGBMyyDjcUmymJ6GPDWxWzKMeePYc5zwKnM8ZwiE&_nc_ohc=OLvoavH_6ysQ7kNvwFvkN5G&_nc_gid=PQBHC2XmtjzXFPWdaYg0jA&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfSnauNNc2mTvC36m7t4rzqrAQTaEHd_UVShLESe2qZtow&oe=68721324&_nc_sid=7a9f4b"
          name="Danyil Butov"
          subtitle="@danyil.butov"
        />
      </div>
    </MediumWidgetLayout>
  );
}
