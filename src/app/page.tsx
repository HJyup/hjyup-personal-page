'use client';

import React, { useState } from 'react';

import { Contact, MainHeader, MainLayout, Section } from '@/components/module';
import {
  FictAdvisorDetails,
  SearchEngineDetails,
} from '@/components/module/details';
import { PersonalWebDetails } from '@/components/module/details/personal-web-details';
import { Modal } from '@/components/ui';
import { SectionItemType, SECTIONS } from '@/const';

export default function Page() {
  const [selectedSectionItem, setSelectedSectionItem] =
    useState<SectionItemType | null>(null);

  const handleOpenModal = (sectionItem: SectionItemType) => {
    setSelectedSectionItem(sectionItem);
  };

  return (
    <>
      <MainLayout>
        <MainHeader />

        <Contact />

        {SECTIONS.map(section => (
          <Section key={section.header} header={section.header}>
            {section.items.map((item, index) => (
              <React.Fragment key={item.title}>
                <Section.Item
                  sectionItem={item}
                  onClick={() => handleOpenModal(item)}
                />
                {index < section.items.length - 1 && <Section.Separator />}
              </React.Fragment>
            ))}
          </Section>
        ))}

        <Modal.Wrapper isOpen={!!selectedSectionItem}>
          <Modal onClose={() => setSelectedSectionItem(null)}>
            {selectedSectionItem?.title === 'FictAdvisor' && (
              <FictAdvisorDetails />
            )}
            {selectedSectionItem?.title === 'Search Engine' && (
              <SearchEngineDetails />
            )}
            {selectedSectionItem?.title === 'Personal Website' && (
              <PersonalWebDetails />
            )}
          </Modal>
        </Modal.Wrapper>
      </MainLayout>
    </>
  );
}
