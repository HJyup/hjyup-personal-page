import { ReactNode } from 'react';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen w-screen flex justify-center p-20 bg-white">
      <div className="w-2/5 flex flex-col gap-5">{children}</div>
    </div>
  );
};

export default MainLayout;
