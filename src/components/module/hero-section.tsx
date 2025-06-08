'use client';

import { forwardRef } from 'react';

import { PageLayout } from '@/components/ui';
import AnimatedCursor from '@/components/ui/animated-cursor';
import useTypography from '@/hooks/use-typography';

import { AskAiSection, TypographyControls, WelcomeSection } from './index';

const heroLayoutConfig = {
  verticalLines: [
    { position: 2 },
    { position: 6, className: 'hidden md:block' },
  ],
  horizontalLines: [{ position: 3 }, { position: 4 }, { position: 5 }],
};

interface HeroSectionProps {
  className?: string;
}

const HeroSection = forwardRef<HTMLDivElement, HeroSectionProps>(
  ({ className }, ref) => {
    const {
      isBold,
      isItalic,
      isUnderline,
      setBold,
      setItalic,
      setUnderline,
      getClassName,
    } = useTypography();

    const classes = getClassName();

    return (
      <PageLayout
        ref={ref}
        className={className}
        verticalLines={heroLayoutConfig.verticalLines}
        horizontalLines={heroLayoutConfig.horizontalLines}
      >
        <h1
          className={`col-span-full md:col-start-2 md:col-span-5 row-start-3 text-6xl md:text-8xl flex items-end z-10 text-zinc-200 leading-[0.774] ms-[-4px] md:ms-[-8px] px-4 md:px-0 ${classes}`}
        >
          Danyil Butov.
        </h1>

        <AnimatedCursor
          className="animated-cursor col-start-2 md:col-start-4 row-start-4 self-center justify-self-start"
          name="AFK user"
        />

        <div className="col-start-1 col-span-2 md:col-start-2 row-start-5 flex w-full h-full md:justify-end ml-10">
          <TypographyControls
            isBold={isBold}
            isItalic={isItalic}
            isUnderline={isUnderline}
            onBoldChange={setBold}
            onItalicChange={setItalic}
            onUnderlineChange={setUnderline}
          />
        </div>

        <WelcomeSection className="col-start-2 col-span-2 md:col-start-6 row-start-1 row-span-2" />

        <AskAiSection className="col-start-1 row-start-6 col-span-6 md:col-span-1 md:col-start-5 md:row-start-5" />
      </PageLayout>
    );
  },
);

HeroSection.displayName = 'HeroSection';

export default HeroSection;
