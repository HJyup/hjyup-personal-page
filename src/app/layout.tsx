import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';

import './globals.css';

const jetBrains = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Danyil Butov',
  description: 'Personal website of Danyil Butov',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetBrains.className + ' bg-gray-50'}>{children}</body>
    </html>
  );
}
