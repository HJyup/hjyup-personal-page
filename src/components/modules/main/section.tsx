import { ReactNode } from 'react';

const Section = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="mt-2 mb-2">
      <h2 className="font-bold pb-3 text-lg">{title}</h2>
      <div className="flex flex-col gap-10">{children}</div>
    </div>
  );
};

export default Section;
