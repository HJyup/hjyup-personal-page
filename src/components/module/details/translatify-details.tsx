import { SectionItemType } from '@/const';

import { SectionDetails } from '..';

const TranslatifyDetails = ({
  sectionItem,
}: {
  sectionItem: SectionItemType;
}) => {
  return (
    <SectionDetails>
      <SectionDetails.Header sectionItem={sectionItem} />

      <SectionDetails.Separator />

      <SectionDetails.TechStack
        techStack={[
          'Golang',
          'PostgreSQL',
          'Buf Schema',
          'Docker',
          'Kafka',
          'Microservices',
          'Next.js',
          'Typescript',
          'Tailwind',
        ]}
      />

      <SectionDetails.Wrapper>
        <SectionDetails.Text>
          Translatify is a real-time chat application that allows users to
          translate messages in real-time. (Under construction)
        </SectionDetails.Text>
      </SectionDetails.Wrapper>
    </SectionDetails>
  );
};

export { TranslatifyDetails };
