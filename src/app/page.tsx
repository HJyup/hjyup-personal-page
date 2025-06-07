'use client';

import {
  ExperienceSection,
  HeroSection,
  ProjectsSection,
} from '@/components/module';
import useHeroPageAnimations from '@/hooks/use-hero-page-animations';
import useProjectPageAnimations from '@/hooks/use-project-page-animations';

export default function Home() {
  const { containerRef: heroContainerRef } = useHeroPageAnimations();
  const { containerRef: projectsContainerRef } = useProjectPageAnimations();

  return (
    <>
      <HeroSection ref={heroContainerRef} />
      <ProjectsSection ref={projectsContainerRef} />
      <ExperienceSection />
    </>
  );
}
