import { Footer } from './footer';

interface MainLayoutProps {
  children: React.ReactNode;
  maxWidth?: 'xl' | '2xl' | '4xl' | '5xl' | '7xl';
  className?: string;
}

export const MainLayout = ({
  children,
  maxWidth = '5xl',
  className = '',
}: MainLayoutProps) => {
  const maxWidthClasses = {
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '7xl': 'max-w-7xl',
  };

  return (
    <div className="flex flex-col items-center bg-background min-h-screen">
      <div className="w-full flex flex-col items-center">
        <div
          className={`w-full ${maxWidthClasses[maxWidth]} px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-24 ${className}`}
        >
          {children}
        </div>

        <Footer />
      </div>
    </div>
  );
};
