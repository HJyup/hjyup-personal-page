import { LinkButton } from '@/components/ui';
import { SECTIONS } from '@/const';

import { SectionDetails } from '../section-details';

import mainImage from '/public/fictadvisor/main.webp';
import scheduleImage from '/public/fictadvisor/schedule.webp';
import searchImage from '/public/fictadvisor/search.webp';

const FictAdvisorDetails = () => {
  return (
    <SectionDetails>
      <SectionDetails.Header sectionItem={SECTIONS[2].items[2]} />

      <SectionDetails.Separator />

      <SectionDetails.TechStack
        techStack={['Next.js', 'Typescript', 'MUI', 'React-Query', 'GitHub']}
      />

      <SectionDetails.Wrapper>
        <SectionDetails.Text>
          As an active member of the Student Council at Ukrainian University, I
          played a key role in developing the university's FictAdvisor website.
          My responsibilities included collaborating with fellow council members
          to gather requirements, designing an intuitive user interface, and
          implementing features aimed at enhancing the overall user experience.
        </SectionDetails.Text>
      </SectionDetails.Wrapper>

      <SectionDetails.Wrapper>
        <SectionDetails.Carousel
          images={[
            { image: mainImage, alt: 'Main Page' },
            { image: scheduleImage, alt: 'Schedule Page' },
            { image: searchImage, alt: 'Search Page' },
          ]}
          caption=""
        />
      </SectionDetails.Wrapper>

      <SectionDetails.Wrapper>
        <SectionDetails.Text>
          FictAdvisor provides comprehensive information about the Student
          Council of FIOT, including its organizational structure and events.
          Additionally, the platform enables users to manage their group
          schedules and review faculty members. These features were designed to
          support students academically and help them with course selection and
          navigation.
        </SectionDetails.Text>
      </SectionDetails.Wrapper>

      <SectionDetails.Wrapper>
        <SectionDetails.Video
          video="fictadvisor/teacher.webm"
          caption="Teacher Profile Page Overview"
        />
      </SectionDetails.Wrapper>

      <SectionDetails.Wrapper>
        <SectionDetails.Text>
          Within our community, we also established a tech school aimed at
          helping students build practical skills across various fields. My role
          involved creating test tasks for incoming students and evaluating
          their performance on assignments and homework.
        </SectionDetails.Text>
      </SectionDetails.Wrapper>

      <SectionDetails.Separator />

      <SectionDetails.Wrapper>
        <LinkButton
          size="sm"
          variant="secondary"
          href="https://ficeadvisor.com"
          target="_blank"
          className="w-full md:w-fit"
        >
          Visit the website
        </LinkButton>
      </SectionDetails.Wrapper>
    </SectionDetails>
  );
};

export { FictAdvisorDetails };
