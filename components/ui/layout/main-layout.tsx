export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center bg-background lg:justify-center">
      {children}
    </div>
  );
};
