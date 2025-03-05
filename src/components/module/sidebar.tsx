import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

const Sidebar = ({
  sections,
  activeSection,
  scrollToSection,
}: {
  sections: { id: string; label: string; disabled?: boolean }[];
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}) => (
  <div className="w-fit sticky top-0 h-screen px-6 items-center xl:flex hidden">
    <nav className="flex flex-col space-y-2 relative">
      {sections.map(
        section =>
          section.id !== 'start' && (
            <motion.button
              key={section.id}
              disabled={section.disabled}
              onClick={() => scrollToSection(section.id)}
              className={cn(
                'text-left px-4 pr-12 py-3 rounded-md transition-colors relative text-primary font-medium text-sm',
                section.id === activeSection &&
                  'bg-neutral-100 dark:bg-neutral-800',
                section.disabled
                  ? 'opacity-50'
                  : 'cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-900',
              )}
              whileTap={{ scale: 0.98 }}
            >
              {section.label}
            </motion.button>
          ),
      )}
    </nav>
  </div>
);

export default Sidebar;
