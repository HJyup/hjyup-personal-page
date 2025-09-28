import { WidgetId } from '@/types/widgets';

interface BlogPost {
  id: WidgetId;
  title: string;
  description: string;
  link: string;
}

interface BlogLayoutProps {
  posts: BlogPost[];
  hover: (id: WidgetId) => () => void;
}

export function BlogLayout({ posts, hover }: BlogLayoutProps) {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h2 className="text-xs mt-10 text-muted-foreground w-full mb-4">Posts</h2>
      {posts.map(post => (
        <div
          key={post.id}
          className="cursor-pointer bg-neutral-100 dark:bg-[hsl(0,0%,5%)] px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl"
        >
          <a
            href={post.link}
            onMouseEnter={hover(post.id)}
            className="hover:underline text-xs md:text-sm cursor-pointer"
          >
            {post.title}
          </a>
          <p className="text-xs md:text-sm mt-1 text-muted-foreground leading-relaxed">
            {post.description}
          </p>
        </div>
      ))}
    </div>
  );
}
