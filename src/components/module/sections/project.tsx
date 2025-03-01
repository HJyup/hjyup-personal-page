import { useState } from 'react';

import { Button } from '@/components/ui/button';

import { Card } from '..';

const ProjectSection = () => {
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  return (
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
        date="Ongoing"
        description="Developed an efficient file synchronization utility that uses commit-based differential algorithms."
      />
      <Card.Card
        title="Personal Portfolio"
        subtitle="Full-Stack Developer"
        date="Mar 2025"
        description="Built this responsive portfolio website using Next.js, Tailwind CSS, and Framer Motion, featuring dark mode support and optimized performance."
      />

      {showMoreProjects && (
        <>
          <Card.Card
            title="Feature Flagging System"
            subtitle="Full-Stack Developer"
            date="Jan 2025"
            description="Developed a feature flagging library, allowing developers to toggle features on and off dynamically."
          />
          <Card.Card
            title="Fict Advisor"
            subtitle="Frontend Developer"
            date="Dec 2023 - Apr 2024"
            link="https://ficeadvisor.com/"
            description="Was part of the team that built the first version of the Fict Advisor, a tool that helps students find the best courses at the Techinal University of Ukraine."
          />
        </>
      )}

      {!showMoreProjects && (
        <div className="flex justify-center mt-6">
          <Button
            onClick={() => setShowMoreProjects(true)}
            variant="outline"
            className="text-sm w-full md:w-fit hover:bg-neutral-50 dark:hover:bg-neutral-950"
          >
            Show More Projects
          </Button>
        </div>
      )}
    </Card.Wrapper>
  );
};

export default ProjectSection;
