import { ReactNode } from 'react';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col justify-center w-1/3">{children}</div>;
};

export { MainLayout };
