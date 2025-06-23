'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FileInput } from 'lucide-react';
import Image from 'next/image';

import { PHOTOS } from '@/const/photos';
import { useWidgetEdit } from '@/lib/widgets/use-widget-edit-context';

interface Photo {
  src: string;
  alt: string;
  date: string;
}

export function PhotoWidget() {
  const [currentPhoto, setCurrentPhoto] = useState<Photo | null>(null);
  const { isEditMode } = useWidgetEdit();

  const getRandomPhoto = useCallback(() => {
    if (PHOTOS.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * PHOTOS.length);

    return PHOTOS[randomIndex];
  }, []);

  const handlePhotoChange = () => {
    if (isEditMode) return;
    const newPhoto = getRandomPhoto();
    setCurrentPhoto(newPhoto);
  };

  useEffect(() => {
    const initialPhoto = getRandomPhoto();
    setCurrentPhoto(initialPhoto);
  }, [getRandomPhoto]);

  if (!currentPhoto) {
    return (
      <div
        className={`bg-gray-100 dark:bg-zinc-800 h-[45vh] rounded-2xl sm:rounded-3xl break-inside-avoid relative`}
      />
    );
  }

  return (
    <motion.div
      // @ts-expect-error - Framer Motion types are not compatible with React 19
      className={`bg-gray-100 dark:bg-zinc-800 h-[45vh] rounded-2xl sm:rounded-3xl break-inside-avoid w-full relative ${isEditMode ? '' : 'cursor-pointer'} overflow-hidden group`}
      onClick={handlePhotoChange}
      whileHover={isEditMode ? undefined : { scale: 1.02 }}
      whileTap={isEditMode ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.1 }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPhoto.src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.2,
            ease: 'easeInOut',
          }}
          // @ts-expect-error - Framer Motion types are not compatible with React 19
          className="relative w-full h-full"
        >
          <Image
            src={currentPhoto.src}
            alt={currentPhoto.alt}
            width={1000}
            height={1000}
            className="w-full h-full object-cover rounded-2xl sm:rounded-3xl"
          />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.2 }}
            // @ts-expect-error - Framer Motion types are not compatible with React 19
            className="absolute bottom-3 right-3 dark:text-zinc-300 text-xs font-medium bg-white/10 text-zinc-100 dark:bg-black/10 backdrop-blur-md px-2 py-1 rounded-lg"
          >
            {currentPhoto.date}
          </motion.div>

          {!isEditMode && (
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              // @ts-expect-error - Framer Motion types are not compatible with React 19
              className="absolute inset-0 bg-black/10 rounded-2xl sm:rounded-3xl flex items-center justify-center"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.15 }}
                // @ts-expect-error - Framer Motion types are not compatible with React 19
                className="dark:text-zinc-300 text-sm font-medium bg-white/20 text-zinc-100 dark:bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-full"
              >
                <FileInput className="w-4 h-4" />
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
