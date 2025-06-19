'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

interface Photo {
  src: string;
  alt: string;
  date: string;
}

interface PhotoCardProps {
  photos: Photo[];
  className?: string;
}

export function PhotoCard({ photos, className = '' }: PhotoCardProps) {
  const [currentPhoto, setCurrentPhoto] = useState<Photo | null>(null);

  const getRandomPhoto = useCallback(() => {
    if (photos.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * photos.length);

    return photos[randomIndex];
  }, [photos]);

  const handlePhotoChange = () => {
    const newPhoto = getRandomPhoto();
    setCurrentPhoto(newPhoto);
  };

  useEffect(() => {
    const initialPhoto = getRandomPhoto();
    setCurrentPhoto(initialPhoto);
  }, [getRandomPhoto, photos]);

  if (!currentPhoto) {
    return (
      <div
        className={`bg-gray-100 dark:bg-zinc-800 h-[23vh] rounded-2xl sm:rounded-3xl break-inside-avoid w-1/2 relative ${className}`}
      />
    );
  }

  return (
    <motion.div
      // @ts-expect-error - Framer Motion types are not compatible with React 19
      className={`bg-gray-100 dark:bg-zinc-800 h-[23vh] rounded-2xl sm:rounded-3xl break-inside-avoid w-1/2 relative cursor-pointer overflow-hidden group ${className}`}
      onClick={handlePhotoChange}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.1 }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPhoto.src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.25,
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

          {/* Date overlay */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.2 }}
            // @ts-expect-error - Framer Motion types are not compatible with React 19
            className="absolute bottom-3 right-3 dark:text-zinc-300 text-sm font-medium bg-white/10 text-zinc-100 dark:bg-black/10 backdrop-blur-md px-2 py-1 rounded-lg"
          >
            {currentPhoto.date}
          </motion.div>

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
              Click for another
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
