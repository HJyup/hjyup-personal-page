import { GoArrowUpRight } from 'react-icons/go';

const LinkBlock = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-start gap-1">
      {children}
      <GoArrowUpRight className="w-2 h-2 md:w-3 md:h-3 mt-[0.2rem]" />
    </div>
  );
};

export default LinkBlock;
