'use client';

import { BookIcon, CodeIcon } from 'lucide-react';

import FolderPack from '@/components/folder-pack';

export default function Home() {
  return (
    <main className="min-h-screen py-16 px-12 flex justify-center items-center">
      <div className="flex gap-24">
        <FolderPack />
        <FolderPack color="green" icon={BookIcon} />
        <FolderPack color="purple" icon={CodeIcon} />
      </div>
    </main>
  );
}
