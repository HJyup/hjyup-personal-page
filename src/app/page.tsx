'use client';

import { Fragment } from 'react';

import { Contact, MainHeader, MainLayout, Section } from '@/components/module';
import { SECTIONS } from '@/const';

export default function Page() {
  return (
    <MainLayout>
      <MainHeader />

      <Contact />

      {SECTIONS.map(section => (
        <Section key={section.header} header={section.header}>
          {section.items.map((item, index) => (
            <Fragment key={item.title}>
              <Section.Item sectionItem={item} />
              {index < section.items.length - 1 && <Section.Separator />}
            </Fragment>
          ))}
        </Section>
      ))}
    </MainLayout>
  );
}
