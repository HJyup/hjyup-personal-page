import { Contact } from '@/components/module/contact';
import { MainLayout } from '@/components/module/main-layout';
import { Section } from '@/components/module/section';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui';
export default function Page() {
  return (
    <main className="flex items-center p-10 justify-center h-screen ">
      <div className="absolute top-0 left-0 w-full h-5 bg-sky-600 text-center text-sm text-white font-light">
        You are looking at a demo version of the website.
      </div>
      <MainLayout>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/hjYup.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <div className="text-2xl font-bold">Danyil Butov</div>
            <div>Software Engineer</div>
          </div>
        </div>

        <Contact />

        <Section header="Education">
          <Section.Item
            logo="https://logonoid.com/images/university-of-edinburgh-logo.png"
            title="The University of Edinburgh"
            subtitle="Artificial Intelligence & Computer Science"
            badge="Ongoing"
          />
        </Section>

        <Section header="Professional Experience">
          <Section.Item
            logo="https://cdn-1.webcatalog.io/catalog/solidgate/solidgate-icon.png?v=1714781239646"
            title="Solidgate"
            subtitle="Fintech payment processing platform that helps businesses accept online payments across 150+ countries"
            badge="Present"
          />
        </Section>

        <Section header="Projects">
          <Section.Item
            logo="https://cdn-1.webcatalog.io/catalog/solidgate/solidgate-icon.png?v=1714781239646"
            title="Solidgate"
            subtitle="Software Engineer"
            badge="Ongoing"
          />
        </Section>
      </MainLayout>
    </main>
  );
}
