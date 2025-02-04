'use client';

import {
  Contact,
  ExperienceItem,
  MainHeader,
  MainLayout,
  ProjectItem,
  Section,
  SubSection,
  UniversityItem,
} from '@/components/module';
import { EDUCATION, EducationSection } from '@/const/sections/education';
import { EXPERIENCE, ExperienceType } from '@/const/sections/experiece';
import { PROJECTS, ProjectSection } from '@/const/sections/project';

export default function Page() {
  return (
    <>
      <MainLayout>
        <MainHeader />
        <Contact />

        <Section header="Education">
          {EDUCATION.map((section: EducationSection) => (
            <UniversityItem key={section.title} item={section} />
          ))}
        </Section>

        <Section header="Experience" isSeparator={false}>
          <SubSection header="Professional">
            {EXPERIENCE.filter(
              section => section.type === ExperienceType.JOB,
            ).map(section => (
              <ExperienceItem key={section.title} item={section} />
            ))}
          </SubSection>
          <SubSection header="Volunteer">
            {EXPERIENCE.filter(
              section => section.type === ExperienceType.VOLUNTEER,
            ).map(section => (
              <ExperienceItem key={section.title} item={section} />
            ))}
          </SubSection>
        </Section>

        <Section header="Projects" isSeparator={false}>
          {PROJECTS.map((section: ProjectSection) => (
            <ProjectItem key={section.title} item={section} />
          ))}
        </Section>

        <div className="text-center text-xs text-muted-foreground mt-10">
          Built with ❤️ by me.
        </div>
      </MainLayout>
    </>
  );
}
