import {
  type BundledLanguage,
  codeToTokens,
  type ThemeRegistration,
} from 'shiki';

const theme: ThemeRegistration = {
  name: 'portfolio-restrained',
  fg: 'var(--snippet-text)',
  bg: 'transparent',
  settings: [
    { scope: ['comment'], settings: { foreground: 'var(--snippet-muted)' } },
    {
      scope: [
        'entity.name.function',
        'support.function',
        'constant.numeric',
        'constant.language',
      ],
      settings: { foreground: 'var(--snippet-accent)' },
    },
    {
      scope: ['string', 'entity.name.type', 'support.type'],
      settings: { foreground: 'var(--snippet-text)' },
    },
    {
      scope: ['keyword', 'storage', 'punctuation'],
      settings: { foreground: 'var(--snippet-muted)' },
    },
  ],
};

export async function highlightCode(
  code: string,
  language: BundledLanguage | 'text',
) {
  return codeToTokens(code, { lang: language, theme });
}
