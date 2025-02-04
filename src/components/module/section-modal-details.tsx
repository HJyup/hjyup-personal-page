import {
  FictAdvisorDetails,
  PersonalWebDetails,
  TranslatifyDetails,
} from '@/components/module/details';
import { SectionItemType } from '@/const';

type ModalContentProps = {
  sectionItem: SectionItemType | null;
};

// TODO: make it more type safe
const SectionModalDetails = ({ sectionItem }: ModalContentProps) => {
  if (!sectionItem) return null;

  switch (sectionItem.title) {
    case 'Translatify':
      return <TranslatifyDetails sectionItem={sectionItem} />;
    case 'FictAdvisor':
      return <FictAdvisorDetails sectionItem={sectionItem} />;
    case 'Personal Website':
      return <PersonalWebDetails sectionItem={sectionItem} />;
    default:
      return null;
  }
};

export { SectionModalDetails };
