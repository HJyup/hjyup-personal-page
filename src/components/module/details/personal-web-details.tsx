import { LinkButton } from '@/components/ui';
import { SECTIONS } from '@/const';

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
          Welcome to my personal website! I created this site to showcase my
          projects and achievements. The design is intentionally minimalistic,
          putting the focus on the content itself. I aimed to make the layout
          scalable, simplifying the process of updating and adding new content.
        </SectionDetails.Text>
      </SectionDetails.Wrapper>

      <SectionDetails.Wrapper>
        <SectionDetails.Text>
          Before developing the current version, I explored a concept for a
          personal webpage designed as an interactive book using Three.js. The
          idea was to create a unique, book-like experience for users as they
          browsed through my information.
        </SectionDetails.Text>
      </SectionDetails.Wrapper>

      <SectionDetails.Wrapper>
        <SectionDetails.Video
          video="personal-page/old_web.webm"
          caption="First Iteration of the Website"
        />
      </SectionDetails.Wrapper>

      <SectionDetails.Wrapper>
        <SectionDetails.Text>
          Currently, I'm working on a “pretty database” concept to organize my
          achievements and personal thoughts. Here, you’ll find posts about
          various technologies, my personal insights, and of course, more
          projects to come. I hope you enjoy exploring it!
        </SectionDetails.Text>
      </SectionDetails.Wrapper>

      <SectionDetails.Separator />

      <SectionDetails.Wrapper>
        <LinkButton
          size="sm"
          variant="secondary"
          href="https://old.danyilbutov.com"
          target="_blank"
          className="w-full md:w-fit"
        >
          Visit the old website
        </LinkButton>
      </SectionDetails.Wrapper>
    </SectionDetails>
  );
};

export { PersonalWebDetails };
