import { ImageBlock, LinkButton } from '@/components/ui';
import { SECTIONS } from '@/const';
import fictadvisorVideo from '@/videos/fict-teacher.mov';

import { SectionDetails } from '../section-details';

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
          As a key member of the Student Council, I played a significant role in
          developing a comprehensive university website called FictAdvisor. My
          responsibilities included collaborating with other council members to
          gather requirements, designing the user interface, and implementing
          various features to enhance the user experience.
        </SectionDetails.Text>
      </SectionDetails.Wrapper>

      <ImageBlock
        images={[
          '/fictadvisor/main.png',
          '/fictadvisor/schedule.png',
          '/fictadvisor/search.png',
        ]}
      />

      <SectionDetails.Wrapper>
        <SectionDetails.Text>
          This website provides comprehensive information about the Student
          Council of FIOT, including its organizational structure and events.
          Additionally, users can manage their group schedules and evaluate
          faculty members. These features were implemented to assist students in
          their academic endeavors and facilitate course navigation.
        </SectionDetails.Text>
      </SectionDetails.Wrapper>

      <SectionDetails.Video
        video={fictadvisorVideo}
        caption="How the teacher's page looks"
      />

      <SectionDetails.Wrapper>
        <SectionDetails.Text>
          This project was my first experience in developing a website and
          working in a team. I learned a lot about the importance of
          communication and collaboration in project development.
        </SectionDetails.Text>
      </SectionDetails.Wrapper>

      <SectionDetails.Separator />

      <SectionDetails.Wrapper>
        <LinkButton
          size="sm"
          variant="secondary"
          href="https://ficeadvisor.com"
          target="_blank"
        >
          Visit the website
        </LinkButton>
      </SectionDetails.Wrapper>
    </SectionDetails>
  );
};

export { FictAdvisorDetails };
