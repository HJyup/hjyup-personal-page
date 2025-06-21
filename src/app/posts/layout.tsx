import { ReactNode } from 'react';

export default function PostsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-screen min-h-screen flex justify-center">
      <div className="lg:w-4/6 w-full mb-20">{children}</div>
    </div>
  );
}
