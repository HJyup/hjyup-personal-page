import Section from '@/components/modules/main/section';
import MainLayout from '@/components/ui/main-layout';

const Page = () => {
  return (
    <MainLayout>
      {/*TODO: Navigation with links to sections Main, Blog, Projects, Stack*/}

      <div>
        {/*Avatar*/}
        <h1 className="text-3xl font-bold">John Doe</h1>
        <p className="text-sm text-gray-500">Frontend developer</p>
      </div>

      <Section title="About">
        <div>Test content</div>
      </Section>

      <Section title="Work experience">
        <div>Test content</div>
      </Section>

      <Section title="Projects">
        <div>Test content</div>
      </Section>

      <Section title="Links">
        <div>Test content</div>
      </Section>
    </MainLayout>
  );
};

export default Page;
