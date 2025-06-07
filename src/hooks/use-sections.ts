import {
  EXPERIENCE_LAYOUT_CONFIG,
  HERO_LAYOUT_CONFIG,
  PROJECT_CARDS,
  PROJECTS_LAYOUT_CONFIG,
} from '@/const/layout-configs';

export const useSections = () => {
  const heroConfig = HERO_LAYOUT_CONFIG;

  const projectsConfig = {
    ...PROJECTS_LAYOUT_CONFIG,
    cards: PROJECT_CARDS,
  };

  const experienceConfig = EXPERIENCE_LAYOUT_CONFIG;

  return {
    heroConfig,
    projectsConfig,
    experienceConfig,
  };
};

export default useSections;
