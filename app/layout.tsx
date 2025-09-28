import { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata, Viewport } from 'next';

import { ThemeProvider } from '@/provider/theme-provider';

import './globals.css';

export const metadata: Metadata = {
  title: 'Danyil Butov - Software Developer & CS Student',
  description:
    'CS student at University of Edinburgh and software developer at Solidgate. Passionate about building functional, beautiful, and user-friendly products. Explore my portfolio with interactive widgets.',
  keywords: [
    'Danyil Butov',
    'Software Developer',
    'CS Student',
    'University of Edinburgh',
    'Solidgate',
    'Portfolio',
    'Web Development',
    'React',
    'Next.js',
    'TypeScript',
    'UI/UX Design',
    'Frontend Developer',
  ],
  authors: [{ name: 'Danyil Butov' }],
  creator: 'Danyil Butov',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://danyilbutov.com',
    siteName: 'Danyil Butov',
    title: 'Danyil Butov - Software Developer & CS Student',
    description:
      'CS student at University of Edinburgh and software developer at Solidgate. Passionate about building functional, beautiful, and user-friendly products.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Danyil Butov - Software Developer Portfolio',
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'hsl(0, 0%, 100%)' },
    { media: '(prefers-color-scheme: dark)', color: 'hsl(0, 0%, 0%)' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Danyil Butov</title>
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
