import {
  FictAdvisorDetails,
  PersonalWebDetails,
  SearchEngineDetails,
} from '@/components/module/details';
import { SectionItemType } from '@/const';

type ModalContentProps = {
  sectionItem: SectionItemType | null;
};

// TODO: make it more type safe
const SectionModalDetails = ({ sectionItem }: ModalContentProps) => {
  if (!sectionItem) return null;

  switch (sectionItem.title) {
    case 'FictAdvisor':
      return <FictAdvisorDetails />;
    case 'Search Engine':
      return <SearchEngineDetails />;
    case 'Personal Website':
      return <PersonalWebDetails />;
    default:
      return null;
  }
};

export { SectionModalDetails };
