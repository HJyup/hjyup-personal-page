'use client';

import React, { useState } from 'react';
import { ArrowUpWideNarrowIcon, FolderOutputIcon, Send } from 'lucide-react';

import { BigWidgetLayout } from '@/components/ui/layout/widget-layouts';

export function EmailWidget({
  className = 'flex items-end justify-center',
}: {
  className?: string;
}) {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSendEmail = () => {
    const mailtoLink = `mailto:danyil.butov.tech@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.open(mailtoLink, '_blank');
  };

  return (
    <BigWidgetLayout className={className}>
      <div className="w-[90%] bg-white dark:bg-zinc-900 h-[90%] rounded-t-2xl sm:rounded-t-3xl flex flex-col relative overflow-hidden">
        <div className="bg-gray-200/30 dark:bg-zinc-800/20 w-full h-12 flex px-6 items-center justify-between border-b border-gray-200 dark:border-zinc-700">
          <div className="flex items-center gap-6">
            <div className="flex gap-2 justify-center">
              <div className="bg-red-500 rounded-full h-3 w-3" />
              <div className="bg-yellow-500 rounded-full h-3 w-3" />
              <div className="bg-green-500 rounded-full h-3 w-3" />
            </div>
            <button
              onClick={handleSendEmail}
              className="rounded-md text-gray-500 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors duration-200 ease motion-reduce:transition-none"
              title="Send email"
            >
              <Send className="w-[1.2rem] h-[1.2rem]" />
            </button>
          </div>
          <div className="flex items-center gap-6">
            <ArrowUpWideNarrowIcon className="w-[1.2rem] h-[1.2rem] text-gray-500 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors duration-200 ease motion-reduce:transition-none hover:cursor-pointer" />
            <FolderOutputIcon className="w-[1.2rem] h-[1.2rem] text-gray-500 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors duration-200 ease motion-reduce:transition-none hover:cursor-pointer" />
          </div>
        </div>

        <div className="pl-4 pt-4 flex flex-col gap-3 flex-1">
          <div className="flex gap-1 items-center border-b border-gray-200 dark:border-zinc-700 pb-1 mb-3">
            <div className="text-sm text-gray-500 dark:text-zinc-400 min-w-fit">
              To:
            </div>
            <div className="text-sm text-gray-700 dark:text-zinc-300 border-gray-200">
              danyil.butov.tech@gmail.com
            </div>
          </div>

          <div className="flex gap-1 items-center border-b border-gray-200 dark:border-zinc-700 pb-1 mb-3">
            <div className="text-sm text-gray-500 dark:text-zinc-400 min-w-fit">
              Subject:
            </div>
            <input
              type="text"
              value={subject}
              onChange={e => setSubject(e.target.value)}
              className="text-sm text-gray-700 dark:text-zinc-300 bg-transparent border-none outline-none flex-1 placeholder:text-gray-400 dark:placeholder:text-zinc-500"
              placeholder="Enter subject..."
            />
          </div>

          <div className="flex flex-col gap-2 flex-1">
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              className="text-sm text-gray-700 dark:text-zinc-300 bg-transparent border-none outline-none flex-1 resize-none placeholder:text-gray-400 dark:placeholder:text-zinc-500"
              placeholder="Type your message here..."
            />
          </div>
        </div>
      </div>
    </BigWidgetLayout>
  );
}
