import { ReactNode } from 'react';
import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Danyil Butov',
  description: 'Personal website of Danyil Butov',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className="bg-green-300">{children}</body>
    </html>
  );
};

export default RootLayout;
