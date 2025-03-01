import { motion } from 'framer-motion';
import { Link as LucideLink } from 'lucide-react';

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
}: {
  children: React.ReactNode;
  id: string;
}) => (
  <div id={id} className="my-16 md:mb-20 lg:mb-24 px-2 md:px-0">
    {children}
  </div>
);

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
  subtitle: string;
  date: string;
  link?: string;
  description: string;
  className?: string;
  onTap?: () => void;
}) => (
  <motion.div
    className={cn(
      'flex flex-col gap-3 md:gap-4 bg-neutral-50 dark:bg-neutral-950 rounded-lg p-4 md:p-6 shadow-sm mb-10 md:mb-12',
      (link || onTap) &&
        'cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-900',
      className,
    )}
    whileHover={{
      scale: link || onTap ? 1.02 : 1,
      transition: { duration: 0.3, ease: 'easeOut' },
    }}
    whileTap={{
      scale: link || onTap ? 0.98 : 1,
      transition: { duration: 0.1 },
    }}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    onClick={() => {
      if (link) {
        window.open(link, '_blank', 'noopener,noreferrer');
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
          {link && (
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
        <p className="text-muted-foreground mt-1 text-xs md:text-sm lg:text-base line-clamp-1">
          {subtitle}
        </p>
      </div>
      <div className="text-xs md:text-sm text-muted-foreground/50 mt-1 md:mt-0">
        <p>{date}</p>
      </div>
    </div>
    {description && (
      <div className="mt-2 md:mt-4 text-muted-foreground/75 text-xs md:text-sm">
        <p className="line-clamp-3 md:line-clamp-none">{description}</p>
      </div>
    )}
  </motion.div>
);

const Section = {
  Title,
  Wrapper,
  Card,
};

export default Section;
