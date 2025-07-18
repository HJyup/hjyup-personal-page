'use client';

import React from 'react';
import { Camera, MapPin } from 'lucide-react';
import Image from 'next/image';

import { MediumWidgetLayout } from '@/components/ui/layout/widget-layouts';
import { PHOTOS } from '@/const/photos';
import { useWidgetEdit } from '@/provider/widget-edit-provider';

interface PhotosMapsWidgetProps {
  className?: string;
}

export function PhotosMapsWidget({ className = '' }: PhotosMapsWidgetProps) {
  const { isEditMode } = useWidgetEdit();

  // Get the first photo for the preview
  const featuredPhoto = PHOTOS[0];

  return (
    <MediumWidgetLayout className={className}>
      <div
        className="h-full flex items-center justify-center gap-3 sm:gap-4 lg:gap-5"
        role="region"
        aria-label="Photos and Maps"
      >
        {/* Photos Widget */}
        <div
          className={`w-1/2 max-w-xs h-full bg-gray-100 dark:bg-zinc-800 rounded-2xl sm:rounded-3xl overflow-hidden group relative ${!isEditMode ? 'cursor-pointer transition-transform duration-200 ease-out-cubic motion-reduce:transition-none motion-reduce:transform-none hover:scale-[1.01]' : ''}`}
          role="button"
          tabIndex={0}
          aria-label="View photo gallery"
        >
          <div className="relative w-full h-full">
            <Image
              src={featuredPhoto.src}
              alt={featuredPhoto.alt}
              fill
              className="object-cover transition-transform duration-200 ease-out-cubic motion-reduce:transition-none motion-reduce:transform-none group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-200 ease motion-reduce:transition-none" />
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
              <div className="flex items-center gap-2 text-white">
                <Camera className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base font-medium">Photos</span>
              </div>
            </div>
          </div>
        </div>

        {/* Maps Widget */}
        <div
          className={`w-1/2 max-w-xs h-full bg-gray-100 dark:bg-zinc-800 rounded-2xl sm:rounded-3xl flex flex-col justify-between p-4 sm:p-5 group relative overflow-hidden ${!isEditMode ? 'cursor-pointer transition-transform duration-200 ease-out-cubic motion-reduce:transition-none motion-reduce:transform-none hover:scale-[1.01]' : ''}`}
          role="button"
          tabIndex={0}
          aria-label="View maps"
        >
          {/* Header */}
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base font-medium">Maps</span>
            </div>
          </div>

          {/* Map representation */}
          <div className="relative z-10 flex-1 flex items-center justify-center">
            <div className="text-zinc-900 dark:text-zinc-100 text-center">
              <div className="text-lg sm:text-xl font-bold mb-1">Edinburgh</div>
              <div className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                Scotland, UK
              </div>
            </div>
          </div>

          {/* Map grid pattern overlay */}
          <div className="absolute inset-4 opacity-20">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `
                linear-gradient(rgba(100,116,139,0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(100,116,139,0.3) 1px, transparent 1px)
              `,
                backgroundSize: '20px 20px',
              }}
            />
          </div>
        </div>
      </div>
    </MediumWidgetLayout>
  );
}
