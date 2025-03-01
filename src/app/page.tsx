'use client';

import { useEffect, useState } from 'react';

import {
  MainAnimation,
  NavigationBar,
  ScrollDown,
  Sidebar,
} from '@/components/module';
import {
  EducationSection,
  ExperienceSection,
  ProjectSection,
} from '@/components/module/sections';
import { SECTIONS } from '@/const/sections';

const MainContent = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full md:w-2/3 mx-auto md:p-6 p-2 md:m-6 m-2">
    {children}
  </div>
);

export default function Page() {
  const [activeSection, setActiveSection] = useState('start');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = SECTIONS.map(section => section.id);

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <>
      <NavigationBar />
      <div className="flex w-full">
        <Sidebar
          sections={SECTIONS}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />

        <div className="w-full">
          <div
            className="h-screen relative overflow-hidden w-full mx-auto flex justify-center items-center"
            id="start"
          >
            <MainAnimation />
            <ScrollDown />
          </div>

          <div className="flex w-full items-center justify-center my-10 p-1 md:p-4">
            <MainContent>
              <EducationSection />

              <ExperienceSection />

              <ProjectSection />
            </MainContent>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-muted-foreground my-10">
        Thx. More to come!
      </div>
    </>
  );
}
