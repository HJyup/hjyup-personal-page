import { motion } from 'framer-motion';
import { LinkIcon } from 'lucide-react';

import { MainDataType } from '@/const/main-data';
import { cn } from '@/utils/utils';

const InfoBlock = ({ data }: { data: MainDataType }) => {
  return (
    <div className="md:m-0 m-5">
      <h1 className="underline pb-2 font-bold text-sm md:text-md">
        {data.title}
      </h1>
      <p className="mb-5 text-sm md:text-md">{data.description}</p>
      <div className="flex gap-5 flex-col">
        {data.items.map((item, index) => (
          <div key={index}>
            <p className="text-sm md:text-md">
              {index + 1}.{' '}
              <motion.a
                href={item.link}
                target="_blank"
                className={cn(
                  'inline-flex gap-2 items-center p-2 mb-2 rounded-md',
                  item.link && 'hover:bg-gray-100 cursor-pointer',
                )}
                whileHover={item.link && { scale: 1.1 }}
              >
                {item.name}{' '}
                {item.link && <LinkIcon className="inline w-4 h-4" />}
              </motion.a>
              <br />
            </p>
            {item.description.map((desc, index) => (
              <p
                key={index}
                className="font-extralight text-opacity-80 text-sm md:text-md"
              >
                {desc} <br />
              </p>
            ))}
            {item.techStack && (
              <p className="text-xs md:text-sm">
                Tech stack: {item.techStack?.join(', ')}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoBlock;
