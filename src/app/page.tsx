'use client';

import React, { useState } from 'react';

import {
  Contact,
  MainHeader,
  MainLayout,
  Section,
  SectionModalDetails,
} from '@/components/module';
import { Modal } from '@/components/ui';
import { SectionItemType, SECTIONS } from '@/const';
import { useMobile } from '@/hook';

const RenderMainLayout = ({
  handleOpenModal,
}: {
  handleOpenModal: (sectionItem: SectionItemType) => void;
}) => (
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
  </MainLayout>
);

export default function Page() {
  const [selectedSectionItem, setSelectedSectionItem] =
    useState<SectionItemType | null>(null);
  const isMobile = useMobile();

  const handleOpenModal = (sectionItem: SectionItemType) => {
    setSelectedSectionItem(sectionItem);
  };

  const isMainLayoutVisible = selectedSectionItem === null;

  return (
    <>
      {isMobile ? (
        isMainLayoutVisible && (
          <RenderMainLayout handleOpenModal={handleOpenModal} />
        )
      ) : (
        <RenderMainLayout handleOpenModal={handleOpenModal} />
      )}

      <Modal.Wrapper isOpen={!!selectedSectionItem}>
        <Modal onClose={() => setSelectedSectionItem(null)} isMobile={isMobile}>
          <SectionModalDetails sectionItem={selectedSectionItem} />
        </Modal>
      </Modal.Wrapper>
    </>
  );
}
