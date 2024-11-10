'use client';

import { Fragment, useMemo, useState } from 'react';

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
}) => {
  const memoizedSections = useMemo(
    () =>
      SECTIONS.map(section => (
        <Section key={section.header} header={section.header}>
          {section.items.map((item, index) => (
            <Fragment key={item.title}>
              <Section.Item
                sectionItem={item}
                onClick={() => handleOpenModal(item)}
              />
              {index < section.items.length - 1 && <Section.Separator />}
            </Fragment>
          ))}
        </Section>
      )),
    [handleOpenModal],
  );

  return (
    <MainLayout>
      <MainHeader />

      <Contact />

      {memoizedSections}
    </MainLayout>
  );
};

export default function Page() {
  const [selectedSectionItem, setSelectedSectionItem] =
    useState<SectionItemType | null>(null);
  const isMobile = useMobile();

  const handleOpenModal = (sectionItem: SectionItemType) => {
    setSelectedSectionItem(sectionItem);
  };

  const closeModal = () => setSelectedSectionItem(null);

  return (
    <>
      {(isMobile && !selectedSectionItem) || !isMobile ? (
        <RenderMainLayout handleOpenModal={handleOpenModal} />
      ) : null}

      <Modal.Wrapper isOpen={!!selectedSectionItem}>
        {isMobile ? (
          <Modal.Mobile onClose={closeModal}>
            <SectionModalDetails sectionItem={selectedSectionItem} />
          </Modal.Mobile>
        ) : (
          <Modal onClose={closeModal}>
            <SectionModalDetails sectionItem={selectedSectionItem} />
          </Modal>
        )}
      </Modal.Wrapper>
    </>
  );
}
