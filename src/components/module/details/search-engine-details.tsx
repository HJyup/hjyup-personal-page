import { SECTIONS } from '@/const';

import { SectionDetails } from '..';

const SearchEngineDetails = () => {
  return (
    <SectionDetails>
      <SectionDetails.Header sectionItem={SECTIONS[2].items[0]} />

      <SectionDetails.Separator />

      <SectionDetails.TechStack
        techStack={[
          'Golang',
          'PostgreSQL',
          'Buf Schema',
          'Docker',
          'Python',
          'TensorFlow',
        ]}
      />

      <SectionDetails.Wrapper>
        <SectionDetails.Text>
          This page is under construction.
        </SectionDetails.Text>
      </SectionDetails.Wrapper>
    </SectionDetails>
  );
};

export { SearchEngineDetails };
