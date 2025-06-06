import { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata, Viewport } from 'next';
import { Lato, Pangolin } from 'next/font/google';

import { ThemeProvider } from '@/provider/theme-provider';

import './globals.css';

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
});

const caveat = Pangolin({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-caveat',
});

export const metadata: Metadata = {
  title: 'Danyil Butov',
  description: 'Personal website of Danyil Butov',
  icons: {
    icon: 'https://github.com/hjYup.png',
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
      <body
        className={`${lato.className} ${caveat.variable} flex flex-col items-center bg-background lg:justify-center`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
