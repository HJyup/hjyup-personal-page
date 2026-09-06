import { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';

import { ThemeProvider } from '@/provider/theme-provider';

import './globals.css';

const ppMori = localFont({
  src: [
    {
      path: './fonts/pp-mori-regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/pp-mori-semibold.otf',
      weight: '600',
      style: 'normal',
    },
  ],
  display: 'swap',
  fallback: [
    'SF Pro Text',
    'SF Pro Icons',
    'Helvetica Neue',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  variable: '--font-pp-mori',
});

export const metadata: Metadata = {
  title: 'App',
  description: 'A Next.js application',
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
    <html lang="en" className={ppMori.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
