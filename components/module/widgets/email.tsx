'use client';

import React, { forwardRef, useState } from 'react';
import { IoIosSend } from 'react-icons/io';
import { HTMLMotionProps } from 'framer-motion';

import { WidgetLayout } from '@/components/ui/layout/widget-layout';

export const EmailWidget = forwardRef<
  HTMLDivElement,
  { className?: string } & HTMLMotionProps<'div'>
>(({ className = 'flex items-end justify-center', ...motionProps }, ref) => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSendEmail = () => {
    const mailtoLink = `mailto:danyil.butov.tech@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.open(mailtoLink, '_blank');
  };

  return (
    <WidgetLayout
      ref={ref}
      className={`${className} w-full h-full flex items-end !pb-0 !px-6`}
      {...motionProps}
    >
      <div className="bg-white dark:bg-neutral-900 h-[95%] w-full rounded-t-2xl sm:rounded-t-3xl flex flex-col relative overflow-hidden border border-b-0 border-neutral-200/60 dark:border-neutral-800/60">
        <div className="bg-neutral-200/30 dark:bg-neutral-800/20 w-full h-10 sm:h-12 flex px-4 sm:px-6 items-center justify-between border-b border-neutral-200 dark:border-neutral-700">
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="flex gap-1.5 sm:gap-2 justify-center">
              <div className="bg-red-500 rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3" />
              <div className="bg-yellow-500 rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3" />
              <div className="bg-green-500 rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3" />
            </div>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={handleSendEmail}
              className="rounded-md text-neutral-600 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors duration-200 ease motion-reduce:transition-none"
              title="Send email"
            >
              <IoIosSend className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        <div className="px-3 sm:px-4 pt-3 sm:pt-4 flex flex-col gap-2 sm:gap-3 flex-1">
          <div className="flex gap-1 items-center border-b border-neutral-200 dark:border-neutral-700 pb-1 mb-2 sm:mb-3">
            <div className="text-xs text-neutral-600 dark:text-neutral-400 min-w-fit">
              To:
            </div>
            <div className="text-xs text-neutral-700 dark:text-neutral-300">
              danyil.butov.tech@gmail.com
            </div>
          </div>

          <div className="flex gap-1 items-center border-b border-neutral-200 dark:border-neutral-700 pb-1 mb-2 sm:mb-3">
            <div className="text-xs text-neutral-600 dark:text-neutral-400 min-w-fit">
              Subject:
            </div>
            <input
              type="text"
              value={subject}
              onChange={e => setSubject(e.target.value)}
              className="text-xs text-neutral-700 dark:text-neutral-300 bg-transparent border-none outline-none flex-1 placeholder:text-neutral-500 dark:placeholder:text-neutral-500"
              placeholder="Enter subject..."
            />
          </div>

          <div className="flex flex-col gap-1.5 sm:gap-2 flex-1">
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              className="text-xs text-neutral-700 dark:text-neutral-300 bg-transparent border-none outline-none flex-1 resize-none placeholder:text-neutral-500 dark:placeholder:text-neutral-500"
              placeholder="Type your message here..."
            />
          </div>
        </div>
      </div>
    </WidgetLayout>
  );
});

EmailWidget.displayName = 'EmailWidget';
