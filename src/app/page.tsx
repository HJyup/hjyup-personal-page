'use client';

import { useState } from 'react';

import { Contact, MainHeader, MainLayout, Section } from '@/components/module';
import { DemoAlert } from '@/components/module/temporary/demo-alert';
import { SECTIONS } from '@/const';

export default function Page() {
  // Will be used for the animation of the modal
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [clickedItem, setClickedItem] = useState<string | null>(null);

  const handleClick = (title: string) => {
    setClickedItem(prev => (prev === title ? null : title));
  };

  return (
    <MainLayout>
      <DemoAlert />

      <MainHeader />

      <Contact />

      {SECTIONS.map(section => (
        <Section key={section.header} header={section.header}>
          {section.items.map((item, index) => (
            <>
              <Section.Item
                key={item.title}
                logo={item.logo}
                title={item.title}
                subtitle={item.subtitle}
                badge={item.badge}
                onClick={() => handleClick(item.title)}
              />
              {index < section.items.length - 1 && <Section.Separator />}
            </>
          ))}
        </Section>
      ))}
    </MainLayout>
  );
}
