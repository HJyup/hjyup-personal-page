export const CSS_CLASSES = {
  MAIN_TEXT: 'main-text',
  WORD: 'word',
  CHAR: 'char',
  VERTICAL_LINE: 'vertical-line',
  HORIZONTAL_LINE: 'horizontal-line',
  ANIMATED_CURSOR: 'animated-cursor',
  YELLOW_BLOCK: 'yellow-block',
  FORMAT_BUTTONS: 'format-buttons',
  ASK_AI_BTN: 'ask-ai-btn',
  STACKED_CARDS: 'stacked-cards',
  LUCIDE_SPARKLES: 'lucide-sparkles',
  PROJECTS_ANIMATED_CURSOR: 'projects-animated-cursor',
} as const;

export const COMMON_CLASSES = {
  TYPOGRAPHY_BUTTON: {
    BASE: 'text-4xl transition-all px-4 py-2',
    ACTIVE: 'text-blue-600 bg-blue-50',
    INACTIVE: 'text-zinc-400 hover:text-blue-500 hover:bg-blue-50',
  },
  MEASUREMENT: {
    LABEL: 'text-xs font-mono text-blue-400',
    LINE: {
      HORIZONTAL: 'flex-1 h-px bg-blue-400',
      VERTICAL: 'flex-1 w-px bg-blue-400',
    },
  },
} as const;
