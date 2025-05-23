'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Link as LucideLink } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { cn } from '@/lib/utils';

const Title = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="mb-6 md:mb-8">
    <h2 className="text-xl md:text-2xl font-semibold text-primary">{title}</h2>
    <p className="text-xs md:text-sm text-muted-foreground/80 mt-1">
      {description}
    </p>
  </div>
);

const Wrapper = ({
  children,
  id,
  className,
}: {
  children: ReactNode;
  id: string;
  className?: string;
}) => (
  <div
    id={id}
    className={cn('my-10 md:mb-12 lg:mb-16 px-2 md:px-0', className)}
  >
    {children}
  </div>
);

const ImageCard = ({
  image,
  title,
  description,
  link,
  disabled,
  id,
}: {
  image: string;
  title: string;
  description: string;
  link?: string;
  disabled?: boolean;
  id: number;
}) => {
  const router = useRouter();

  return (
    <motion.div
      key={id}
      className={`flex flex-col gap-3 sm:w-[350px] w-[275px] flex-shrink-0 rounded-lg ${disabled ? 'opacity-50 pointer-events-none' : ''}`}
    >
      <Image
        src={image}
        className="rounded-lg sm:h-[350px] sm:w-[350px] h-[275px] w-[275px]"
        alt={title}
        width={250}
        height={250}
      />
      <div>
        <div className="flex items-center">
          <h3
            className="text-sm sm:text-lg font-bold mr-2 hover:text-primary transition-colors duration-200 flex items-center gap-1 hover:cursor-pointer hover:underline"
            aria-label={`Visit ${title} website`}
            onClick={() => {
              if (link) {
                router.push(link);
              }
            }}
          >
            {title}
            {link && !disabled && (
              <LucideLink className="text-blue-400" size={12} />
            )}
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground my-2">
          {description}
        </p>
        {disabled && (
          <p className="text-xs text-muted-foreground/50 italic">Coming soon</p>
        )}
      </div>
    </motion.div>
  );
};

const Card = ({
  title,
  subtitle,
  date,
  link,
  description,
  className,
  onTap,
}: {
  title: string;
  subtitle?: string;
  date: string;
  link?: string;
  description: string;
  className?: string;
  onTap?: () => void;
}) => {
  const router = useRouter();

  return (
    <motion.div
      className={cn(
        'flex flex-col gap-3 md:gap-4 bg-neutral-50 dark:bg-neutral-950 rounded-lg p-4 md:p-6 shadow-sm mb-10 md:mb-12',
        (link || onTap) &&
          'cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-900',
        className,
      )}
      whileTap={{
        scale: link || onTap ? 0.98 : 1,
        transition: { duration: 0.1 },
      }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      onClick={() => {
        if (link) {
          if (link.startsWith('http')) {
            window.open(link, '_blank', 'noopener,noreferrer');
          } else {
            router.push(link);
          }
        }
        if (onTap) {
          onTap();
        }
      }}
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1 md:gap-0">
        <div className="flex flex-col">
          <div className="flex items-center">
            <h2 className="text-base md:text-lg lg:text-xl font-medium text-primary mr-2 line-clamp-1">
              {title}
            </h2>
            {link && link.startsWith('http') && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${title} website`}
                className="flex-shrink-0"
                onClick={e => e.stopPropagation()}
              >
                <LucideLink className="text-blue-400" size={12} />
              </a>
            )}
          </div>
          {subtitle && (
            <p className="text-muted-foreground mt-1 text-xs md:text-sm lg:text-base line-clamp-1">
              {subtitle}
            </p>
          )}
        </div>
        <div className="text-xs md:text-sm text-muted-foreground/50 mt-1 md:mt-0">
          <p>{date}</p>
        </div>
      </div>
      {description && (
        <div
          className={cn(
            'text-muted-foreground/75 text-xs md:text-sm',
            subtitle && 'mt-2 md:mt-4 ',
          )}
        >
          <p className="line-clamp-3 md:line-clamp-none">{description}</p>
        </div>
      )}
    </motion.div>
  );
};

const Section = {
  Title,
  Wrapper,
  Card,
  ImageCard,
};

export default Section;
