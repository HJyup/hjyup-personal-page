import { LinkButton } from '@/components/ui';
import { SECTIONS } from '@/const';
import oldAnimationVideo from '@/videos/old-animation-personal.mov';
import personalWebVideo from '@/videos/personal-page-animation.mov';

import { SectionDetails } from '../section-details';

const PersonalWebDetails = () => {
  return (
    <SectionDetails>
      <SectionDetails.Header sectionItem={SECTIONS[2].items[1]} />
      <SectionDetails.Separator />
      <SectionDetails.TechStack
        techStack={[
          'Next.js',
          'Typescript',
          'Framer Motion',
          'Tailwind',
          'Three.js',
          'GitHub',
        ]}
      />

      <SectionDetails.Wrapper>
        <SectionDetails.Text>
          Welcome to my personal website! This platform showcases my projects
          and skills, reflecting my personality through a minimalist design and
          typewriter-style notes. Each section, such as a project, transitions
          smoothly like turning the pages of a book. On the left side, you'll
          find elegantly styled text providing detailed information about each
          project.
        </SectionDetails.Text>
      </SectionDetails.Wrapper>

      <SectionDetails.Video
        video={personalWebVideo}
        caption="Old version of the website"
      />

      <SectionDetails.Wrapper>
        <SectionDetails.Text>
          However, I soon realized that I wanted to make it more interactive and
          easier to expand or modify the structure. My goal is to create a
          'charming database' of all my achievements. Therefore, I decided to
          focus more on the projects themselves.
        </SectionDetails.Text>
      </SectionDetails.Wrapper>

      <SectionDetails.Video
        video={oldAnimationVideo}
        caption="Old animation of the current website"
      />

      <SectionDetails.Wrapper>
        <SectionDetails.Text>
          The current version of the website is a result of these changes. I
          hope you like it!
        </SectionDetails.Text>
      </SectionDetails.Wrapper>

      <SectionDetails.Separator />

      <SectionDetails.Wrapper>
        <LinkButton
          size="sm"
          variant="secondary"
          href="https://old.danyilbutov.com"
          target="_blank"
        >
          Visit the old website
        </LinkButton>
      </SectionDetails.Wrapper>
    </SectionDetails>
  );
};

export { PersonalWebDetails };
