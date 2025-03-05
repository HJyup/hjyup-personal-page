'use client';

import { useEffect, useState } from 'react';

import { MainAnimation, Sidebar } from '@/components/module';
import {
  EducationSection,
  ExperienceSection,
  PostsSection,
  ProjectSection,
} from '@/components/module/sections';
import { SECTIONS } from '@/const/navigation';

const MainContent = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full md:p-6 p-2 md:m-6 m-2 flex flex-col lg:grid md:grid-cols-5">
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
    <div className="flex w-full">
      <Sidebar
        sections={SECTIONS}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <div className="w-full">
        <div
          className="relative flex h-[60dvh] md:h-[68dvh] w-full items-center justify-center overflow-hidden"
          id="start"
        >
          <MainAnimation />
        </div>

        <div className="flex items-center justify-center my-10 p-1 md:p-4">
          <MainContent>
            <div className="w-full md:col-start-2 md:col-span-5">
              <PostsSection />
            </div>

            <div className="w-full md:col-start-2 md:col-span-3">
              <EducationSection />
            </div>

            <div className="w-full md:col-start-2 md:col-span-3">
              <ExperienceSection />
            </div>

            <div className="w-full md:col-start-2 md:col-span-3">
              <ProjectSection />
            </div>
          </MainContent>
        </div>
      </div>
    </div>
  );
}
