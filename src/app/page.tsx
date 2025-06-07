'use client';

import {
  ExperienceSection,
  HeroSection,
  ProjectsSection,
} from '@/components/module';
import usePageAnimations from '@/hooks/use-page-animations';

export default function Home() {
  const { containerRef } = usePageAnimations();

  return (
    <>
      <HeroSection ref={containerRef} />
      <ProjectsSection />
      <ExperienceSection />
    </>
  );
}
