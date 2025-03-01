import { Card } from '..';

const ExperienceSection = () => (
  <Card.Wrapper id="experience">
    <Card.Title title="Work Experience" description="Professional experience" />
    <Card.Card
      title="Solidgate"
      subtitle="Software Engineer"
      date="Aug 2023 - Present"
      link="https://solidgate.com"
      description="Working on developing and maintaining payment processing systems, implementing new features, and ensuring system reliability and security."
    />
  </Card.Wrapper>
);

export default ExperienceSection;
