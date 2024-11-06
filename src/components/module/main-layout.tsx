import { ReactNode } from 'react';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col justify-center lg:w-1/3 md:w-1/2">
      {children}
    </div>
  );
};

export { MainLayout };
