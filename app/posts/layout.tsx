import { ReactNode } from 'react';

import { PostsLayout as PostsLayoutComponent } from '@/components/ui/layout/posts-layout';

export default function PostsLayout({ children }: { children: ReactNode }) {
  return <PostsLayoutComponent>{children}</PostsLayoutComponent>;
}
