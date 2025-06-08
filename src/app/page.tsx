'use client';

import {
  ExperienceSection,
  HeroSection,
  ProjectsSection,
} from '@/components/module';
import useHeroPageAnimations from '@/hooks/use-hero-page-animations';

export default function Home() {
  const { containerRef } = useHeroPageAnimations();

  return (
    <>
      <HeroSection ref={containerRef} />
      <ProjectsSection />
      <ExperienceSection />
    </>
  );
}
