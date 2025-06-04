import { Card } from '..';

const EducationSection = () => (
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
    >
      <Card.SubInfo>
        <Card.SubCard
          title="CompSoc Committee Member"
          dateRange="Apr 2025 - Present"
          link="https://comp-soc.com"
          description="Contributing to the Computer Science Society by organising tech talks, workshops, and hackathons for fellow students."
        />
        <Card.SubCard
          title="Project Share Vice President"
          dateRange="Apr 2025 - Present"
          link="https://projectshare.comp-soc.com/"
          description="Leading Project Share society, helping students collaborate on tech projects and showcase their work."
        />
      </Card.SubInfo>
    </Card.Card>
  </Card.Wrapper>
);

export default EducationSection;
