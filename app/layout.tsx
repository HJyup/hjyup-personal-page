import { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata, Viewport } from 'next';

import { MainLayout } from '@/components/ui/layout/main-layout';
import { WidgetEditProvider } from '@/provider/widget-edit-provider';

import { ThemeProvider } from '../provider/theme-provider';

import './globals.css';

export const metadata: Metadata = {
  title: 'Danyil Butov',
  description: 'Personal website of Danyil Butov',
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
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <WidgetEditProvider>
            <MainLayout>{children}</MainLayout>
          </WidgetEditProvider>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
