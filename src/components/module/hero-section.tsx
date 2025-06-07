'use client';

import { forwardRef } from 'react';

import { PageLayout } from '@/components/ui';
import AnimatedCursor from '@/components/ui/animated-cursor';
import { HERO_LAYOUT_CONFIG } from '@/const/layout-configs';
import useTypography from '@/hooks/use-typography';

import { AskAiSection, TypographyControls, WelcomeSection } from './index';

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
        verticalLines={HERO_LAYOUT_CONFIG.verticalLines}
        horizontalLines={HERO_LAYOUT_CONFIG.horizontalLines}
      >
        <h1
          className={`col-start-2 col-span-5 row-start-3 text-8xl flex items-end z-10 text-zinc-200 leading-[0.774] ms-[-8px] ${classes}`}
        >
          Danyil Butov.
        </h1>

        <AnimatedCursor
          className="animated-cursor col-start-4 row-start-4 self-center justify-self-start"
          name="AFK user [probably watching cat videos]"
        />

        <div className="col-start-1 row-start-5 flex w-full h-full justify-end">
          <TypographyControls
            isBold={isBold}
            isItalic={isItalic}
            isUnderline={isUnderline}
            onBoldChange={setBold}
            onItalicChange={setItalic}
            onUnderlineChange={setUnderline}
          />
        </div>

        <WelcomeSection className="col-start-6 row-start-1 row-span-2" />

        <AskAiSection className="col-start-5 row-start-5" />
      </PageLayout>
    );
  },
);

HeroSection.displayName = 'HeroSection';

export default HeroSection;
