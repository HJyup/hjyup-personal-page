'use client';

import { useEffect, useState } from 'react';

import {
  Card,
  MainAnimation,
  NavigationBar,
  ScrollDown,
  Sidebar,
} from '@/components/module';
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

        <div>
          <div
            className="h-screen relative overflow-hidden w-full mx-auto flex justify-center items-center"
            id="start"
          >
            <MainAnimation />
            <ScrollDown />
          </div>

          <div className="flex w-full items-center justify-center my-10 p-1 md:p-4">
            <MainContent>
              <Card.Wrapper id="education">
                <Card.Title
                  title="Education"
                  description="Academic background and qualifications"
                />
                <Card.Card
                  title="University of Edinburgh"
                  subtitle="Computer Science & Artificial Intelligence"
                  date="2024 - 2028"
                  description="Studying advanced concepts in artificial intelligence, machine learning, and software engineering with a focus on practical applications."
                />
              </Card.Wrapper>

              <Card.Wrapper id="experience">
                <Card.Title
                  title="Work Experience"
                  description="Professional experience"
                />
                <Card.Card
                  title="Solidgate"
                  subtitle="Software Engineer"
                  date="Aug 2023 - Present"
                  link="https://solidgate.com"
                  description="Working on developing and maintaining payment processing systems, implementing new features, and ensuring system reliability and security."
                />
              </Card.Wrapper>

              <Card.Wrapper id="projects">
                <Card.Title
                  title="Projects"
                  description="Personal projects and open source contributions"
                />
                <Card.Card
                  title="HackTheBurgh XI"
                  subtitle="Software Engineer (tech team)"
                  date="Dec 2024 - Jan 2025"
                  link="https://hacktheburgh.com"
                  description="Was part of the technical team for Scotland's premier student hackathon, managing infrastructure for 200+ participants."
                />
                <Card.Card
                  title="file-sync-tool (FST)"
                  subtitle="Creator & Lead Developer"
                  date="Nov 2024 - Present"
                  disabled
                  description="Developed an efficient file synchronization utility that uses commit-based differential algorithms."
                />
                <Card.Card
                  title="Personal Portfolio"
                  subtitle="Full-Stack Developer"
                  date="Mar 2025"
                  description="Built this responsive portfolio website using Next.js, Tailwind CSS, and Framer Motion, featuring dark mode support and optimized performance."
                />
              </Card.Wrapper>
            </MainContent>
          </div>
        </div>
      </div>
    </>
  );
}
